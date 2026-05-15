// src/modules/course/course.controller.ts

import { Request, Response } from "express";
import * as courseService from "./course.service";
import asyncHandler from "../../utils/asyncHandler";

interface CourseParams {
  id: string;
}

interface CategoryParams {
  category: string;
}

export const createCourse = asyncHandler(
  async (req: Request, res: Response) => {

    const image = (req.file as any)?.location;

    const course = await courseService.createCourse({
      ...req.body,
      amount: Number(req.body.amount),
      image,
    });

    res.status(201).json({
      success: true,
      data: course,
    });
  }
);

export const getCourses = asyncHandler(
  async (_req: Request, res: Response) => {

    const courses = await courseService.getCourses();

    res.status(200).json({
      success: true,
      data: courses,
    });
  }
);

export const getSingleCourse = asyncHandler(
  async (
    req: Request<CourseParams>,
    res: Response
  ) => {

    const course =
      await courseService.getSingleCourse(
        req.params.id
      );

    res.status(200).json({
      success: true,
      data: course,
    });
  }
);

export const getCoursesByCategory = asyncHandler(
  async (
    req: Request<CategoryParams>,
    res: Response
  ) => {

    const courses =
      await courseService.getCoursesByCategory(
        req.params.category
      );

    res.status(200).json({
      success: true,
      data: courses,
    });
  }
);

export const getCategories = asyncHandler(
  async (_req: Request, res: Response) => {

    const categories =
      await courseService.getCategories();

    res.status(200).json({
      success: true,
      data: categories,
    });
  }
);

export const updateCourse = asyncHandler(
  async (
    req: Request<CourseParams>,
    res: Response
  ) => {

    const image = (req.file as any)?.location;

    const updatedData = {
      ...req.body,

      ...(image && {
        image,
      }),

      ...(req.body.amount && {
        amount: Number(req.body.amount),
      }),
    };

    const course =
      await courseService.updateCourse(
        req.params.id,
        updatedData
      );

    res.status(200).json({
      success: true,
      data: course,
    });
  }
);

export const deleteCourse = asyncHandler(
  async (
    req: Request<CourseParams>,
    res: Response
  ) => {

    await courseService.deleteCourse(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  }
);