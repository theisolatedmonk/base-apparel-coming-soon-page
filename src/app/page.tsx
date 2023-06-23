import Image from "next/image";
import logo from "@/images/logo.svg";
import heroMobile from "@/images/hero-mobile.jpg";
import heroDesktop from "@/images/hero-desktop.jpg";
import error from "@/images/icon-error.svg";
import arrow from "@/images/icon-arrow.svg";
import DescriptionText from "./DescriptionText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white font-JosefinSans text-[16px] py-8 gap-6">
      <div className="flex  items-start justify-start w-full p-4">
        <Image src={logo} alt={""} className="" />
      </div>

      <Image src={heroMobile} alt={""} />
<DescriptionText/>
    </main>
  );
}
