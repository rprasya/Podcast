import Article from "@/components/Article";
import Footer from "@/components/Footer";
import ListExample from "@/components/ListExample";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const singleBlog = () => {
  return (
    <div className="relative">
      {/* section 1 */}
      <section className="flex flex-col text-center items-center h-[473px] bg-[#F7EDE8]">
        <div className="flex justify-between w-[1160px] mt-20">
          <Link href="/blog">
            {" "}
            &lt; <span className="ml-10px">Back to articles</span>
          </Link>
          <p>Sep 12, 2021</p>
        </div>
        <p className="font-bold text-[#CD4631] mt-[47px]">TIPS & TRICKS</p>
        <div className="font-bold text-[59px] mt-[10px] mb-10">
          Doodle Artwork 101
        </div>
        <div className="flex">
          <Link
            href=""
            className="text-[12px] border border-black rounded px-[12px] py-[6px] mr-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white"
          >
            art
          </Link>
          <Link
            href=""
            className="text-[12px] border border-black rounded px-[12px] py-[6px] mr-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white"
          >
            tips and trick
          </Link>
          <Link
            href=""
            className="text-[12px] border border-black rounded px-[12px] py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white"
          >
            creative
          </Link>
        </div>
        <div className="flex mt-10">
          <Link href="" className="text-xl hover:text-[#CD4631] mr-[25px]">
            <FaTwitter />
          </Link>
          <Link href="" className="text-xl hover:text-[#CD4631] mr-[25px]">
            <FaInstagram />
          </Link>
          <Link href="" className="text-xl hover:text-[#CD4631]">
            <FaTiktok />
          </Link>
        </div>
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

      {/* section 2 */}
      <section className="relative flex flex-col items-center">
        <Image
          src="/images/cover/Doodle_Artwork_Large.png"
          alt="doodle_artwork"
          width={1440}
          height={960}
        />
        <Image
          src="/images/pattern/pattern_4_blue.png"
          alt="doodle_artwork"
          width={120}
          height={120}
          className="absolute top-[1000px] left-[24%] rotate-[280deg]"
        />
        <div className="font-bold text-[36px] mt-[100px]">
          Doodle for our podcast background room
        </div>
        <div className="flex justify-center gap-10 mt-[80px] border-b border-gray-300">
          <div className="text-[16px] mb-[81px]">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-bold">consectetur adipiscing</span> elit. Quam{" "}
            <br />
            pellentesque at bibendum euismod tellus duis cursus dignissim odio.{" "}
            <br />
            Sit vulputate et integer in.
            <br />
            <br />
            Sit vel, senectus iaculis morbi.{" "}
            <span className="font-bold">Amet </span> interdum imperdiet laoreet{" "}
            <br />
            <span className="font-bold"> morbi</span> tincidunt fermentum,
            libero. Ante enim eget viverra at porttitor <br /> accumsan.{" "}
            <span className="hover:underline cursor-pointer">Orci non here</span>
          </div>
          <div className="text-[16px]">
            Quis dictum cursus faucibus mattis dignissim. Pellentes <br /> que
            purus in sed sodales in mauris molestie. Eleifend est cons <br />{" "}
            ctetur interdum eu in auctor. Gravida leo et.
          </div>
        </div>
        <div className="relative flex flex-col justify-around items-center w-[1160px] h-[366px] bg-[#F7EDE8] rounded-md my-[140px]">
          <Image
            src="/images/pattern/pattern_3.png"
            alt="pattern3"
            width={120}
            height={120}
            className="absolute top-48 left-[-60px]"
          />
          <Image
            src="/images/pattern/Star.png"
            alt="star"
            width={170}
            height={170}
            className="absolute top-[-60px] right-[-55px]"
          />
          <p className="font-bold text-[#CD4631] text-8xl rotate-180 mt-8 mb-[-80px]">
            ,,
          </p>
          <p className="font-bold text-4xl mt-12 mb-7">
            Quote example goes in here...
          </p>
          <div className="flex justify-center items-center mb-5">
            <Image
              src="/images/avatar/avatar.png"
              alt="avatar"
              width={48}
              height={48}
            />
            <p className="mx-[10px]">John Smith,</p>
            <Image
              src="/images/icon/icon_spotify.png"
              alt="spotify"
              width={16}
              height={16}
              className="mr-[8px]"
            />
            <p className="font-bold">Social Community Manager</p>
          </div>
        </div>

        {/* list example  */}
        <ListExample />
        {/* list example end */}

        <div className="flex mt-[131px] mb-[140px]">
            <div className="text-center mr-5">
                <Image src="/images/illustration/Doodle.png" alt="doodle"width={570} height={570} />
                <p className="mt-5">this is an image with a caption example</p>
            </div>
            <div className="text-center">
                <Image src="/images/illustration/Doodle_2.png" alt="doodle"width={570} height={570} />
                <p className="mt-5 cursor-pointer hover:underline hover:text-[#CD4631]">Download here</p>
            </div>
        </div>
      </section>
      {/* section 2 end */}

      {/* section 3 */}
      <section className="relative flex flex-col items-center bg-[#F7EDE8]">
        <div className="relative font-bold text-[59px] mt-[140px]">
          Article and News
        </div>
        <p className="font-medium text-[22px] mt-5 mb-[100px]">
          News, tips, tricks and more
        </p>
        <Image
          src="/images/illustration/Star_2.png"
          alt="pattern_4"
          width={180}
          height={180}
          className="absolute top-[300px] left-[14%] rotate-[340deg]"
        />
        <Image
          src="/images/pattern/pattern_4.png"
          alt="pattern_4"
          width={240}
          height={240}
          className="absolute rotate-[120deg] top-[920px] right-[11%]"
        />
        <Article />
        <Link href="/blog" className="flex items-center W-[170px] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 mb-[140px] hover:shadow-[5px_5px_0px_0px_rgba(185,178,174)]">
          BROWSER ALL
        </Link>
      </section>
      {/* section 3 end */}

      {/* section download app */}
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
          className="absolute top-[5470px] right-[41%] rotate-90"
        />
        <Image
          src="/images/mockUp/phone_left.png"
          alt="sparkle"
          width={500}
          height={500}
          className="absolute top-[5260px] left-0 "
        />
        <Image
          src="/images/mockUp/phone_right.png"
          alt="sparkle"
          width={400}
          height={400}
          className="absolute top-[5067px] right-0 "
        />
        <button className="W-[210px] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 mt-[90px] hover:shadow-[5px_5px_0px_0px_rgba(185,178,174)]">
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
      {/* section download app end */}

      {/* footer */}
      <section className="mt-[140px]">
        <Footer />
      </section>
      {/* footer end */}
    </div>
  );
};

export default singleBlog;
