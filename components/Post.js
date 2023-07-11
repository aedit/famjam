import Image from "next/image";
import Link from "next/link";
export default function Post() {
  return (
    <div className="my-4">
      <header className="flex justify-between">
        <div className="flex items-center text-gray font-semibold">
          <Image
            className="rounded-full mr-2 border-2 border-red"
            alt="image"
            src="https://unsplash.it/600"
            width="30"
            height="30"
          ></Image>
          <Link href="/account/ironhill.bengaluru">
            <span>Iron Hill Bengaluru</span>
          </Link>
        </div>
        <div>&#8942;</div>
      </header>
      <div className="mt-1">
        <Image
          className="rounded-sm"
          alt="image"
          src="https://unsplash.it/850"
          sizes="100vw"
          height={0}
          width={0}
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </div>
      <div className="text-sm mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nulla
        ducimus eius minus,
      </div>
      <div className="text-sm mt-3">
        <span>♥️</span>
        <span>254 Likes</span>
      </div>
    </div>
  );
}
