type MenuColumnProps = Readonly<{
  title: string;
  items: string[];
}>;

export default function MenuColumn({
  title,
  items,
}: MenuColumnProps) {
  return (
    <div className="min-w-[210px]">
      {/* Column Title */}
      <h3 className="mb-5 text-lg font-semibold text-black">
        {title}
      </h3>

      {/* Links */}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <button
              className="
                text-left
                text-[15px]
                text-gray-600
                transition
                duration-200
                hover:text-black
              "
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}