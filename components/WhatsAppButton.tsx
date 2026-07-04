import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-background shadow-lg shadow-black/40 transition hover:brightness-105"
    >
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className="h-5 w-5 fill-background"
      >
        <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.65.86 5.1 2.317 7.086L4.8 28.2l6.28-1.65a11.94 11.94 0 0 0 4.924 1.05h.004c6.63 0 12.004-5.373 12.004-12.004C28.012 8.373 22.638 3 16.004 3Zm7.03 17.043c-.297.834-1.472 1.53-2.408 1.727-.64.135-1.474.243-4.283-.921-3.593-1.489-5.907-5.13-6.088-5.366-.176-.235-1.457-1.94-1.457-3.703 0-1.763.916-2.63 1.24-2.99.325-.36.71-.45.947-.45.235 0 .47.002.676.012.216.01.507-.082.793.605.297.71.996 2.454 1.084 2.633.088.18.147.39.03.626-.117.235-.176.38-.35.586-.176.205-.372.458-.53.616-.176.176-.36.367-.156.72.206.352.914 1.51 1.962 2.446 1.347 1.202 2.483 1.575 2.837 1.751.352.176.558.147.764-.088.206-.235.883-1.03 1.118-1.383.235-.352.47-.293.793-.176.323.117 2.052.968 2.404 1.144.352.176.587.264.675.41.088.147.088.847-.209 1.68Z" />
      </svg>
      Order Now
    </a>
  );
}
