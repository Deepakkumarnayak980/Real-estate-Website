const menu = document.querySelector('#menu-bars'); // Selecting the element with the id 'menu-bars'
const navbar = document.querySelector('.navbar'); // Selecting the element with the class 'navbar'

menu.onclick = () => { // Attaching a click event listener to the 'menu' element
    navbar.classList.toggle('active'); // Toggling the 'active' class on the 'navbar' element
    menu.classList.toggle('fa-times'); // Toggling the 'fa-times' class on the 'menu' element
};

window.onscroll = () => { // Attaching a scroll event listener to the window
    navbar.classList.toggle('active'); // Toggling the 'active' class on the 'navbar' element
    menu.classList.toggle('fa-times'); // Toggling the 'fa-times' class on the 'menu' element
};
