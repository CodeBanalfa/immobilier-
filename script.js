const url = "assets/data.json";

// Fetch JSON data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    setupEventListeners(data);
  })
  .catch((error) => {
    console.error("Erreur de chargement du fichier JSON :", error);
  });

// Function to set up click events for each link
function setupEventListeners(data) {
  document.querySelectorAll(".dernierBloc a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const type = link.getAttribute("data-type");
      displayProperties(data[type]);
    });
  });
}

// Function to display properties
function displayProperties(properties) {
  const container = document.getElementsByClassName("grid-container")[0];
  container.innerHTML = ""; // Clear the container

  properties.forEach((property) => {
    const item = document.createElement("div");
    item.classList.add("grid-item");

    // Populate item content
    item.innerHTML = `
    <img src="assets/images/immobilier/${property.photos}" alt="${property.titre}">
    <div class="content">
      <h3>${property.titre}</h3>
      <p>${property.ville}</p>
      <p>${property.prix.toLocaleString("fr-FR")} €</p>
      <button class="styledD" type="button" style="background-color: chartreuse; width: 90px;">En savoir +</button>

      </div>
  
    `;
    
    container.appendChild(item);
  });
}
