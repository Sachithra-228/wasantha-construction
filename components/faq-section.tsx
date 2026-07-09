import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";

export function FaqSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="Common questions before fabrication starts." />
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl rounded-lg border px-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
