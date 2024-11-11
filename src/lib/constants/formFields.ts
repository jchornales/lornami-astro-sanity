import type { HTMLInputTypeAttribute } from "@/env";

type fieldsName =
  | "firstName"
  | "lastName"
  | "subject"
  | "emailAddress"
  | "message"
  | "lastName";

export interface InputFormFieldType {
  label: string;
  name: fieldsName;
  type?: HTMLInputTypeAttribute;
  className?: string;
  isTextArea?: boolean;
  placeholder?: string;
  inputClass?: string;
}

export const InputFormFields: InputFormFieldType[] = [
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
    label: "Subject",
    name: "subject",
    type: "text",
    className: "col-span-4",
    placeholder: "Example: Photoshoot Enquiry",
  },
  {
    label: "Email Address",
    name: "emailAddress",
    type: "email",
    className: "col-span-4",
    placeholder: "john.doe@email.com",
  },
  {
    label: "Message",
    name: "message",
    className: "col-span-4 ",
    inputClass: "resize-none",
    isTextArea: true,
    placeholder: "Type your message here..",
  },
];
