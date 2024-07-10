import { Button, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function NotFound() {
    return (
        <main>
            <Container className="py-4">
                <Col>
                    <h1>Ops!</h1>
                    <p>404.</p>
                    <p>Página não encontrada.</p>
                    <Link to="/" className='text-decoration-none'>
                    <Button variant="outline-secondary">Voltar para Home</Button>
                    </Link>
                </Col>
        </Container>
        </main>
    );
}

export default NotFound;