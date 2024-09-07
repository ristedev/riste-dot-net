---
layout: post
title: my fourth post
date: 2024-09-08
category: code
tags: post
---
Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

```
# Sample JavaScript code: Fetches a list of posts from a public API, handles errors, and logs the result to the console.

// Function to fetch posts from an API with proper error handling
async function fetchPosts() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(apiUrl);

        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON response
        console.log('API data fetched successfully:', data);

        // Process the data (e.g., render it in the DOM)
        // renderPosts(data);

    } catch (error) {
        // Log any errors that occur during the API call
        console.error('Error fetching data from API:', error.message);
    }
}

// Call the function to fetch the data
fetchPosts();
```