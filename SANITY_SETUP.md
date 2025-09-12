# Sanity CMS Setup for The Flow Website

This guide will help you set up Sanity CMS to manage the Dhaka events on your website.

## Step 1: Create a Sanity Account

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project for "The Flow Website"

## Step 2: Get Your Project Details

After creating your project, you'll need:
- **Project ID** (found in your project settings)
- **Dataset name** (usually "production")

## Step 3: Set Up Environment Variables

Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your-actual-project-id` with your real Sanity project ID.

## Step 4: Update Sanity Configuration

Update the project ID in these files:
- `sanity/sanity.config.ts` (line 7)
- `lib/sanity.ts` (line 4)

Replace `'your-project-id'` with your actual project ID.

## Step 5: Access the CMS

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000/studio` to access the CMS
3. You'll be prompted to log in with your Sanity account

## Step 6: Create Your First Event

1. In the Sanity Studio, click "Create new document"
2. Select "Event"
3. Fill in the event details:
   - **Event Title**: e.g., "Mindful Movement Session"
   - **Event Date**: Select the date
   - **Event Time**: e.g., "11AM - 2PM"
   - **Event Type**: Choose from the dropdown
   - **Location**: e.g., "Ramna Park"
   - **Description**: Brief description of the event
   - **Available Spots**: e.g., "12 spots remaining"
   - **Type Color Class**: e.g., "bg-green-100 text-green-800"
   - **Active Event**: Keep checked to display on website
   - **Display Order**: Number for sorting (lower numbers appear first)

## Step 7: Publish Your Content

1. Click "Publish" to make your event live on the website
2. Visit your Dhaka page to see the event displayed

## Event Type Color Classes

Use these Tailwind CSS classes for different event types:
- Mindful Movement: `bg-green-100 text-green-800`
- Breathwork Circle: `bg-blue-100 text-blue-800`
- Sunrise Yoga: `bg-orange-100 text-orange-800`
- Wellness Retreat: `bg-purple-100 text-purple-800`
- Meditation Intensive: `bg-teal-100 text-teal-800`
- Community Gathering: `bg-rose-100 text-rose-800`

## Features

- **Real-time updates**: Changes in Sanity appear immediately on your website
- **Image support**: You can add images to events (future enhancement)
- **Filtering**: Events are automatically filtered by type on the website
- **Active/Inactive**: Toggle events on/off without deleting them
- **Ordering**: Control the display order of events

## Troubleshooting

If events don't appear on the website:
1. Check that the event is published in Sanity
2. Verify your environment variables are correct
3. Check the browser console for any errors
4. Ensure the event has `isActive` set to true

## Support

For Sanity-specific help, visit their [documentation](https://www.sanity.io/docs). 