// src/modules/news/news.model.ts

import mongoose, {
  Schema,
  Document,
} from "mongoose";

import { INews } from "./news.types";

export interface NewsDocument
  extends INews,
    Document {}

const newsSchema =
  new Schema<NewsDocument>(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      category: {
        type: String,
        enum: ["news", "blog"],
        required: true,
      },

      date: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },

      content: {
        type: String,
        required: true,
      },

      source: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

export const NewsModel =
  mongoose.model<NewsDocument>(
    "News",
    newsSchema
  );