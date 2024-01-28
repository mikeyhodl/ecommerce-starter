"use client";
import { useRouter } from "next/navigation";
// import { Search } from "@/app/components/Interface";

export default function Search() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/search");
  };

  return (
    <div className="hidden mx-2 md:block">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          onClick={handleClick}
          type="text"
          className="w-full py-1.5 pl-10 pr-4 text-zinc-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-gray-300 dark:border-zinc-600 focus:border-zinc-400 dark:focus:border-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-zinc-300"
          placeholder="Search for Titles..."
        />
      </div>
    </div>
  );
}
