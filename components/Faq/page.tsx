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
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#d4f2ef] to-white">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Questions? Look here.
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Can’t find an answer? Call us at (855) 692-5326 or email
          contact@myclean.com!
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
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
