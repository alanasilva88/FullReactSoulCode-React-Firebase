// O propósito deste aqruivo é ter todas as funções necessárias para gerenciar tarefas (CRUD - CREATE, READ, UPDATE, DELETE):
// - adicionar tarefa
// - listar as tarefas 
// - atualizar tarefas
// - deletar tarefas

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// Create - Cria uma referência para a coleção no Firestone, gerando uma coleção chamada neste caso de "tarefas" (se comunica com o Firestone)
export const tarefasCol = collection(db, "tarefas");

// Função assíncrona = que o resultado dela não é pbtido imediatamente - haverá uma "espera" = await
export async function addTarefa(data) { 
    await addDoc(tarefasCol, data); // data = dados do formulário preenchido pelo usuário em novaTarefa.jsx
}


// Read
export async function getTarefas() {
    const snapshot = await getDocs(tarefasCol); // Snapshot = é o resultado da busca na coleção de tarefas
    const tarefas = []; // Aqui fica todos os documentos do BD. Array vazio que vai inserir os obj na forma de obj e não de doc como vem do Firebase

    // Percorremos cada documento da coleção e inserimos no array de tarefas, criado logo acima que está vazio
    snapshot.forEach(doc => { // O doc foi criado pelo firebase e nomeado aqui como referência a ele, detalhe tem que fazer o processo do id para este ser visualizado
        tarefas.push({...doc.data(), id: doc.id});
    })

    return tarefas; // Daqui vai para suas tarefas em forma de cards
}