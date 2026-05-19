// src/modules/admin/admin.controller.ts

import { Request, Response } from "express";

import asyncHandler from "../../utils/asyncHandler";

import * as adminService from "./auth.service";

export const registerAdmin =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const {
        email,
        password,
      } = req.body;

      const admin =
        await adminService.registerAdmin(
          email,
          password
        );

      res.status(201).json({
        success: true,
        data: admin,
      });
    }
  );

export const loginAdmin =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const {
        email,
        password,
      } = req.body;

      const data =
        await adminService.loginAdmin(
          email,
          password
        );

      res.status(200).json({
        success: true,
        data,
      });
    }
  );