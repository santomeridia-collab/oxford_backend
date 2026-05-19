// src/modules/contact/contact.types.ts

export interface IContact {
  first_name: string;
  last_name: string;
  email: string;
  telephone?: string;

  submission_type:
    | "contact"
    | "suggestion"
    | "review"
    | "complaint";

  subject: string;
  description: string;

  rating?: number;
}