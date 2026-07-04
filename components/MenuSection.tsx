import { mainMenuItems, addOnItems } from "@/data/menu";
import MenuCard from "./MenuCard";
import AddOnStrip from "./AddOnStrip";

export default function MenuSection() {
  return (
    <section id="menu" className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">
            The Menu
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold uppercase sm:text-4xl">
            Five Boxes. Zero Overthinking.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mainMenuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        {addOnItems.map((item) => (
          <AddOnStrip key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
