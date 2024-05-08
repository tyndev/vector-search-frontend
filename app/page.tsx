import Link from "next/link"
import getData from "@/components/getData"

export default async function Home() {
  const data = await getData()

  return (

      <section className="py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <h1 className="font-bold sm:text-4xl md:text-3xl">Hello Vector Search</h1>
          <h2> {data.Hello} </h2>
        </div>
      </section>

  );
}
