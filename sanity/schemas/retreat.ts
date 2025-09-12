import {defineField, defineType} from "sanity";

export default defineType({
  name: "retreat",
  title: "Retreat",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {hotspot: true},
      description:
        "Main hero image for the retreat section (recommended: landscape, 4:3 or 3:2 ratio)",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle / Theme",
      type: "string",
      description:
        'Short descriptive theme under the title, e.g. "Desert Serenity"',
    }),
    defineField({
      name: "dateRange",
      title: "Date Range",
      type: "string",
      description: 'e.g., "September 29 - October 3"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "leaders",
      title: "Led By",
      type: "array",
      of: [{type: "string"}],
      // validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: "hostedBy",
      title: "Hosted By",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Optional location field for internal use or future display",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Whether this retreat should be displayed on the website",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Order in which retreats should be displayed (lower numbers first)",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{field: "order", direction: "asc"}],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      dateRange: "dateRange",
      media: "image",
    },
    prepare(selection) {
      const {title, subtitle, dateRange, media} = selection;
      return {
        title,
        subtitle: [subtitle, dateRange].filter(Boolean).join(" • "),
        media,
      };
    },
  },
});
