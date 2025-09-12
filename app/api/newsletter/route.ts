import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, company } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Honeypot: if filled, pretend success without calling Flodesk
    if (company && `${company}`.trim() !== '') {
      return NextResponse.json(
        { message: 'Successfully subscribed to newsletter!' },
        { status: 200 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const flodeskApiKey = process.env.FLODESK_API_KEY

    if (!flodeskApiKey) {
      console.error('FLODESK_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Newsletter service is not configured' },
        { status: 500 }
      )
    }

    // Try the correct Flodesk API endpoint and authentication
    // Flodesk uses Basic Auth with the API key as the username and empty password
    const authHeader = `Basic ${Buffer.from(`${flodeskApiKey}:`).toString('base64')}`
    
    const response = await fetch('https://api.flodesk.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify({
        email: email,
        // You can customize these fields based on your Flodesk setup
        custom_fields: {
          // Add any custom fields you want to track
        },
        // You can specify a specific list/segment if needed
        // list_id: 'your_list_id_here'
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Flodesk API error:', errorData)
      console.error('Response status:', response.status)
      console.error('Response headers:', Object.fromEntries(response.headers.entries()))
      
      if (response.status === 409) {
        // Email already exists
        return NextResponse.json(
          { message: 'You are already subscribed to our newsletter!' },
          { status: 200 }
        )
      }
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key. Please check your Flodesk API configuration.' },
          { status: 500 }
        )
      }
      
      return NextResponse.json(
        { error: 'Subscribing to newsletter is not possible right now.' },
        { status: 500 }
      )
    }

    const data = await response.json()
    
    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 