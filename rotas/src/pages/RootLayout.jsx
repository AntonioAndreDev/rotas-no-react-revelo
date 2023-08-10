import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <h1>Esse é o topo do layout padrão</h1>
      <hr />
      <Outlet />
      <hr />
      <footer>Esse é o footer do layout padrão</footer>
    </>
  );
}
