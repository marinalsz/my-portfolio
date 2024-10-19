import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";

export const Contact = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="contact">
    <h2>Mail</h2>
    <a href="mailto:peterparker@gmail.com">peterparker@gmail.com</a>
    <h2>Social media</h2>
    </section>`;
};
