import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/LangContext";
import { translations, t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const WEB3FORMS_KEY = "820ac797-7183-4bf2-b91a-636d19e66ffc";

export default function Contact() {
  const { lang } = useLang();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Honeypot: if filled, silently pretend success
    if (formData.get("botcheck")) {
      setSending(false);
      toast.success(t(translations.contact.sent, lang));
      form.reset();
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Contact MaenSkill — " + formData.get("name"),
          from_name: "MaenSkill Contact",
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(t(translations.contact.sent, lang));
        form.reset();
      } else {
        toast.error(t(translations.contact.error, lang));
      }
    } catch {
      toast.error(t(translations.contact.error, lang));
    } finally {
      setSending(false);
    }
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
          {/* Honeypot field — hidden from real users */}
          <input
            name="botcheck"
            type="text"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute opacity-0 h-0 w-0 pointer-events-none"
          />
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
