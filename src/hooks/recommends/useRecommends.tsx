import { useMemo } from "react";

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

  const getRecommends = async () => {
    if (!user?.accessToken) {
      throw new Error("User is not authenticated");
    }

    return api.get("/recommends", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };

  const { data } = useQuery({
    queryKey: [queryKeys.recommends],
    queryFn: getRecommends,
  });

  const recommends = useMemo(() => {
    return data?.data || emptyRecommends;
  }, [data]);

  return { recommends };
};

export default useRecommends;
