let isshow = false

const Hamburger = document.getElementById("HamBurger");

const Nav = document.getElementById("navBurger");

function RenderNav() {
  isshow = !isshow

  isshow ? Hamburger.setAttribute("class", "ShowBurger") : Hamburger.setAttribute("class", "hideHamburger")

  isshow ? Nav.setAttribute("class", "showNav") : Nav.setAttribute("class", 'hideNav')

}

function HandleInfo() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("Email").value;
  const select = document.getElementById("select").value;
  const message = document.getElementById("message").value;

  console.log(`username:${name}, email: ${email}, select: ${select}, message: ${message}`);

  document.getElementById("name").value = ""

  document.getElementById("Email").value = ""
  document.getElementById("select").value = ""
  document.getElementById("message").value = ""
}