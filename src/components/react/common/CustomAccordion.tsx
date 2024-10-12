import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/ui/accordion";

interface CustomAccordionProps {
  accordionItems: any[];
  triggerClass?: string;
  contentClass?: string;
  accordionClass?: string;
  itemClass?: string;
}

function CustomAccordion({
  accordionItems,
  triggerClass,
  contentClass,
  itemClass,
  accordionClass,
}: CustomAccordionProps) {
  return (
    <Accordion type="single" collapsible className={accordionClass}>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className={itemClass}
        >
          <AccordionTrigger className={triggerClass}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className={contentClass}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;
