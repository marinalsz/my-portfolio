import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<p>&copy; 2024, Marina López.</p>
<div>
    ${Button("/gmail.png", "Gmail")}
    ${Button("/github.png", "GitHub")}
    ${Button("/linkedin.png", "LinkedIn")}
</div>
`;
