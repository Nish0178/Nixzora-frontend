"use client";
import { useState } from "react";
import MegaMenu from "@/components/navigation/MegaMenu";
import { menNavigation, womenNavigation } from "@/data/navigation";
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
  const [isMenMenuOpen, setIsMenMenuOpen] = useState(false);
  const [isWomenMenuOpen, setIsWomenMenuOpen] = useState(false);
  const [isAccessoriesMenuOpen, setIsAccessoriesMenuOpen] = useState(false);
  const router = useRouter();
  const { showLoader, hideLoader } = useLoading();

  const handleLogoClick = async () => {
    showLoader();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    router.push("/");

    hideLoader();
  };
  return (
    <header className="border-b bg-white relative">
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
          <button type="button" aria-label="Open menu">
            <Menu size={28} />
          </button>

          <button type="button" aria-label="Search">
            <Search size={26} />
          </button>

          <button type="button" aria-label="Wishlist">
            <Heart size={24} />
          </button>

          <button type="button" aria-label="Cart">
            <ShoppingBag size={24} />
          </button>
        </div>

        {/* Navigation Actions */}
        <div className="hidden lg:flex items-center gap-10 text-base font-medium">
          {/* Categories */}
          <div className="flex items-center h-16">
            <button
              type="button"
              className="hover:text-gray-500 transition"
              aria-haspopup="menu"
              aria-expanded={isMenMenuOpen}
              onMouseEnter={() => setIsMenMenuOpen(true)}
              onMouseLeave={() => setIsMenMenuOpen(false)}
              onFocus={() => setIsMenMenuOpen(true)}
              onBlur={() => setIsMenMenuOpen(false)}
            >
              MEN
            </button>
          </div>

          <div className="flex items-center h-16">
            <button
              type="button"
              className="hover:text-gray-500 transition"
              aria-haspopup="menu"
              aria-expanded={isWomenMenuOpen}
              onMouseEnter={() => setIsWomenMenuOpen(true)}
              onMouseLeave={() => setIsWomenMenuOpen(false)}
              onFocus={() => setIsWomenMenuOpen(true)}
              onBlur={() => setIsWomenMenuOpen(false)}
            >
              WOMEN
            </button>
            <MegaMenu isOpen={isWomenMenuOpen} columns={womenNavigation} />
          </div>

          <div className="flex items-center h-16">
            <button
              type="button"
              className="hover:text-gray-500 transition"
              aria-haspopup="menu"
              aria-expanded={isAccessoriesMenuOpen}
              onMouseEnter={() => setIsAccessoriesMenuOpen(true)}
              onMouseLeave={() => setIsAccessoriesMenuOpen(false)}
              onFocus={() => setIsAccessoriesMenuOpen(true)}
              onBlur={() => setIsAccessoriesMenuOpen(false)}
            >
              ACCESSORIES
            </button>

            <MegaMenu isOpen={isAccessoriesMenuOpen}>
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-widest text-neutral-600 uppercase bg-neutral-100 rounded-full">
                  Coming Soon
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                  Signature Accessories Collection
                </h3>
                <p className="max-w-md mt-2 text-sm text-neutral-500">
                  Our exclusive line of premium caps, belts, sunglasses, and essentials is dropping soon. Stay tuned.
                </p>
              </div>
            </MegaMenu>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-3 w-80 h-12 rounded-lg bg-gray-100 px-5 hover:bg-gray-200 transition">
            <Search
              size={22}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search by products"
              aria-label="Search by products"
              className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
            />
          </div>

          {/* Wishlist */}
          <button type="button" className="hover:text-gray-500 transition" aria-label="Wishlist">
            <Heart size={22} />
          </button>

          {/* Account */}
          <button type="button" className="hover:text-gray-500 transition" aria-label="Account">
            <User size={22} />
          </button>

          {/* Cart */}
          <button type="button" className="hover:text-gray-500 transition" aria-label="Cart">
            <ShoppingBag size={22} />
          </button>
        </div>
      </div>

<MegaMenu isOpen={isMenMenuOpen} columns={menNavigation} />

</header>
  );
}