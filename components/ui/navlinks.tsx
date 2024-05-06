import Link from 'next/link';

export default function Navlinks() {
  return (
    <nav className="ml-6 space-x-2 lg:block">
        <Link href="/" className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-zinc-200 rounded-md p-1">
            Pricing
        </Link>
        <Link href="/account" className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-zinc-200 rounded-md p-1">
            Account
        </Link>
    </nav>
  );
}

