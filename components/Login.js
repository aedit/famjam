import "./login.css";
import Link from "next/link";

export default function Login({ textOne, textTwo, type }) {
  return (
    <main className="login-area">
      <div className="w-full">
        <div className="text-6xl flex flex-col font-bold mb-32">
          <span className="text-gray">{textOne}</span>
          <span className="text-red">{textTwo}</span>
        </div>
        {type === "Login" ? (
          <Link href="/">
            <div className="text-sm text-gray border-solid border-2 rounded-md border-gray shadow-md text-center py-4 cursor-pointer">
              📞 Continue with Phone
            </div>
          </Link>
        ) : (
          <div className="flex flex-col">
            <input className="mb-4 border" type="text" name="" id="" />
            <button className="bg-gray text-white">Next</button>
          </div>
        )}
      </div>
    </main>
  );
}
