import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/ui/accordion";
import { isNavigationBackgroundTransparent } from "@/lib/hooks/useStateStore";
import useIsAtViewportTop from "@/lib/hooks/useIsAtViewportTop";
import { useLoadQuery } from "@/sanity/lib/useLoadQuery";
import type { SanityDocument } from "@sanity/client";
import "@styles/Questions.css";

const { data: questions } = await useLoadQuery<SanityDocument[]>({
  query: `*[_type == "faqs"][0..5] | order(publishedAt desc)`,
});

function Questions() {
  const elementRef = useRef<HTMLDivElement>(null);
  const isAtTop = useIsAtViewportTop(elementRef, { offset: 0 });

  useEffect(() => {
    if (isAtTop) {
      isNavigationBackgroundTransparent.set(false);
    } else {
      isNavigationBackgroundTransparent.set(true);
    }
  }, [isAtTop]);

  return (
    <section ref={elementRef} className="faqs">
      <div className="questions-wrapper">
        <div className="faqs-header">
          <h3 className="title" data-aos="fade-left">
            Frequently asked questions
          </h3>
          <p className="max-w-2xl" data-aos="fade-left">
            <span>
              Have a different question and can&apos;t find the answer
              you&apos;re looking for? Reach out to our support team by
            </span>
            <a className="contact-us-link" href="/contact-us">
              &nbsp; sending us an email
            </a>
            <span> and we&apos;ll get back to you as soon as we can. </span>
          </p>
        </div>

        <Accordion type="single" className="questions" collapsible>
          {questions.map((item, index) => (
            <AccordionItem
              key={item._id}
              value={`item-${index}`}
              className="item"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              <AccordionTrigger className="trigger">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="content">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Questions;
