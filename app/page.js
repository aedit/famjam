import Link from "next/link";
import Post from "@/components/Post";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-full relative">
      <main className="p-4 overflow-y-auto h-full pb-24">
        <Link href="/categories">
          <header className="text-6xl flex flex-col font-bold cursor-pointer">
            <span className="text-gray mb-2">All</span>
            <span className="flex flex-row items-center">
              <span className="text-red mr-2">Categories</span>
              <span className="text-3xl">&gt;</span>
            </span>
          </header>
        </Link>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </main>
      <Footer></Footer>
    </div>
  );
}
