const characters = [
    {
      name: "Luke Skywalker",
      homeworld: "Tatooine",
      image: "https://media.gettyimages.com/id/607402186/photo/american-actor-mark-hamill-on-the-set-of-star-wars-episode-iv-a-new-hope-written-directed-and.jpg?s=612x612&w=gi&k=20&c=2VEAhJYc6VQE1oqxuhvWCUf8iWdtJ4Jt31bCMiYwGdM="
    },
    {
      name: "Darth Vader",
      homeworld: "Tatooine",
      image: "https://www.shutterstock.com/image-photo/dart-vader-dark-light-saber-600nw-2598175847.jpg"
    },
    {
      name: "Leia Organa",
      homeworld: "Alderaan",
      image: "https://www.shutterstock.com/image-photo/berlin-germany-oct-1-2017-260nw-753241903.jpg"
    },
    {
      name: "Obi-Wan Kenobi",
      homeworld: "Stewjon",
      image: "https://rebellegion.com/wp-content/uploads/2024/02/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg"
    }
  ];
  
  let showing = false;
  
  const toggleButton = document.getElementById("toggleButton");
  const characterRow = document.getElementById("characterRow");
  
  toggleButton.addEventListener("click", () => {
    if (!showing) {
      showCharacters();
    } else {
      hideCharacters();
    }
  });
  
  function showCharacters() {
    characterRow.innerHTML = ""; // Temizle
    characters.forEach(character => {
      const col = document.createElement("div");
      col.className = "col-md-4";
  
      col.innerHTML = `
        <div class="card">
          <img src="${character.image}" class="card-img-top" alt="${character.name}"
            onerror="this.onerror=null; this.src='https://via.placeholder.com/250x250?text=Resim+yok';" />
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Anavatan: ${character.homeworld}</p>
          </div>
        </div>
      `;
  
      characterRow.appendChild(col);
    });
  
    toggleButton.textContent = "Karakterleri Gizle";
    toggleButton.classList.remove("btn-success");
    toggleButton.classList.add("btn-danger");
    showing = true;
  }
  
  function hideCharacters() {
    characterRow.innerHTML = "";
    toggleButton.textContent = "Karakterleri Göster";
    toggleButton.classList.remove("btn-danger");
    toggleButton.classList.add("btn-success");
    showing = false;
  }
  