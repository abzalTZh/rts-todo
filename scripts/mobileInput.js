const mobButton = document.querySelector(".top__task-input-btn");
const taskFormMobile = document.querySelector(".top__task-form--mobile");
const closeBtn = document.querySelector(".top__task-form__task-btns__task-close--mobile");

mobButton.addEventListener("click", (e) => {
    taskFormMobile.style.display = "flex";
})

closeBtn.addEventListener("click", (e) => {
    taskFormMobile.style.display = "none";
})

const formMobile = document.querySelector(".top__task-form--mobile");
const inputBtnMobile = document.querySelector(".top__task-form__task-add--mobile");
const inputMobile = document.querySelector(".top__task-form__task-input--mobile");

formMobile.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskName = inputMobile.value;
    if (taskName !== '') {
        tasks.push(taskName);
        inputMobile.value = '';
        console.log(tasks);
    }
    displayTasks(tasks);
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