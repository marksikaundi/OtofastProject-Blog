import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max -pt-3 pl-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center">
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mr-2">About</Link>
        <Link href="/contact" className="mr-2">Contact</Link>
      </nav>
      <div className="">Social links</div>
    </header>
  );
};

export default Header;
