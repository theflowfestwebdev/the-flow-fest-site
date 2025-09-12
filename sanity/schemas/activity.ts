import {defineType, defineField} from "sanity";

export default defineType({
  name: "activity",
  title: "Activity",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Activity Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "coach",
      title: "Activity Coach",
      type: "reference",
      to: [{type: "coach"}],
      // validation: Rule => Rule.required(),
    }),
    defineField({
      name: "day",
      title: "Activity Day",
      type: "string",
      description: "e.g. 1, 2, 3",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Activity Time",
      type: "string",
      description: 'e.g., "11AM - 12PM"',
      // validation: Rule => Rule.required(),
    }),
  ],
});
