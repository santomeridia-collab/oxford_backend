// src/modules/enroll/enroll.model.ts

import mongoose, {
  Schema,
  Document,
} from "mongoose";

import { IEnroll } from "./enroll.types";

export interface EnrollDocument
  extends IEnroll,
    Document {}

const enrollSchema =
  new Schema<EnrollDocument>(
    {
      fullName: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        trim: true,
      },

      phoneNumber: {
        type: String,
        required: true,
      },

      course: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

export const EnrollModel =
  mongoose.model<EnrollDocument>(
    "Enroll",
    enrollSchema
  );