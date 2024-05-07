import Logo from '@/components/ui/logo'
import { Separator } from '@/components/ui/separator'
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          {/* #TODO: Move to Logo.tsx */}
          <Link href="/" >
            <div className="flex items-center">
              <span className="font-bold text-[36px] transform rotate-[185deg]">🗸</span>
              <p className="font-bold text-[21px] pl-1 pt-4">VectorSearch</p>
            </div>
          </ Link>
          {/* #TODO: Move to navlinks.tsx and make dynamic */}
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <div className="hidden space-x-2 md:flex">
              <Link className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium hover:underline h-10 px-2 py-2" href="#">
                About
              </Link>
              <Link className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium hover:underline h-10 px-2 py-2" href="#">
                Contact
              </Link>
              <Button variant="outline" asChild>
                <Link href="/#">Hello</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#">There</Link>
              </Button>
              <Button asChild>
                <Link href="/login">User</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    <Separator />  
    </header>
  );
}