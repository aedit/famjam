import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EachCategory() {
  return (
    <div className="h-full relative">
      <main className="p-4 flex flex-col">
        <div className="flex items-center">
          <Link href="/categories">
            <span className="cursor-pointer">&larr;</span>
          </Link>
          <span className="flex ml-2 font-bold flex-1">
            <span className="text-black mr-1">Category</span>
            <span className="text-red">Bar</span>
          </span>
          <span className="cursor-pointer">
            <i className="icon-search"></i>
          </span>
        </div>
        <div className="mt-4">
          <div className="text-red text-sm font-semibold">Famjamming</div>
          {[
            {
              username: "ironhill.bengaluru",
              accountName: "Iron Hill Bengaluru",
            },
            {
              username: "ironhill.hyderabad",
              accountName: "Iron Hill hyderabad",
            },
          ].map((e, i) => (
            <Link key={i} href={`/account/${e.username}`}>
              <div key={i} className="flex my-3">
                <span>
                  <Image
                    className="rounded-full"
                    alt="image"
                    src="https://unsplash.it/200"
                    width="40"
                    height="40"
                  ></Image>
                </span>
                <span className="text-sm text-gray ml-2 flex flex-col flex-1">
                  <span className="font-semibold mr-2">{e.accountName}</span>
                  <span className="text-xs">{e.username}</span>
                </span>
                <span className="cursor-pointer">&#8942;</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <div className="text-red text-sm font-semibold">Others</div>
          {[
            {
              username: "ironhill.pune",
              accountName: "Iron Hill pune",
            },
            {
              username: "ironhill.mumbai",
              accountName: "Iron Hill mumbai",
            },
          ].map((e, i) => (
            <Link key={i} href={`/account/${e.username}`}>
              <div key={i} className="flex my-3">
                <span>
                  <Image
                    className="rounded-full"
                    alt="image"
                    src="https://unsplash.it/200"
                    width="40"
                    height="40"
                  ></Image>
                </span>
                <span className="text-sm text-gray ml-2 flex flex-col flex-1">
                  <span className="font-semibold mr-2">{e.accountName}</span>
                  <span className="text-xs">{e.username}</span>
                </span>
                <span className="cursor-pointer">&#8942;</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
