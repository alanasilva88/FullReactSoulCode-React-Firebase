import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form"; // Biblioteca utilizada para os forms e tem que ser intalada nos projetos
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {  entrarGoogle, loginUsuario } from "../firebase/auth";

function Login() { // no form = for tem que ser igual ao id para fazer a ligação e não precisa colocar o atributo name, pois já tem na biblioteca
    const { register, handleSubmit, formState: { errors } } = useForm (); // register = registra inputs

    const navigate = useNavigate();

    function entrar(data) { // data = é um objeto com os dados do forms com email e senha
        loginUsuario(data.email, data.senha).then(() => {
            toast.success("Bem-vindo (a)!");
            navigate("/tarefas");
        }).catch(() => {
            toast.error("Email e/ou senha incorreto!");
            // pode colocar um alert("Um erro aconteceu!")
        });
    }

    function handleEntrarGoogle() {
        entrarGoogle().then(() => {
         toast.success("Bem-vindo (a)!");
         navigate("/tarefas");
        });
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(entrar)}>
                <h1 className="font-sans-bold text-2xl border-b-4">Login</h1>
                {/* <hr /> */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control"
                        {...register("email", {required: "O email é obrigatório!"})} // esse parâmetro é o nome do input
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>}

                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        className="form-control"
                        {...register("senha", {required: "A senha é obrigatória!", minLength: {value: 6, message: "Mínimo de 6 caracteres!"}})}
                    />
                    {errors.senha && <small className="invalid">{errors.senha.message}</small>}

                </div>
                <Button variant="outline-dark" className="mt-1 w-100" type="submit">
                    Entrar
                </Button>
                <Button variant="outline-danger" className="mt-1 w-100" type="button" onClick={handleEntrarGoogle}>
                    Entrar com o Google
                </Button>
            </form>
        </main>
    );
}

export default Login;