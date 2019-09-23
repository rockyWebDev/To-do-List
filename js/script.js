let mainTask= document.getElementById("main-tasks");
let addBtn= document.getElementById("add");
function addTask(){
	let task= document.getElementById("task-name").value;
	let newTask=document.createElement("p");
	newTask.setAttribute("class","task");
	let newLine=document.createTextNode(task);
	newTask.appendChild(newLine);
	let newButton=document.createElement("button");
	newButton.setAttribute("onclick","removeTask()")
	newButton.setAttribute("id","remove")
	let removeBtn=document.createTextNode("\u2716");
	newButton.appendChild(removeBtn);
	newTask.appendChild(newButton);
	mainTask.append(newTask);
}
function removeTask(){
	let currentTask=document.activeElement.parentNode;
	currentTask.parentNode.removeChild(currentTask);
}
