import { HeroModel } from "./hero.model";
import { IHero } from "./hero.types";

export const createHero = async (data: IHero) => {
  return await HeroModel.create(data);
};

export const getHero = async () => {
  return await HeroModel.findOne().sort({ createdAt: -1 });
};

export const updateHero = async (id: string, data: Partial<IHero>) => {
  return await HeroModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteHero = async (id: string) => {
  return await HeroModel.findByIdAndDelete(id);
};