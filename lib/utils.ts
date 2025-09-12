import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date from Sanity to display format
export function formatEventDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase()
}

// Get unique event types from events array
export function getEventTypes(events: any[]): string[] {
  const types = events.map(event => event.type)
  return ['ALL', ...Array.from(new Set(types))]
}
