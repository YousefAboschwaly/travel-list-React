import { useState } from "react";

import "./App.css";
import Form from "./Components/Form/Form";
import Logo from "./Components/Logo/Logo";
import PackingList from "./Components/PackingList/PackingList";
import Stats from "./Components/Stats/Stats";

function App() {
  // Lifting State Up
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearAll() {
    const confirmed = window.confirm(
      "Are yo sure you want to delete All items"
    );
    confirmed && setItems([]);
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} items={items} />
        <PackingList
          items={items}
          onDeleteItems={handleDeleteItems}
          onToggleItems={handleToggleItems}
          onClearAll={handleClearAll}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
