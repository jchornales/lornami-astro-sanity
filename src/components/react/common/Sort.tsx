import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { sortPost } from "@/lib/hooks/useStateStore";

function Sort() {
  return (
    <Select onValueChange={(value) => sortPost.set(value)}>
      <SelectTrigger
        data-aos="fade-left"
        className="w-[150px] font-montserrat font-semibold text-gray-500"
      >
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
