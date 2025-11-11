import Link from "next/link";

const items = [
  { id: 1, name: "Burger" },
  { id: 2, name: "Pizza" },
  { id: 3, name: "Pasta" }
];

export default function MenuPage() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Menu</h1>
      <ul>
        {items.map(i => (
          <li key={i.id}>
            <Link href={`/menu/${i.id}`}>{i.name}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">⬅ Back to Home</Link>
    </main>
  );
}
