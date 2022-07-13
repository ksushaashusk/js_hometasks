"use strict";

// add task
/* После успешного заполнения формы, данные о задаче необходимо собрать в объект

{
    title: название задачи,
        description: описание задачи,
            date: срок выполнения задачи // дату выставлять через date. ПРОВЕРИТЬ ВРЕМЯ Date()настоящее время.
}
Объект может содержать дополнительные свойства
Собранный объект добавляется в локальное хранилище. // Объект помещается в локальное хранилище в формате json 
Задачи хранятся в сериализованном массиве (JSON строка) по ключу "tasks".*/


document.forms["add-task"].elements.title.addEventListener("input", function () {
    if (this.validity.tooShort) {
        this.nextElementSibling.innerText = "Значение должно быть от 1 до 20 символов";
        return;
    }
    if (this.validity.tooLong) {
        this.nextElementSibling.innerText = "Значение должно быть от 1 до 20 символов";
        return;
    }
    this.nextElementSibling.innerText = "Поле заполнено верно";
})


document.forms["add-task"].elements.date.addEventListener("input", function () {
    let date = new Date(document.getElementById("date").value);
    let today = new Date();
    if (date.getTime() <= today.getTime()) {
        this.nextElementSibling.innerText = "Дата не может быть в прошлом";
    }
    else {
        this.nextElementSibling.innerText = "Дата назначена";
    }
        
    
})



   


function addTask(event) {
    event.preventDefault();
    let title = this.elements.title;
    title = title.value;

    let description = this.elements.description.value;

    let date = this.elements.date;
    date = date.value;

    let taskInfo = { title, description, date };
   // taskInfo = JSON.stringify(taskInfo); образовать элемент в строку
    let tasks = localStorage.getItem("tasks");
    if (tasks) tasks = JSON.parse(tasks); 
    else tasks = [];

    tasks.push(taskInfo); 
    console.log(JSON.stringify(tasks));
    localStorage.setItem("tasks", JSON.stringify(tasks));

    this.elements.submit.nextElementSibling.innerText = "Задача успешно добавлена";
}

document.forms["add-task"].addEventListener("submit", addTask);






