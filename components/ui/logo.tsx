import Link from 'next/link';

export default function Logo() {
    return (
    <Link href="/" className="cursor-pointer rounded-full transform duration-100 ease-in-out" aria-label="Logo">
      <div className={`flex flex-row items-center leading-none text-white `}>
        <div className="flex items-center">
            <span className="text-[36px] transform rotate-[185deg]">🗸</span>
            <p className="text-[21px] pl-1 pt-8">VectorSearch</p>
        </div>
      </div>
    </ Link>
    );
  }
  