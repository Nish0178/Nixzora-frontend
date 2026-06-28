"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLoading } from "@/context/LoadingContext";
import {
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();
const { showLoader, hideLoader } = useLoading();

const handleLogoClick = async () => {
  showLoader();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  router.push("/");

  hideLoader();
};
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 w-full max-w-[95rem] items-center justify-between px-3 lg:px-4">

       {/* Brand Logo */}
<div className="flex items-center">
  <button
  onClick={handleLogoClick}
  className="flex items-center"
  type="button"
>
    {/* Mobile Logo */}
    <Image
      src="/logo-monogram.png"
      alt="NIXZORA"
      width={60}
      height={60}
      className="block lg:hidden h-10 w-auto object-contain cursor-pointer"
      priority
    />

    {/* Desktop Logo */}
    <Image
      src="/logo-primary-navbar.png"
      alt="NIXZORA"
      width={300}
      height={80}
      className="hidden lg:block h-12 w-auto object-contain cursor-pointer"
      priority
    />
  </button>
  
</div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
          <button>
            <Menu size={28} />
          </button>

          <button>
            <Search size={26} />
          </button>

          <button>
            <Heart size={24} />
          </button>

          <button>
            <ShoppingBag size={24} />
          </button>
        </div>

        {/* Navigation Actions */}
        <div className="hidden lg:flex items-center gap-10 text-base font-medium">

  {/* Categories */}
  <button className="hover:text-gray-500 transition">
    MEN
  </button>

  <button className="hover:text-gray-500 transition">
    WOMEN
  </button>

  <button className="hover:text-gray-500 transition">
    ACCESSORIES
  </button>

  {/* Search Bar */}
<div className="flex items-center gap-3 w-80 h-12 rounded-lg bg-gray-100 px-5 hover:bg-gray-200 transition">
  <Search
    size={22}
    className="text-gray-500"
  />

  <input
    type="text"
    placeholder="Search by products"
    className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
  />
</div>

  {/* Wishlist */}
  <button className="hover:text-gray-500 transition">
    <Heart size={22} />
  </button>

  {/* Account */}
  <button className="hover:text-gray-500 transition">
    <User size={22} />
  </button>

  {/* Cart */}
  <button className="hover:text-gray-500 transition">
    <ShoppingBag size={22} />
  </button>

</div>
      </div>
    </header>
  );
}