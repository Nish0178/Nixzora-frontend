import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-20 w-full max-w-[95rem] items-center justify-between px-8 lg:px-12">
        {/* Brand Logo */}
        <div className="flex items-center">
          <div className="flex items-center">
  {/* Mobile Logo */}
  <Image
    src="/logo-monogram.png"
    alt="NIXZORA"
    width={60}
    height={60}
    className="block lg:hidden h-10 w-auto object-contain"
    priority
  />

  {/* Desktop Logo */}
  <Image
    src="/logo-primary-navbar.png"
    alt="NIXZORA"
    width={300}
    height={80}
    className="hidden lg:block h-14 w-auto object-contain"
    priority
  />
</div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-10 text-lg font-medium">
          <button className="hover:text-gray-500 transition">
            Search
          </button>

          <button className="hover:text-gray-500 transition">
            Account
          </button>

          <button className="hover:text-gray-500 transition">
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}