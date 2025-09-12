import {defineField, defineType} from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      options: {hotspot: true},
      description:
        "Main image for the event card (recommended: portrait, 4:5 ratio)",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "string",
      description: 'e.g., "September 29 - October 3"',
      // validation: Rule => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Event Time",
      type: "string",
      description: 'e.g., "11AM - 2PM"',
      // validation: Rule => Rule.required(),
    }),
    // defineField({
    //   name: "type",
    //   title: "Event Type",
    //   type: "string",
    //   options: {
    //     list: [
    //       {title: "Mindful Movement", value: "MINDFUL MOVEMENT"},
    //       {title: "Breathwork Circle", value: "BREATHWORK CIRCLE"},
    //       {title: "Sunrise Yoga", value: "SUNRISE YOGA"},
    //       {title: "Wellness Retreat", value: "WELLNESS RETREAT"},
    //       {title: "Meditation Intensive", value: "MEDITATION INTENSIVE"},
    //       {title: "Community Gathering", value: "COMMUNITY GATHERING"},
    //       {title: "Community Gathering", value: "COMMUNITY GATHERING"},
    //     ],
    //   },
    //   // validation: Rule => Rule.required(),
    // }),
    defineField({
      name: "link",
      title: "Registration Link",
      type: "string",
      // validation: Rule => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      // validation: Rule => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "location_link",
      title: "Location Google Maps Link",
      type: "string",
      description: "Enter the Google Maps link for the user to click",
      // validation: Rule => Rule.required(),
    }),
    defineField({
      name: "typeColor",
      title: "Type Color Class",
      type: "string",
      description:
        'Tailwind CSS classes for styling (e.g., "bg-green-100 text-green-800")',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active Event",
      type: "boolean",
      description: "Whether this event should be displayed on the website",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Order in which events should be displayed (lower numbers first)",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Date, New",
      name: "dateDesc",
      by: [{field: "date", direction: "desc"}],
    },
    {
      title: "Date, Old",
      name: "dateAsc",
      by: [{field: "date", direction: "asc"}],
    },
    {
      title: "Order",
      name: "orderAsc",
      by: [{field: "order", direction: "asc"}],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      type: "type",
      location: "location",
    },
    prepare(selection) {
      const {title, date, type, location} = selection;
      return {
        title: title,
        subtitle: `${date} • ${type} • ${location}`,
      };
    },
  },
});
