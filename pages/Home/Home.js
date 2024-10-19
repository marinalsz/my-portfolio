import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <h1>Marina López</h1>
    <p>I'm a full stack developer student based in Huelva, Spain.</p>
    <a href="mailto:peterparker@gmail.com">Say hi →</a>
    </section>`;
};
