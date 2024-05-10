// 'http://127.0.0.1:8000', 

export default async function getData() {
  const res = await fetch(
    'https://vector-search-backend.onrender.com/', 
    { cache: 'no-store' }
  ) 
    
  return res.json();
}