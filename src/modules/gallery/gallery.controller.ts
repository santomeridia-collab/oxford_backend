// src/modules/gallery/gallery.controller.ts

import { Request, Response } from "express";
import * as galleryService from "./gallery.service";
import asyncHandler from "../../utils/asyncHandler";

interface GalleryParams {
  id: string;
}

export const createGallery = asyncHandler(
  async (req: Request, res: Response) => {

    const image = (req.file as any)?.location;

    const gallery =
      await galleryService.createGallery({
        ...req.body,
        image,
      });

    res.status(201).json({
      success: true,
      data: gallery,
    });
  }
);

export const getGallery = asyncHandler(
  async (_req: Request, res: Response) => {

    const gallery =
      await galleryService.getGallery();

    res.status(200).json({
      success: true,
      data: gallery,
    });
  }
);

export const getSingleGallery = asyncHandler(
  async (
    req: Request<GalleryParams>,
    res: Response
  ) => {

    const gallery =
      await galleryService.getSingleGallery(
        req.params.id
      );

    res.status(200).json({
      success: true,
      data: gallery,
    });
  }
);

export const updateGallery = asyncHandler(
  async (
    req: Request<GalleryParams>,
    res: Response
  ) => {

    const image = (req.file as any)?.location;

    const updatedData = {
      ...req.body,

      ...(image && {
        image,
      }),
    };

    const gallery =
      await galleryService.updateGallery(
        req.params.id,
        updatedData
      );

    res.status(200).json({
      success: true,
      data: gallery,
    });
  }
);

export const deleteGallery = asyncHandler(
  async (
    req: Request<GalleryParams>,
    res: Response
  ) => {

    await galleryService.deleteGallery(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Gallery deleted successfully",
    });
  }
);