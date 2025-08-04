"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "./faqs.json";

export default function Faq() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="!text-4xl font-bold text-center  text-gray-800 !mb-12">
          Perguntas? Olhe aqui.
        </h1>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger className="!bg-gray-400/50 !p-4 text-left !text-lg !text-black !mb-6">
                {faq.question}
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
