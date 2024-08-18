import Image from "next/image";
import logo from "../../public/logo-i.png";

export default function InvoGenLogo() {
  return (
    <div className="flex flex-row items-center leading-none mt-2">
      <Image src={logo} alt="InvoGen" width={80} height={80} />
      <p className=" text-teal-800 text-[40px]">InvoGen</p>
    </div>
  );
}
