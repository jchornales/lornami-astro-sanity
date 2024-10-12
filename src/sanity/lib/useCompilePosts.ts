import type { SanityDocument } from "@sanity/client";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface CompiledPost {
  href: string;
  alt: string;
  url: SanityAsset;
  createdAt: string;
  categories: any[];
}

function useCompilePosts(posts: SanityDocument[], includeAlbum?: boolean) {
  const list: CompiledPost[] = [];

  posts.map((post) => {
    list.push({
      href: post.slug.current,
      alt: post.title,
      url: post.mainImage,
      createdAt: post.publishedAt,
      categories: post.categories,
    });

    includeAlbum &&
      post.album?.map((image: SanityAsset) =>
        list.push({
          href: post.slug.current,
          alt: post.title,
          url: image,
          createdAt: post._createdAt,
          categories: post.categories,
        }),
      );
  });

  return list;
}

export default useCompilePosts;
