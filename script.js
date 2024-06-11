document.addEventListener("DOMContentLoaded", function() {
    // Variables for the quote
    const quoteText = "Success is not final, failure is not fatal: it is the courage to continue that counts.";
    const quoteAuthor = "Winston Churchill";
    
    // Set the quote in the HTML
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = `${quoteText}<cite>— ${quoteAuthor}</cite>`;

    // Variables for the recent posts
    const posts = [
        {
            image: "monsoon_treat.jpg",
            title: "Monsoon Treat",
            description: "This week I visited this place, and the vibes were so amazing"
        },
        // Add more post objects as needed
    ];

    // Dynamically add posts to the container
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
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
