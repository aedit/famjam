import Image from "next/image";
export default function UserActivity() {
  return (
    <div className="mb-3">
      <div className="flex">
        <span>
          <Image
            className="rounded-full"
            alt="image"
            src="https://unsplash.it/200"
            width="30"
            height="30"
          ></Image>
        </span>
        <span className="text-sm text-gray ml-2">
          <span className="font-semibold mr-2">@username</span>
          <span>Commenting on my profile, just for testing</span>
        </span>
      </div>
    </div>
  );
}
