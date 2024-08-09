import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addTarefa } from "../firebase/tarefas";
import toast from "react-hot-toast";
import { Navigate, useNavigate} from "react-router-dom"; // Chama função para navegar em outras páginas
import { UsuarioContext } from "../contexts/UsuarioContext";
import { useContext } from "react";

function NovaTarefa() { // formState: {errors} ele diz onde está o erro no preenchimento do formulário
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();

    const usuario = useContext(UsuarioContext);

    const navigate = useNavigate();

    function salvarTarefa (data) {
        // Novo campo/propriedade no documento que associa o usuário a tarefa que ele criou
        data.idUsuario = usuario.uid;

        addTarefa(data).then(() => {
            toast.success("Tarefa adicionada com sucesso!"); // Tem que colocar no App após o bowserrouter <Toaster position="bottom-right" /> para direcionar o local onde irá aparecer a mensagem
            // Redirecionar o usuário para /tarefas navegar de foma imperativa
            navigate("/tarefas"); 
        }).catch(() => {
            toast.error("Um erro aconteceu ao adicionar tarefa!");
        }); 
        // then = aguarda a inserçã da tarefa para então exibir o toast
        // Catch = mostra a mensagem de erro 
        // Os dados serão passados para a função de inserir. O addTarefa vem do tarefas.js como está no import acima  
    }

    // Se o usuário não está logado
    if(usuario === null) {
        // Navegar para login
        return <Navigate to="/login" />
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
                <h1 className="font-sans-bold text-2xl border-b-4">Adicionar tarefa</h1>
                {/* <hr /> */}
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input 
                        type="text" 
                        id="titulo" 
                        className="form-control"
                        maxLength={200} // required para campo obrigatório e entre chaves valida as características do input, como extenção do texto dentre outras coisas
                        {...register("titulo", {required: "O título é inválido!" })}
                    />
                    {errors.titulo && <small className="invalid">{errors.titulo.message}</small>} 
                    {/* aqui é o momento que chama o errors */}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea 
                        id="descricao" 
                        className="form-control"
                        maxLength={500}
                        {...register("descricao", {required: "A descrição é inválida!"})}
                    ></textarea>
                    {errors.descricao && <small className="invalid">{errors.descricao.message}</small>}
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
                    <label htmlFor="concluido" className="form-check-label">Concluído</label>
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
                    Salvar Tarefa
                </Button>
            </form>
        </main>
    );
}

export default NovaTarefa;