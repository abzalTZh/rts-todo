const tasks = [];

(function () {
    const completedSection = document.querySelector(".tasks-container__tasks--completed");
    const completedSectionTitle = document.querySelector(".tasks-container__title--completed");
    const pendingSection = document.querySelector(".tasks-container__tasks--pending");
    const emptyState = document.querySelector(".empty-state");

    if(completedSection.innerHTML.trim() === '') {
        completedSectionTitle.style.display = "none";
    } else {
        completedSectionTitle.style.display = "block";
    }

    if(pendingSection.innerHTML.trim() === '') {
        emptyState.style.display = "flex";
    } else {
        emptyState.style.display = "none";
    }
})();

function displayTask(todo) {
    const taskStatus = todo.checked ? 'completed' : 'pending';
    const tasksContainer = document.querySelector(`.tasks-container__tasks.tasks-container__tasks--${taskStatus}`);
    const item = document.querySelector(`[data-key='${todo.id}']`);

    const node = document.createElement('li');
    node.setAttribute('class', 'tasks-container__tasks__task');
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
        <input type="radio" id="${todo.id}" ${todo.checked ? "checked" : ""} />
        <span class="tasks-container__tasks__task__check"></span>
        <label for="${todo.id}" class="tasks-container__tasks__task__name">${todo.text}</label>
    `;

    if(item) {
        moveElement(item);
    } else {
        tasksContainer.appendChild(node);
    }
}

function markComplete(key) {
    const index = tasks.findIndex(item => item.id === Number(key));
    tasks[index].checked = !tasks[index].checked;
    displayTask(tasks[index]);
}

function moveElement(element) {
    const completedSection = document.querySelector(".tasks-container__tasks--completed");
    const pendingSection = document.querySelector(".tasks-container__tasks--pending");

    if(element.parentNode === completedSection) {
        pendingSection.appendChild(element);
        element.querySelector("input").checked = false;
    } else {
        completedSection.appendChild(element);
        element.querySelector("input").checked = true;
    }
}

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    tasks.push(todo);
    displayTask(todo);
}

const form = document.querySelector(".top__task-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.querySelector(".top__task-form__task-input");
    const taskName = input.value.trim();
    if (taskName !== '') {
        addTodo(taskName)
        input.value = '';
    }
})

const containers = document.querySelectorAll(".tasks-container__tasks");
containers.forEach((container) => {
    container.addEventListener('click', (e) => {
        if(e.target.classList.contains("tasks-container__tasks__task")) {
            const itemKey = e.target.dataset.key;
            markComplete(itemKey);
        }
    })
})