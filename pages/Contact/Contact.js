import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";

export const Contact = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="contact">
    <h2>Call me (maybe)</h2>
    <div class="contact-info">
      <img src="/telephone.png" alt="Telephone drawing" />
      <div class="contact-links">
        <h3>Mail</h3>
        <a href="mailto:marinalsz.dev@gmail.com">marinalsz.dev@gmail.com</a>
        <h3>Social Media</h3>
        <a href="https://github.com/marinalsz" target="_blank" rel="noopener">Github</a>
        <a href="https://linkedin.com/in/marinalsz" target="_blank" rel="noopener">LinkedIn</a>
      <div>
    </div>
    </section>`;
};
