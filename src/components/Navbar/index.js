import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-[#F7EDE8] px-[140px] pt-[24px]">
      <Link href="/">
        <Image
          src="/images/icon/logo.png"
          alt="Vercel Logo"
          className=""
          width={74}
          height={74}
        />
      </Link>
      <div className="flex font-bold gap-[60px]">
        <Link href="/">Episode</Link>
        <Link href="/about">About</Link>
        <Link href="/">More</Link>
      </div>
      <div>
        <button className="font-bold border border-black rounded-lg px-6 py-3 mr-5">RECENT EPISODE</button>
        <button className="font-bold text-white bg-black rounded-lg px-6 py-3 hover:shadow-[5px_5px_0px_0px_rgba(185,178,174)]">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Navbar;
