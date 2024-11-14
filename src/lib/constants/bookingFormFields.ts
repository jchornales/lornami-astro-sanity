import type { HTMLInputTypeAttribute } from "@/env";

type fieldsName =
  | "firstName"
  | "lastName"
  | "preferredDate"
  | "emailAddress"
  | "lastName";

export interface BookingFormFieldType {
  label: string;
  name: fieldsName;
  type?: HTMLInputTypeAttribute;
  className?: string;
  isTextArea?: boolean;
  placeholder?: string;
  inputClass?: string;
}

export const BookingFormFields: BookingFormFieldType[] = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    className: "col-span-4 sm:col-span-2",
    placeholder: "John",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    className: "col-span-4 sm:col-span-2",
    placeholder: "Doe",
  },
  {
    label: "Email Address",
    name: "emailAddress",
    type: "email",
    className: "col-span-4",
    placeholder: "john.doe@email.com",
  },
  {
    label: "Preferred Date",
    name: "preferredDate",
    type: "date",
    className: "col-span-4",
  },
];
