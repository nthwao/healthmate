const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
    
});

navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show')
});

//search icon change
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else{
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping animation and transitaion
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".navbar-collapse"); // Select the side menu
    const hideBtn = document.querySelector(".navbar-hide-btn"); // Close button
    const showBtn = document.querySelector(".navbar-show-btn"); // Show button
    const menuLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Menu links
  
    // Function to show the menu
    const showMenu = () => {
      menu.style.display = "block"; // Show the menu
    };
  
    // Function to hide the menu
    const hideMenu = () => {
      menu.style.display = "none"; // Hide the menu
    };
  
    // Event listener to show the menu
    showBtn.addEventListener("click", showMenu);
  
    // Event listener to hide the menu when clicking the hide button
    hideBtn.addEventListener("click", hideMenu);
  
    // Event listener to hide the menu when clicking any menu link
    menuLinks.forEach(link => {
      link.addEventListener("click", hideMenu);
    });
  });
  