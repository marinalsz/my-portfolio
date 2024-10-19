import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/github.png", "GitHub")}
${Button("/linkedin.png", "LinkedIn")}
</div>
`;
