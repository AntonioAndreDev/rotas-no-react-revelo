import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2>O produto não foi encontrado.</h2>;
      case 401:
        return <h2>Página não autorizada para acesso.</h2>;
      case 400:
        return <h2>Algo deu errado ao carregar o produto.</h2>;
      case 500:
        return <h2>Houve algum erro interno no servidor.</h2>;
      case 502:
        return <h2>Houve uma resposta inválida de nosso servidor.</h2>;
      case 503:
        return <h2>Estamos em manutenção.</h2>;
    }
  }

  return <h2>Houve algum erro genérico</h2>;
}
