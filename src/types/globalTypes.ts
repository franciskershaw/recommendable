import {
  CATEGORY_BARS_RESTAURANTS,
  CATEGORY_EVENTS,
  CATEGORY_FILMS,
  CATEGORY_MUSIC,
  CATEGORY_PLACES,
  CATEGORY_TV,
} from "@/constants/categories";
import {
  SORT_MOST_RECENT,
  SORT_NAME_AZ,
  SORT_NAME_ZA,
  SORT_OLDEST,
  SORT_RECOMMENDER_AZ,
  SORT_RECOMMENDER_ZA,
} from "@/constants/preferences";

export interface Recommend {
  _id: string;
  name: string;
  category: string;
  recommendedBy: string;
  createdAt: string;
  isArchived: boolean;
}

export type ValidCategory =
  | typeof CATEGORY_FILMS
  | typeof CATEGORY_TV
  | typeof CATEGORY_MUSIC
  | typeof CATEGORY_EVENTS
  | typeof CATEGORY_PLACES
  | typeof CATEGORY_BARS_RESTAURANTS;

// Add valid sort options
export type SortOption =
  | typeof SORT_MOST_RECENT
  | typeof SORT_OLDEST
  | typeof SORT_NAME_AZ
  | typeof SORT_NAME_ZA
  | typeof SORT_RECOMMENDER_AZ
  | typeof SORT_RECOMMENDER_ZA;

export interface User {
  _id: string;
  name: string;
  email: string;
  recommends: {
    [key in ValidCategory]: Recommend[];
  };
  sortPreferences: {
    [key in ValidCategory]?: SortOption;
  };
  accessToken: string;
}
