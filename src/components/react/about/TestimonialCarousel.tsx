import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/ui/carousel";
import { Card, CardContent } from "@/lib/ui/card";
import { User } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "This product has completely transformed how we work. The efficiency gains have been remarkable and our team productivity has increased significantly.",
      company: "Tech Solutions Inc.",
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      content:
        "The best solution I've used in years. The interface is intuitive and the features are powerful. It has streamlined our entire development process.",
      company: "Digital Innovations",
    },
    {
      name: "Emma Williams",
      role: "Product Manager",
      content:
        "Outstanding support and fantastic features. It's been a game-changer for our team. The automated workflows have saved us countless hours.",
      company: "Creative Studios",
    },
  ];

  return (
    <div className="mx-auto w-full border-0 px-4 sm:px-6 lg:px-8">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full border-0"
      >
        <CarouselContent className="-ml-2 border-0 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:basis-full md:pl-4">
              <div className="p-1">
                <Card className="border-0 shadow-none">
                  <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div className="space-y-3 text-center sm:space-y-4">
                      {/* Avatar */}
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 sm:h-12 sm:w-12 lg:h-16 lg:w-16">
                        <User className="h-5 w-5 text-gray-600 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-sm font-light leading-relaxed text-gray-700 sm:text-base sm:font-normal lg:text-lg">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      {/* Author Info */}
                      <div className="space-y-1 pt-2">
                        <h3 className="text-base font-medium sm:text-lg">
                          {testimonial.name}
                        </h3>
                        <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                          <span className="text-xs text-gray-600 sm:text-sm">
                            {testimonial.role}
                          </span>
                          <span className="hidden text-gray-400 sm:block">
                            •
                          </span>
                          <span className="text-xs text-gray-600 sm:text-sm">
                            {testimonial.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation Buttons */}
        <div className="hidden sm:block">
          <CarouselPrevious className="absolute left-0 sm:-left-4 md:-left-6" />
          <CarouselNext className="absolute right-0 sm:-right-4 md:-right-6" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
