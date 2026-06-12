import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Image
          src="/logo-primary.png"
          alt="NIXZORA"
          width={120}
          height={120}
          className="object-contain"
          priority
        />

        <div className="flex gap-8 text-lg">
          <button>Search</button>
          <button>Account</button>
          <button>Cart</button>
        </div>
      </div>
    </header>
  );
}