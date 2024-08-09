import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


function Rodape() {
    return (
        <footer className="text-center text-light bg-dark py-4" >

            <p>&copy; 2024. Desenvolvido por Alana Silva. Todos os direitos reservados.</p>
            {/* <Link to="/politicas" className='text-decoration-none'>
                <Button variant="outline-secondary">Políticas de Privacidade</Button>
            </Link> */}

        </footer>

    );
}

export default Rodape;