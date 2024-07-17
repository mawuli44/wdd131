const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const h1 = document.querySelector('h1') 

function toggleMenu() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    h1.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});

const temples = [
    {
      name: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
      alt: "Aba Nigeria Temple"
    },
    {
      name: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      alt: "Manti Utah Temple"
    },
    {
      name: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg",
      alt: "Payson Utah Temple"
    },
    {
      name: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
      alt: "Yigo Guam Temple"
    },
    {
      name: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      alt: "Washington D.C. Temple"
    },
    {
      name: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      alt: "Lima Peru Temple"
    },
    {
      name: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
      alt: "Mexico City Mexico Temple"
    },
    {
		  name: "Accra Ghana",
		  location: "Accra, Greater Accra, Ghana",
		  dedicated: "11 January 2004",
		  area: 17500,
		  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg",
      alt: "Accra Ghana Temple"
	},
	{
		  name: "Tokyo Japan",
		  location: "Tokyo, Japan",
		  dedicated: "1980, October, 27",
		  area: 52670,
		  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-main.jpeg",
      alt: "Tokyo Japan Temple"
	},
	{
		  name: "São Paulo Brazil",
		  location: "São Paulo, Brazil",
		  dedicated: "1978, October, 30",
		  area: 62000,
		  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg",
      alt: "São Paulo Brazil Temple"
	}
];
  
createTempleCard(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date("1900")));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => new Date(temple.dedicated) > new Date("2000")));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.area) > ("90000")));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.area) < ("10000")));
});




  document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedSpan = document.getElementById('lastModifiedDate');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    lastModifiedSpan.textContent = formattedDate;
});
  
function createTempleCard(filteredTemples) {
  const templeCardContainer = document.querySelector(".temple-card");
  templeCardContainer.classList.add('temple-card-container');
  templeCardContainer.innerHTML = ""; // Clear existing content

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    card.classList.add('temple-card');
    
    let templeName = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    templeName.textContent = temple.name;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.name} Temple`);
    img.style.aspectRatio = "5 / 3";
    img.setAttribute("loading", "lazy");

    card.appendChild(templeName);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);
    
    templeCardContainer.appendChild(card);
  });
}
