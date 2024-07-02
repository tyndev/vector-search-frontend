export async function getSearchResults(state: any, formData: FormData) {
    const query = formData.get("query")
    const res = await fetch(`http://127.0.0.1:8000/?query=${query}`)

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    const data = await res.json()
    return data
}

export async function getSearchResultsMax(state: any, formData: FormData) {
    const query = formData.get("query")
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (res.ok) {
        const posts = await res.json();
        return posts.slice(0, query); // Return only the first x posts
      } else {
        throw new Error('Failed to fetch posts');
      }
    }

// export async function getResults(state: any, formData: FormData) {
//     const query = formData.get("query")
//     const res = await fetch(`http://127.0.0.1:8000/search?query=${query}`)

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
    
//     const data = await res.json()
//     return data
// }

