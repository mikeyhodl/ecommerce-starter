"use client";
/* eslint-disable @next/next/no-img-element */
// import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useTheme } from "next-themes";

export default function Logo() {
  // const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <Link
      href="/"
      // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* {theme === "light" ? ( */}
      <Image src="https://res.cloudinary.com/weknow-creators/image/upload/v1694118590/logo-arrena_rfimdk_ujyzxh.webp" alt="light_logo" width="100" height="100" />
      {/* ) : ( */}
      {/* <Image src="/darklogo.webp" alt="dark_logo" width="100" height="100" /> */}
      {/* )} */}
    </Link>
  );
}
