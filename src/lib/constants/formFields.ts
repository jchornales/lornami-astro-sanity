import type { HTMLInputTypeAttribute } from "@/env";

interface inputFormFieldType {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  isTextArea?: boolean;
  placeholder?: string;
  inputClass?: string;
}

export const inputFormFields: inputFormFieldType[] = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    className: "col-span-4 sm:col-span-2",
    placeholder: "John",
  },
  {
    label: "Last Name",
    name: "LastName",
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
    type: "text",
    className: "col-span-4 ",
    inputClass: "resize-none",
    isTextArea: true,
    placeholder: "Type your message here..",
  },
];
