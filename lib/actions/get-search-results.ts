'use server'

export async function getSearchResults(prevState: any, formData: FormData) {
  try {
    const search = formData.get("search");
    
    const res = await fetch(
        `http://127.0.0.1:8000/search?query=${search}`, 
        { cache: 'no-store' }
      ) ;
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return res.json();
  } catch (error: any) {
    console.error("Failed to fetch search results:", error);
    return { error: error.message };
  }

}  
