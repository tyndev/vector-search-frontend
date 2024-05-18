"use client";

import { useFormStatus, useFormState } from "react-dom";
import { getSearchResults } from "@/lib/actions/get-search-results";

import { Label } from "@/components/ui/label"; 
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  message: "",
};

// TODO: Move to components?
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" aria-disabled={pending}>
      SearchFormOld
    </Button>
  );
}

export function SearchFormOld() {
  const [state, formAction] = useFormState(getSearchResults, initialState)
  

  return (
    <form className="grid w-full gap-2" action={formAction}>
      <Label htmlFor="search">Search</Label>
      <Textarea id="search" name="search" placeholder="Type your semantic query here." required />
      <SubmitButton />
      
      <p aria-live="polite" className="sr-only" role="status">
        {/* Accessibility element announcing form state dynamically */}
        {state?.message}
      </p>
    </form>
  )
}