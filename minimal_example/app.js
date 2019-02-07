/* Define Variables */
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

/* Define Functions */
function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    }
    
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

/* Listen for a hover event on each link */
triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightLink));


/* I was using these in order to use highlightLink in a callback function and on pageload */
/*function highlightLinkCallback() {
    highlightLink(this);
}

function highlightLinkPageload() {
    const home = document.querySelector('a[name="Home"]');
    highlightLink(home)
}*/
/*
window.addEventListener('load', highlightLinkPageload);
*/

/* Define callback function using a closure */
/*function callback(a) {
  return function() {
    console.log(a);
  }
}
let x = 'hello world';
triggers.forEach(trigger => trigger.addEventListener('mouseenter', callback(x)));*/




/* Get argument inputs to work.  This works!! */
/*    function example(input) {
    /*const selectedLink = input ? input : this;
    console.log(selectedLink);*/
    /*const link = this; 
    console.log(link);
   if (input !== null) {
        const link = this;
    } else {
        const link = input;
    }
    const linkCoords = input.getBoundingClientRect();
    
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    }
    
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

 Listen for a hover event on each link 
const home = document.querySelector('a[name="Home"]');
example(home);*/

/*window.addEventListener('load', function() {
    const home = document.querySelector('a[name="Home"]');
    const linkCoords = home.getBoundingClientRect();
    // console.log(linkCoords);
    
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY
    }
    
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
});*/


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
