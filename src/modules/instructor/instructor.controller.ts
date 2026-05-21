// src/modules/instructor/instructor.controller.ts

import { Request, Response } from "express";

import asyncHandler from "../../utils/asyncHandler";

import * as instructorService from "./instructor.service";

interface InstructorParams {
  id: string;
}

export const createInstructor =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const file =
        req.file as any;

      const photo =
        file
          ? `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.key}`
          : "";

      const instructor =
        await instructorService.createInstructor(
          {
            ...req.body,
            photo,
          }
        );

      res.status(201).json({
        success: true,
        data: instructor,
      });
    }
  );

export const getInstructors =
  asyncHandler(
    async (
      _req: Request,
      res: Response
    ) => {

      const instructors =
        await instructorService.getInstructors();

      res.status(200).json({
        success: true,
        data: instructors,
      });
    }
  );

export const getSingleInstructor =
  asyncHandler(
    async (
      req: Request<InstructorParams>,
      res: Response
    ) => {

      const instructor =
        await instructorService.getSingleInstructor(
          req.params.id
        );

      res.status(200).json({
        success: true,
        data: instructor,
      });
    }
  );

export const updateInstructor =
  asyncHandler(
    async (
      req: Request<InstructorParams>,
      res: Response
    ) => {

      const file =
        req.file as any;

      const photo =
        file
          ? `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.key}`
          : undefined;

      const updatedData = {
        ...req.body,

        ...(photo && {
          photo,
        }),
      };

      const instructor =
        await instructorService.updateInstructor(
          req.params.id,
          updatedData
        );

      res.status(200).json({
        success: true,
        data: instructor,
      });
    }
  );

export const deleteInstructor =
  asyncHandler(
    async (
      req: Request<InstructorParams>,
      res: Response
    ) => {

      await instructorService.deleteInstructor(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Instructor deleted successfully",
      });
    }
  );