import { useEffect, useState } from "react";
import { Produto } from "../../../models/Tarefa";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../../../models/Categoria";

function TarefaCadastrar() {
    const navigate = useNavigate();
    const { TarefaId } = useTarefaId();
    const [Titulo, setTitulo] = useState("");
    const [Descricao, setDescricao] = useState("");
    const [CriadoEm, setCriadoEm] = useState("");
    const [CategoriaId, setCategoriaId] = useState("");
    const [Status, setStatus] = useState("");
    const [Concluida, setConcluida] = useState("");
    const [Categoria, setCategoria] = useState("");
   

  useEffect(() => {
    carregarCategorias();
  }, []);

  function carregarCategorias() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/api/tarefas/cadastrar")
      .then((resposta) => resposta.json())
      .then((categorias: Categoria[]) => {
        setCategoriId();
      });
  }

  function cadastrarTarefa(e: any) {
    const Tarefa: Tarefa = {
      Titulo: Titulo,
      CriadoEm: CriadoEm,
      Status: Status,
      Concluida: Concluida,
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5000/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Tarefa),
    })
      .then((resposta) => resposta.json())
      .then((produto: Produto) => {
        navigate("/pages/tarefa/cadastrar");
      });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={cadastrarTarefa}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite o nome"
          onChange={(e: any) => setTitulo(e.target.value)}
          required
        />
        <br />
        <label>Descricao:</label>
        <input
          type="text"
          placeholder="Digite o descrição"
          onChange={(e: any) => setDescricao(e.target.value)}
        />
        <br />
        <label>Quantidade:</label>
        <input
          type="text"
          placeholder="Digite o quantidade"
          onChange={(e: any) => setConcluida(e.target.value)}
        />
        <br />
        <label>Valor:</label>
        <input
          type="text"
          placeholder="Digite o valor"
          onChange={(e: any) => setStatus(e.target.value)}
        />
        <br />
        <label>Categorias:</label>
        <select onChange={(e: any) => setCategoriaId(e.target.value)}>
          {TarefaId.map((TarefaId) => (
            <option value={Tarefa.id} key={Tarefa.id}>
              {Tarefa.nome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default TarefaCadastrar;