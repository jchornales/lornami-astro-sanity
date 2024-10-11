import type { SanityDocument } from "@sanity/client";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface List {
  href: string;
  alt: string;
  url: SanityAsset;
  createdAt: string;
}

function useCompilePosts(posts: SanityDocument[], includeAlbum?: boolean) {
  const list: List[] = [];
  posts.map((post) => {
    list.push({
      href: post.slug.current,
      alt: post.title,
      url: post.mainImage,
      createdAt: post._createdAt,
    });

    includeAlbum &&
      post.album?.map((image: SanityAsset) =>
        list.push({
          href: post.slug.current,
          alt: post.title,
          url: image,
          createdAt: post._createdAt,
        }),
      );
  });

  return list;
}

export default useCompilePosts;
