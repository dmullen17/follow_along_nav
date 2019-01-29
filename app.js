/* Define Variables */
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

/* Define Functions */
function highlightLink() {
    // console.log(this.offsetHeight, this.offsetWidth);
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    
    highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
}

/* Listen for a hover event on each link */
triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));


/* Troubleshooting */
/*const troubleshoot = document.querySelector('.troubleshoot');

function highlightLinkTroubleShoot() {
    // console.log(this.offsetHeight, this.offsetWidth);
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    
    troubleshoot.style.width = `${linkCoords.width}px`;
    troubleshoot.style.height = `${linkCoords.height}px`;
    
    troubleshoot.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
}

troubleshoot.addEventListener('mouseenter', highlightLinkTroubleShoot)*/
