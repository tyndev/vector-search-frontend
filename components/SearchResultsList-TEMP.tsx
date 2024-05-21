
// // 'https://vector-search-backend.onrender.com/', 

// async function getSearchResults({
//     query,
//     currentPage,
//   }: {
//     query: string;
//     currentPage: number;   
//   }) {
//     try {       
//         const encodedQuery = encodeURIComponent(query)
//         const res = await fetch(
//             `http://127.0.0.1:8000/search?query=${encodedQuery}&page=${currentPage}`, 
//             { cache: 'no-store' }
//           );
      
//           if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//           }
    
//           return res.json();
//       } catch (error: any) {
//         console.error("Failed to fetch search results:", error);
//         return { error: error.message };
//       }
//   }

//   export default async function SearchResultsList() {
//     const results = await getSearchResults({query, currentPage,})

    
//   }