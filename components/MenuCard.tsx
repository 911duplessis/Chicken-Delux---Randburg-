import type { MenuItem } from "@/data/menu";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6 shadow-lg shadow-black/30">
      {item.tag && (
        <span className="mb-3 inline-block w-fit rounded-full bg-flame-red/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-flame-orange">
          {item.tag}
        </span>
      )}
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold uppercase">
        {item.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted">{item.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-2xl font-bold text-gold">{item.priceLabel}</span>
        <a
          href={buildWhatsAppLink(item.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-flame-orange px-5 py-2 text-sm font-semibold text-background transition hover:brightness-110"
        >
          Order
        </a>
      </div>
    </div>
  );
}
