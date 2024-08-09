import { Container, Accordion, Button, Alert } from "react-bootstrap";


function Ajuda() {
    return (
        <main className="mt-4">
            <Container fluid>
                <h1 className="font-sans-bold text-2xl border-b-4 m-4">Ajuda</h1>
                {/* <hr /> */}
                <div className="m-4 shadow-lg">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sobre nosso sistema</Accordion.Header>
                                <Accordion.Body>
                                MyTask é um sistema para gerenciamento de tarefas pessoais. Nessa aplicação você pode gerenciar todos os seus afazeres.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Sobre a empresa</Accordion.Header>
                                <Accordion.Body>
                                Essa empresa envolve soluções focadas em produtividade e bem-estar.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
                <div className="grid gap-4 grid-cols-2 grid-rows-2">
                        <div className="m-4 p-2 shadow-lg">
                            <h2 className="text-xl border-b-2">Como começar?</h2>
                            <li className="py-4"><b>Crie uma conta.</b> Para aproveitar ao máximo o My Task, você precisará criar uma conta. Clique em <b>"Cadastrar"</b> na página inicial e preencha o formulário de registro com suas informações básicas. Isso garante que suas tarefas estarão seguras e acessíveis apenas por você.</li>
                            <li><b>Faça login.</b> Ao entrar na sua conta, você será direcionado à página principal do My Task, onde poderá começar a gerenciar suas tarefas.</li>
                        </div>
                        <div className="m-4 p-2 shadow-lg">
                            <h2 className="text-xl border-b-2">Como usar o My Task?</h2>
                            <li className="py-4"><b>Adicione uma nova tarefa.</b> Na página principal, você encontrará um formulário para adicionar novas tarefas. Basta preencher os campos com o título da tarefa, a descrição e a data de conclusão desejada. <b>Clique em "Adicionar Tarefa"</b> para salvá-la na sua lista de tarefas pendentes.</li>
                            
                            <li><b>Gerencie suas tarefas.</b> Tarefas pendentes: Todas as tarefas que você adicionar aparecerão na seção de "Tarefas Pendentes". Aqui, você pode visualizar todas as atividades que ainda precisam ser concluídas.
                            Concluir uma tarefa: Quando terminar uma tarefa, marque-a como concluída. Ela será automaticamente movida para a <b>seção "Tarefas Concluídas"</b>. <b>Tarefas concluídas:</b> Visualize todas as tarefas que você já completou. Essa seção ajuda você a acompanhar seu progresso e a manter o controle de suas atividades.</li>
                        </div>
                    
                </div>
                
                {/* <Button className="mt-1 me-1">Entre em contato</Button>
                <Button className="mt-1 me-1" variant="outline-danger">Denunciar</Button>
                <Alert className="mt-1" variant="warning">Atenção! Estamos em manutenção!</Alert> */}
           
        </main >
    );
}

export default Ajuda;