"use strict";

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Меняем класс nav на scroll2
            const navElements = document.querySelectorAll('.nav');
            navElements.forEach(function(element) {
                element.classList.remove('nav');
                element.classList.add('scroll2');
            });

            // Меняем все классы none на open
            const noneElements = document.querySelectorAll('.none');
            noneElements.forEach(function(element) {
                element.classList.remove('none');
                element.classList.add('open');
            });

            // Меняем класс social на none
            const socialElements = document.querySelectorAll('.social');
            socialElements.forEach(function(element) {
                element.classList.remove('social');
                element.classList.add('none1');
            });
            const imgSocialElements = document.querySelectorAll('.social_img');
            imgSocialElements.forEach(function(element) {
                element.classList.remove('social_img');
                element.classList.add('none2');
            });
        } else {
            // Возвращаем классы обратно при скролле вверх (меньше 50px)
            const scroll2Elements = document.querySelectorAll('.scroll2');
            scroll2Elements.forEach(function(element) {
                element.classList.remove('scroll2');
                element.classList.add('nav');
            });

            const openElements = document.querySelectorAll('.open');
            openElements.forEach(function(element) {
                element.classList.remove('open');
                element.classList.add('none');
            });

            const noneSocialElements = document.querySelectorAll('.none1');
            noneSocialElements.forEach(function(element) {
                // Проверяем, был ли у элемента изначально класс social
                if (element.dataset.wasSocial === 'true') {
                    element.classList.remove('none1');
                    element.classList.add('social');
                }
            });
const noneImgSocialElements = document.querySelectorAll('.none2');
noneImgSocialElements.forEach(function(element) {
    element.classList.remove('none2');
    element.classList.add('social_img');
})
        }
    });

    // Добавляем data-атрибут для элементов social, чтобы знать, какие элементы нужно вернуть
    const socialElements = document.querySelectorAll('.social');
    socialElements.forEach(function(element) {
        element.dataset.wasSocial = 'true';
    });
});
