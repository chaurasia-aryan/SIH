// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const conservation = document.querySelector('.conservation');
    const info = document.querySelector('.info');

    // Add classes to trigger animations
    setTimeout(() => {
        hero.classList.add('fade-in');
    }, 100);

    setTimeout(() => {
        conservation.classList.add('fade-in');
    }, 500);

    setTimeout(() => {
        info.classList.add('fade-in');
    }, 1000);
});
