document.querySelector("title").setAttribute("id", "title");
const ground = document.createElement("ground");
const loader = document.createElement("loader");

document.body.appendChild(ground);
ground.appendChild(loader);

const showContent = () => {
  document.getElementById("title").style.opacity = 1;

  loader.style.opacity = 0;
  loader.style.animationPlayState = "paused";
  ground.style.opacity = 0;

  clearInterval(checkContentLoading);
};

const checkContentLoading = setInterval(() => {
  if (
    document.getElementById("media")?.complete ||
    document.getElementById("media")?.ready
  ) {
    showContent();
  }
}, 400);
