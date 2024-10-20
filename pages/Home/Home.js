import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
      <article>
        <h2>Tech Times: Meet the Developer Behind the Code</h2>
        <img src="/computer.png" alt="Computer">
        <p>Behind every great website is a creative mind and meticulous attention to detail. That's where I come in—a web developer with a passion for crafting beautiful, functional, and user-centered designs. From front-end elegance to back-end robustness, I bring a blend of technical skill and design thinking to every project. Whether it's a sleek landing page or a complex e-commerce platform, I ensure the end result not only works but also wows.</p>
      </article>
    </section>`;
};
