// src/modules/enroll/enroll.controller.ts

import { Request, Response } from "express";

import asyncHandler from "../../utils/asyncHandler";

import * as enrollService from "./enroll.service";

export const createEnroll =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const enroll =
        await enrollService.createEnroll(
          req.body
        );

      res.status(201).json({
        success: true,
        data: enroll,
      });
    }
  );

export const getEnrolls =
  asyncHandler(
    async (
      _req: Request,
      res: Response
    ) => {

      const enrolls =
        await enrollService.getEnrolls();

      res.status(200).json({
        success: true,
        data: enrolls,
      });
    }
  );


  import mongoose from "mongoose";

export const deleteEnroll =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const id = String(req.params.id);

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid enrollment ID",
        });
      }

      await enrollService.deleteEnroll(id);

      res.status(200).json({
        success: true,
        message: "Enrollment deleted successfully",
      });
    }
  );