import {defineType, defineField} from "sanity";

export default defineType({
  name: "coach",
  title: "Coach",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Coach name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "id",
      title: "Coach id",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Coach email",
      type: "string",
    }),
    defineField({
      name: "number",
      title: "Coach phone number",
      type: "string",
    }),
  ],
});
