import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  SORT_MOST_RECENT,
  SORT_NAME_AZ,
  SORT_NAME_ZA,
  SORT_OLDEST,
  SORT_RECOMMENDER_AZ,
  SORT_RECOMMENDER_ZA,
} from "@/constants/preferences";
import { Recommend, SortOption } from "@/types/globalTypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortRecommends = (
  recommends: Recommend[],
  sortPreference: SortOption
) => {
  if (!Array.isArray(recommends)) return [];

  switch (sortPreference) {
    case SORT_MOST_RECENT:
      return [...recommends].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case SORT_OLDEST:
      return [...recommends].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    case SORT_NAME_AZ:
      return [...recommends].sort((a, b) => a.name.localeCompare(b.name));
    case SORT_NAME_ZA:
      return [...recommends].sort((a, b) => b.name.localeCompare(a.name));
    case SORT_RECOMMENDER_AZ:
      return [...recommends].sort((a, b) =>
        a.recommendedBy.localeCompare(b.recommendedBy)
      );
    case SORT_RECOMMENDER_ZA:
      return [...recommends].sort((a, b) =>
        b.recommendedBy.localeCompare(a.recommendedBy)
      );
    default:
      return recommends;
  }
};
