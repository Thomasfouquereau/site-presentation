const slidingNewsletter = document.querySelector('.cardContainer');
window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;
    console.log(topElementToTopViewport);
    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
        slidingNewsletter.classList.add('active')
    }
})

const switcher = document.querySelector('.slider');

switcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'Light Mode');
    } else {
        localStorage.setItem('darkMode', 'Dark Mode');
    }

    const currentTheme = localStorage.getItem('darkMode');
    const body = document.querySelector('body');

    if (currentTheme === 'Light Mode') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.getElementById("toggle-mode").innerHTML = "Dark Mode";

    } if (currentTheme === 'Dark Mode') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.getElementById("toggle-mode").innerHTML = "Light Mode";
    }

})