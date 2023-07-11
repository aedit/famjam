import Image from "next/image";
import Link from "next/link";

export default function EditProfile() {
  return (
    <div className="h-full relative w-full">
      <main className="w-full p-4">
        <div className="flex items-center">
          <Link href="/profile/update">
            <span className="cursor-pointer">&larr;</span>
          </Link>
          <span className="flex ml-2 font-bold">
            <span className="text-black mr-1">Edit</span>
            <span className="text-red">Profile</span>
          </span>
        </div>
        <div className="flex flex-col mt-2 edit-pofile-area">
          <div className="flex flex-col pt-8 self-center items-center justify-center">
            <Image
              className="rounded-full"
              alt="image"
              src="https://unsplash.it/200"
              width="90"
              height="90"
            ></Image>
            <span className="text-gray text-xs mt-2">
              Update Profile Picture
            </span>
          </div>
          <div className="flex flex-col m-2">
            <span className="mb-2 text-gray text-xs">User Name *</span>
            <input className="border border-gray rounded-md" type="text" />
          </div>
          <div className="flex flex-col m-2">
            <span className="mb-2 text-gray text-xs">Name *</span>
            <input className="border border-gray rounded-md" type="text" />
          </div>
          <div className="flex flex-col m-2">
            <span className="mb-2 text-gray text-xs">Mobile No *</span>
            <input className="border border-gray rounded-md" type="text" />
          </div>
          <div className="flex flex-col m-2">
            <span className="mb-2 text-gray text-xs">
              Choose Profile Status
            </span>
            <span className="flex justify-between text-sm">
              <span className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  name="Personal"
                  id="Personal"
                  value="Personal"
                />
                <label>Personal</label>
              </span>
              <span className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  name="Business"
                  id="Business"
                  value="Business"
                />
                <label>Business Profile</label>
              </span>
            </span>
            <div className="text-xs mt-2">
              With personal profile you can have maximum of 50 famjams following
              you
            </div>
          </div>
          <div className="m-2 flex justify-center">
            <Link href="/profile">
              <button className="bg-gray text-white px-4 py-2 rounded-md text-xs">
                Save
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
