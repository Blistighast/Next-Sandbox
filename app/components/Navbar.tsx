import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-teal-500 p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="px-2">
        Users
      </Link>
      <Link href="/admin" className="px-2">
        Admin
      </Link>
      <Link href="/products" className="px-2">
        Products
      </Link>
    </nav>
  );
};

export default Navbar;
