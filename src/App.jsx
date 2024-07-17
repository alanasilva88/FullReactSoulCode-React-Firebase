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
import EditarTarefa from "./pages/EditarTarefa";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";
import Loader from "./components/Loader";

// BrowserRouter = componente essecial para conduzir o roteamento do navegador.

// Router = indicamos a rota (path) e o elemento que será exibido na tela.

// Poderia colocar o Rodapé abaixo do Routes, como um rodapé fixo, visto que logo acima está o Menu onde fica a navbar

function App() {
  // O estado de usuário indica se ele está logado ou não na aplicação
  //  null = deslogado
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading,setLoading] = useState(true);

  // Função para sinalizar se usuário está ou não logado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // user null = usuário deslogou
      // user not null = usuário logado
      setUsuarioLogado(user);
      setLoading(false);
    });

  }, []);

  if(loading) {
    return (
      <Loader />
    ); // Esse elemento será exibido enquanto a aplicação é carregada e ser for null, não será exibido nada e tbm pode ser uma imagem ou logo
  }


  // Usuario.provider é o elemento que vai compartilhar para os componentes filhos da aplicação os dados
  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
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
            <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </UsuarioContext.Provider>
    </>
  );
}

export default App;
