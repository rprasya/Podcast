import Image from "next/image";
import Link from "next/link";

const Article = () => {
  return (
    <div className="flex mb-[100px]">
      {/* article 1 */}
      <Link href="/singleBlog" className="flex flex-col items-center border-2 border-black rounded-lg p-4 mr-7 hover:cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ease-in-out duration-300 hover:scale-[102%]">
        <Image
          src="/images/cover/Setup_Podcast.png"
          alt="setup_podcast"
          width={538}
          height={320}
        />
        <div className="flex flex-col">
          <p className="font-bold mt-10">PODCAST</p>
          <div className="font-bold text-4xl text-[#CD4631] mt-[6px]">
            Setup your own podcast
          </div>
          <p className="text-[14px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minimvel <br /> iam, quis nostrud exercitation ullamco
            laboris...
          </p>
          <div className="flex justify-between items-center border-t border-gray-300 mt-[26px]">
            <div className="flex justify-center items-center mt-5 gap-[6px]">
              <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                business
              </div>
              <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                startup
              </div>
            </div>
            <p className="font-bold text-[#4D4D4D] mt-5">Sep 14, 2021</p>
          </div>
        </div>
      </Link>
      {/* article 1 end */}

      {/* article 2 */}
      <Link href="/singleBlog" className="flex flex-col items-center border-2 border-black rounded-lg p-4 hover:cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ease-in-out duration-300 hover:scale-[102%]">
        <Image
          src="/images/cover/Doodle_Artwork.png"
          alt="setup_podcast"
          width={538}
          height={320}
        />
        <div className="flex flex-col">
          <p className="font-bold mt-10">TIPS & TRICK</p>
          <div className="font-bold text-4xl text-[#CD4631] mt-[6px]">
          Doodle Artwork 101
          </div>
          <p className="text-[14px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minimvel <br /> iam, quis nostrud exercitation ullamco
            laboris...
          </p>
          <div className="flex justify-between items-center border-t border-gray-300 mt-[26px]">
            <div className="flex mt-5 gap-[6px]">
              <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                art
              </div>
              <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                creative
              </div>
              <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                tips and trick
              </div>
            </div>
            <p className="font-bold text-[#4D4D4D] mt-5">Sep 12, 2021</p>
          </div>
        </div>
      </Link>
      {/* article 2 end */}
    </div>
  );
};
export default Article;
