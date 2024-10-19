import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "Forecast ⛈") {
    themeBtn.innerText = "Forecast ☀";
  } else {
    themeBtn.innerText = "Forecast ⛈";
  }
};

export const getDate = () => {
  const date = new Date();
  const fecha = date.toDateString();
  const dateP = document.querySelector("#dateP");
  dateP.innerText = fecha;
};

export const Navbar = () => `
<nav>
  <div class = "top-nav">
    <img src="https://images.vexels.com/content/238177/preview/compass-directions-filled-stroke-11a6ad.png" alt="Compass logo">
    <div class = "title">
      <p id="dateP"></p>
      <h1>Marina López</h1>
      <p>Full Stack Developer Student</p>
    </div>
    <button id="themeBtn">Forecast ⛈</button>
  </div>
  <ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
     <li>
        <a href="#" id="aboutlink">About</a>
    </li>
         <li>
        <a href="#" id="contactlink">Contact</a>
    </li>
  </ul>
</nav>
`;
