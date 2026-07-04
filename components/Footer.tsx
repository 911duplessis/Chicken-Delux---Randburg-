import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-base font-semibold uppercase text-foreground">
            Chicken Delux
          </p>
          <p>Randburg, South Africa</p>
        </div>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-flame-orange hover:underline"
        >
          WhatsApp Orders: +27 63 378 3712
        </a>
      </div>
    </footer>
  );
}
