/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

window.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    removeItems(document.querySelectorAll(".promo__adv"));
    changeInnerText(document.querySelector(".promo__genre"), "Драма".toUpperCase());
    changeBg(document.querySelector(".promo__bg"), "/img/bg.jpg");
    showSortedList(document.querySelector(".promo__interactive-list"), movieDB.movies, returnMovieItem);


    function returnMovieItem(movie, index) {
        return (`<li class="promo__interactive-item">${index + 1}. ${movie}<div class="delete"></div></li>`);
    }

    function showSortedList(elements, array, func) {
        elements.innerHTML = "";
        array.sort();
        array.forEach((element, index) => {
            elements.innerHTML += func(element, index);
        });
    }

    function changeBg(element, path) {
        element.style.background = `url(${path})center center/cover no-repeat`;
    }

    function changeInnerText(element, text) {
        element.innerText = text;
    }

    function removeItems(elements) {
        elements.forEach(element => {
            element.innerHTML = "";
        });
    }

    // console.log(promoInteractiveList);

    /* Задания на урок:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) Фильмы должны быть отсортированы по алфавиту */

    eventStarter(document.querySelector(".add"), null, [
        document.querySelector(".adding__input"),
        document.querySelector('[type = "checkbox"]'),
        document.querySelector("button")
    ]);

    function eventStarter(element, func, arrElements) {
        element.addEventListener("submit", (event) => {
            event.preventDefault();
            for (let element in arrElements) {
                console.log(element);
            }
            console.log("click");
        });

    }

});

