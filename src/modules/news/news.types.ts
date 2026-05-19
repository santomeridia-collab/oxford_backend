export type NewsCategory =
  | "news"
  | "blog";

export interface INews {
  title: string;
  category: NewsCategory;
  date: string;
  image: string;
  content: string;
  source: string;
}