// O propósito deste aqruivo é fazer toda a lógica de comunicação com o banco de dados e ter todas as funções necessárias para gerenciar tarefas (CRUD - CREATE, READ, UPDATE, DELETE):
// - adicionar tarefa
// - listar as tarefas 
// - atualizar tarefas
// - deletar tarefas

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./config";

// Create - Cria uma referência para a coleção no Firestone, gerando uma coleção chamada neste caso de "tarefas", ideal que seja no plural ou inglês (se comunica com o Firestone)
export const tarefasCol = collection(db, "tarefas");

// Função assíncrona = que o resultado dela não é obtido imediatamente - haverá uma "espera" = await. O async chama await
// Essa função se comunica com o firestone, envia os dados (data) e salva na coleção indicada
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


// Filtrar tarefas de cada usuário
export async function getTarefasUsuario(idUsuario) {
    // Filtrar as tarefas da coleção de acordo com o id do usuario
    const filtro = query(tarefasCol, where("idUsuario", "==", idUsuario));
    
    
    const snapshot = await getDocs(filtro);

    const tarefas= [];

    snapshot.forEach((doc) => {
        tarefas.push({...doc.data(), id: doc.id});
    })

    return tarefas;

}


// Delete
export async function deleteTarefa(id) {
    // Cria referência para documento da coleção. O parâmetro é a coleção e id que quero apagar
    const tarefaDoc = doc(tarefasCol, id);
    // Deleta o documento da coleção de acordo com o id
    await deleteDoc(tarefaDoc);
}


// Update
// Primeira função é para pegar especificamente a tarefa específica que se quer atualizar por meio do id
export async function getTarefa(id) {

    // Cria uma referência para um documento específico da coleção
    const tarefaDoc = doc(tarefasCol, id);

    // Trazer as informaçãoes do documento
    const snapshot = await getDoc(tarefaDoc);

    // Retorna os dados dentro do documento sendo o snapshot mais geral e o data mais específico
    // {titulo:'', descrição:'', ...}
    return snapshot.data();
}

export async function updateTarefa(id, data) {
    const tarefaDoc = doc(tarefasCol, id);
    await updateDoc(tarefaDoc, data);
}