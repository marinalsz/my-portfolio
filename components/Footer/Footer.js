import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<div>
    ${Button("/gmail.png", "Gmail")}
    ${Button("/github.png", "GitHub")}
    ${Button("/linkedin.png", "LinkedIn")}
</div>
`;
