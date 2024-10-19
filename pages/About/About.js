import "./About.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
    <p>👋🏻 Hi, I'm</p>
    <h1>Marina López</h1>
    </section>`;
};
