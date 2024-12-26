import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';

const faqData = [
  {
    question: "Who's behind Uniodessy?",
    answer: "Answer not provided in the image."
  },
  {
    question: "Why not hire a full-time designer and developer",
    answer: "Answer not provided in the image."
  },
  {
    question: "What if I'm not happy with the results?",
    answer: "Answer not provided in the image."
  },
  {
    question: "How quickly I will receive my project??",
    answer: "Answer not provided in the image."
  },
  {
    question: "Can I get a refund?",
    answer: "I'm unable to provide refunds as I allocate dedicated time and resources to each client."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className=" text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          You got Questions? I got Answers.
        </h2>
        <div className="flex justify-center mb-12">
          <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-5 px-6 rounded-xl text-lg">
            Book a 15-min call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-800 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-800">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

