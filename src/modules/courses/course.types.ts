// src/modules/course/course.types.ts

export interface ICourse {
  courseName: string;
  category: string;
  description: string;
  duration: string;
  mode: "online" | "offline";
  amount: number;
  image: string;
}