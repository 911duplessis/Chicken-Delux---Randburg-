import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(255,122,26,0.25),_transparent_60%)]"
      />
      <Image
        src={withBasePath("/logo.png")}
        alt="Chicken Delux — Premium BBQ Chicken, Randburg"
        width={340}
        height={227}
        priority
        className="mx-auto h-auto w-[220px] sm:w-[280px]"
      />
      <p className="mt-4 text-sm font-semibold tracking-[0.3em] text-gold uppercase">
        Premium BBQ Chicken · Randburg
      </p>
      <h1 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold uppercase leading-tight sm:text-5xl">
        Flame-grilled. <span className="text-flame-orange">Real chicken.</span> Real Delux.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Five signature boxes. No overthinking. Order in seconds, straight to WhatsApp.
      </p>
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame-orange px-8 py-3 font-semibold text-background transition hover:brightness-110"
      >
        Order on WhatsApp
      </a>
    </section>
  );
}
