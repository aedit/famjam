import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="h-full relative">
      <main className="p-4 flex flex-col">
        <div className="flex items-center">
          <Link href="/">
            <span className="cursor-pointer">&larr;</span>
          </Link>
          <span className="flex ml-2 font-bold flex-1">
            <span className="text-black mr-1">All</span>
            <span className="text-red">Categories</span>
          </span>
          <span className="cursor-pointer">
            <i className="icon-search"></i>
          </span>
        </div>
        <div className="search-area mt-4">
          {[
            {
              name: "Bar",
              slug: "bar",
              count: 3,
            },
            {
              name: "Pubs",
              slug: "pubs",
              count: 7,
            },
            {
              name: "Restaurant",
              slug: "restaurant",
              count: 14,
            },
            {
              name: "Shacks",
              slug: "shacks",
              count: 0,
            },
          ].map((e, i) => (
            <Link key={i} href={`/categories/${e.slug}`}>
              <div className="flex my-3 items-center border border-gray rounded-md p-2">
                <span className="text-sm text-gray ml-2 flex flex-1">
                  {e.name}
                </span>
                <span className="text-xs mr-2">({e.count})</span>
                <span className="cursor-pointer">&gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
