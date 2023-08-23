import products from "../database.json";

export default function loadProduct({ params }) {
  const product = products.find(
    (productShow) => productShow.id === +params.productId
  );

  if (!product) {
    throw new Response("Error 404", { status: 404 });
  }

  return product;
}
