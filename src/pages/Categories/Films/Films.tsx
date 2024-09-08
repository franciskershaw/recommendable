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
];

const Films = () => {
  return (
    <>
      <CategoryPageLayout name={"Films"} recommends={recommendations} />
    </>
  );
};

export default Films;
