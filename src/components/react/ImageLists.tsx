import useCompilePosts from "@/sanity/lib/useCompilePosts";
import { useUrlForImage } from "@/sanity/lib/useUrlForImage";
import type { SanityDocument } from "@sanity/client";
import _ from "lodash";
import React, { type ReactNode } from "react";

interface Props {
  posts: SanityDocument[];
  displayAlbum?: boolean;
}

function ImageLists({ posts, displayAlbum = false }: Props) {
  const compiledPost = useCompilePosts(posts, displayAlbum);
  let imageLists = _.shuffle(compiledPost);

  return (
    <div className="image-lists">
      {imageLists.map((image) => (
        <>
          <a href={`post/${image.href}`} className="gallery-item">
            <img
              src={useUrlForImage(image.url).url()}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
              decoding="async"
            />
          </a>
        </>
      ))}
    </div>
  );
}

export default ImageLists;
