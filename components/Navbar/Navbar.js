import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  //const themeBtn = document.querySelector("#themeBtn");
  const themeImg = document.getElementById("themeImg");
  const forecastP = document.querySelector("#weather");
  if (document.body.classList.contains("light")) {
    themeImg.src = "/moon.png";
    forecastP.innerText = "New Moon Tomorrow";
  } else {
    themeImg.src = "/sun.png";
    forecastP.innerText = "Sunny Tomorrow";
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
  <div class="top-nav">
    <img src="/logo.png" alt="Logo">
    <div class="title">
      <p id="dateP"></p>
      <h1>Marina López</h1>
      <p>Full Stack Developer</p>
    </div>
    <div class="forecast">
      <p>Weather forecast</p>
      <p id = "weather">New Moon Tomorrow</p>
      <button id="themeBtn">
        <img src="/moon.png" alt="Moon drawing" id="themeImg">
      </button>
    </div>
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
