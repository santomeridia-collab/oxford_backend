// src/modules/contact/contact.controller.ts

import { Request, Response } from "express";

import * as contactService from "./contact.service";

import asyncHandler from "../../utils/asyncHandler";

export const createContact =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const contact =
        await contactService.createContact(
          req.body
        );

      res.status(201).json({
        success: true,
        data: contact,
      });
    }
  );





export const getContacts =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const {
        submission_type,
      } = req.query;

      const contacts =
        await contactService.getContacts(
          submission_type as string
        );

      res.status(200).json({
        success: true,
        data: contacts,
      });
    }
  );

export const getReviewSummary =
  asyncHandler(
    async (
      _req: Request,
      res: Response
    ) => {

      const summary =
        await contactService.getReviewSummary();

      res.status(200).json(summary);
    }
  );


  export const deleteContact =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const id = String(req.params.id);

      await contactService.deleteContact(id);


      res.status(200).json({
        success: true,
        message: "Contact deleted successfully",
      });
    }
  );