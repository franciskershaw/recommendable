import CategoryPageLayout from "@/components/layout/CategoryPage/CategoryPageLayout";
import { CATEGORY_EVENTS } from "@/constants/categories";
import useRecommends from "@/hooks/recommends/useRecommends";

const Events = () => {
  const { recommends } = useRecommends();

  return (
    <CategoryPageLayout
      name={"Events"}
      recommends={recommends.events}
      category={CATEGORY_EVENTS}
    />
  );
};

export default Events;
