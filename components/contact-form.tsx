"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(7, "Enter a valid phone number."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  function onSubmit(values: ContactValues) {
    toast.success("Quote request received", {
      description: `Thank you, ${values.name}. We will contact you shortly.`,
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
      {[
        { name: "name", label: "Name", type: "text" },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "email", label: "Email", type: "email" },
        { name: "subject", label: "Subject", type: "text" },
      ].map((field) => (
        <div key={field.name}>
          <label className="mb-2 block text-sm font-semibold text-zinc-800" htmlFor={field.name}>{field.label}</label>
          <Input id={field.name} type={field.type} {...register(field.name as keyof ContactValues)} aria-invalid={Boolean(errors[field.name as keyof ContactValues])} />
          {errors[field.name as keyof ContactValues] ? <p className="mt-2 text-sm text-red-600">{errors[field.name as keyof ContactValues]?.message}</p> : null}
        </div>
      ))}
      <div>
        <label className="mb-2 block text-sm font-semibold text-zinc-800" htmlFor="message">Message</label>
        <Textarea id="message" {...register("message")} aria-invalid={Boolean(errors.message)} />
        {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}
