import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/ui/carousel";
import { Card, CardContent } from "@/lib/ui/card";
import type { SanityDocument } from "@sanity/client";
import { useUrlForImage } from "@/sanity/lib/useUrlForImage";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialCarouselProps {
  testimonials: SanityDocument[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  return (
    <div className="w-full border-0">
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
        className="static m-auto w-full max-w-7xl border-0"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full pl-0 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="border-0 shadow-none">
                <CardContent className="m-auto flex flex-col items-center justify-center gap-5 p-20 md:p-10">
                  <div className="flex w-1/2 flex-col items-center justify-center">
                    <div className="">
                      {testimonial.profile ? (
                        <img
                          src={useUrlForImage(testimonial.profile)
                            .width(200)
                            .height(200)
                            .url()}
                          loading="lazy"
                          className="rounded-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center rounded-full bg-gray-300 p-10 dark:bg-gray-700">
                          <svg
                            className="h-10 w-10 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 pt-2">
                      <h3 className="text-base font-medium sm:text-lg">
                        {testimonial.firstName}
                        {testimonial.lastName}
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span className="text-xs text-gray-600">
                        {testimonial.role}
                      </span>
                      <span className="text-xs text-gray-600">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm font-light leading-relaxed text-gray-700 sm:text-base sm:font-normal lg:text-lg">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="absolute left-5" />
          <CarouselNext className="absolute right-5" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
