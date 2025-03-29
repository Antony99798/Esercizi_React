import { useMemo } from "react";

function FilteredList({ items }) {
  const filteredItems = useMemo(
    () => items.filter((item) => item.age > 18),
    [items]
  );

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>
          {item.name} - {item.age} years old
        </li>
      ))}
    </ul>
  );
}

export default FilteredList;
