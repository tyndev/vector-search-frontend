import Link from "next/link";
import { Button } from "@/components/ui/button";
import getData from "@/components/getData";
import { SearchForm } from "@/components/searchForm";

export default async function Home() {
  const data = await getData()

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
      </section>

  );
}
 