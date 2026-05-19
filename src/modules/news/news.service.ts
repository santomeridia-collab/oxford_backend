// src/modules/news/news.service.ts

import { NewsModel } from "./news.model";

import { INews, NewsCategory } from "./news.types";

export const createNews =
  async (data: INews) => {

    return await NewsModel.create(data);
  };

export const getNews =
  async () => {

    return await NewsModel.find()
      .sort({
        createdAt: -1,
      });
  };

export const getNewsByCategory =
  async (
    category: NewsCategory
  ) => {

    return await NewsModel.find({
      category,
    })
      .sort({
        createdAt: -1,
      })
      .lean();
  };

export const getSingleNews =
  async (id: string) => {

    return await NewsModel.findById(id);
  };

export const updateNews =
  async (
    id: string,
    data: Partial<INews>
  ) => {

    return await NewsModel.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      }
    );
  };

export const deleteNews =
  async (id: string) => {

    return await NewsModel.findByIdAndDelete(
      id
    );
  };