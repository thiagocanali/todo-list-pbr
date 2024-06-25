

var tasks = [];

function idGenerator(){

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
    };

    tasks.push(task);
    
}


function deleteTask(id) {
    console.log(element);

    tasks = tasks.filter(task=>task.id!=id);

    updateScreen();
}