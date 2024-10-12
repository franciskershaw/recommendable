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

const SortBy = () => {
  return (
    <Select>
      <SelectTrigger className="w-[160px]" chevron={<FaSort />}>
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>By Date</SelectLabel>
          <SelectItem value="most-recent">Most Recent</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectSeparator />
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>By Name</SelectLabel>
          <SelectItem value="name-az">Name (A-Z)</SelectItem>
          <SelectItem value="name-za">Name (Z-A)</SelectItem>
          <SelectSeparator />
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>By Recommender</SelectLabel>
          <SelectItem value="recommender-az">Recommender (A-Z)</SelectItem>
          <SelectItem value="recommender-za">Recommender (Z-A)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortBy;
