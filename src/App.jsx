import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import Rodape from "./components/Rodape";
import PoliticasPrivacidade from "./pages/PoliticasPrivacidade";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// BrowserRouter = componente essecial para conduzir o roteamento do navegador.
// Router = indicamos a rota (path) e o elemento que será exibido na tela.
// Poderia colocar o Rodapé abaixo do Routes, como um rodapé fixo, visto que logo acima está o Menu onde fica a navbar

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/politicas" element={<PoliticasPrivacidade />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
