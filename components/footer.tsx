import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t px-4 py-6 md:flex-row md:px-6 md:py-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 VectorSearch.</p>
        <nav className="flex gap-4">
        <Link className="text-sm hover:underline" href="#">
            Privacy
        </Link>
        <Link className="text-sm hover:underline" href="#">
            Terms
        </Link>
        <Link className="text-sm hover:underline" href="#">
            Contact
        </Link>
        </nav>
    </footer>
    );
}