// src/modules/contact/contact.model.ts

import mongoose, {
  Schema,
  Document,
} from "mongoose";

import { IContact } from "./contact.types";

export interface ContactDocument
  extends IContact,
    Document {}

const contactSchema =
  new Schema<ContactDocument>(
    {
      first_name: {
        type: String,
        required: true,
      },

      last_name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      telephone: {
        type: String,
      },

      submission_type: {
        type: String,
        enum: [
          "contact",
          "suggestion",
          "review",
          "complaint",
        ],
        required: true,
      },

      subject: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
    },
    {
      timestamps: true,
    }
  );

export const ContactModel =
  mongoose.model<ContactDocument>(
    "Contact",
    contactSchema
  );