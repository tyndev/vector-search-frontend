import { SearchResult } from "@components/SearchResult";

async function getSearchResults(query: string, currentPage: number) {
  try {       
    const encodedQuery = encodeURIComponent(query)
    const res = await fetch(
        `http://127.0.0.1:8000/search?query=${encodedQuery}&page=${currentPage}`, 
        { cache: 'no-store' }
      );
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return res.json();
  } catch (error: any) {
    console.error("Failed to fetch search results:", error);
    return { error: error.message };
  }
}

export default async function SearchResultsList({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;   
  }) {
    const resultsData = getSearchResults(query, currentPage)

    const [result] = await Promise.all([resultsData])

    return (
      <>
        <h2>{result.title}</h2>
        <p> {result.summary} </p>
        <SearchResult />
      </>
    )
}