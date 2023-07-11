import Image from "next/image";
import Link from "next/link";

export default function UpdateProfile() {
  return (
    <div className="h-full relative w-full">
      <main className="w-full p-4">
        <div className="flex items-center">
          <Link href="/profile">
            <span className="cursor-pointer">&larr;</span>
          </Link>
          <span className="flex ml-2 font-bold">
            <span className="text-black mr-1">Update</span>
            <span className="text-red">Profile</span>
          </span>
        </div>
        <div className="flex flex-col mt-4 p-4">
          <Link href="/profile/update/edit">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span className="mr-2">Edit Profile</span>
              <span>&rarr;</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span className="mr-2">Verify Profile</span>
              <span>&rarr;</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span className="mr-2">How it Works?</span>
              <span>&rarr;</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span className="mr-2">Frequently Asked Questions</span>
              <span>&rarr;</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span className="mr-2">Help and Support</span>
              <span>&rarr;</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span className="mr-2">Terms of Use</span>
              <span>&rarr;</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span className="mr-2">Privacy Policy</span>
              <span>&rarr;</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-between font-semibold mb-4 text-sm">
              <span className="mr-2">About us</span>
              <span>&rarr;</span>
            </div>
          </Link>
          <Link href="/login">
            <div>Logout</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
