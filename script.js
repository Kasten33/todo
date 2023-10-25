 -1,65 +1,68 
let todoArray = [];
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");     // Challenge: Try and using your addTaskButton with a "keydown" eventlistener
const listBox = document.getElementById("listBox");                 // and create a way to use the enter key to submit a new list item.
const saveInd = document.getElementById("saveIndex");                                                        

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();                           // This prevents the page from reloading.
    let todo = localstorage.getitem("todo")   // start by setting a variable named todo to equal localstorage.getitem("todo")                                                
   if(todo = null){                          // check if todo is null, if it is set todoArray = []
    todoArray = []
  } else {
    todoArray = JSON.parse()                // else set todoArray to JSON.parse() your variable passed into the parse method.
  }
  if(text.value = " "){
    console.alert("Input is empty")        // check if text.value is empty, alert that the input is empty and return
    return
  }
  todoArray.push(text.value)                                      // now that you've parsed the value, push the text.value to the todoArray.
  text.value = " "                                               // set the text.value to an empty string.
  localStorage.setItem("todo", JSON.stringify(todoArray))        // get the localstorage method and use the setItem and pass in todo    // and pass in JSON.stringify(todoArray).
 displayTodo()                                                 // lastly call display todo method
  
  
});

displayTodo()               // 1. when the page loads, call displayTodo() method                // This method is already in place for you.
function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
          <p class='w-full text-white font-bold'>${list}</p>
          <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-grey bg-green-600'>Edit</button>
          <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
       </div>`;
  });
  listBox.innerHTML = htmlCode;
}

todo() = localstorage.getitem("todo")                // call the todo and let it equal localstorage.getitem("todo")
todoArray = JSON.parse(todo)                        // assign the todoArray equal to JSON.parse(todo)
                                                   // use the todoArray and use the splice method on the ind and pass in 1 as well.
                                                   // set the todo in local storage and use the JSON.stringify(todoArray)
displayTodo()                                      // call the display todo method
function deleteTodo(ind) {}
function deleteTodo(ind) {
  Todo() = localstorage.getitem("todo")     // call the todo and let it equal localstorage.getitem("todo")
  todoArray = JSON.parse(todo)                     // assign the todoArray equal to JSON.parse(todo)
                                                 // use the todoArray and use the splice method on the ind and pass in 1 as well.
                                                    // set the todo in local storage and use the JSON.stringify(todoArray)
  displayTodo()                                     // call the display todo method
}

let todo = localstorage.getitem("todo")        // call the todo and let it equal localstorage.getitem("todo")
todoArray = JSON.parse(todo)                   // assign the todoArray equal to JSON.parse(todo)
                                                    // assign the text.value to the array and get the index [ind].
addTaskButton.display =  none                      // set the addTaskButton display to none
saveTaskButton.display = block                    // set the saveTaskButton display to block
function edit(ind) {}
function edit(ind) {
   saveInd.value = ind                                    // set the saveInd.value equal to the ind
  todo() = localstorage.getitem("todo")                  // call the todo and let it equal localstorage.getitem("todo")
  todoArray = JSON.parse(todo)                          // assign the todoArray equal to JSON.parse(todo)
                                                    // assign the text.value to the array and get the index [ind].
  addTaskButton.display = none                     // set the addTaskButton display to none
  saveTaskButton.display = block                  // set the saveTaskButton display to block
}
