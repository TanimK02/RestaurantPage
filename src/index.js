import './styles.css'
import homeLoader from './home.js'
import menuLoader from './menu.js'
import contactLoader from './contacts.js'
const home = homeLoader(document);
const menu = menuLoader(document);
const contacts = contactLoader(document);
home();
const menuButton = document.getElementById("menu");
const homeButton = document.getElementById("home");
const contactButton = document.getElementById("contacts");

homeButton.addEventListener("click", () => {
    home();
})

menuButton.addEventListener("click", () => {
    menu();
})

contactButton.addEventListener("click", () => {
    contacts();
})