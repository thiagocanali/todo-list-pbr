var tasks = [];

function idGenerator() {
    var timestamp = new Date();

    var id =
        timestamp.getHours().toString() +
        timestamp.getMinutes().toString() +
        timestamp.getSeconds().toString() +
        timestamp.getMilliseconds().toString();

    return id;
}

function createTask(taskDescription) {
    var task = {
        id: idGenerator(),
        data: {
            description: taskDescription
        }
    }

    tasks.push(task); // Adicionar a tarefa ao array tasks

    updateScreen(); // Atualizar a tela após adicionar a tarefa
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id != id); // Filtrar para remover a tarefa com o ID correspondente

    updateScreen(); // Atualizar a tela após remover a tarefa
}

function newTask() {
    var taskDescription = document.getElementById("newTask").value;

    createTask(taskDescription); // Criar a nova tarefa com a descrição fornecida
}

function updateScreen() {
    var list = "<ul>";

    tasks.forEach(task => {
        list += `<li id-data="${task.id}">${task.data.description}</li>`;
        list += `<button onclick="removeTask('${task.id}')">Apagar</button>`;
    });

    list += "</ul>";

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}

function removeTask(id) {
    deleteTask(id); // Remover a tarefa com o ID fornecido
}

// Exemplo de como dataWasUpdated poderia ser implementada (supondo um snapshot de dados)
function dataWasUpdated(snapshot) {
    tasks = []; // Limpar o array tasks antes de atualizar com o novo snapshot

    snapshot.forEach(doc => {
        tasks.push({
            id: doc.id, // Supondo que doc.id contém o ID da tarefa
            data: {
                description: doc.data().description // Supondo que doc.data().description contém a descrição da tarefa
            }
        });
    });

    updateScreen(); // Atualizar a tela após carregar os dados do snapshot
}
