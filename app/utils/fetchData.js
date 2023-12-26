import { API_KEY, THUMBS } from "../constants";

async function fetchData() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=${THUMBS}`
  );

  return await response.json();
}

export default fetchData;
