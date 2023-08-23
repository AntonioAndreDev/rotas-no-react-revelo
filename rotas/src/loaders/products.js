import products from "../database.json";

export default function loadProduct({ params }) {
  const product = products.find(
    (productShow) => productShow.id === +params.productId
  );

  return product;
}
