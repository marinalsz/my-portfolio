import "./Article.css";

export const Article = (article) => `
<article class="my-article">
    <h2>${article.title}</h2>
    <h3>${article.subtitle}</h3>
    <img src=${article.image} alt=${article.title}/>
    <p>${article.body}</p>
</article>
`;
