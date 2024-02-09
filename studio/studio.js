let isshow = false

const Hamburger = document.getElementById("HamBurger");

const Nav = document.getElementById("navBurger");

function RenderNav() {
  isshow = !isshow

  isshow ? Hamburger.setAttribute("class", "ShowBurger") : Hamburger.setAttribute("class", "hideHamburger")

  isshow ? Nav.setAttribute("class", "showNav") : Nav.setAttribute("class", 'hideNav')

}