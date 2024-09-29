import CategoryPageLayout from "@/components/layout/CategoryPage/CategoryPageLayout";
import { CATEGORY_PLACES } from "@/constants/categories";
import useRecommends from "@/hooks/recommends/useRecommends";

const Travel = () => {
  const { recommends } = useRecommends();

  return (
    <CategoryPageLayout
      name={"Travel"}
      recommends={recommends.places}
      category={CATEGORY_PLACES}
    />
  );
};

export default Travel;
