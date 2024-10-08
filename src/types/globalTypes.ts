import {
  CATEGORY_EVENTS,
  CATEGORY_FILMS,
  CATEGORY_MUSIC,
  CATEGORY_PLACES,
  CATEGORY_TV,
} from "@/constants/categories";

export interface Recommend {
  _id: string;
  name: string;
  category: string;
  recommendedBy: string;
  createdAt: string;
  isArchived: boolean; // Changed to match backend (`isArchived`)
}

export type ValidCategory =
  | typeof CATEGORY_FILMS
  | typeof CATEGORY_TV
  | typeof CATEGORY_MUSIC
  | typeof CATEGORY_EVENTS
  | typeof CATEGORY_PLACES;

export interface User {
  _id: string;
  name: string;
  email: string;
  recommends: {
    [key in ValidCategory]: Recommend[];
  };
  accessToken: string;
}
