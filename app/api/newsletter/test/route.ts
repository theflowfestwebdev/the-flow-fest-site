import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  try {
    const flodeskApiKey = process.env.FLODESK_API_KEY

    if (!flodeskApiKey) {
      return NextResponse.json(
        { error: 'FLODESK_API_KEY is not configured' },
        { status: 500 }
      )
    }

    // Test the API key by trying to get lists
    const authHeader = `Basic ${Buffer.from(`${flodeskApiKey}:`).toString('base64')}`
    
    const response = await fetch('https://api.flodesk.com/v1/lists', {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Flodesk API test error:', errorData)
      
      return NextResponse.json(
        { 
          error: 'API key test failed',
          status: response.status,
          details: errorData
        },
        { status: 500 }
      )
    }

    const data = await response.json()
    
    return NextResponse.json(
      { 
        message: 'API key is valid!',
        lists: data
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API test error:', error)
    return NextResponse.json(
      { error: 'Internal server error during API test' },
      { status: 500 }
    )
  }
} 