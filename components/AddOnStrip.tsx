import type { MenuItem } from "@/data/menu";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function AddOnStrip({ item }: { item: MenuItem }) {
  return (
    <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-gold/50 bg-gold/5 p-6 sm:flex-row">
      <div>
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase text-gold">
          {item.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{item.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-gold">{item.priceLabel}</span>
        <a
          href={buildWhatsAppLink(item.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-background"
        >
          Add to Order
        </a>
      </div>
    </div>
  );
}
