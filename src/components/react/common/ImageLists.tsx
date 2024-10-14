import { useUrlForImage } from "@/sanity/lib/useUrlForImage";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "@styles/ImageLists.css";
import { useStore } from "@nanostores/react";
import { filterPost, shouldSeeMore, sortPost } from "@/lib/utils/useStateStore";
import _ from "lodash";
import type { CompiledPost } from "@/sanity/lib/useCompilePosts";
import { SORT_VALUE } from "@/lib/enums/sortValue";
import SeeMore from "./SeeMore";

interface Props {
  posts: CompiledPost[];
  displayAlbum?: boolean;
  displaySeeMore?: boolean;
}

function ImageLists({ posts, displaySeeMore }: Props) {
  const [postList, setPostList] = useState(posts);
  const filter = useStore(filterPost);
  const sort = useStore(sortPost);
  const displayMore = useStore(shouldSeeMore);

  useEffect(() => {
    if (filter) {
      setPostList(
        posts.filter((post) => _.some(post.categories, { title: filter })),
      );
    } else {
      setPostList(posts);
    }
  }, [filter]);

  useEffect(() => {
    if (sort === SORT_VALUE.NEWEST) {
      setPostList((posts) => _.orderBy(posts, "createdAt", "desc"));
    }
    if (sort === SORT_VALUE.OLDEST) {
      setPostList((posts) => _.orderBy(posts, "createdAt", "asc"));
    }
    if (sort === SORT_VALUE.TITLE_DESC) {
      setPostList((posts) => _.orderBy(posts, "href", "desc"));
    }
    if (sort === SORT_VALUE.TITLE_ASC) {
      setPostList((posts) => _.orderBy(posts, "href", "asc"));
    }
  }, [sort]);

  return (
    <div
      className={clsx([
        "gallery-wrapper",
        displaySeeMore && !displayMore ? "max-h-highlight" : "h-auto",
      ])}
    >
      <div className="image-lists">
        {postList?.map((post, index) => (
          <a href={`post/${post.href}`} className="gallery-item" key={index}>
            <img
              src={useUrlForImage(post.url).url()}
              alt={post.alt}
              className="gallery-image"
              decoding="async"
              loading="lazy"
            />
          </a>
        ))}
      </div>
      {displaySeeMore && !displayMore && <SeeMore />}
    </div>
  );
}

export default ImageLists;
