import CategoryPageLayout from "@/components/layout/CategoryPage/CategoryPageLayout";
import { CATEGORY_TV } from "@/constants/categories";
import useRecommends from "@/hooks/recommends/useRecommends";

const TV = () => {
  const { recommends } = useRecommends();

  return (
    <CategoryPageLayout
      name={"TV"}
      recommends={recommends.tv}
      category={CATEGORY_TV}
    />
  );
};

export default TV;
