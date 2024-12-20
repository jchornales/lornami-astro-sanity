import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutUs",
  title: "About Us",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});
