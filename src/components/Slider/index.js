import Image from "next/image";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Slider = () => {
  return (
    <div className="ml-32">
      <div className="flex gap-5">
        {/* card 1 */}
        <div className="w-[570px] h-[360px] bg-white px-10 text-start rounded-lg">
          <p className="font-bold text-[#CD4631] text-8xl text-end rotate-180 mt-16 mb-[-25px]">
            ,,
          </p>
          <p className="font-medium text-[23px] mb-[40px]">
            Lorem ipsum dolor sit amet consectet <br /> piscing elit, sed do
            eiusmod tempor incidi <br /> ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="flex justify-start items-center">
            <Image
              src="/images/avatar/avatar-1.png"
              alt="avatar-1"
              width={48}
              height={48}
              className="mr-[10px]"
            />
            <p className="font-medium mr-[10px]">Luna lovegood,</p>
            <Image
              src="/images/icon/icon_spotify.png"
              alt="icon_spotify"
              width={16}
              height={16}
              className="mr-[3px]"
            />
            <p className="font-bold">Spotify</p>
          </div>
        </div>
        {/* card 1 end */}

        {/* card 2 */}
        <div className="w-[570px] h-[360px] bg-white px-10 text-start rounded-lg">
          <p className="font-bold text-[#CD4631] text-8xl text-end rotate-180 mt-16 mb-[-25px]">
            ,,
          </p>
          <p className="font-medium text-[23px] mb-[40px]">
            Lorem ipsum dolor sit amet consectet <br /> piscing elit, sed do
            eiusmod tempor incidi <br /> ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="flex justify-start items-center">
            <Image
              src="/images/avatar/avatar-2.png"
              alt="avatar-1"
              width={48}
              height={48}
              className="mr-[10px]"
            />
            <p className="font-medium mr-[10px]">Emily Blunt,</p>
            <Image
              src="/images/icon/icon_google_podcast.png"
              alt="Google-Podcast"
              width={16}
              height={16}
              className="mr-[3px]"
            />
            <p className="font-bold">Google Podcast</p>
          </div>
        </div>
        {/* card 2 end */}

        {/* card 3 */}
        <div className="w-[570px] h-[360px] bg-white px-10 text-start rounded-lg">
          <p className="font-bold text-[#CD4631] text-8xl text-end rotate-180 mt-16 mb-[-25px]">
            ,,
          </p>
          <p className="font-medium text-[23px] mb-[40px]">
            Lorem ipsum dolor sit amet consectet <br /> piscing elit, sed do
            eiusmod tempor incidi <br /> ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="flex justify-start items-center">
            <Image
              src="/images/avatar/avatar-3.png"
              alt="avatar-1"
              width={48}
              height={48}
              className="mr-[10px]"
            />
            <p className="font-medium mr-[10px]">Mia Winters,</p>
            <Image
              src="/images/icon/icon_apple_podcast.png"
              alt="apple_podcast"
              width={16}
              height={16}
              className="mr-[3px]"
            />
            <p className="font-bold">Apple Podcast</p>
          </div>
        </div>
      </div>
      {/* card 3 end */}

      {/* icon slides */}
      <div className="flex mt-[60px] gap-5 mb-[100px]">
        <IoIosArrowDropleft className="text-5xl cursor-pointer" />
        <IoIosArrowDropright className="text-5xl text-[#CD4631] cursor-pointer" />
      </div>
      {/* icon */}
    </div>
  );
};

export default Slider;
