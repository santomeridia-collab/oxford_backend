// src/modules/course/course.model.ts

import mongoose, { Schema, Document } from "mongoose";
import { ICourse } from "./course.types";

export interface CourseDocument extends ICourse, Document {}

const courseSchema = new Schema<CourseDocument>(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      required: true,
    },

    mode: {
      type: String,
      enum: ["online", "offline"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CourseModel = mongoose.model<CourseDocument>(
  "Course",
  courseSchema
);