import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getTarefas } from "../firebase/tarefas";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Tarefas() {
    const [tarefas, setTarefas] = useState(null); // Inicialmente é null, pois ainda não possui dados para exibir

    function carregarDados() { // Resultados = lista (array) de tarefas que está no BD ou na coleção epode ser chamado de qq nome
        getTarefas().then((resultados) => {
            setTarefas(resultados);
        });
    }

    // Executar uma função quando o componete é renderizado a primeira vez na tela em "tarefas" captura os dados da coleção e guarda em useStates
    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <main>
            <Container className="mt-5">
                <h1>Suas tarefas</h1>
                <hr />
                <Link className="btn btn-dark my-1" to="/tarefas/adicionar">Adicionar tarefa</Link>
                {tarefas ? 
                <section className="my-2">
                    {tarefas.map((tarefa) => {
                        return <Card key={tarefa.id}>
                            <Card.Body>
                                <Card.Title>{tarefa.titulo}</Card.Title>
                                <Card.Text>{tarefa.descricao}</Card.Text>
                                <div className="m-1">
                                    {tarefa.concluido ? <Badge bg="success">Concluído</Badge> : <Badge bg="warning">Pendente</Badge>}
                                    <Badge bg="dark">{tarefa.categoria}</Badge>
                                </div>
                                <Button variant="outline-dark m-1">Editar</Button>
                                <Button variant="outline-danger m-1">Excluir</Button>
                            </Card.Body>
                        </Card>
                    })}    
                </section> : <Loader />}
            </Container>
        </main>
    );
}

export default Tarefas;