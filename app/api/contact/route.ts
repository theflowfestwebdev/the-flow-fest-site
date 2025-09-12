import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export const runtime = 'nodejs'


function parseServiceAccountKey(rawKey: string) {
	// Support plain JSON string or base64-encoded JSON
	let jsonString = rawKey
	try {
		// If it decodes from base64 cleanly into JSON, use that
		const maybeDecoded = Buffer.from(rawKey, 'base64').toString('utf8')
		if (maybeDecoded.trim().startsWith('{')) {
			jsonString = maybeDecoded
		}
	} catch (_) {
		// No-op: not base64
	}

	const credentials = JSON.parse(jsonString)
	if (!credentials.client_email || !credentials.private_key) {
		throw new Error('Invalid GOOGLE_SERVICE_ACCOUNT_KEY: missing client_email or private_key')
	}
	// Ensure newlines are correct in private key
	credentials.private_key = credentials.private_key.replace(/\\n/g, '\n')
	return credentials
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const { name, email, subject, message, company } = body || {}

		// Honeypot: if filled, silently succeed
		if (company && String(company).trim() !== '') {
			return NextResponse.json({ ok: true }, { status: 200 })
		}

		if (!email || !name || !subject || !message) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 },
			)
		}

		// Basic email format check
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(String(email))) {
			return NextResponse.json(
				{ error: 'Invalid email format' },
				{ status: 400 },
			)
		}

		const rawKey =  process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
		const spreadsheetId = process.env.CONTACT_GOOGLE_SHEET_ID
		if (!rawKey || !spreadsheetId) {
			return NextResponse.json(
				{ error: 'Google Sheets is not configured' },
				{ status: 500 },
			)
		}

		const { client_email, private_key } = parseServiceAccountKey(rawKey)

		const jwt = new google.auth.JWT({
			email: client_email,
			key: private_key,
			keyId: undefined,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		})

		const sheets = google.sheets({ version: 'v4', auth: jwt })

		const timestamp = new Date().toISOString()
		const values = [[timestamp, email, name, subject, message]]

		await sheets.spreadsheets.values.append({
			spreadsheetId,
			range: 'A:E', // Appends to first sheet by default; adjust to 'Sheet1!A:E' if needed
			valueInputOption: 'USER_ENTERED',
			insertDataOption: 'INSERT_ROWS',
			requestBody: {
				values,
			},
		})

		return NextResponse.json({ ok: true }, { status: 200 })
	} catch (error) {
		console.error('Contact submission error:', error)
		return NextResponse.json(
			{ error: 'Failed to submit your message. Please try again later.' },
			{ status: 500 },
		)
	}
} 