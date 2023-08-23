import { Link, useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h4>R$ {product.price}</h4>
    </section>
  );
}
