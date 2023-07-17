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
const inputMobile = document.querySelector(".top__task-form__task-input--mobile");

formMobile.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputMobile = document.querySelector(".top__task-form__task-input--mobile");
    const taskName = inputMobile.value.trim();
    if (taskName !== '') {
        addTodo(taskName);
        inputMobile.value = '';
    }
    taskFormMobile.style.display = "none";
})