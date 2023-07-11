import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function AccountPage() {
  return (
    <div className="h-full relative w-full">
      <main className="p-8 w-full h-full overflow-y-auto pb-24">
        <header className="flex justify-between text-gray">
          <span className="font-semibold">@ironhill.bengaluru</span>
          <div className="cursor-pointer">&#8942;</div>
        </header>
        <div className="profile-area flex flex-col">
          <div className="flex flex-col pt-12 self-center items-center justify-center">
            <Image
              className="rounded-full"
              alt="image"
              src="https://unsplash.it/300"
              width="120"
              height="120"
            ></Image>
            <div className="pt-4 pb-2 font-semibold">Iron Hill Bengaluru</div>
            <div className="text-sm text-gray">
              Bengaluru brewery, Bengaluru Pub and Bar
            </div>
          </div>
          <div className="famjammers flex pt-2">
            <div
              className="flex flex-col flex-1 rounded-s-md mr-2 items-center p-2"
              style={{ backgroundColor: "#6E6D7A55" }}
            >
              <span className="text-xl font-semibold">25</span>
              <span className="text-sm">Famjamming</span>
            </div>
            <div
              className="flex flex-col flex-1 rounded-e-md items-center p-2"
              style={{ backgroundColor: "#6E6D7A55" }}
            >
              <span className="text-xl font-semibold">12064</span>
              <span className="text-sm">Famjammers</span>
            </div>
          </div>
          <div className="bg-blue text-white py-2 px-4 text-sm mt-2 rounded-md cursor-pointer text-center">
            Become Famjam
          </div>
          <div className="uploads-area grid grid-cols-3 gap-3 mt-4 mb-4">
            {[...Array(8)].map((e, i) => (
              <Link href={`/post/${i}`} key={i}>
                <Image
                  alt="image"
                  className="rounded-lg"
                  src="https://unsplash.it/200"
                  sizes="100vw"
                  height={0}
                  width={0}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
