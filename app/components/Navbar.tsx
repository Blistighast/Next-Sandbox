"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="flex bg-teal-500 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/products">Products</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
      {status === "authenticated" && (
        <div className="space-x-3">
          <span>{session.user!.name}</span>
          <Link href="api/auth/signout">Sign Out</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
