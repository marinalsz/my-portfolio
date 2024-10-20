import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { articles } from "../../data/articles";
import { Article } from "../../components/Article/Article";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
    <div class="articles-container"></div>
    </section>`;
  const container = document.querySelector(".articles-container");
  for (const article of articles) {
    const figure = document.createElement("figure");
    figure.innerHTML = Article(article);
    container.appendChild(figure);
  }
};