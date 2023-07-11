import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <main className="relative">
      <div>
        <Image
          alt="image"
          src="https://unsplash.it/1000"
          sizes="100vw"
          height={0}
          width={0}
          style={{ width: "100%", height: "auto" }}
        ></Image>
        <Link href="/profile">
          <span className="absolute text-red right-4 top-4 text-4xl">x</span>
        </Link>
        <div className="p-4">
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nulla
            ducimus eius minus, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore consectetur libero esse, iusto soluta
            aspernatur commodi asperiores dolorum, possimus consequatur
            voluptatum nostrum, magni a ipsam itaque odit assumenda quo
            molestias!
          </div>
          <div className="mt-4">
            <span className="mr-2">♥️</span>
            <span className="text-gray">254 Likes</span>
          </div>
        </div>
      </div>
    </main>
  );
}
