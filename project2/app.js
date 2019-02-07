/* Select DOM elements and define variables */
const links = document.querySelectorAll('a');
const highlighter = document.querySelector('.hl');
const sectionHome = document.querySelector('section.home');
// Unfortunately we need to hard code these
const backgrounds = ['images/beyza-nur-kocaosmanoglu-1290279-unsplash.jpg',
                    'images/clement-h-544786-unsplash.jpg',
                    'images/dlanor-s-703975-unsplash.jpg',
                    'images/med-badr-chemmaoui-630239-unsplash.jpg',
                    'images/neringa-sidlauskaite-1247184-unsplash.jpg',
                    'images/pankaj-patel-516695-unsplash.jpg',
                    'images/roberto-nickson-1299738-unsplash.jpg'];

/* Define functions */
function highlight() {
    const coords = this.getBoundingClientRect();
    console.log(coords);
    highlighter.style.top = `${coords.top + window.scrollY}px`;
    highlighter.style.width = `${coords.width}px`;
    highlighter.style.height = `${coords.height}px`;
    highlighter.style.left = `${coords.x + window.scrollX}px`;
}

function setRandomBackground() {
    const n = backgrounds.length;
    const index = Math.floor((Math.random() * n));
    //console.log(index);
    sectionHome.style.background = `url(${backgrounds[index]})`;
    sectionHome.style.backgroundPosition = 'center';
    sectionHome.style.backgroundSize = 'cover';

}
setRandomBackground();


/* Set up event listeners */
links.forEach(link => link.addEventListener('mouseenter', highlight));
/*links.forEach(link => link.addEventListener('click', function() {
    console.log('hi');
}));*/