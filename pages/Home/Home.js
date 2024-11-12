import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
      <article>
        <h2>Tech times: meet the person behind the code</h2>
        <div class="body-article">
          <img src="/computer.png" alt="Computer">
          <div class="personal-information">
            <h3>I'm Marina</h3>
            <span>she/her · /məˈɹiːnə/</span>
            <p>A vocational training and a Master's degree student in <strong>Full Stack Development</strong> based in southern Spain.</p>
            <a href="mailto:marinalsz.dev@gmail.com">Mail</a>
            <a href="https://github.com/marinalsz" target="_blank" rel="noopener">Github</a>
            <a href="https://linkedin.com/in/marinalsz" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </article>
    </section>`;
};
