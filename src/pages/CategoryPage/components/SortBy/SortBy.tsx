import { FaSort } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/Select";
import {
  SORT_MOST_RECENT,
  SORT_NAME_AZ,
  SORT_NAME_ZA,
  SORT_OLDEST,
  SORT_RECOMMENDER_AZ,
  SORT_RECOMMENDER_ZA,
} from "@/constants/preferences";
import useUpdateSort from "@/hooks/user/useUpdateSort";
import useUser from "@/hooks/user/useUser";
import { ValidCategory } from "@/types/globalTypes";

const SortBy = ({ category }: { category: ValidCategory }) => {
  const sortPreference = useUser()?.user?.sortPreferences?.[category];
  const updateSort = useUpdateSort();

  const handleChangeSort = (value: string) => {
    updateSort.mutate({ sortPreferences: { [category]: value } });
  };

  return (
    <Select onValueChange={handleChangeSort} value={sortPreference}>
      <SelectTrigger className="w-[180px]" chevron={<FaSort />}>
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>By Date</SelectLabel>
          <SelectItem value={SORT_MOST_RECENT}>Most Recent</SelectItem>
          <SelectItem value={SORT_OLDEST}>Oldest</SelectItem>
          <SelectSeparator />
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>By Name</SelectLabel>
          <SelectItem value={SORT_NAME_AZ}>Name (A-Z)</SelectItem>
          <SelectItem value={SORT_NAME_ZA}>Name (Z-A)</SelectItem>
          <SelectSeparator />
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>By Recommender</SelectLabel>
          <SelectItem value={SORT_RECOMMENDER_AZ}>Recommender (A-Z)</SelectItem>
          <SelectItem value={SORT_RECOMMENDER_ZA}>Recommender (Z-A)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortBy;
