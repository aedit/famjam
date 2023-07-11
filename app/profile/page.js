import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <div className="h-full relative w-full">
      <main className="p-8 w-full h-full overflow-y-auto pb-24">
        <header className="flex justify-between text-gray">
          <span className="font-semibold">@bada.paww</span>
          <Link href="/profile/update">
            <div className="cursor-pointer">
              <i className="icon-menu"></i>
            </div>
          </Link>
        </header>
        <div className="profile-area flex flex-col">
          <div className="flex flex-col pt-12 self-center items-center justify-center">
            <Image
              className="rounded-full"
              alt="image"
              src="https://unsplash.it/200"
              width="120"
              height="120"
            ></Image>
            <div className="pt-4 pb-2 font-semibold">Surya Karan Chaudhary</div>
            <div className="text-sm text-gray">
              enterpreneur, Influence, Product
            </div>
          </div>
          <div className="famjammers flex pt-2">
            <div
              className="flex flex-col flex-1 rounded-s-md mr-2 items-center p-2"
              style={{ backgroundColor: "#6E6D7A55" }}
            >
              <span className="text-xl font-semibold">254</span>
              <span className="text-sm">Famjamming</span>
            </div>
            <div
              className="flex flex-col flex-1 rounded-e-md items-center p-2"
              style={{ backgroundColor: "#6E6D7A55" }}
            >
              <span className="text-xl font-semibold">2064</span>
              <span className="text-sm">Famjammers</span>
            </div>
          </div>
          <Link href="/profile/notifications">
            <div className="bg-red text-white py-2 px-4 text-sm mt-2 rounded-md cursor-pointer text-center">
              See what famjammers say about you &rarr;
            </div>
          </Link>
          <div className="uploads-area grid grid-cols-3 gap-3 mt-4 mb-4">
            {[...Array(13)].map((e, i) => (
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
