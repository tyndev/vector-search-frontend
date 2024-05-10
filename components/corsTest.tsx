
export default async function getData() {
    const res = await fetch('https://vector-search-backend.onrender.com/', {
        // Consider using .env variables for production vs local backend urls. 
      method: 'PUT', // Change to PUT to make it a non-simple request
        headers: {
            'Content-Type': 'application/json', // Specifies that the body will be JSON
            'X-Custom-Header': 'test' // Adding a custom header to trigger CORS preflight
        },
        body: JSON.stringify({ data: 'This is a test' }) // Some data to send with the request
    });
    
    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    //   }
     
  return res.json();
}