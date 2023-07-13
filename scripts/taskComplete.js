let taskElems = document.querySelectorAll(".tasks-container__tasks__task");

taskElems.forEach((task) => {
    task.addEventListener("click", (e) => {
        e.preventDefault();
        moveTask(e.target);
    })
})

function moveTask(task) {
    const completedSection = document.querySelector(".tasks-container__tasks--completed");
    const pendingSection = document.querySelector(".tasks-container__tasks--pending");
    const inputRadio = document.querySelector(`.${task.classList[0]} input`);

    if(!task.classList.contains("tasks-container__tasks__task--completed")) {
        pendingSection.removeChild(task);
        task.classList.add("tasks-container__tasks__task--completed");
        inputRadio.checked = true;
        completedSection.appendChild(task);
    } else {
        completedSection.removeChild(task);
        task.classList.remove("tasks-container__tasks__task--completed");
        inputRadio.checked = false;
        pendingSection.appendChild(task);
    }
}