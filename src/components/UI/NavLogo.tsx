import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <Link href="/">
      <img src="/logo.png" alt="logo" width="420px" />
    </Link>
  );
};

export default NavLogo;
