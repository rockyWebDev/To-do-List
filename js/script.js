let mainTask= document.getElementById("main-tasks");
let addMainBtn= document.getElementById("addMain");
let addBtn= document.getElementById("add");
let priority= document.getElementById("priority");
let priorityDiv= document.getElementById("priorityDiv")
function addTask(){
	let currentTask=document.activeElement.parentNode;
	let task= document.getElementById("task-name").value;
	let newTask=document.createElement("p");
	newTask.setAttribute("class","task");
	let newLine=document.createTextNode(task);
	newTask.appendChild(newLine);
	let addButton=document.createElement("button");
	
	addButton.setAttribute("onclick","addTask()")
	addButton.setAttribute("id","add")
	let addBtn=document.createTextNode("\u271a");
	addButton.appendChild(addBtn);
	newTask.appendChild(addButton);
	let remButton=document.createElement("button");
	remButton.setAttribute("onclick","removeTask()")
	remButton.setAttribute("id","remove")
	let removeBtn=document.createTextNode("\u2716");
	remButton.appendChild(removeBtn);
	newTask.appendChild(remButton);
	if (currentTask.id==addMain){
		if (priority.checked){
		mainTask.prepend(newTask);
	}else{ 
		mainTask.append(newTask);
	}}else{
		if (priority.checked){
		currentTask.prepend(newTask);
	}else{ 
		currentTask.append(newTask);
	}
		
	}
}
function removeTask(){
	let currentTask=document.activeElement.parentNode;
	currentTask.parentNode.removeChild(currentTask);
}
