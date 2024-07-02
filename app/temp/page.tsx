import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <p>Some Test</p>
      <Link href="/cart">Cart</Link>
    </nav>
  );
}
