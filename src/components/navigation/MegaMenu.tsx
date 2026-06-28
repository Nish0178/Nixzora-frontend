"use client";

type MegaMenuProps = Readonly<{
  isOpen: boolean;
  children: React.ReactNode;
}>;

export default function MegaMenu({
  isOpen,
  children,
}: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-2xl">
      <div className="mx-auto max-w-[1500px] px-8 py-8">
        {children}
      </div>
    </div>
  );
}