import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";  
import { cadastrarUsuario, entrarGoogle } from "../firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm ();

    const navigate = useNavigate();

    // handleSubmit e função cadastrar
    function cadastrar(data) {
        cadastrarUsuario(data.nome, data.email, data.senha).then(() => {
            toast.success(`Bem-vindo (a)! ${data.nome}`);
            navigate("/tarefas");
        }).catch((error) => {
            toast.error("Um erro inesperado aconteceu!" + error.code);
        });
    } // para testar deve cadastrar emais diferentes

    function handleEntrarGoogle() {
       entrarGoogle().then(() => {
        toast.success("Bem-vindo (a)!");
        navigate("/tarefas");
       });
    }
    
    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(cadastrar)}> 
                <h1>Cadastro</h1>
                <hr />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        id="nome" 
                        className="form-control"
                        maxLength={50}
                        {...register("nome", {required: "O nome é inválido!"})} // esse parâmetro é o nome do input
                    />
                    {errors.nome && <small className="invalid">{errors.nome.message}</small>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control"
                        {...register("email", {required: "O email é inválido!"})}
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>} 

                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        className="form-control"
                        {...register("senha", {required: "Senha inválida!"})}
                    />
                    {errors.senha && <small className="invalid">{errors.senha.message}</small>}
                </div>
                <Button variant="outline-dark" className="mt-1 w-100" type="submit">
                    Cadastrar
                </Button>
                <Button variant="outline-danger" className="mt-1 w-100" type="button" onClick={handleEntrarGoogle}>
                    Entrar com o Google
                </Button>
            </form>    
        </main>
    );
}

export default Cadastro;