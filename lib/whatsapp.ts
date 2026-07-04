const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "27633783712";

export function buildWhatsAppLink(itemName?: string): string {
  const message = itemName
    ? `Hi Chicken Delux, I'd like to order: ${itemName}`
    : "Hi Chicken Delux, I'd like to place an order";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
