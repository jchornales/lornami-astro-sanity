import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/lib/ui/carousel";
import type { SanityDocument } from "@sanity/client";
import Autoplay from "embla-carousel-autoplay";
import PostCard from "./PostCard";

interface OtherPostsCarouselProps {
  posts: SanityDocument[];
}

const OtherPostsCarousel = ({ posts }: OtherPostsCarouselProps) => {
  return (
    <div className="w-full border-0 lg:hidden">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //   }),
        // ]}
        className="relative m-auto w-full max-w-7xl border-0"
      >
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="basis-full font-montserrat md:basis-1/2 lg:basis-1/3"
            >
              <PostCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OtherPostsCarousel;
