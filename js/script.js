/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const mainElement = document.querySelector(".promo"),
    promoMenu = mainElement.querySelector(".promo__menu"),
    promoContent = mainElement.querySelector(".promo__content"),
    promoInteractive = mainElement.querySelector(".promo__interactive"),
    promoAdv = mainElement.querySelectorAll(".promo__adv img");

promoAdv.forEach(value => {
    value.remove();
});

const promoBg = promoContent.querySelector(".promo__bg"),
    promoGenre = promoBg.querySelector(".promo__genre"),
    promoTitle = promoBg.querySelectorAll(".promo__title"),
    promoDescr = promoBg.querySelectorAll(".promo__descr"),
    promoRetings = promoBg.querySelectorAll(".promo__ratings");

promoGenre.textContent = "Драма".toUpperCase();

promoBg.style.background = "url(../img/bg.jpg)";

const buffer = [];
const promoInteractiveTitleContainer = promoInteractive.querySelector("div"),
    promoInteractiveList = promoInteractiveTitleContainer.querySelector(".promo__interactive-list"),
    promoInteractiveTitle = promoInteractiveTitleContainer.querySelector(".promo__interactive-title");

const promoInteractiveItem = promoInteractiveList.querySelectorAll(".promo__interactive-item");

promoInteractiveItem.forEach(value => {
    buffer.push(value.innerText);
});
buffer.sort();

for (let i = 0; i < buffer.length; i++) {
    promoInteractiveItem[i].innerText = i + 1 + ". " + buffer[i];
}
console.dir(promoInteractiveList);
promoInteractiveList.remove();
promoInteractiveTitle.remove();

const newPromoInteractiveList = document.createElement("ol");
promoInteractiveTitleContainer.prepend(newPromoInteractiveList);
newPromoInteractiveList.className = "promo__interactive-list";
promoInteractiveItem.forEach(value => {
    newPromoInteractiveList.append(value);
});
promoInteractiveTitleContainer.prepend(promoInteractiveTitle);