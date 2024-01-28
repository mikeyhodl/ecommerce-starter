/* eslint-disable @next/next/no-img-element */
import { FaRegStar } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import ProductsMightLike from "@/app/components/MightLike";

export default function Product() {
  return (
    <section className="text-gray-600 body-font overflow-hidden dark:bg-zinc-900 min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-full mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-96 h-48 object-cover object-center rounded-xl dark:bg-zinc-500 bg-zinc-300"
            src="https://source.unsplash.com/random/700x600/?lenovo"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest dark:text-slate-50">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-slate-50">
              The Catcher in the Rye
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <FaRegStar />
                <span className="text-gray-600 ml-3 dark:text-slate-50">
                  4 Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                <a className="text-gray-500">
                  <FaXTwitter />
                </a>
                <a className="text-gray-500">
                  <FaInstagram />
                </a>
                <a className="text-gray-500">
                  <FaFacebookF />
                </a>
              </span>
            </div>
            <p className="leading-relaxed dark:text-slate-50">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3 dark:text-slate-50">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3 dark:text-slate-50">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 dark:text-slate-50 dark:bg-zinc-900">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900 dark:text-slate-50">
                $58.00
              </span>
              <button className="ml-auto border-0 py-2 px-6 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none dark:text-slate-50">
                Add To Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <FcLike />
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-gray-900 text-2xl title-font font-medium dark:text-slate-50 mt-6">
          Other Products You Might Like
        </h1>
        <ProductsMightLike />
      </div>
    </section>
  );
}
