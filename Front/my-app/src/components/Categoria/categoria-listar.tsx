import { useEffect, useState } from "react";
import { Produto } from "../../../models/Categoria";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoriaListar() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    carregarCategoria();
  }, []);

  function carregarCategoria() {
    //FETCH ou AXIOS
    fetch("http://localhost:5225/api/categoria/listar")
      .then((resposta) => resposta.json())
      .then((produtos: Produto[]) => {
        console.table(produtos);
        setProdutos(produtos);
      });
  }

  function deletar(id: string) {
    console.log(`Id: ${id}`);
    axios
      .delete(`http://localhost:5225/api/produto/deletar/${id}`)
      .then((categoria) => {
        console.log(categoria.data);
        setCategoria(categoria.data);
      });
  }

  return (
    <div>
      <h1>Listar Produtos</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Criado Em</th>
            <th>Deletar</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nome}</td>
              <td>{categoria.criadoEm}</td>
              <td>
                <button
                  onClick={() => {
                    deletar(produto.id!);
                  }}
                >
                  Deletar
                </button>
              </td>
              <td>
                <Link to={`/pages/categoria/alterar/${produto.id}`}>
                  Alterar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoriaListar;