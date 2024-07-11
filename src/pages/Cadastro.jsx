import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";  

function Cadastro() {
    return (
        <main>
            <form className="form-section">
                <h1>Cadastro</h1>
                <hr />
                <div>
                    <label htmlFor="nome"> Nome</label>
                    <input 
                        type="text" 
                        id="nome" 
                        className="form-control"
                        // {...register("nome")} // esse parâmetro é o nome do input
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control"
                        // {...register("email")}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        className="form-control"
                        // {...register("senha")}
                    />
                </div>
                <Button variant="outline-dark" className="mt-1 w-100">Cadastrar</Button>
                <Button variant="outline-danger" className="mt-1 w-100">Entrar com o Google</Button>
            </form>    
        </main>
    );
}

export default Cadastro;