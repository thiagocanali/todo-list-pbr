function newTask() {

    var taskDescription = document.getElementById("newTask").value;

    createTask(taskDescription);

    updateScreen();
    
}

function updateScreen() {
    var list = "<ul>";

    tasks.forEach(task => {
        list += "<li id-data=" + task.id + ">" + task.data.description+"</li>"
        
        list += "<button onclick=removeTask(this) id-data=" + task.id + ">Apagar</button>";
    
    });

    list += "</ul>";

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";

}

function removeTask(element) {
    console.log(element);

    var id = element.getAttribute("id-data");


    deleteTask(id)
    updateScreen();
}