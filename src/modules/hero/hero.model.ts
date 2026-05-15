import mongoose, { Schema, Document } from "mongoose";
import { IHero } from "./hero.types";

export interface HeroDocument extends IHero, Document {}

const heroSchema = new Schema<HeroDocument>(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const HeroModel = mongoose.model<HeroDocument>("Hero", heroSchema);