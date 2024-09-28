import CategoryPageLayout from "@/components/layout/CategoryPage/CategoryPageLayout";
import { CATEGORY_FILMS } from "@/constants/categories";
import useRecommends from "@/hooks/recommends/useRecommends";

const Films = () => {
  const { recommends } = useRecommends();

  return (
    <CategoryPageLayout
      name={"Films"}
      recommends={recommends.films}
      category={CATEGORY_FILMS}
    />
  );
};

export default Films;
