import{useEffect, useState} from "react";
import{Tarefa} from "../../../models/Tarefa";
import axios from "axios";
import {Link} from "react-router-dom";

function TarefaListar(){
    const [produtos, setTarefa] = useState<Tarefa[]>([]);

    useEffect(() => {
        carregarTarefa();
    }, []);

    function carregarTarefa() {
        //FETCH ou AXIOS
        fetch("http://localhost:5000/api/Tarefa/listar")
          .then((resposta) => resposta.json())
          .then((Tarefa: Tarefa[]) => {
            console.table(produtos);
            setTarefa(Tarefa);
          });
      }

      function deletar(id: string){
        console.log(`Id: ${id}`);
        axios
        .delete(`http://localhost:5000/api/tarefa/deletar/${id}`)
        .then((resposta) => {console.log(resposta.data);
        setTarefa(resposta.data)
        });
      }

      return(
        <div>
            <h1>Tarefas</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((Tarefa) => (
                        <tr key={Tarefa.id}>
                            <td>{Tarefa.id}</td>
                            <td>{Tarefa.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/tarefa/cadastrar">Cadastrar</Link>
        </div>
      );
}