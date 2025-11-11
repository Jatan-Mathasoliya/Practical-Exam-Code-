import { notFound } from "next/navigation";

const items = {
  1: { id: 1, name: "Burger", price: 120, desc: "Juicy beef burger" },
  2: { id: 2, name: "Pizza", price: 250, desc: "Cheese pepperoni" },
  3: { id: 3, name: "Pasta", price: 150, desc: "Creamy Alfredo" }
};

export default function ItemPage({ params }) {
  const { itemid } = params;
  const item = items[itemid];

  if (!item) return notFound();

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{item.name}</h1>
      <p>Price: ₹{item.price}</p>
      <p>{item.desc}</p>
      <a href="/menu">⬅ Back to Menu</a>
    </main>
  );
}
