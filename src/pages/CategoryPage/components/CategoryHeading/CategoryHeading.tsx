import Heading from "@/components/ui/Heading/Heading";

const CategoryHeading = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-3 text-background">
      <Heading>{name}</Heading>
    </div>
  );
};

export default CategoryHeading;
