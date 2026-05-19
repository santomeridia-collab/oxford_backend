    // src/modules/gallery/gallery.service.ts

import { GalleryModel } from "./gallery.model";
import { IGallery } from "./gallery.types";

export const createGallery = async (
  data: IGallery
) => {
  return await GalleryModel.create(data);
};

export const getGallery = async () => {
  return await GalleryModel.find().sort({
    createdAt: -1,
  });
};

export const getSingleGallery = async (
  id: string
) => {
  return await GalleryModel.findById(id);
};

export const updateGallery = async (
  id: string,
  data: Partial<IGallery>
) => {
  return await GalleryModel.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
};

export const deleteGallery = async (
  id: string
) => {
  return await GalleryModel.findByIdAndDelete(
    id
  );
};