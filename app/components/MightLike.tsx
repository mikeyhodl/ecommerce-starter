/* eslint-disable @next/next/no-img-element */
import { MightLike } from "@/app/data/products";
import Link from "next/link";

const formatTitle = (title: string) => {
  return title.split(" ").join("-");
};

export default function ProductsMightLike() {
  return (
    <section className="text-gray-600 body-font dark:bg-zinc-900">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {MightLike.map((product: any) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 overflow-hidden rounded-xl">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block hover:opacity-60 cursor-pointer"
                  src={product.images[0]}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 dark:text-slate-50">
                  {product.category.name}
                </h3>
                <Link
                  href="/product/[title]"
                  as={`/product/${formatTitle(product.title.toLowerCase())}`}
                >
                  <h2 className="text-gray-900 title-font text-lg font-medium dark:text-slate-50 hover:text-blue-600 dark:hover:text-blue-400">
                    {product.title}
                  </h2>
                </Link>
                <p className="mt-1 dark:text-slate-50 font-extrabold">
                  ${product.price}
                  <button className="ml-5 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Add to cart
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
