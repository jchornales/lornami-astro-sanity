import { Button } from "@/lib/ui/button";
import { filterPost } from "@/lib/hooks/useStateStore";
import { useStore } from "@nanostores/react";
import type { SanityDocument } from "@sanity/client";

interface CategoryFilterProps {
  categories: SanityDocument[];
}

function CategoryFilter({ categories }: CategoryFilterProps) {
  const activeFilter = useStore(filterPost);

  const handleOnClick = (filter: string) => {
    if (filter === activeFilter) {
      filterPost.set("");
    } else {
      filterPost.set(filter);
    }
  };

  return (
    <div
      className="justify-left flex w-full items-center gap-5"
      data-aos="fade-right"
    >
      {categories.map((category) => (
        <Button
          variant={activeFilter === category.title ? "default" : "outline"}
          className="font-montserrat font-bold"
          onClick={() => handleOnClick(category.title)}
          key={category.slug.current}
        >
          {category.title}
        </Button>
      ))}
    </div>
  );
}

export default CategoryFilter;
