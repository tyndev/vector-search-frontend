import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export function SearchBox() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button asChild>
          <Link href="https://vector-search-backend.onrender.com/search?query=$testing123">
            Click to Search Vector Space
          </Link> 
        </Button>
    </div>
  )
}