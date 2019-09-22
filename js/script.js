let mainTask= document.getElementById("main-tasks");
let addBtn= document.getElementById("add");
function addTask(){
let task= document.getElementById("task-name").value;
	let newTask=document.createElement("p");
	let newLine=document.createTextNode(task);
	newTask.appendChild(newLine);

	mainTask.append(newTask);
}
