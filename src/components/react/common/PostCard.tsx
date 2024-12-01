import { Card } from "@/lib/ui/card";
import { useUrlForImage } from "@/sanity/lib/useUrlForImage";
import type { SanityDocument } from "@sanity/client";
import clsx from "clsx";
import React from "react";

interface PostCardProps {
  post: SanityDocument;
}

function PostCard({ post }: Readonly<PostCardProps>) {
  return (
    <a className="transition-all hover:scale-110" href={post.slug.current}>
      <Card className="w-full gap-2 rounded-none border-none bg-primaryLight bg-opacity-25 p-5 shadow-none lg:bg-opacity-0">
        <div className="flex w-full items-center">
          <div className="p:0 max-h-28 max-w-40 overflow-clip">
            <img src={useUrlForImage(post.mainImage).url()} alt={post.title} />
          </div>
          <div className="flex h-full w-full flex-col gap-2 p-2">
            <h3 className="font-montserrat text-base font-bold">
              {post.title}
            </h3>
            <div className="flex">
              {post.categories?.map((category: any, index: number) => (
                <span
                  key={category.title}
                  className={clsx(
                    "border-gray-500 p-2 text-sm leading-4 text-gray-500",
                    index < post.categories.length - 1 && "border-r-[1px]",
                  )}
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
}

export default PostCard;
