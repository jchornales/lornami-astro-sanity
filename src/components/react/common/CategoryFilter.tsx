import { Button } from "@/lib/ui/button";
import { filterPost } from "@/lib/utils/useStateStore";
import { useStore } from "@nanostores/react";
import type { SanityDocument } from "@sanity/client";
import _ from "lodash";

interface Props {
  categories: SanityDocument[];
}

function CategoryFilter({ categories }: Props) {
  const activeFilter = useStore(filterPost);

  return (
    <div className="justify-left flex w-full items-center gap-5">
      {categories.map((category) => (
        <Button
          variant={activeFilter === category.title ? "default" : "outline"}
          className="font-montserrat font-bold"
          onClick={() => filterPost.set(category.title)}
          key={category.slug.current}
        >
          {category.title}
        </Button>
      ))}
    </div>
  );
}

export default CategoryFilter;
