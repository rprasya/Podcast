import Image from "next/image";

const ScrollBar = () => {
  return (
    <div className="overflow-x-scroll flex">
        <Image src="/images/cover/cover.png" alt="" width={373} height={373} className="mx-7" />
        <Image src="/images/cover/cover-1.png" alt="" width={373} height={373} className="mx-7" />
        <Image src="/images/cover/cover-2.png" alt="" width={373} height={373} className="mx-7" />
        <Image src="/images/cover/cover-3.png" alt="" width={373} height={373} className="mx-7" />
        <Image src="/images/cover/cover-4.png" alt="" width={373} height={373} className="mx-7" />
    </div>
  );
};

export default ScrollBar;
