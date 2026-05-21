// src/modules/instructor/instructor.service.ts

import { InstructorModel } from "./instructor.model";

import { IInstructor } from "./instructor.types";

export const createInstructor =
  async (data: IInstructor) => {

    return await InstructorModel.create(
      data
    );
  };

export const getInstructors =
  async () => {

    return await InstructorModel.find()
      .sort({
        createdAt: -1,
      })
      .lean();
  };

export const getSingleInstructor =
  async (id: string) => {

    return await InstructorModel.findById(
      id
    );
  };

export const updateInstructor =
  async (
    id: string,
    data: Partial<IInstructor>
  ) => {

    return await InstructorModel.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      }
    );
  };

export const deleteInstructor =
  async (id: string) => {

    return await InstructorModel.findByIdAndDelete(
      id
    );
  };