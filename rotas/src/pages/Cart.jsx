import Header from "../components/Header";

export default function Cart() {
  return (
    <section>
      <Header />
      <h2>Carrinho</h2>
      <p>Os produtos atualmente em seu carrinho.</p>
      <ul>
        <li>2 un. - The Legend of Zelda: Chronicles of Hyrule</li>
        <li>1 un. - Grand Theft Auto V</li>
        <li>1 un. - Super Mario Odyssey</li>
        <li>1 un. - Cosmic Conquest: Interstellar War</li>
        <li>1 un. - Realm of Sorcery: Arcane Prophecies</li>
      </ul>
      <button>Finalizar compra</button>
    </section>
  );
}
