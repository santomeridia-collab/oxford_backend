// src/modules/event/event.service.ts

import { EventModel } from "./event.model";
import { IEvent } from "./event.types";

export const createEvent = async (
  data: IEvent
) => {
  return await EventModel.create(data);
};

export const getEvents = async () => {
  return await EventModel.find().sort({
    createdAt: -1,
  });
};

export const getSingleEvent = async (
  id: string
) => {
  return await EventModel.findById(id);
};

export const updateEvent = async (
  id: string,
  data: Partial<IEvent>
) => {
  return await EventModel.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
};

export const deleteEvent = async (
  id: string
) => {
  return await EventModel.findByIdAndDelete(id);
};