// src/modules/news/news.controller.ts

import { Request, Response } from "express";

import asyncHandler from "../../utils/asyncHandler";

import * as newsService from "./news.service";
import { INews, NewsCategory } from "./news.types";


interface NewsParams {
  id: string;
  category: string;
}

export const createNews =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const file =
        req.file as any;

      const image =
        file
          ? `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.key}`
          : "";

      const news =
        await newsService.createNews({
          ...req.body,
          image,
        });

      res.status(201).json({
        success: true,
        data: news,
      });
    }
  );

export const getNews =
  asyncHandler(
    async (
      _req: Request,
      res: Response
    ) => {

      const news =
        await newsService.getNews();

      res.status(200).json({
        success: true,
        data: news,
      });
    }
  );


export const getNewsByCategory =
  asyncHandler(
    async (
      req: Request<NewsParams>,
      res: Response
    ) => {

      const category =
        req.params.category;

      if (
        category !== "news" &&
        category !== "blog"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid category",
        });
      }

      const news =
        await newsService.getNewsByCategory(
          category as NewsCategory
        );

      res.status(200).json({
        success: true,
        data: news,
      });
    }
  );

export const getSingleNews =
  asyncHandler(
    async (
      req: Request<NewsParams>,
      res: Response
    ) => {

      const news =
        await newsService.getSingleNews(
          req.params.id
        );

      res.status(200).json({
        success: true,
        data: news,
      });
    }
  );

export const updateNews =
  asyncHandler(
    async (
      req: Request<NewsParams>,
      res: Response
    ) => {

      const file =
        req.file as any;

      const image =
        file
          ? `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${file.key}`
          : undefined;

      const updatedData = {
        ...req.body,

        ...(image && {
          image,
        }),
      };

      const news =
        await newsService.updateNews(
          req.params.id,
          updatedData
        );

      res.status(200).json({
        success: true,
        data: news,
      });
    }
  );

export const deleteNews =
  asyncHandler(
    async (
      req: Request<NewsParams>,
      res: Response
    ) => {

      await newsService.deleteNews(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Deleted successfully",
      });
    }
  );