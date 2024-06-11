document.addEventListener("DOMContentLoaded", function () {

  // Example usage
  const targetDuration = 100; // Change this to your desired duration in seconds
  countdown(targetDuration);

  // Variables for the recent posts
  const posts = [
    {
      image: "monsoon_treat.jpg",
      title: "Monsoon Treat",
      description:
        "This week I visited this place, and the vibes were so amazing",
    },
    // Add more post objects as needed
  ];

  // Dynamically add posts to the container
  const postsContainer = document.getElementById("posts-container");
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            </div>
        `;

    postsContainer.appendChild(postElement);
  });
});

// Get all navigation items
const navItems = document.querySelectorAll(".nav-link");
// Add event listener to each navigation item
navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // Remove active class from all navigation items
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });

    // Add active class to the clicked navigation item
    event.target.closest(".nav-item").classList.add("active");
  });
});

// Search Button Animation
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
searchInput.addEventListener("input", () => {
  if (searchInput.value !== "") {
    searchBtn.style.display = "block";
    searchBtn.style.opacity = 0;
    setTimeout(() => {
      searchBtn.style.opacity = 1;
      searchBtn.style.transition = "opacity 0.5s";
    }, 10);
  } else {
    searchBtn.style.display = "none";
  }
});

//Quotes Handler
const sourceQuotes =
  "https://raw.githubusercontent.com/vinitshahdeo/inspirational-quotes/master/data/data.json";

  const progressBar = document.getElementById("progressbar_quote")

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getQuotes(url) {
    let p = fetch(url);
    p.then((response) => {
      //console.log(response.ok);
      //console.log(response);
      return response.json();
    })
      .then((value2) => {
        n = generateRandomNumber(1, value2.length);
        return value2[n];
      })
      .then((data) => {
        showThisQuote(data.text, data.from)
      });
  }

  function showThisQuote(quote, author) {
    // Set the quote in the HTML
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = quote;
    const quoteAuthorElement = document.getElementById("quote_credit");
    quoteAuthorElement.innerText = author;
  }

  function updateProgressBar(progress) {
    progressBar.style.width = `${progress * 100}%`;
  }

  function countdown(targetSeconds) {
    let timer = targetSeconds;

    getQuotes(sourceQuotes)
    const intervalId = setInterval(() => {
      let prog = (targetSeconds-timer)/targetSeconds
      updateProgressBar(prog)
      timer--;

      if (timer === 0) {
        clearInterval(intervalId); // Clear interval when timer reaches 0

        const quoteElem = document.getElementById("quote");
        quoteElem.classList.add("blink"); // Add blink animation class

        setTimeout(() => {
          quoteElem.classList.remove("blink"); // Remove blink animation
          timer = targetSeconds; // Reset timer
          countdown(targetSeconds); // Restart the countdown
        }, 500); // Delay after blink animation (adjust as needed)
      }
    }, 100); // Update timer every 1000 milliseconds (for smoother display)
  }  