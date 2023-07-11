import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import UserActivity from "@/components/UserActivity";

export default function Notifications() {
  return (
    <div className="h-full relative w-full">
      <main className="w-full p-4">
        <Link href="/profile">
          <div className="cursor-pointer">&larr;</div>
        </Link>
        <div className="flex flex-col mt-4">
          {[...Array(8)].map((e, i) => (
            <UserActivity key={i}></UserActivity>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
