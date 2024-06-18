import Image from "next/image";

const Membership = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt={description} height={78} width={78} />
      <div className="font-bold text-[22px] mt-[30px]">{title}</div>
      <p className="mt-[10px] mb-20">
        Lorem ipsum dolor sit amet consectet pis <br /> cing elit, sed do
        eiusmod tempor.
      </p>
    </div>
  );
};

export default Membership;
