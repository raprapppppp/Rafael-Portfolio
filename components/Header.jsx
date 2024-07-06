import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { RiMenu3Line } from "react-icons/ri";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/*Logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            CpE<span className="text-accent">Rap</span>
          </h1>
        </Link>

        {/*Navigation Links and Hire Button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*Mobile Nav*/}
        <div className="xl:hidden items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
