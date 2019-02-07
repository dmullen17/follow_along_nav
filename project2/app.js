/* Select DOM elements and define variables */
const links = document.querySelectorAll('a');
const highlighter = document.querySelector('.hl');

/* Define functions */
function highlight() {
    const coords = this.getBoundingClientRect();
    console.log(coords);
    highlighter.style.top = `${coords.top}px`;
    highlighter.style.width = `${coords.width}px`;
    highlighter.style.height = `${coords.height}px`;
    highlighter.style.left = `${coords.x}px`;

}


/* Set up event listeners */
links.forEach(link => link.addEventListener('mouseover', highlight));