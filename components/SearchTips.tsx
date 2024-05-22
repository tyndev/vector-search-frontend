import { Lightbulb } from "lucide-react"
import { Button } from "@components/ui/button";

export type Tip = {
    id: string; 
    tip: string;
  };

async function getSearchTips(query: string):  Promise<Tip[] | { error: string }> {
    if (!query) {
        return [];
    }

  try {       
      const encodedQuery = encodeURIComponent(query)
      const res = await fetch(
          `http://127.0.0.1:8000/search-tips?query=${encodedQuery}`, 
          { cache: 'no-store' }
        );
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Response...", data)
        return data;
    } catch (error: any) {
        console.error("Failed to fetch search results:", error);
    return { error: error.message };
  }
}

export default async function SearchTips({
    query,
  }: {
    query: string;
  }) {
    const tipsData = await getSearchTips(query)

    if ('error' in tipsData) {
        return <div>Error: {tipsData.error}</div>;
    }

    const [tip] = tipsData
    
    return (
        <div>
            {tipsData.map((tip) => (
                <Button className="mx-2" key={tip.id} variant="secondary">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    {tip.tip}
                </Button>
            ))}
        </div>
    )
}