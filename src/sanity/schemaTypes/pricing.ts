import { defineField, defineType } from "sanity";

const HIGHLIGHT = [
  { title: "Primary", value: "primary" },
  { title: "Secondary", value: "secondary" },
  { title: "None", value: "none" },
];

export default defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "minimumPrice",
      title: "Minimum Price",
      type: "number",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "highlight",
      title: "Highlight",
      type: "string",
      options: {
        list: HIGHLIGHT.map(({ title, value }) => ({ title, value })),
        layout: "radio",
      },
      initialValue: "none",
    }),
    defineField({
      name: "forBooking",
      title: "For Booking",
      type: "boolean",
    }),
  ],
});
