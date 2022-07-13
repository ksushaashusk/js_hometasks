/* Для вывода необходимо получить все задачи из локального хранилища. 
Если в хранилище нет задач вывести информацию об этом в html.

Реализовать возможность выделения цветом задач, которые необходимо удалить и их удаление при нажатии на кнопку 'Удалить выбранные'.

Задачи должны удаляться и из локального хранилища и из html.

Перечень полей формы должен быть как на изображении(add - task.png).

Стилевое оформление страниц может быть любым.*/ 



"use strict";

let taskSection = document.getElementById("tasks");

let tasks = localStorage.getItem("tasks");
if (!tasks) {
    taskSection.innerText = "В списке нет задач";
}
else {
    tasks = JSON.parse(tasks);

        tasks.map(task => {
            let wrapper = document.createElement("div");
            wrapper.className = "task";
              

        let title = document.createElement("h2");
        let description = document.createElement("p");
        let date = document.createElement("p2");

        title.innerText = task.title;
        wrapper.appendChild(title);
        description.innerText = task.description;
        wrapper.appendChild(description);
        date.innerText = "Выполнить к: " + task.date;
        wrapper.appendChild(date);

        document.body.appendChild(wrapper);
        });
}


// при нажатии на div можно его удалить, но при обновлении страницы пункт возвращается, удаляется только из html 
let container = document.querySelectorAll(".task");

for (let c of container) {
    c.addEventListener("click", container_click);
}

function container_click() {
    this.classList.toggle("active");  
 }

 // удаление из html
let del = document.getElementById("delete");
del.addEventListener("click", () => {
    let elems = document.querySelectorAll(".active");
    let tasks = localStorage.getItem("tasks");
    tasks = JSON.parse(tasks);

    for (let elem of elems) {
        tasks.splice(tasks.findIndex(i => i.id === elem.id), 1);
        elem.remove();
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
})



// console.log(container); nodeList [div.task, div.task, div.task, div.task, div.task, div.task]


        
        



   