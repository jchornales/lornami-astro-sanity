import type { SanityDocument } from "@sanity/client";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface CompiledImages {
  href: string;
  alt: string;
  url: SanityAsset;
  createdAt: string;
  categories: any[];
}

function useCompileImages(post: SanityDocument) {
  const list: CompiledImages[] = [
    {
      href: post.slug.current,
      alt: `${post.title} || main image`,
      url: post.mainImage,
      createdAt: post._createdAt,
      categories: post.categories,
    },
  ];

  post.album?.map((image: SanityAsset, index: number) =>
    list.push({
      href: post.slug.current,
      alt: `${post.title} || sub image number ${index + 1}`,
      url: image,
      createdAt: post._createdAt,
      categories: post.categories,
    }),
  );
  return list;
}

export default useCompileImages;
