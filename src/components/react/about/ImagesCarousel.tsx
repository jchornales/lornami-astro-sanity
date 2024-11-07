import { Card } from "@/lib/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/lib/ui/carousel";
import type { CompiledImages } from "@/sanity/lib/useCompileImages";
import { useUrlForImage } from "@/sanity/lib/useUrlForImage";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

interface Image {
  src: string;
  alt: string;
}

interface ImagesCarouselProps {
  images: CompiledImages[];
  className?: string;
}

function ImagesCarousel({ images, className }: ImagesCarouselProps) {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <Card
      className={clsx(
        "mx-auto w-full max-w-5xl border-none p-4 shadow-none",
        className,
      )}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={useUrlForImage(image.url).url()}
                  alt={image.alt}
                  className="h-auto max-h-[500px] w-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={clsx(
                "relative h-16 w-16 overflow-hidden rounded-md transition-all",
                current === index
                  ? "ring-2 ring-primary ring-offset-2"
                  : "opacity-70 hover:opacity-100",
              )}
            >
              <img
                src={useUrlForImage(image.url).url()}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </Card>
  );
}

export default ImagesCarousel;
