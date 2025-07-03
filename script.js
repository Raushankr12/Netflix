const movies = [
  { title: "Stranger Things", image: "https://via.placeholder.com/300x400?text=Stranger+Things" },
  { title: "Money Heist", image: "https://via.placeholder.com/300x400?text=Money+Heist" },
  { title: "Squid Game", image: "https://via.placeholder.com/300x400?text=Squid+Game" },
  { title: "Breaking Bad", image: "https://via.placeholder.com/300x400?text=Breaking+Bad" },
  { title: "Loki", image: "https://via.placeholder.com/300x400?text=Loki" },
  { title: "Wednesday", image: "https://via.placeholder.com/300x400?text=Wednesday" },
];

const grid = document.getElementById("movieGrid");

function renderMovies(list) {
  grid.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `<img src="${movie.image}" alt="${movie.title}" />
                      <p>${movie.title}</p>`;
    card.onclick = () => showModal(movie);
    grid.appendChild(card);
  });
}

function showModal(movie) {
  document.getElementById("modalImage").src = movie.image;
  document.getElementById("modalTitle").innerText = movie.title;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(keyword));
  renderMovies(filtered);
});

// Initial load
renderMovies(movies);
