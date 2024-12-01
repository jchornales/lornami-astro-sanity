import type { SanityDocument } from "@sanity/client";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import { useUrlForImage } from "./useUrlForImage";

export interface CompiledPost {
  href: string;
  alt: string;
  url: string;
  createdAt: string;
  categories: any[];
}

function useCompilePosts(posts: SanityDocument[], includeAlbum?: boolean) {
  const list: CompiledPost[] = [];

  posts.forEach((post) => {
    list.push({
      href: post.slug.current,
      alt: post.title,
      url: useUrlForImage(post.mainImage).url(),
      createdAt: post.publishedAt,
      categories: post.categories,
    });

    includeAlbum &&
      post.album?.map((image: SanityAsset) =>
        list.push({
          href: post.slug.current,
          alt: post.title,
          url: useUrlForImage(image).url(),
          createdAt: post._createdAt,
          categories: post.categories,
        }),
      );
  });

  return list;
}

export default useCompilePosts;
