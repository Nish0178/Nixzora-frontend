"use client";

export default function GenderSwitcher() {
 return (
  <section className="border-b bg-white py-6">
    <div className="mx-auto flex max-w-[95rem] px-6">
      <div className="flex rounded-full border border-gray-200 bg-white p-1 shadow-md">
        <button
          className="rounded-full bg-[#FFD23F] px-14 py-4 text-xl font-semibold text-gray-700 transition-all duration-300"
        >
          MEN
        </button>

        <button
          className="rounded-full px-14 py-4 text-xl font-semibold text-gray-500 transition-all duration-300 hover:bg-gray-100"
        >
          WOMEN
        </button>
      </div>
    </div>
  </section>
);
}