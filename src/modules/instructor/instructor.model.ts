// src/modules/instructor/instructor.model.ts

import mongoose, {
  Schema,
  Document,
} from "mongoose";

import { IInstructor } from "./instructor.types";

export interface InstructorDocument
  extends IInstructor,
    Document {}

const instructorSchema =
  new Schema<InstructorDocument>(
    {
      photo: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
        trim: true,
      },

      section: {
        type: String,
        required: true,
        trim: true,
      },

      bio: {
        type: String,
        required: true,
      },

      contact: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

export const InstructorModel =
  mongoose.model<InstructorDocument>(
    "Instructor",
    instructorSchema
  );