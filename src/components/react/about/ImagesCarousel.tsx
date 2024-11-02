import { Card, CardContent } from "@/lib/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/ui/carousel";
import type { CompiledImages } from "@/sanity/lib/useCompileImages";
import { useUrlForImage } from "@/sanity/lib/useUrlForImage";
import React from "react";

interface ImagesCarouselProps {
  images: CompiledImages[];
}

function ImagesCarousel({ images }: ImagesCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-full pl-0">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    className="max-w-lg"
                    width={1000}
                    src={useUrlForImage(image.url).url()}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ImagesCarousel;
