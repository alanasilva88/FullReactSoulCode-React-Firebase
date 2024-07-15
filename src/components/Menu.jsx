import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";


// <Navbar.Toggle /> para criar efeito hamburguer no NAVBAR para media query.
// <Navbar.Collapse> para criar MENU COLAPSADO no navbar para media query.
// fluid = pega toda a largura da página 'pode aplicar em todos os containers'
// variant = cor bg = background
// ms-auto = deixa a navbar a esquerda e centralizado

function Menu() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Link to="/">
                        <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32"/>
                    </Link>
                    <Navbar.Toggle /> 
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/tarefas">Tarefas</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;

// SPA (Sigle Page Aplication)= É habilitado pelo Link.
// Se houver links externos utiliza a tag <a />