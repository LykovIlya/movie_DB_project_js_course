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
            "логан",
            "лига справедливости",
            "ла-ла лэнд",
            "одержимость",
            "скотт Пилигрим против..."
        ]
    };

    const movieDataBase = movieDB.movies;

    removeItems(document.querySelectorAll(".promo__adv"));
    changeInnerText(document.querySelector(".promo__genre"), "Драма".toUpperCase());
    changeBg(document.querySelector(".promo__bg"), "/img/bg.jpg");
    showSortedList(document.querySelector(".promo__interactive-list"), movieDataBase, returnMovieItem);


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

    const form = document.querySelector("form.add");

    const movieList = document.querySelector(".promo__interactive-list");

    const submitFormButton = form.querySelector("button"),
        movieFormInput = form.querySelector(".adding__input"),
        checkBoxFormInput = form.querySelector("[type='checkbox']");

    form.addEventListener("submit", (event) => {
        eventStarter(event);
    });
    submitFormButton.removeEventListener("click", submitFormButton);

    movieList.addEventListener("click", (event) => {
        deleteMovieFromList(event);
    });
    movieList.removeEventListener("click", movieList);

    function eventStarter(event) {
        event.preventDefault();
        addMovieInDB(movieFormInput.value, checkBoxFormInput.checked);
        showSortedList(document.querySelector(".promo__interactive-list"), movieDataBase, returnMovieItem);
        event.target.reset();
    }

    function checkStringValidation(string) {
        if (string == null || string == "" || string == undefined) {
            alert("Некоректное значение");
            return true;
        }
        return false;
    }
    function addMovieInDB(movie, favorite) {
        if (checkStringValidation(movieFormInput.value)) {
            movieFormInput.value = "";
            return;
        }
        if (favorite) {
            console.log("Добавляем любимый фильм");
        }
        if (movie.length <= 20) {
            movieDataBase.push(movie.toUpperCase());
        } else {
            console.log(movie.length);
            movieDataBase.push(movie.slice(0, 20).concat("...").trim());
        }
    }

    function deleteMovieFromList(event) {
        event.preventDefault();
        if (event.target.className === "delete") {
            movieDataBase.splice((event.target.offsetParent.innerText.slice(0, 1) - 1), 1);
            console.log(movieDataBase);
            console.log(movieDB.movies);
            showSortedList(document.querySelector(".promo__interactive-list"), movieDataBase, returnMovieItem);
        }
    }
});

