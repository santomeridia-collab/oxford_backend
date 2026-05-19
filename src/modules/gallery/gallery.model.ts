// src/modules/gallery/gallery.model.ts

import mongoose, { Schema, Document } from "mongoose";
import { IGallery } from "./gallery.types";

export interface GalleryDocument
  extends IGallery,
    Document {}

const gallerySchema = new Schema<GalleryDocument>(
  {
    image: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const GalleryModel =
  mongoose.model<GalleryDocument>(
    "Gallery",
    gallerySchema
  );