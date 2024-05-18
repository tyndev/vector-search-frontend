import GetData from "@/components/GetData";
import SearchForm from "@/components/SearchForm";
import { SearchFormOld } from "@/components/SearchFormOld";
import { SearchResult} from "@/components/SearchResult"
import { Separator } from "@/components/ui/separator";
import { Suspense } from 'react';

export default async function Home() {
  const data = await GetData()

  return (

      <section className="py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <h1 className="font-bold sm:text-4xl md:text-3xl">Hello Vector Search</h1>
          <h2> {data.message} </h2>
        </div>
        <div className="container pt-4 px-4 md:px-6">
          <SearchForm placeholder="Search..." />
        </div>
        <div className="container pt-4 px-4 md:px-6">
          <h2> SEARCH TIPS - #TODO - ADD GHOST BUTTONS </h2>
          {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
            <Table query={query} currentPage={currentPage} />
          </Suspense> */}
        </div>
        <div className="container pt-12 px-4 md:px-6">
          <h2> SEARCH RESULTS - #TODO - Actually Render SearchResult(s) </h2>
          <SearchResult/> 
          <Separator className="my-5"/> 
          <SearchResult/> 
        </div>
        <div className="container pt-12 px-4 md:px-6">
          <SearchFormOld/>
        </div>
        
      </section>

  );
}
 