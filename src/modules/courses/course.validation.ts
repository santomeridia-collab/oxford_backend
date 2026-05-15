import { z } from "zod";

export const homeSchema = z.object({

  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
  }),

  welcome: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),

  stats: z.object({
    experience: z.string(),
    centers: z.string(),
    students: z.string(),
    courses: z.string(),
  }),

  whyChooseUs: z.array(
    z.object({
      title: z.string(),

      icon: z.object({
        name: z.string(),
        library: z.string(),
      }),
    })
  ),

  process: z.array(
    z.object({
      step: z.string(),
      description: z.string(),
    })
  ),

  coursesSection: z.object({
    title: z.string(),
    show: z.boolean(),
  }),
});