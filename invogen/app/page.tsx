import Image from "next/image";
//logo import
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import InvoGenLogo from "./ui/invogen-logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-white p-4 md:h-52">
        <InvoGenLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-200/50 px-6 py-10 md:w-2/5 md:px-20">
          <p>
            <strong>Welcome to InvoGen</strong> Next generation Invoice billing
            Software
          </p>
          <Link href="/login">
            <span>Log In</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div>
          {/* <Image></Image> */}
          {/* <Image></Image> */}
        </div>
      </div>
    </main>
  );
}
