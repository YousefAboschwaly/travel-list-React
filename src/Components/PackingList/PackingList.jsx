import React from "react";
import Items from "../Items/Items";
import { useState } from "react";
export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearAll,
}) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItems;
  if (sortedBy === "input") {
    sortedItems = items;
  }
  if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortedBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Items
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItems}
              onToggleItems={onToggleItems}
            ></Items>
          ))}
        </ul>

        <div className="actions">
          <select
            value={sortedBy}
            onChange={(e) => setSortedBy(e.target.value)}
          >
            <option value="input">Sort by input</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed</option>
          </select>
          <button onClick={onClearAll}>Clear list</button>
        </div>
      </div>
    </>
  );
}
