import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-[#67e6dc]">
      <h1 className="text-4xl md:text-6xl font-bold text-center py-10"><span className="text-[#B33771]">COUNTRY</span> LIST</h1>
      <ul className="md:mt-24 bg-[#67e6dc] flex flex-col items-center md:flex-row justify-evenly text-2xl md:text-4xl text-center">
        <Link href="/pakistan">
          <li className="bg-pakistan bg-cover bg-center mb-4 w-60 h-60 shadow-lg shadow-indigo-500"></li>
          <h2 className="mb-5 md:mt-8 md:pb-3 hover:border-b-2 hover:border-[#B33771] transition-all">Pakistan</h2>
        </Link>
        <Link href="/canada">
          <li className="bg-canada bg-cover bg-center w-60 h-60 mb-4 shadow-lg shadow-indigo-500"></li>
          <h2 className="mb-5 md:mt-8 md:pb-3 hover:border-b-2 hover:border-[#B33771] transition-all">Canada</h2>
        </Link>
        <Link href="/malaysia"><li className="bg-malaysia bg-cover bg-center w-60 h-60 mb-4 shadow-lg shadow-indigo-500"></li>
          <h2 className="mb-5 md:mt-8 md:pb-3 hover:border-b-2 hover:border-[#B33771] transition-all">Malaysia</h2>
        </Link>
        <Link href="/spain"><li className="bg-spain bg-cover bg-center w-60 h-60 mb-4 shadow-lg shadow-indigo-500"></li>
          <h2 className="mb-5 md:mt-8 md:pb-3 hover:border-b-2 hover:border-[#B33771] transition-all">Spain</h2>
        </Link>
        <Link href="/saudiarabia">
          <li className="bg-saudiArabia bg-cover bg-center w-60 h-60 mb-4 shadow-lg shadow-indigo-500"></li>
          <h2 className="mb-5 md:mt-8 md:pb-3 hover:border-b-2 hover:border-[#B33771] transition-all">Saudi Arabia</h2>
        </Link>
      </ul>
    </div>
  <footer className="h-10 md:h-10 flex flex-col md:flex-row md:justify-evenly items-center bg-indigo-400"><p className="text-xs md:text-2xl">Copyright 2024 Design by Afifa khan. All Rights Reserved.</p><Link href={'https://www.linkedin.com/in/afifa~khan'} target="_blank"><BsLinkedin className="text-xl md:text-2xl  hover:text-white" /></Link> </footer>
  </>
  );
}
