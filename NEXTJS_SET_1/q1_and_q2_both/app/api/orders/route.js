let orders = [
  { id: 1, item: "Burger", qty: 2 },
  { id: 2, item: "Pizza", qty: 1 }
];

export async function GET() {
  return Response.json(orders);
}

export async function POST(req) {
  const body = await req.json();
  const newOrder = { id: Date.now(), ...body };
  orders.push(newOrder);
  return new Response(JSON.stringify(newOrder), { status: 201 });
}
