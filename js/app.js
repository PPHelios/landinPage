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
//add all sections to an array
const sections = Array.from(document.querySelectorAll("section"));
//add the ul to a const
const navBarItems = document.getElementById("navbar__list");
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
    li = document.createElement("li")
    li.innerHTML = `<li><a href=#${x[i].id} class="menu__link" a>${x[i].id}</a></li>`
    navBarItems.appendChild(li)
  }
}
createLi(sections)
// build the nav
// Add class 'active' to section when near top of viewport
// add an on scroll triggered function to loop the sections
document.addEventListener("scroll", function()
{
  sections.forEach(function(active)
  {
    if
//the function compares the section element top and bottom to the viewport to keep the section active when it passes the lower half of the vieport till it passes the upper half of the viewport
    (active.getBoundingClientRect().top < window.innerHeight / 2 && active.getBoundingClientRect()
      .bottom > window.innerHeight / 2)
    {
      active.classList.add("your-active-class");
    }
    else
//then it removes the active state
    {
      active.classList.remove("your-active-class");
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
