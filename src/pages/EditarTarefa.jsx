import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getTarefa, updateTarefa } from "../firebase/tarefas";
import { useEffect, useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function EditarTarefa() {
    // Extrair o id da rota dinâmica
    const { id } = useParams(); // Poderia ser const parametro = useParams();

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();
    
    const navigate = useNavigate();

    const usuario = useContext(UsuarioContext);

    function buscarDados() {
        getTarefa(id).then((tarefa) => {
            if(tarefa) { // Se existir a tarefa
                // preencher forms
                reset(tarefa); // Reset sem parâmetro = limpa, com parêmetro ele deixa preenchido de acordo com tarefas neste caso
            } else { // Se não volta para tarefas
                navigate("/tarefas");
            }
        });
    }

    function atualizarTarefa(data) {
        updateTarefa(id, data).then(() => {
            toast.success("Tarefa atualizada com sucesso!");
            navigate("/tarefas");
        });
    }

    useEffect(() => {
        buscarDados();
    }, []);


    if(usuario === null) {
      return <Navigate to="/login" />
    }

    return (
        <main>
          <form className="form-section" onSubmit={handleSubmit(atualizarTarefa)}>
            <h1>Editar tarefa</h1>
            <hr />
            <div>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                id="titulo"
                className="form-control"
                {...register("titulo", { required: true, maxLength: 200 })}
              />
              {errors.titulo && (
                <small className="invalid">O título é inválido!</small>
              )}
            </div>
            <div>
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                className="form-control"
                {...register("descricao", { required: true })}
              ></textarea>
              {errors.descricao && (
                <small className="invalid">A descrição é inválida!</small>
              )}
            </div>
            <div>
              <label htmlFor="dataConclusao">Data</label>
              <input
                type="date"
                id="dataConclusao"
                className="form-control"
                {...register("dataConclusao")}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="concluido"
                className="form-check-input"
                {...register("concluido")}
              />
              <label htmlFor="concluido" className="form-check-label">
                Concluído?
              </label>
            </div>
            <div>
              <label htmlFor="categoria">Categoria</label>
              <select
                id="categoria"
                className="form-select"
                {...register("categoria")}
              >
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Projetos">Projetos</option>
                <option value="Lazer">Lazer</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <Button variant="outline-dark" className="w-100 mt-1" type="submit">
              Atualizar Tarefa
            </Button>
          </form>
        </main>
    );
}

export default EditarTarefa;