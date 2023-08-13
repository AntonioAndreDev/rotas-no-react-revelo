import { Link } from "react-router-dom";

export default function Product() {
  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h1>Nome do Produto</h1>
    </section>
  );
}
