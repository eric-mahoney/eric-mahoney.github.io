const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".search-results");

fetch(endpoint)
  .then((data) => data.json())
  .then((data) => cities.push(...data));

function findMatches(search, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(search, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      return `
            <li>
                <span class="name">${place.city}, ${place.state}</span>
            </li>
        `;
    })
    .join("");
  searchResults.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
