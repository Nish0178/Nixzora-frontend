import MenuColumn from "./MenuColumn";

type Column = Readonly<{
  title: string;
  items: string[];
}>;

type MenuSectionProps = Readonly<{
  columns: Column[];
}>;

export default function MenuSection({
  columns,
}: MenuSectionProps) {
  return (
    <div className="flex flex-wrap gap-14">
      {columns.map((column) => (
        <MenuColumn
          key={column.title}
          title={column.title}
          items={column.items}
        />
      ))}
    </div>
  );
}