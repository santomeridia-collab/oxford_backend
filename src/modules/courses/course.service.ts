// src/modules/course/course.service.ts

import { CourseModel } from "./course.model";
import { ICourse } from "./course.types";

export const createCourse = async (data: ICourse) => {
  return await CourseModel.create(data);
};

export const getCourses = async () => {
  return await CourseModel.find().sort({
    createdAt: -1,
  });
};

export const getSingleCourse = async (id: string) => {
  return await CourseModel.findById(id);
};

export const getCoursesByCategory = async (
  category: string
) => {
  return await CourseModel.find({
    category: {
      $regex: new RegExp(category, "i"),
    },
  }).sort({
    createdAt: -1,
  });
};

export const getCategories = async () => {
  return await CourseModel.distinct("category");
};

export const updateCourse = async (
  id: string,
  data: Partial<ICourse>
) => {
  return await CourseModel.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
};

export const deleteCourse = async (id: string) => {
  return await CourseModel.findByIdAndDelete(id);
};