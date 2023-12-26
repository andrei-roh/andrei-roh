import { fetchData } from "./utils";

const response = await fetchData();
const main = document.createElement("main");
const footer = document.createElement("footer");
const media = document.createElement(
  response.media_type === "image" ? "img" : "iframe"
);

const title = document.createElement("div");
const explanation = document.createElement("div");
const date = document.createElement("div");
media.setAttribute("id", "media");
media.src = response.url;
media.allow = "fullscreen";

title.classList.add("title");
title.innerHTML = response.title;
explanation.classList.add("explanation");
explanation.innerHTML = response.explanation;
date.classList.add("date");
date.innerHTML = response.date;

document.body.appendChild(main);
document.body.appendChild(footer);
main.appendChild(media);
main.appendChild(title);
main.appendChild(explanation);
footer.appendChild(date);
