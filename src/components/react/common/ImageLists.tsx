import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import "@styles/ImageLists.css";
import { useStore } from "@nanostores/react";
import {
  filterPost,
  isNavigationBackgroundTransparent,
  shouldSeeMore,
  sortPost,
} from "@/lib/hooks/useStateStore";
import _ from "lodash";
import type { CompiledPost } from "@/sanity/lib/useCompilePosts";
import { SORT_VALUE } from "@/lib/enums/sortValue";
import SeeMore from "./SeeMore";
import useIsAtViewportTop from "@/lib/hooks/useIsAtViewportTop";

interface Props {
  posts: CompiledPost[];
  displaySeeMore?: boolean;
}

function ImageLists({ posts, displaySeeMore }: Readonly<Props>) {
  const [postList, setPostList] = useState(posts);
  const elementRef = useRef<HTMLDivElement>(null);
  const isAtTop = useIsAtViewportTop(elementRef, { offset: 100 });
  const filter = useStore(filterPost);
  const sort = useStore(sortPost);
  const displayMore = useStore(shouldSeeMore);

  useEffect(() => {
    if (isAtTop) {
      isNavigationBackgroundTransparent.set(false);
    } else {
      isNavigationBackgroundTransparent.set(true);
    }
  }, [isAtTop]);

  useEffect(() => {
    if (filter) {
      const filteredPost = posts.filter((post) =>
        _.some(post.categories, { title: filter }),
      );
      setPostList(filteredPost);
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
      ref={elementRef}
      className={clsx([
        "gallery-wrapper",
        displaySeeMore && !displayMore ? "max-h-highlight" : "h-auto",
      ])}
    >
      <div className="image-lists">
        {postList?.map((post) => (
          <a
            href={`gallery/${post.href}`}
            className="gallery-item"
            key={post.alt}
          >
            <img
              src={post.url}
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
