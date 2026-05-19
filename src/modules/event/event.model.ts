// src/modules/event/event.model.ts

import mongoose, { Schema, Document } from "mongoose";
import { IEvent } from "./event.types";

export interface EventDocument
  extends IEvent,
    Document {}

const eventSchema = new Schema<EventDocument>(
  {
    image: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    venue: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const EventModel =
  mongoose.model<EventDocument>(
    "Event",
    eventSchema
  );