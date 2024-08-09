import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import logo from "../assets/logo-myTask.png";

// <Navbar.Toggle /> para criar efeito hamburguer no NAVBAR para media query.
// <Navbar.Collapse> para criar MENU COLAPSADO no navbar para media query.
// fluid = pega toda a largura da página 'pode aplicar em todos os containers'
// variant = cor bg = background
// ms-auto = deixa a navbar a esquerda e centralizado

function Menu() { 
    const usuario = useContext(UsuarioContext); // Usuario para poder fazer a dinâmica
    const navigate = useNavigate();

    // Para o botão de logout
    function handleLogout() {
        logout().then(() => {
            navigate("/login");
        })
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Link to="/">
                        <img src={logo} className="rounded-md max-w-20 rounded-r-full"/>
                    </Link>
                    <Navbar.Toggle /> 
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            {usuario && <Link className="nav-link" to="/tarefas">Tarefas</Link>}
                            {!usuario && <Link className="nav-link" to="/login">Login</Link>}
                            {!usuario && <Link className="nav-link" to="/cadastro">Cadastro</Link>}
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                            {usuario && <span className="text-light nav-link">{usuario.displayName}</span>}
                            {usuario && <Button variant="outline-light" onClick={handleLogout}>
                                Sair
                            </Button>}                            
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