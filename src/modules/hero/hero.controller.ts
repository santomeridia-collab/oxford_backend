import { Request, Response } from "express";
import * as heroService from "./hero.service";
import asyncHandler from "../../utils/asyncHandler";

interface HeroParams {
  id: string;
}

export const createHero = asyncHandler(
  async (req: Request, res: Response) => {

    const image = (req.file as any)?.location;

    const hero = await heroService.createHero({
      ...req.body,
      image,
    });

    res.status(201).json({
      success: true,
      data: hero,
    });
  }
);

export const getHero = asyncHandler(
  async (_req: Request, res: Response) => {

    const hero = await heroService.getHero();

    res.status(200).json({
      success: true,
      data: hero,
    });
  }
);

export const updateHero = asyncHandler(
  async (req: Request<HeroParams>, res: Response) => {

    const image = (req.file as any)?.location;

    const updatedData = {
      ...req.body,
      ...(image && { image }),
    };

    const hero = await heroService.updateHero(
      req.params.id,
      updatedData
    );

    res.status(200).json({
      success: true,
      data: hero,
    });
  }
);

export const deleteHero = asyncHandler(
  async (req: Request<HeroParams>, res: Response) => {

    await heroService.deleteHero(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  }
);