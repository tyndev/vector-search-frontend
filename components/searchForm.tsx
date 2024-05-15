"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
// import { createTodo } from "@/app/actions"; //TODO

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" aria-disabled={pending}>
      Click to Search Vector Space
    </Button>
  );
}

export function SearchForm() {
  // const [state, formAction] = useActionState()
  return (
    <div className="grid w-full gap-2">
    {/* TODO: <form action={formAction}></form> */}
      <Textarea placeholder="Type your message here."/>
      <Button asChild>
          <Link href="http://127.0.0.1:8000/search?query=$testing123">
          {/* <Link href="https://vector-search-backend.onrender.com/search?query=$testing123"> */}
            Click to Search Vector Space
          </Link> 
        </Button>
    </div>
  )
}