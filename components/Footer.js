import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="absolute bottom-0 left-0 right-0 bg-black flex justify-between py-2 px-4 text-white rounded-ss-md rounded-se-md h-20 pt-4 text-xl"
      style={{ backgroundColor: "black" }}
    >
      <Link href="/">
        <span className="cursor-pointer px-8">
          <i className="icon-home" />
        </span>
      </Link>
      <Link href="/search">
        <span className="cursor-pointer px-8">
          <i className="icon-search" />
        </span>
      </Link>
      <Link href="/profile">
        <span className="cursor-pointer px-8">
          <i className="icon-user"></i>
        </span>
      </Link>
    </footer>
  );
}
