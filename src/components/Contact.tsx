import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/LangContext";
import { translations, t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const { lang } = useLang();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success(t(translations.contact.sent, lang));
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t(translations.contact.title, lang)}
        </h2>
        <p className="text-muted-foreground mb-10">
          {t(translations.contact.text, lang)}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <Input
            name="name"
            placeholder={t(translations.contact.name, lang)}
            required
            className="bg-card border-border focus:border-primary"
          />
          <Input
            name="email"
            type="email"
            placeholder={t(translations.contact.email, lang)}
            required
            className="bg-card border-border focus:border-primary"
          />
          <Textarea
            name="message"
            placeholder={t(translations.contact.message, lang)}
            required
            rows={5}
            className="bg-card border-border focus:border-primary resize-none"
          />
          <Button
            type="submit"
            disabled={sending}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            {sending ? t(translations.contact.sending, lang) : t(translations.contact.button, lang)}
          </Button>
        </form>
      </div>
    </section>
  );
}
