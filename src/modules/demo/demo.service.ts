// src/modules/demo/demo.service.ts

import { DemoModel } from "./demo.model";

import { IDemo } from "./demo.types";

export const createDemo =
  async (data: IDemo) => {

    return await DemoModel.create(data);
  };

export const getDemos =
  async () => {

    return await DemoModel.find()
      .sort({
        createdAt: -1,
      });
  };