// Retrieve todo from local storage or initialize an empty array
// JSON- JavaScript object notation
let todo= JSON.parse(localStorage.getItem("todo")) || []; 
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton=document.getElementById("deleteButton");

//Initialize
document.addEventListener("DOMContentLoaded", function(){
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener('keydown',function(event){
        if(event.key==="Enter"){
            // preventdefault is the function for preventing browser to reload the page
            event.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener("click",deleteAllTasks);
    displayTasks();
});

function addTask(){
    //some logic
    const newTask=todoInput.value.trim();
    if(newTask !== ""){
        todo.push({
            text:newTask,
            disabled: false,
        });
        saveToLocalStorage();
        todoInput.value="";
        displayTasks();
    }
}

function deleteAllTasks(){
    // some logic
    
}

function displayTasks(){
    //some logic
    // todoList.innerHTML=
}

function saveToLocalStorage(){
    localStorage.setItem("todo", JSON.stringify(todo));
}