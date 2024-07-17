import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { getTarefas, deleteTarefa, getTarefasUsuario } from "../firebase/tarefas";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Tarefas() {
    const [tarefas, setTarefas] = useState(null); // Inicialmente é null, pois ainda não possui dados para exibir

    const usuario = useContext(UsuarioContext); // Recuperamos a info do usuário (logado = tem algo ou não logado = não tem)

    const navigate = useNavigate();

    function carregarDados() { // Resultados = lista (array) de tarefas que está no BD ou na coleção e pode ser chamado de qq nome 
        if(usuario) {
            getTarefasUsuario(usuario.uid).then((resultados) => { // Then = devolve a lista de tarefas da coleção. O getTarefas vem do filtro de usuário em tarefas.js
                setTarefas(resultados);
            });
        }

    }

    function deletarTarefa(id) {
        // True  = apagar tarefa or false = não fazer nada
        const deletar = confirm("Tem certeza?");
        if (deletar) {
            deleteTarefa(id).then(() => {
                toast.success("Tarefa removida com sucesso!");
                // Trazer a lista de tarefas atualizada
                carregarDados();
            });
        }
    }

    // Executar uma função quando o componete é renderizado a primeira vez na tela em "tarefas" captura os dados da coleção e guarda em useStates
    useEffect(() => {
        carregarDados();
    }, []);

    // Se o usuário não está logado
    if(usuario === null) {
        // Navegar para login
        return <Navigate to="/login" />
    }

    const categorias = {
        "Estudos": "primary",
        "Lazer": "warning",
        "Trabalho": "success",
        "Lazer": "info" ,
        "Projetos": "danger",
        "Outros": "dark",
    };


    return (
        <main>
            <Container className="mt-5">
                <h1>Suas tarefas</h1>
                <hr />
                <Link className="btn btn-outline-dark my-1" to="/tarefas/adicionar">Adicionar tarefa</Link>
                {tarefas ? 
                <section className="my-2">
                    {tarefas.map((tarefa) => {
                        return <Card key={tarefa.id}>
                            <Card.Body>
                                <Card.Title>{tarefa.titulo}</Card.Title>
                                <Card.Text>{tarefa.descricao}</Card.Text>
                                <div>
                                    {tarefa.concluido ? <Badge bg="success" className="m-1">Concluído</Badge> : <Badge bg="warning">Pendente</Badge>}
                                    <Badge bg={categorias[tarefa.categoria]} className="m-1">{tarefa.categoria}</Badge>
                                    <Badge bg="dark" >{new Date(tarefa.dataConclusao).toLocaleDateString()}</Badge>
                                </div>
                                <Button variant="outline-dark m-1" onClick={() => {
                                    navigate(`/tarefas/editar/${tarefa.id}`);
                                }}>Editar</Button>
                                <Button variant="outline-danger m-1" onClick={() => deletarTarefa(tarefa.id)}>Excluir</Button>
                            </Card.Body>
                        </Card>
                    })}    
                </section> : <Loader />}
            </Container>
        </main>
    );
}

export default Tarefas;