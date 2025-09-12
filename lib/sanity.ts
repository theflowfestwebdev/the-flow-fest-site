import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  apiVersion: '2024-07-26', // Use today's date or your preferred version
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Media type definition
export interface MediaItem {
  _id: string
  title: string
  publication: string
  date: string
  category: string
  excerpt: string
  link?: string
  featured?: boolean
  image?: {
    asset: {
      _ref: string
      _type: string
      url?: string
    }
    alt?: string
  }
}

// Query to get all media items
export const mediaItemsQuery = `
  *[_type == "media" && defined(title)] | order(date desc) {
    _id,
    title,
    publication,
    date,
    category,
    excerpt,
    link,
    featured,
    image {
      asset->,
      alt
    }
  }
`

// Event type definition
export interface Event {
  _id: string
  title: string
  date: string
  time: string
  type: string
  link: string
  location: string
  location_link: string
  description: string
  typeColor: string
  isActive: boolean
  order: number
  image?: {
    asset: {
      _ref: string
      _type: string
      url?: string
    }
    alt?: string
  }
}

// Retreat type definition
export interface Retreat {
  _id: string
  title: string
  subtitle?: string
  dateRange: string
  leaders: string[]
  hostedBy: string
  location?: string
  slug?: { current: string }
  isActive: boolean
  order: number
  image?: {
    asset: {
      _ref: string
      _type: string
      url?: string
    }
    alt?: string
  }
}

// Query to get all active events
export const eventsQuery = `
  *[_type == "event" && isActive == true] | order(order asc, date asc) {
    _id,
    title,
    date,
    time,
    type,
    link,
    location,
    description,
    spots,
    typeColor,
    isActive,
    order,
    image {
      asset->,
      alt
    }
  }
`

// Query to get events by type
export const eventsByTypeQuery = `
  *[_type == "event" && isActive == true && type == $type] | order(order asc, date asc) {
    _id,
    title,
    date,
    time,
    type,
    link,
    location,
    description,
    spots,
    typeColor,
    isActive,
    order,
    image {
      asset->,
      alt
    }
  }
`

// Query to get all active retreats
export const retreatsQuery = `
  *[_type == "retreat" && isActive == true] | order(order asc) {
    _id,
    title,
    subtitle,
    dateRange,
    leaders,
    hostedBy,
    location,
    slug,
    isActive,
    order,
    image {
      asset->,
      alt
    }
  }
` 