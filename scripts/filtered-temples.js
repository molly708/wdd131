document.addEventListener("DOMContentLoaded", function () {
  // Footer Year & Last Modified Date
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector("#last-modified").textContent = document.lastModified;

  // Responsive Hamburger Menu
  const menuToggle = document.querySelector("#menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("show");
    menuToggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
  });

  // Array of temples
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg",
    },
    {
      templeName: "Albuquerque New Mexico",
      location: "10301 San Francisco Rd NE",
      dedicated: "2000, March, 5",
      area: 23437,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg",
    },
    {
      templeName: "Oakland California",
      location: "4770 Lincoln Ave, Oakland",
      dedicated: "1964, November, 17",
      area: 94602,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg",
    },
    {
      templeName: "Nashville Tennessee",
      location: "Tennessee, United States",
      dedicated: "2018, October, 28",
      area: 37069,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nashville-tennessee-temple/nashville-tennessee-temple-38227-main.jpg",
    },
  ];

  // Function to display temples
  function displayTemples(filter) {
    let filteredTemples;

    switch (filter) {
      case "old":
        filteredTemples = temples.filter(
          (temple) => parseInt(temple.dedicated.split(",")[0]) < 1900
        );
        break;
      case "new":
        filteredTemples = temples.filter(
          (temple) => parseInt(temple.dedicated.split(",")[0]) > 2000
        );
        break;
      case "large":
        filteredTemples = temples.filter((temple) => temple.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter((temple) => temple.area < 10000);
        break;
      default:
        filteredTemples = temples; // Show all temples for "home"
    }

    renderTemples(filteredTemples);
  }

  // Function to render the temple gallery
  function renderTemples(temples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear previous content

    temples.forEach((temple) => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");

      const templeImage = document.createElement("img");
      templeImage.src = temple.imageUrl;
      templeImage.alt = `Image of ${temple.templeName}`;
      templeImage.width = "400";
      templeImage.height = "250";

      // Overlay text
      const templeInfo = document.createElement("div");
      templeInfo.classList.add("temple-info");
      templeInfo.innerHTML = `
              <h3>${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Size:</strong> ${temple.area} sq ft</p>
          `;

      templeCard.appendChild(templeImage);
      templeCard.appendChild(templeInfo);
      gallery.appendChild(templeCard);
    });
  }

  // Event listeners for menu navigation
  document.querySelectorAll("#menu a").forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = menuItem.id;
      displayTemples(filter);
    });
  });

  // Display all temples on page load
  displayTemples("home");
});
