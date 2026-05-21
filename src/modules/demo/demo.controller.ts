// src/modules/demo/demo.controller.ts

import { Request, Response } from "express";

import asyncHandler from "../../utils/asyncHandler";

import * as demoService from "./demo.service";

export const createDemo =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const demo =
        await demoService.createDemo(
          req.body
        );

      res.status(201).json({
        success: true,
        data: demo,
      });
    }
  );

export const getDemos =
  asyncHandler(
    async (
      _req: Request,
      res: Response
    ) => {

      const demos =
        await demoService.getDemos();

      res.status(200).json({
        success: true,
        data: demos,
      });
    }
  );