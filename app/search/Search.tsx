"use client"

import { useFormState } from 'react-dom';
import { getSearchResults, getSearchResultsMax } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SearchResult from './SearchResult';
import { Search as LucideSearch } from "lucide-react";

export default function Search() {
  const [results, formAction] = useFormState(getSearchResults, 0);
  const [results2, formAction2] = useFormState(getSearchResultsMax, 0);

  return (
    <div className="m-4">
      <form 
        className="flex w-full max-w items-center space-x-2" 
        action={formAction2} method="post">
          <Input type="text" name="query" placeholder="Search..." required />
        <Button type="submit">
          <LucideSearch className="mr-2 h-4 w-4" />
          Search
        </Button>
      </form>
      <div className="m-4">
        {Array.isArray(results2) && results2.map((result, index) => (
          <SearchResult key={index} result={result} />
        ))}
      </div>
      <form 
        className="flex w-full max-w items-center space-x-2" 
        action={formAction} method="post">
          <Input type="text" name="query" placeholder="Search..." required />
        <Button type="submit">
          <LucideSearch className="mr-2 h-4 w-4" />
          Search
        </Button>
      </form>
      <div className="m-4">
        <p>Not yet working, see above, wait for correct data from backend.</p>
      </div>
    </div>
  );
}
