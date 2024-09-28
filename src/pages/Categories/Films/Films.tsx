import CategoryPageLayout from "@/components/layout/CategoryPage/CategoryPageLayout";
import { CATEGORY_FILMS } from "@/constants/categories";

const recommendations = [
  {
    _id: "1",
    name: "Inception",
    recommendedBy: "Zoe",
    recommendedAt: "07/09/2024",
    archived: false,
    category: CATEGORY_FILMS,
  },
  {
    _id: "2",
    name: "Interstellar",
    recommendedBy: "Hannah",
    recommendedAt: "07/09/2024",
    archived: false,
    category: CATEGORY_FILMS,
  },
  {
    _id: "3",
    name: "Eternal Sunshine of the Spotless Mind",
    recommendedBy: "Zoe",
    recommendedAt: "07/09/2024",
    archived: false,
    category: CATEGORY_FILMS,
  },
  {
    _id: "4",
    name: "Lord of the Rings: The Return of the King",
    recommendedBy: "Hannah",
    recommendedAt: "07/09/2024",
    archived: false,
    category: CATEGORY_FILMS,
  },
];

const Films = () => {
  return (
    <>
      <CategoryPageLayout
        name={"Films"}
        recommends={recommendations}
        category={CATEGORY_FILMS}
      />
    </>
  );
};

export default Films;
