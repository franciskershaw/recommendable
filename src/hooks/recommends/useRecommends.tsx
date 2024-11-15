import { useQuery } from "@tanstack/react-query";

import useAxios from "@/axios/useAxios";
import {
  CATEGORY_BARS_RESTAURANTS,
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
  [CATEGORY_BARS_RESTAURANTS]: [],
};

const useRecommends = () => {
  const api = useAxios();
  const { user, fetchingUser } = useUser();

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

  const { data: recommends = emptyRecommends, isFetching: fetchingRecommends } =
    useQuery({
      queryKey: [queryKeys.recommends],
      queryFn: () => getRecommends(false),
      enabled: !!user?.accessToken && !fetchingUser,
    });

  const {
    data: archivedRecommends = emptyRecommends,
    isFetching: fetchingArchivedRecommends,
  } = useQuery({
    queryKey: [queryKeys.archivedRecommends],
    queryFn: () => getRecommends(true),
    enabled: !!user?.accessToken && !fetchingUser,
  });

  return {
    recommends,
    archivedRecommends,
    fetchingRecommends,
    fetchingArchivedRecommends,
  };
};

export default useRecommends;
