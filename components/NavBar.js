import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-state-blue p-3 mb-10">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block lg:hidden text-white hover:text-gray-400"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <ul className={`${menuOpen ? 'block' : 'hidden'} lg:flex items-center justify-between p-4`}>
        <li>
          <Link href="/">
            <a className="text-white hover:text-gray-400">Home</a>
          </Link>
        </li>
        <li className="logo-container flex items-center justify-center">
        <Link href="/">
        <img src="../trivia-logo.png" alt="Trivia Game Logo" className="logo w-24 h-24" />
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;