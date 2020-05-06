function get(selector) {
    return document.querySelector(selector)
  }

const navlink = get('.nav-link');
const nav = get('.nav');


const navcolor = (event) =>{
    navlink.style.color = "skyblue";
}

navlink.addEventListener('mouseover', navcolor);

const logo = get('.logo-heading');

const logocolor = (event) =>{
    logo.style.color = 'yellow';
}

logo.addEventListener('mouseover', logocolor);


const adventure = get('.img-content');
let scale = 1;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    adventure.style.transform = `scale(${scale})`;
  }
  
  
 adventure.addEventListener('wheel', zoom);

