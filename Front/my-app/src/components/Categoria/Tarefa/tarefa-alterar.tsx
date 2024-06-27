import { useEffect, useState } from "react";
import { Produto } from "../../../models/Tarefa";
import { useNavigate, useParams } from "react-router-dom";

function TarefaAlterar() {
  const navigate = useNavigate();
  const { TarefaId } = useParams();
  const [Titulo, setTitulo] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [CriadoEm, setCriadoEm] = useState("");
  const [CategoriaId, setCategoriaId] = useState("");
  const [Status, setStatus] = useState("");
  const [Concluida, setConcluida] = useState("");

  useEffect(() => {
    if (TarefaId) {
      fetch(`http://localhost:5000/api/Tarefa/listar/${id}`)
        .then((resposta) => resposta.json())
        .then((Tarefa: Produto) => {
          setTitulo(Tarefa.nome);
          setDescricao(Tarefa.descricao);
          setStatus(Tarefa.bool.toString());
          setCategoriaId(Tarefa.valor.toString());
        });
    }
  }, []);

  function alterarTarefa(e: any) {
    const Tarefa: Tarefa = {
      Titulo: Titulo,
      descricao: Descricao,
      categoriaId: "05bdf537-a841-4c50-8823-2e234d0bf0b0",
    };
    //FETCH ou AXIOS
    fetch(`/tarefas/alterar/{id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Tarefa),
    })
      .then((resposta) => resposta.json())
      .then((Tarefa: Tarefa) => {
        navigate("/pages/tarefa/listar");
      });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Alterar Tarefa</h1>
      <form onSubmit={alterarTarefa}>
        <label>Nome:</label>
        <input
          type="text"
          value={Titulo}
          placeholder="Digite o nome"
          onChange={(e: any) => setTitulo(e.target.value)}
          required
        />
        <br />
        <label>Descricao:</label>
        <input
          type="text"
          value={Descricao}
          placeholder="Digite o descrição"
          onChange={(e: any) => setDescricao(e.target.value)}
        />
        <br />
        <label>Quantidade:</label>
        <input
          type="text"
          value={CategoriaId}
          placeholder="Digite o quantidade"
          onChange={(e: any) => setCategoriaId(e.target.value)}
        />
        <br />
        <label>Valor:</label>
        <input
          type="text"
          value={Concluida}
          placeholder="Digite o valor"
          onChange={(e: any) => setConcluida(e.target.value)}
        />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default TarefaAlterar;