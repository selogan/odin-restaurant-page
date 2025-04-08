import "./styles.css";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createAbout } from "./about";

const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", createHome);

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", createMenu);

const aboutBtn = document.querySelector("#about-btn");
aboutBtn.addEventListener("click", createAbout);

createHome();