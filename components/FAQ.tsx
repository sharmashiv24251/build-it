import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the licensing for the software?",
    answer:
      "The software is licensed under the MIT license. This license allows for free use, modification, and distribution of the software for both personal and commercial purposes.",
    value: "item-1",
  },
  {
    question: "What is the version of the software?",
    answer:
      "The software is currently in version 1.0.0. The version number will be incremented as new features are added and existing features are modified.",
    value: "item-2",
  },
  {
    question: "What is the purpose of the software?",
    answer:
      "The purpose of the software is to provide a platform for users to create, manage, and share knowledge bases.",
    value: "item-3",
  },
  {
    question: "What are the features of the software?",
    answer:
      "The software has the following features: user authentication, authorization, and accounting; a web-based interface for users to create, edit, and manage knowledge bases; a database for storing knowledge bases; and an API for external applications to access the knowledge bases.",
    value: "item-4",
  },
  {
    question: "What are the benefits of using the software?",
    answer:
      "The benefits of using the software include: improved collaboration and communication among users; reduced costs associated with knowledge management; improved accuracy and completeness of knowledge bases; and improved user experience.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="https://www.instagram.com/sharmashiv24251/"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
