import type { Retreat } from './sanity'

export const sampleRetreats: Retreat[] = [
  {
    _id: 'retreat-1',
    title: 'Bhutan Wellness Retreat',
    subtitle: 'Recharge in Nature',
    dateRange: 'September 29 - October 3',
    leaders: ['Tenzin Norbu', 'Sarah Chen'],
    hostedBy: 'Amankora Lodge',
    location: 'Bhutan',
    slug: { current: 'bhutan-wellness-retreat' },
    isActive: true,
    order: 1,
    image: {
      asset: {
        _ref: 'image-bhutan-placeholder',
        _type: 'reference',
      },
      alt: 'Luxury retreat accommodation in Bhutan with mountain views and traditional architecture',
    },
  },
  {
    _id: 'retreat-2',
    title: 'Dubai Wellness Getaway',
    subtitle: 'Desert Serenity',
    dateRange: 'November 15 - November 19',
    leaders: ['Aisha Al-Rashid', 'Marcus Thompson'],
    hostedBy: 'Al Maha Desert Resort',
    location: 'Dubai, UAE',
    slug: { current: 'dubai-wellness-getaway' },
    isActive: true,
    order: 2,
    image: {
        asset: {
          _ref: 'image-dubai-placeholder',
          _type: 'reference',
        },
        alt: 'Luxury desert retreat in Dubai with golden sand dunes and modern architecture',
    },
  },
] 