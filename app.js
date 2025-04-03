const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todos = document.querySelector("#todos");

addTodoBtn.addEventListener("click", function () {
    if (todoInput.value) {
        const newTodo = `
            <div class="todo flex items-center bg-gray-700 p-3 rounded-lg shadow-md">
                <input class="w-5 h-5 cursor-pointer" type="checkbox">
                <span class="flex-1 mx-3">${todoInput.value}</span>
                <button class="bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-500 transition">Delete</button>
            </div>
        `;

        todos.innerHTML += newTodo;
        todoInput.value = "";
    }
})