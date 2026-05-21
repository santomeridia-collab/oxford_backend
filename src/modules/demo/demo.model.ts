// src/modules/demo/demo.model.ts

import mongoose, {
  Schema,
  Document,
} from "mongoose";

import { IDemo } from "./demo.types";

export interface DemoDocument
  extends IDemo,
    Document {}

const demoSchema =
  new Schema<DemoDocument>(
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

export const DemoModel =
  mongoose.model<DemoDocument>(
    "Demo",
    demoSchema
  );