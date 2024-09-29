import CategoryPageLayout from "@/components/layout/CategoryPage/CategoryPageLayout";
import { CATEGORY_MUSIC } from "@/constants/categories";
import useRecommends from "@/hooks/recommends/useRecommends";

const Music = () => {
  const { recommends } = useRecommends();

  return (
    <CategoryPageLayout
      name={"Music"}
      recommends={recommends.music}
      category={CATEGORY_MUSIC}
    />
  );
};

export default Music;
