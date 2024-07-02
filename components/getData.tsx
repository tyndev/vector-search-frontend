// 'https://vector-search-backend.onrender.com/', 

export default async function GetData() {
  const res = await fetch(
    'http://127.0.0.1:8000/test', 
    { cache: 'no-store' }
  ) 
    
  return res.json();
}