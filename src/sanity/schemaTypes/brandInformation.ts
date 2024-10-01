import { defineField, defineType } from "sanity";

export default defineType({
  name: "brandInformation",
  title: "Brand Information",
  type: "document",
  fields: [
    defineField({
      name: "emailAddress",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      type: "string",
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "string",
    }),
    defineField({
      name: "tiktok",
      title: "Tiktok",
      type: "string",
    }),
    defineField({
      name: "youtube",
      title: "Youtube",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
    }),
  ],
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
});
