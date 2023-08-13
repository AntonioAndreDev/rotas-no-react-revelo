import { Link, useParams } from "react-router-dom";
import products from "../database.json";

export default function Product() {
  const { productId } = useParams();

  const product = products.find((productShow) => productShow.id === +productId);

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
