 -1,65 +1,68 
let todoArray = [];
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");     // Challenge: Try and using your addTaskButton with a "keydown" eventlistener
const listBox = document.getElementById("listBox");                 // and create a way to use the enter key to submit a new list item.
const saveInd = document.getElementById("saveIndex");   
                                                  

addTaskButton.addEventListener("click", (e) => {
   e.preventDefault();                                                      // This prevents the page from reloading.
   let todo = localStorage.getItem("todo");                               // start by setting a variable named todo to equal localstorage.getitem("todo")                                                
   todo === null ? todoArray = [] : todoArray = JSON.parse(todo);        // check if todo is null, if it is set todoArray = [] // else set todoArray to JSON.parse() your variable passed into the parse method.
  if(text.value === ""){
    alert("Input is empty");        // check if text.value is empty, alert that the input is empty and return
    return;
  };
  todoArray.push(text.value);                                      // now that you've parsed the value, push the text.value to the todoArray.
  text.value = "";                                               // set the text.value to an empty string.
  localStorage.setItem("todo", JSON.stringify(todoArray));        // get the localstorage method and use the setItem and pass in todo    // and pass in JSON.stringify(todoArray).
 
  displayTodo();                                                 // lastly call display todo method
  
  
});

displayTodo();               // 1. when the page loads, call displayTodo() method                // This method is already in place for you.
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


function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");            // call the todo and let it equal localstorage.getitem("todo")
  todoArray = JSON.parse(todo);                     // assign the todoArray equal to JSON.parse(todo)
  todoArray.splice(ind, 1);                           // use the todoArray and use the splice method on the ind and pass in 1 as well.
  localStorage.setItem("todo", JSON.stringify(todoArray))       // set the todo in local storage and use the JSON.stringify(todoArray)
  displayTodo();                                     // call the display todo method
}


function edit(ind) {
  saveInd.value = ind                                    // set the saveInd.value equal to the ind
  let todo = localStorage.getItem("todo");                  // call the todo and let it equal localstorage.getitem("todo")
  todoArray = JSON.parse(todo);                          // assign the todoArray equal to JSON.parse(todo)
  text.value = todoArray[ind];                          // assign the text.value to the array and get the index [ind].
  addTaskButton.style.display = "none";                     // set the addTaskButton display to none
  saveTaskButton.style.display = "inline-block";                  // set the saveTaskButton display to block
}

                            
saveTaskButton.addEventListener("click", (e) => {               // this is the challenge for this project
e.preventDefault;                                              // you'll follow a similar pattern above and do the following different:
id = saveInd.value ;                                            // 1. let id be the same as your saveInd.value
addTaskButton.style.display = "inline-block";  
saveTaskButton.style.display = "none";                         // 2. switch the add and save displays to block and none respectively.
text.vaule = "" ;                                                 // 3. set text value to empty
localStorage.setItem("todo", JSON.stringify(todoArray)) ;       // 4. and use the localstorage method setItem, pass in todo and stringify the array.
displayTodo();                                                  // 5. display todo method called.

}); 


