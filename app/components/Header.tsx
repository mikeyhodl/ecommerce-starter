/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import Logo from "@/app/components/Logo";
import ProfileImage from "@/app/components/ProfileImage";
import Search from "@/app/components/Search";
import { TbShoppingBag } from "react-icons/tb";

const links = [
  {
    label: "Movies",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "Live Radio",
    href: "/radio",
  },
];

export default function Header() {
  return (
    <header className="text-gray-600 body-font dark:bg-zinc-800 sticky top-0 z-50 bg-zinc-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {links.map(({ label, href }) => (
            <Link
              className="mr-5 hover:text-gray-900 dark:hover:text-gray-400 dark:text-gray-100"
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
          {/* search bar  */}
          <Search />
          {/* search bar  */}
        </nav>
        <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-red-400 dark:hover:bg-red-400 rounded text-base mt-4 md:mt-0 dark:bg-red-600 dark:text-gray-50 text-gray-50">
          Sign In
          <AiOutlineLogin className="px-0.5" />
        </button>
        <ProfileImage />
        <div className="relative cursor-pointer">
          <TbShoppingBag className="h-8 w-8 mx-2 text-red-600" />
          <span className="absolute top-0 w-3 h-3 rounded-full bg-red-500 right-1" />
        </div>
      </div>
    </header>
  );
}
