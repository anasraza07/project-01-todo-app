const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todos = document.querySelector("#todos");

addTodoBtn.addEventListener("click", function () {
    if (todoInput.value) {
        let newTodo = document.createElement("div");
        newTodo.className = "todo flex items-center bg-gray-700 p-3 rounded-lg shadow-md";
        newTodo.innerHTML = `
            <input class="checkbox-input w-5 h-5 cursor-pointer" type="checkbox">
            <span class="flex-1 mx-3">${todoInput.value}</span>
            <button class="delete-btn bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-500 transition">Delete</button>
        `;

        let checkboxInput = newTodo.querySelector(".checkbox-input");
        checkboxInput.addEventListener("change", function (event) {
            checkboxInput.nextElementSibling.classList.toggle("checked");
        })

        let deleteBtn = newTodo.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
            newTodo.remove();
        })

        todos.appendChild(newTodo);
        todoInput.value = "";
    }
})