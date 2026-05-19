// src/modules/admin/admin.model.ts

import mongoose, {
  Schema,
  Document,
} from "mongoose";

import { IAdmin } from "./auth.types";

export interface AdminDocument
  extends IAdmin,
    Document {}

const adminSchema =
  new Schema<AdminDocument>(
    {
      email: {
        type: String,
        required: true,
        unique: true,
      },

      password: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

export const AdminModel =
  mongoose.model<AdminDocument>(
    "Admin",
    adminSchema
  );