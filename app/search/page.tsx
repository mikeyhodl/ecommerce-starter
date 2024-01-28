function Item() {
  return (
    <div className="w-full">
      <div className="w-full h-40 bg-zinc-300 rounded-lg md:h-40 dark:bg-zinc-600" />
      <h1 className="w-56 h-2 mt-4 bg-zinc-200 rounded-lg dark:bg-zinc-700" />
      <p className="w-24 h-2 mt-4 bg-zinc-200 rounded-lg dark:bg-zinc-700" />
    </div>
  );
}

export default function SearchPage() {
  const items = [1, 2, 3, 4];

  return (
    <section className="bg-white dark:bg-zinc-900 min-h-screen">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Item key={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
