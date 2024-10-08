import { useQuery } from "@tanstack/react-query";

import useAxios from "@/axios/useAxios";
import {
  CATEGORY_EVENTS,
  CATEGORY_FILMS,
  CATEGORY_MUSIC,
  CATEGORY_PLACES,
  CATEGORY_TV,
} from "@/constants/categories";
import queryKeys from "@/tanstackQuery/queryKeys";

import useUser from "../user/useUser";

const emptyRecommends = {
  [CATEGORY_EVENTS]: [],
  [CATEGORY_FILMS]: [],
  [CATEGORY_MUSIC]: [],
  [CATEGORY_PLACES]: [],
  [CATEGORY_TV]: [],
};

const useRecommends = () => {
  const api = useAxios();
  const { user } = useUser();

  const getRecommends = async (isArchived = false) => {
    if (!user?.accessToken) {
      throw new Error("User is not authenticated");
    }

    const res = await api.get("/recommends", {
      headers: { Authorization: `Bearer ${user.accessToken}` },
      params: { isArchived },
    });

    return res.data;
  };

  const { data: recommends = emptyRecommends } = useQuery({
    queryKey: [queryKeys.recommends],
    queryFn: () => getRecommends(false),
  });

  const { data: archivedRecommends = emptyRecommends } = useQuery({
    queryKey: [queryKeys.archivedRecommends],
    queryFn: () => getRecommends(true),
  });

  return { recommends, archivedRecommends };
};

export default useRecommends;
