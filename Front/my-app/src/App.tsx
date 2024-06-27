import React from "react";
import CategoriaListar from "./componente/pages/categoria/categoria-listar";
import TarefaCadastrar from "./componente/pages/Tarefa/Tarefa-cadastrar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import TarefaAlterar from "./components/pages/Tarefa/tarefa-alterar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/pages/categoria/listar"}>
                Listar Produtos{" "}
              </Link>
            </li>
            <li>
              <Link to={"/pages/categoria/cadastrar"}>
                Cadastrar Produtos{" "}
              </Link>
            </li>
            <li>
              <Link to={"/pages/tarefa/listar"}>
                Listar Produtos{" "}
              </Link>
            </li>
            <li>
              <Link to={"/pages/tarefa/cadastrar"}>
                Cadastrar Produtos{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TarefaListar />} />
          <Route
            path="/pages/produto/listar"
            element={<TarefaCadastrar />}
          />
          <Route
            path="/pages/produto/cadastrar"
            element={<CategoriaCadastrar />}
          />
          <Route
            path="/pages/produto/alterar/:id"
            element={<CategoriaAlterar />}
          />
        </Routes>
        <footer>
          <p>Desenvolvido por Leonardo Martinez</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;