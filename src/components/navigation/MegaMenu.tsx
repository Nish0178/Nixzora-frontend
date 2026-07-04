"use client";

import MenuSection from "./MenuSection";

type Column = Readonly<{
  title: string;
  items: string[];
}>;

type MegaMenuProps = Readonly<{
  isOpen: boolean;
  columns?: Column[];
  children?: React.ReactNode;
}>;

export default function MegaMenu({
  isOpen,
  columns,
  children,
}: MegaMenuProps) {
  if (!isOpen) return null;

  return (
  <div
    className="
      absolute
      left-1/2
      top-full
      z-50
      w-screen
      -translate-x-1/2
      border-t
      border-gray-200
      bg-white
      shadow-2xl
      cursor-default
    "
  >
    <div className="mx-auto max-w-[1500px] px-10 py-10">
      {children ? children : columns && <MenuSection columns={columns} />}
    </div>
  </div>
);                      
}