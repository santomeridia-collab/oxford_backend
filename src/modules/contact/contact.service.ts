// src/modules/contact/contact.service.ts

import { ContactModel } from "./contact.model";
import { IContact } from "./contact.types";

export const createContact = async (
  data: IContact
) => {
  return await ContactModel.create(data);
};




export const getContacts = async (
  submission_type?: string
) => {

  const filter: any = {};

  if (submission_type) {
    filter.submission_type =
      submission_type;
  }

  return await ContactModel.find(filter)
    .sort({
      createdAt: -1,
    });
};

export const getReviewSummary =
  async () => {

    const reviews =
      await ContactModel.find({
        submission_type: "review",
      });

    const total_count =
      reviews.length;

    const average_rating =
      total_count > 0
        ? (
            reviews.reduce(
              (acc, item) =>
                acc + (item.rating || 0),
              0
            ) / total_count
          ).toFixed(1)
        : 0;

    const rating_1 =
      reviews.filter(
        (r) => r.rating === 1
      ).length;

    const rating_2 =
      reviews.filter(
        (r) => r.rating === 2
      ).length;

    const rating_3 =
      reviews.filter(
        (r) => r.rating === 3
      ).length;

    const rating_4 =
      reviews.filter(
        (r) => r.rating === 4
      ).length;

    const rating_5 =
      reviews.filter(
        (r) => r.rating === 5
      ).length;

    return {
      total_count,
      average_rating,

      rating_1,
      rating_2,
      rating_3,
      rating_4,
      rating_5,
    };
  };


  export const deleteContact = async (id: string) => {
  const contact = await ContactModel.findByIdAndDelete(id);

  if (!contact) {
    throw new Error("Contact not found");
  }

  return contact;
};