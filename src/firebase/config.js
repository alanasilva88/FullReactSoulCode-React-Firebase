import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {  // Tudo que está entre chaves, ou seja o objeto, são configurações do projeto que foi criado no Firebase ele gera ao iniciar um projeto no Firebase, é copiado e colado aqui
  apiKey: "AIzaSyD4cymNA3cQ9jSrLRgMbO3AMKjHaMp31yE",
  authDomain: "my-task-db3f5.firebaseapp.com",
  projectId: "my-task-db3f5",
  storageBucket: "my-task-db3f5.appspot.com",
  messagingSenderId: "302440146581",
  appId: "1:302440146581:web:840f4232c8b18507375d9c"
};


export const app = initializeApp(firebaseConfig); // App = Adiciona export pois esse app será utilizado em outros locais no projeto
export const auth = getAuth(app); // Auth = Pega os recursos de Autenticação 
export const db = getFirestore(app); //DB = Pega as configurações do Firestore




