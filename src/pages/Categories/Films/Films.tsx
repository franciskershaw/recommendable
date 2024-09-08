import CategoryPageLayout from "@/components/layout/CategoryPage/CategoryPageLayout";

const recommendations = [
  {
    id: "1",
    name: "Inception",
    recommendedBy: "Zoe",
    recommendedAt: "07/09/2024",
    actioned: false,
  },
  {
    id: "2",
    name: "Interstellar",
    recommendedBy: "Hannah",
    recommendedAt: "07/09/2024",
    actioned: false,
  },
  {
    id: "3",
    name: "Eternal Sunshine of the Spotless Mind",
    recommendedBy: "Zoe",
    recommendedAt: "07/09/2024",
    actioned: false,
  },
  {
    id: "4",
    name: "Lord of the Rings: The Return of the King",
    recommendedBy: "Hannah",
    recommendedAt: "07/09/2024",
    actioned: false,
  },
];

const Films = () => {
  return (
    <>
      <CategoryPageLayout name={"Films"} recommends={recommendations} />
    </>
  );
};

export default Films;
