// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    
    // VALIDATE THAT VARIABLES EXIST
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            // We add the show-menu class to the div tag
            nav.classList.toggle("show-menu");
        });
    }
}

showMenu("nav-toggle", "nav-menu");