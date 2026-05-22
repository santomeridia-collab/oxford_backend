// src/modules/enroll/enroll.service.ts

import { EnrollModel } from "./enroll.model";

import { IEnroll } from "./enroll.types";

export const createEnroll =
  async (data: IEnroll) => {

    return await EnrollModel.create(data);
  };

export const getEnrolls =
  async () => {

    return await EnrollModel.find()
      .sort({
        createdAt: -1,
      });
  };