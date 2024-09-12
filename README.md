# MyTask - Gerenciamento de Tarefas Pessoais

**MyTask** é um sistema para gerenciamento de tarefas pessoais. Com esta aplicação, você pode cadastrar, visualizar, editar e excluir suas atividades diárias de maneira fácil e organizada.

Você pode acessar a página em [My Task - Deploy](https://my-task2-2af62.web.app/).

## Funcionalidades

- **Cadastro e Login de Usuário**: Os usuários podem se registrar e fazer login para acessar suas tarefas.
- **Gerenciamento de Tarefas**: Adicione, edite, visualize e exclua tarefas.
- **Interface Responsiva**: A interface é construída com `Tailwind CSS` e `React-Bootstrap` para ser totalmente responsiva e amigável.
- **Persistência de Dados**: As tarefas e dados do usuário são armazenados no Firebase.

## Dependências

Este projeto utiliza as seguintes dependências:

- **bootstrap**: Framework CSS para estilização do frontend.
- **firebase**: Plataforma para desenvolvimento de aplicativos web com autenticação e banco de dados em tempo real.
- **react**: Biblioteca principal para construção da interface de usuário.
- **react-bootstrap**: Componentes de Bootstrap para React.
- **react-dom**: Pacote para manipulação do DOM com React.
- **react-hook-form**: Biblioteca para gerenciamento de formulários em React.
- **react-hot-toast**: Biblioteca para exibição de notificações toast.
- **react-icons**: Conjunto de ícones populares para React.
- **react-router-dom**: Biblioteca para gerenciamento de rotas no React.

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

Este é um guia simples para configurar e executar a aplicação mytask em sua máquina local.

## Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (v14 ou superior)
- npm (ou yarn, se preferir)
  
## Passos para Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/my-task.git
   cd my-task ```

2. **Instale as Dependências**

   Abra um terminal na pasta do projeto e execute o seguinte comando para instalar todas as dependências necessárias:

   ```bash
   npm install
   # ou, se estiver usando yarn
   yarn

3. **Configuração do Firebase**

- Crie um projeto no Firebase (se ainda não tiver um).

- Copie as credenciais do Firebase (apiKey, authDomain, projectId, etc.) do seu projeto Firebase para o arquivo de configuração Firebase da aplicação.

   - No projeto, crie um arquivo `.env` na raiz do projeto e adicione suas credenciais Firebase da seguinte maneira:

   ```makefile
   API_KEY=<sua-api-key>
   AUTH_DOMAIN=<seu-auth-domain>
   PROJECT_ID=<seu-project-id>
   STORAGE_BUCKET=<seu-storage-bucket>
   MESSAGING_SENDER_ID=<seu-messaging-sender-id>
   APP_ID=<seu-app-id>


Certifique-se de substituir <sua-api-key>, <seu-auth-domain>, etc., pelas suas próprias credenciais do Firebase.

4. **Executar a Aplicação em Modo de Desenvolvimento**

   Após a instalação das dependências e configuração do Firebase, você pode iniciar a aplicação em modo de desenvolvimento usando o seguinte comando:

   ```bash
   npm run dev
   # ou
   yarn dev



