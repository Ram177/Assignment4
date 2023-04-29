const data = [
    {
      title: "DOCTOR STRANGE :",
      image: "https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
      description: "Doctor Strange in the Multiverse of Madness",
      rating: "8.9 ★"
    },
    {
      title: "THOR :",
      image: "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
      description: "Thor Love And Thunder",
      rating: "9.0 ★"
    },
    {
      title: "BLACK PANTHER :",
      image: "https://cdn.marvel.com/content/1x/blackpantherwakandaforever_lob_crd_06.jpg",
      description: "Black Panther Wakanda Forever",
      rating: "9.2 ★"
    },
    {
      title: "SPIDER MAN :",
      image: "https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg",
      description: "Spider Man No Way Home",
      rating: "8.7 ★"
    },
  ];
  
  const container = document.getElementById("card-container");
  container.style.backgroundColor = "black";
  
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = "#D2B48C";
    card.innerHTML = `
      <img src="${item.image}">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <span>${item.rating}</span>
    `;
    const h2 = card.querySelector("h2");
    h2.style.color = "red";
    container.appendChild(card);
  });
