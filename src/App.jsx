import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import Rodape from "./components/Rodape";
import PoliticasPrivacidade from "./pages/PoliticasPrivacidade";
import NotFound from "./pages/NotFound";
import NovaTarefa from "./pages/NovaTarefa";
import Tarefas from "./pages/Tarefas";
import { Toaster } from "react-hot-toast";

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
          <Route path="/politicas" element={<PoliticasPrivacidade />} />
          <Route path="/tarefas" element={<Tarefas />}/>
          <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
