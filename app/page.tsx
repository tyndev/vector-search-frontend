import GetData from "@/components/GetData";
import { SearchForm } from "@/components/SearchForm";

export default async function Home() {
  const data = await GetData()

  return (

      <section className="py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <h1 className="font-bold sm:text-4xl md:text-3xl">Hello Vector Search</h1>
          {/* #TODO: ADD ACTUAL SEARCH FUNCTIONALITY */}
          <h2> {data.message} </h2>
        </div>
        <div className="container pt-4 px-4 md:px-6">
          <SearchForm/>
        </div>
        <div className="container pt-4 px-4 md:px-6">
          <h2> Backend Form Response </h2>
        </div>
        
      </section>

  );
}
 