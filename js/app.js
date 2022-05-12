/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */
/**
 * Define Global Variables
 * 
 */
 const startingTime = performance.now();
//add all sections to an array
const sections = Array.from(document.querySelectorAll("section"));
//add the ul to a const
const navBarItems = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
//create a for function to loop over the sections array to build li items and append them to the ul  
function createLi(x)
{
  for (i = 0; i < x.length; i++)
  {
    li = document.createElement("li");
    li.innerHTML = `<li><a href=#${x[i].id} class="menu__link" a>${x[i].id}</a></li>`;
    fragment.appendChild(li);
  }
}
createLi(sections)
navBarItems.appendChild(fragment);
// build the nav
// Add class 'active' to section when near top of viewport
// add an on scroll triggered function to loop the sections
document.addEventListener("scroll", function()
{
  sections.forEach(function(active)
  {
// query for li navbar button with same section id
  const item = document.querySelector(" a[href*=" + active.id + "]");
    if
//the function compares the section element top and bottom to the viewport to keep the section active when it passes the lower half of the vieport till it passes the upper half of the viewport
    (active.getBoundingClientRect().top < window.innerHeight / 2 && active.getBoundingClientRect()
      .bottom > window.innerHeight / 2)
    {
active.classList.add("your-active-class");
// change the color for the navButton for the section in view port
 item.style.backgroundColor ="#57a5c9";
    }
    else
//then it removes the active state for section and navButton when out of viewport
    {
active.classList.remove("your-active-class");
item.style.backgroundColor = "transparent" ;
    }
  })
});
// Smooth scroll to a section on link click
//Selects every <a> element whose href attribute value begins with #
const anchorList = document.querySelectorAll('a[href^="#"]');
//create a loop for each section anchor to prevent the default function on click and smooth scroll to the section
anchorList.forEach(function(anchor)
{
  anchor.onclick = function(stop)
  {
    stop.preventDefault();
//using hash property to locate the section
    const destination = document.querySelector(this.hash);
    destination.scrollIntoView(
    {
      behavior: "smooth"
    });
  }
})
function responsive (){
				const navBar=document.getElementById("navBar");
				if (navBar.className == "nav__bar")
				{
							navBar.className += "responsive";
				}
				else {
								navBar.className = "nav__bar"
				}
}
// Hiding the navbar after scrolling
// Used an onscroll function to set display style to none
//const hide = document.addEventListener("scroll", function()
//{ document.getElementById("navBar").style.display = "none";			
//});
// used setTimeout to hide the navbar after 2 seconds of scrolling
//const hideNavBar = setTimeout(hide,2000);
// used perfmance.now to log page loading speed
const endingTime = performance.now();
console.log("This code took " + (endingTime - startingTime)+" to load"); 
