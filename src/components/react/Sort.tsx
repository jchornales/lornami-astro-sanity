import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import type { SanityDocument } from "@sanity/client";

interface SortProps {
  posts: SanityDocument[];
}

function Sort({ posts }: SortProps) {
  const lists = document.querySelector(".image-lists")
  const handleSelectChange = (value: string) => {
    let sortedPosts;
    if (value === "date-desc") {
      sortedPosts = [...posts].sort(
        (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
      );
    } else if (value === "date-asc") {
      sortedPosts = [...posts].sort(
        (a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt),
      );
    } else if (value === "title-asc") {
      sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === "title-desc") {
      sortedPosts = [...posts].sort((a, b) => b.title.localeCompare(a.title));
    }
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[150px] font-montserrat font-semibold text-gray-500">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="date-desc">Newest First</SelectItem>
        <SelectItem value="date-asc">Oldest First</SelectItem>
        <SelectItem value="title-asc">Title: A-Z</SelectItem>
        <SelectItem value="title-desc">Title: Z-A</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default Sort;
