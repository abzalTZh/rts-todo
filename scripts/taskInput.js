const inputBtn = document.querySelector(".top__task-form__task-add");
const input = document.querySelector(".top__task-form__task-input");
const form = document.querySelector(".top__task-form");
const tasks = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskName = input.value;
    if (taskName !== '') {
        tasks.push(taskName);
        input.value = '';
    }
    displayTasks(tasks);

    taskElems = document.querySelectorAll(".tasks-container__tasks__task");
    taskElems.forEach((task) => {
        task.addEventListener("click", (e) => {
            e.preventDefault();
            moveTask(e.target);
        })
    })
})

function displayTasks(tasks) {
    const tasksContainer = document.querySelector(".tasks-container__tasks");
    let index = 0;
    let newTasks = '';
    for (const task of tasks) {
        taskElem = `
            <div class="tasks-container__tasks__task">
                <input type="radio" id="task${index}" />
                <span class="tasks-container__tasks__task__check"></span>
                <label for="task${index}" class="tasks-container__tasks__task__name">${task}</label>
            </div>
        `
        index += 1;
        newTasks += taskElem;
    }
    tasksContainer.innerHTML = newTasks;
}