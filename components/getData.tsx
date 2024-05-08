
export default async function getData() {
    const res = await fetch('https://vector-search-backend.onrender.com/')
    
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
     
  return res.json();
}