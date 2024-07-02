import GetData from "@components/GetData";
import SearchForm from "@components/SearchForm";
import { SearchFormOld } from "@components/SearchFormOld";
import SearchTips from "@/components/SearchTips"
import SearchResultsList from "@/components/SearchResultsList"
import { Separator } from "@components/ui/separator";
import { Suspense } from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const data = await GetData() // Eventually Remove
  //Above grabs search params from URL.
  //Below consts creates the objects for use in Search Results and Search Tips.
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
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
          {query ? <SearchTips query={query} /> : <></>}
          {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
            <SearchResult query={query} currentPage={currentPage} />
          </Suspense> */}
        </div>
        <div className="container pt-12 px-4 md:px-6">
          <h2> SEARCH RESULTS - #TODO - Actually Render SearchResult(s) </h2>
          {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
          </Suspense> */}
          {/* <SearchResultsList query={query} currentPage={currentPage} /> */}
        </div>
        <div className="container pt-12 px-4 md:px-6">
          <SearchFormOld/>
        </div>

      </section>

  );
}
 