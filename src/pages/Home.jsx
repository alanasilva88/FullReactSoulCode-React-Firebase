import { Card, CardGroup, Button, Container, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/cadastro");
    }

    return (
        <main className="mt-4 py-4">
            <section className="p-4">
                <div className="text-5xl font-extralight">
                    <h1 className="bg-clip-text border-b-4 m-5">Bem-vindo ao My Task!</h1>   
                </div>
                <p className="font-sans-bold text-lg m-5">O My Task é seu organizador pessoal de tarefas, projetado para ajudar você a manter suas atividades em dia. Com ele, você pode registrar tarefas pendentes, acompanhar as concluídas e gerenciar suas responsabilidades de maneira simples e eficiente.</p>
                <p className="font-sans-bold text-lg m-5">Para inciar clique no botão e faça seu cadastro!
                <Button variant="outline-dark" className="m-3" type="button" onClick={handleClick}>
                    Cadastrar
                </Button>
                </p>
            </section>
            {/* <hr /> */}
        </main>
    );
}

export default Home;