import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Search() {
  return (
    <div className="h-full relative">
      <main className="p-4 flex flex-col">
        <div className="flex w-full">
          <input className="w-full border border-gray rounded-md" type="text" />
        </div>
        <div className="search-area mt-4">
          {[
            ...[
              {
                username: "ironhill.bengaluru",
                accountName: "Iron Hill Bengaluru",
              },
              {
                username: "ironhill.hyderabad",
                accountName: "Iron Hill hyderabad",
              },
              {
                username: "ironhill.pune",
                accountName: "Iron Hill pune",
              },
              {
                username: "ironhill.mumbai",
                accountName: "Iron Hill mumbai",
              },
            ],
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
