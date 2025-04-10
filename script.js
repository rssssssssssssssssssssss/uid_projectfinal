// Dynamic Hero Image Function
function loadHeroImage() {
  // Always set the hero section background to a single image:
  document.getElementById('heroSection').style.backgroundImage = "url('assets/images/hero.jpg')";
}


// Updated Slideshow Function for Compact Slides
let slideIndex = 0;
function showCompactSlides() {
  let slides = document.getElementsByClassName("compact-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.opacity = 1;
  setTimeout(showCompactSlides, 3000); // Change slide every 3 seconds
}

// Initialize compact slideshow if slides exist
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementsByClassName("compact-slide").length > 0) {
    showCompactSlides();
  }
});

// Back-to-Top Button Setup
function setupBackToTop() {
  const backToTopButton = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
  });
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Simple Search Suggestions (Placeholder)
function showSuggestions() {
  const input = document.getElementById("search-bar").value.toLowerCase();
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "";

  if (input.length === 0) return;

  const filteredCars = cars.filter(car => car.name.toLowerCase().includes(input));

  filteredCars.forEach(car => {
    const suggestion = document.createElement("div");
    suggestion.classList.add("suggestion-item");
    suggestion.textContent = car.name;
    suggestion.onclick = () => window.location.href = car.link;
    suggestionsDiv.appendChild(suggestion);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});




// Initialize functions when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  setupBackToTop();
  if (document.getElementsByClassName("slide").length > 0) {
    showSlides();
  }
});



// Simple Search Suggestions (Placeholder, Second Version)
function showSuggestions() {
  const query = document.getElementById("search-bar").value;
  const suggestionsDiv = document.getElementById("suggestions");
  if (query.length < 2) {
    suggestionsDiv.innerHTML = "";
    return;
  }
  suggestionsDiv.innerHTML = `<p>Suggestions for "${query}"...</p>`;
}

// Back-to-Top Button Setup (Duplicate Definition)
function setupBackToTop() {
  const backToTopButton = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
  });
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// Updated script.js Section


// Search data - this should contain all searchable items
const searchData = [
  { name: "Hindustan Motors", link: "companies/hindustan.html" },
  { name: "Ford", link: "companies/ford.html" },
  { name: "Maruti Suzuki", link: "companies/maruti.html" },
  { name: "Tata Motors", link: "companies/tata.html" },
  { name: "Mahindra & Mahindra", link: "companies/mahindra.html" },
  { name: "Mercedes-Benz", link: "companies/mercedes.html" },
  { name: "Ferrari", link: "companies/ferrari.html" },
  { name: "Koenigsegg", link: "companies/koenigsegg.html" },
  { name: "Mercedes-AMG Petronas", link: "companies/f1/mercedes-f1.html" },
  { name: "Scuderia Ferrari", link: "companies/f1/ferrari.html" },
  { name: "Red Bull Racing", link: "companies/f1/redbull.html" },
  { name: "McLaren", link: "companies/f1/mclaren.html" },
  { name: "Toyota Gazoo Racing", link: "companies/wec/toyota_gazoo.html" },
  { name: "Porsche Penske Motorsport", link: "companies/wec/porsche_penske.html" },
  { name: "Joe Gibbs Racing", link: "companies/nascar/joe_gibbs.html" },
  { name: "Team Penske NASCAR", link: "companies/nascar/team_penske.html" },
  { name: "Aprilia", link: "companies/motogp/aprilia.html" },
  { name: "Yamaha", link: "companies/motogp/yamaha.html" }
];

// Search functionality
function showSuggestions() {
  const input = document.getElementById("search-bar").value.toLowerCase();
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "";

  if (input.length < 2) {
    suggestionsDiv.style.display = "none";
    return;
  }

  const filteredItems = searchData.filter(item => 
    item.name.toLowerCase().includes(input)
  );

  if (filteredItems.length > 0) {
    suggestionsDiv.style.display = "block";
    filteredItems.forEach(item => {
      const suggestion = document.createElement("div");
      suggestion.classList.add("suggestion-item");
      suggestion.textContent = item.name;
      suggestion.onclick = () => {
        window.location.href = item.link;
      };
      suggestionsDiv.appendChild(suggestion);
    });
  } else {
    suggestionsDiv.style.display = "none";
  }
}

// Close suggestions when clicking outside
document.addEventListener("click", function(event) {
  const suggestionsDiv = document.getElementById("suggestions");
  const searchBar = document.getElementById("search-bar");
  
  if (event.target !== searchBar && event.target !== suggestionsDiv) {
    suggestionsDiv.style.display = "none";
  }
});

// Back-to-Top Button Setup (Third Duplicate)
function setupBackToTop() {
  const backToTopButton = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
  });
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Initialize functions when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  setupBackToTop();
  loadHeroImage();
});
