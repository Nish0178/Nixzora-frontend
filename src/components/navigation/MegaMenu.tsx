"use client";

import { ReactNode } from "react";
import { NavSection } from "@/data/navigation";

type MegaMenuProps = Readonly<{
  isOpen: boolean;
  columns?: NavSection[];
  children?: ReactNode;
}>;

export default function MegaMenu({
  isOpen,
  columns,
  children,
}: MegaMenuProps) {
  if (!isOpen) return null;

  const menuContent =
    children ?? (
      columns ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-base font-semibold text-neutral-900">
                {col.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                {col.items.map((item) => (
                  <li
                    key={`${col.title}-${item}`}
                    className="hover:text-black cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-10">
          {/* Topwear */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Topwear</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Oversized T-Shirts</li>
              <li>Graphic T-Shirts</li>
              <li>Shirts</li>
              <li>Polos</li>
              <li>Hoodies</li>
            </ul>
          </div>

          {/* Bottomwear */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Bottomwear</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Jeans</li>
              <li>Joggers</li>
              <li>Cargo Pants</li>
              <li>Shorts</li>
            </ul>
          </div>

          {/* Footwear */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Footwear</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Sneakers</li>
              <li>Slides</li>
              <li>Casual Shoes</li>
            </ul>
          </div>

          {/* Accessories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Accessories</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Caps</li>
              <li>Belts</li>
              <li>Bags</li>
              <li>Socks</li>
            </ul>
          </div>

          {/* Featured */}
          <div className="rounded-2xl bg-neutral-100 p-6">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Featured
            </p>

            <h3 className="mt-3 text-2xl font-semibold">Premium Collection</h3>

            <p className="mt-3 text-gray-600">
              Discover our latest premium styles crafted for everyday luxury.
            </p>

            <button className="mt-6 rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800">
              Shop Now →
            </button>
          </div>
        </div>
      )
    );

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-2xl">
      <div className="mx-auto max-w-[1400px] px-10 py-10">{menuContent}</div>
    </div>
  );
}
