'use client';

import { Search as LucideSearch } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { debounce } from "@lib/utils"

import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";


export default function SearchForm({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const debounceHandleSearch = debounce(handleSearch, 300);
  
  function handleSearch(term: string) {
    console.log(`Searching... ${term}`);
    
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor="search" className="sr-only">Search</Label>
      <Textarea
        placeholder={placeholder}
        onChange={(e) => {
          debounceHandleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()} // Needed for Bookmarking, but only for Query, not yet future Filters.
        />
      <Button type="submit">
        <LucideSearch className="mr-2 h-4 w-4" />
        Click to Search Vector Space
      </Button>
    </div>
  );
}
