let orders = [
  { id: 1, item: "Burger", qty: 2 },
  { id: 2, item: "Pizza", qty: 1 }
];

export async function GET(_, { params }) {
  const order = orders.find(o => o.id == params.orderid);
  if (!order)
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404
    });

  return Response.json(order);
}

export async function PATCH(req, { params }) {
  const body = await req.json();
  const order = orders.find(o => o.id == params.orderid);
  if (!order)
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404
    });

  Object.assign(order, body);
  return Response.json(order);
}
