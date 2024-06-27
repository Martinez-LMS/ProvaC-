import { useEffect, useState } from "react";
import { Produto } from "../../../models/Categoria";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../../../models/Categoria";

function CategoriaCadastrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [CategoriaId, setCategoriaId] = useState("");
  const [CriadoEm, setCriadoEm] = useState("");


  useEffect(() => {
    carregarCategorias();
  }, []);

  function carregarCategorias() {
    //FETCH ou AXIOS
    fetch("http://localhost:5225/api/categoria/listar")
      .then((resposta) => resposta.json())
      .then((categorias: Categoria[]) => {
        setCategoria(Categoria);
      });
  }

  function cadastrarCategoria(e: any) {
    const produto: Produto = {
      nome: nome,
      CategoriaID: CategoriaId,
      CriadoEm: CriadoEm
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5225/api/categoria/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((resposta) => resposta.json())
      .then((categoria: Categoria) => {
        navigate("/pages/categoria/cadastrar");
      });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={cadastrarCategoria}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite o nome"
          onChange={(e: any) => setNome(e.target.value)}
          required
        />
        <br />
        <label>Descricao:</label>
        <input
          type="text"
          placeholder="Digite o descrição"
          onChange={(e: any) => setCategoriaId(e.target.value)}
        />
        <br />
        <label>Quantidade:</label>
        <input
          type="text"
          placeholder="Digite o quantidade"
          onChange={(e: any) => setCriadoEm(e.target.value)}
        />
        <br />
        <label>Valor:</label>
        <input
          type="text"
          placeholder="Digite o valor"
          onChange={(e: any) => setValor(e.target.value)}
        />
       
            
        
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CategoriaCadastrar;