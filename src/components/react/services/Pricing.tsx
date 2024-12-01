import { Button } from "@/lib/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";
import { useLoadQuery } from "@/sanity/lib/useLoadQuery";
import type { SanityDocument } from "@sanity/client";
import "@/styles/Pricing.css";
import ChatBubble from "@/lib/icons/ChatBubble";
import BookingForm from "../common/BookingForm";
import { PortableText } from "@portabletext/react";

const { data: prices } = await useLoadQuery<SanityDocument[]>({
  query: `*[_type == "pricing"] | order(_createdAt asc)`,
});

const formatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  trailingZeroDisplay: "stripIfInteger",
});

function Pricing() {
  return (
    <div className="wrapper">
      {prices.map((price, index) => (
        <Card
          key={price._id}
          data-aos="fade-up"
          data-aos-delay={index * 500}
          data-aos-duration="1000"
          data-aos-offset="300"
          className={`pricing-card highlight-${price.highlight}`}
        >
          <CardHeader className="header">
            <CardTitle className="title">{price.title}</CardTitle>
            <CardTitle className="price">
              {price.minimumPrice ? (
                formatter.format(price.minimumPrice)
              ) : (
                <ChatBubble className="size-16 sm:size-14 md:size-12 lg:size-11" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="content">
            <BookingForm>
              {price.forBooking ? (
                <Button className="card-button">Book now</Button>
              ) : (
                <Button className="card-button appointment">
                  Set an appointment
                </Button>
              )}
            </BookingForm>
            <CardDescription className="card-disclaimer">
              {price.description}
            </CardDescription>
            <p className="inclusion">Inclusions: </p>
            <PortableText value={price.body} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Pricing;
