import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Blog = () => {
  return (
    <div className="relative">
      {/* section 1 */}
      <section className="flex flex-col text-center items-center h-[462px] bg-[#F7EDE8]">
        <div className="font-bold text-8xl mt-16">
          Article <br /> and <span className="text-[#CD4631]">News</span>
        </div>
        <p className="mt-10 mb-[70px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad
          minim veniam–quis.
        </p>
        <Image
          src="/images/pattern/pattern_1.png"
          alt="pattern"
          width={550}
          height={550}
          className="absolute top-0 left-[-240px]"
        />
        <Image
          src="/images/pattern/pattern_2.png"
          alt="pattern"
          width={155}
          height={155}
          className="absolute top-36 right-[100px]"
        />
        <div className="mt-32"></div>
        <div className="my-[120px]"></div>
      </section>
      {/* section 1 end */}

      <div className="absolute flex items-center w-[570px] h-[74px] bg-white border border-black rounded-xl top-[425px] left-[35%] px-10 py-5 cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(129,173,200)]">
        <div className="flex items-center">
          <CiSearch className="text-2xl mr-6" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none hover:outline-none"
          />
        </div>
      </div>

      {/* section 2 */}
      <section className="flex flex-col items-center">
        <div className="font-bold text-[59px] mt-[178px]">Latest Posts</div>
        <div className="border-b border-gray-300 mt-[60px]">
          <div className="flex gap-[95px] mb-5">
            <Link href="" className="hover:font-bold hover:text-[#CD4631]">
              All
            </Link>
            <Link href="" className="hover:font-bold hover:text-[#CD4631]">
              Business
            </Link>
            <Link href="" className="hover:font-bold hover:text-[#CD4631]">
              News
            </Link>
            <Link href="" className="hover:font-bold hover:text-[#CD4631]">
              Tips & Trick
            </Link>
            <Link href="" className="hover:font-bold hover:text-[#CD4631]">
              Podcast
            </Link>
            <Link href="" className="hover:font-bold hover:text-[#CD4631]">
              Productivity
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-[99px] mb-[140px]">
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
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minimvel <br /> iam, quis nostrud
                exercitation ullamco laboris...
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
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minimvel <br /> iam, quis nostrud
                exercitation ullamco laboris...
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

          {/* article 3 */}
          <Link href="/singleBlog" className="flex flex-col items-center border-2 border-black rounded-lg p-4 mt-10 mr-7 hover:cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ease-in-out duration-300 hover:scale-[102%]">
            <Image
              src="/images/cover/nature.png"
              alt="setup_podcast"
              width={538}
              height={320}
            />
            <div className="flex flex-col">
              <p className="font-bold mt-10">NEWS</p>
              <div className="font-bold text-4xl text-[#CD4631] mt-[6px]">
                Mother Nature Taking Over
              </div>
              <p className="text-[14px] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minimvel <br /> iam, quis nostrud
                exercitation ullamco laboris...
              </p>
              <div className="flex justify-between items-center border-t border-gray-300 mt-[26px]">
                <div className="flex mt-5 gap-[6px]">
                  <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                    news
                  </div>
                  <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                    nature
                  </div>
                </div>
                <p className="font-bold text-[#4D4D4D] mt-5">Sep 10, 2021</p>
              </div>
            </div>
          </Link>
          {/* article 3 end */}

          {/* article 4 */}
          <Link href="/singleBlog" className="flex flex-col items-center border-2 border-black rounded-lg p-4 mt-10 hover:cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ease-in-out duration-300 hover:scale-[102%]">
            <Image
              src="/images/cover/productive.png"
              alt="setup_podcast"
              width={538}
              height={320}
            />
            <div className="flex flex-col">
              <p className="font-bold mt-10">PRODUCTIVITY</p>
              <div className="font-bold text-4xl text-[#CD4631] mt-[6px]">
                How to Be Productive
              </div>
              <p className="text-[14px] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minimvel <br /> iam, quis nostrud
                exercitation ullamco laboris...
              </p>
              <div className="flex justify-between items-center border-t border-gray-300 mt-[26px]">
                <div className="flex mt-5 gap-[6px]">
                  <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                    productivity
                  </div>
                  <div className="text-[12px] border border-black rounded-lg px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
                    mindset
                  </div>
                </div>
                <p className="font-bold text-[#4D4D4D] mt-5">Sep 8, 2021</p>
              </div>
            </div>
          </Link>
          {/* article 4 end */}
        </div>
      </section>
      {/* section 2 end */}

      {/* section donwload app */}
      <section className="flex flex-col text-center items-center bg-[#EDF3F7]">
        <div className="font-bold text-sm text-[#CD4631] border border-[#CD4631] rounded-lg px-[6px] py-[3px] mt-[140px] mb-[23px]">
          BETA
        </div>
        <div className="relative font-bold text-[59px]">
          Available now <br /> Pod of Cast App
        </div>
        <p className="font-medium text-[22px] mt-5 mb-[100px]">
          We just launched our podcast app!
        </p>
        <Image
          src="/images/pattern/Sparkle_1.png"
          alt="sparkle"
          width={120}
          height={120}
          className="absolute top-[2900px] right-[41%] rotate-90"
        />
        <Image
          src="/images/mockUp/phone_left.png"
          alt="sparkle"
          width={500}
          height={500}
          className="absolute top-[2690px] left-0 "
        />
        <Image
          src="/images/mockUp/phone_right.png"
          alt="sparkle"
          width={400}
          height={400}
          className="absolute top-[2497px] right-0 "
        />
        <button className="W-[210px] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 mt-[90px] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          DOWNLOAD NOW
        </button>
        <p className="mt-6">Content also available on:</p>
        <div className="flex mt-[10px] mb-[140px] gap-5">
          <Image
            src="/images/icon/google-podcast_black.png"
            alt="google_podcast"
            width={24}
            height={25}
          />
          <Image
            src="/images/icon/spotify_black.png"
            alt="spotify"
            width={24}
            height={25}
          />
          <Image
            src="/images/icon/youtube_black.png"
            alt="youtube"
            width={24}
            height={25}
          />
        </div>
      </section>
      {/* section download app */}

      <Image
        src="/images/pattern/navigation.png"
        alt="navigation"
        width={50}
        height={50}
        className="absolute top-[2282px] left-[50%]"
      />

      {/* footer */}
      <section className="mt-[140px]">
        <Footer />
      </section>
      {/* footer end */}
    </div>
  );
};

export default Blog;
