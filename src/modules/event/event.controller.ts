// src/modules/event/event.controller.ts

import { Request, Response } from "express";
import * as eventService from "./event.service";
import asyncHandler from "../../utils/asyncHandler";

interface EventParams {
  id: string;
}

export const createEvent = asyncHandler(
  async (req: Request, res: Response) => {

    const image = (req.file as any)?.location;

    const event =
      await eventService.createEvent({
        ...req.body,
        image,
      });

    res.status(201).json({
      success: true,
      data: event,
    });
  }
);

export const getEvents = asyncHandler(
  async (_req: Request, res: Response) => {

    const events =
      await eventService.getEvents();

    res.status(200).json({
      success: true,
      data: events,
    });
  }
);

export const getSingleEvent = asyncHandler(
  async (
    req: Request<EventParams>,
    res: Response
  ) => {

    const event =
      await eventService.getSingleEvent(
        req.params.id
      );

    res.status(200).json({
      success: true,
      data: event,
    });
  }
);

export const updateEvent = asyncHandler(
  async (
    req: Request<EventParams>,
    res: Response
  ) => {

    const image = (req.file as any)?.location;

    const updatedData = {
      ...req.body,

      ...(image && {
        image,
      }),
    };

    const event =
      await eventService.updateEvent(
        req.params.id,
        updatedData
      );

    res.status(200).json({
      success: true,
      data: event,
    });
  }
);

export const deleteEvent = asyncHandler(
  async (
    req: Request<EventParams>,
    res: Response
  ) => {

    await eventService.deleteEvent(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  }
);