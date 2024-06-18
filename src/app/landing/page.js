import ScrollBar from "@/components/ScrollBar";
import Slider from "@/components/Slider";
import Supported from "@/components/Supported";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-full relative">

      {/* Section 1 */}
      <section className="flex flex-col justify-center text-center bg-[#F7EDE8]">
        <div>
          <div className="font-bold text-8xl mt-10">
            Your Daily <br /> <span className="text-[#CD4631]">Podcast</span>
          </div>
          <p className="mt-10 mb-[60px]">
            We cover all kinds of categories and <br /> a weekly special guest.
          </p>
          <button className="font-bold text-white bg-black rounded-lg px-12 py-6 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
            SUBSCRIBE
          </button>
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
        <div className="mt-32">
          <ScrollBar />
        </div>
        <div className="my-[120px]">
          <Supported />
        </div>
      </section>
      {/* Section 1 end */}

      <Image
        src="/images/pattern/navigation.png"
        alt="navigation"
        width={50}
        height={50}
        className="absolute top-[1270px] left-[50%]"
      />

      {/* Section 2 */}
      <section className="relative flex flex-col justify-center text-center items-center">
        <div className="font-bold text-6xl mt-[170px]">
          Talk. Listen. Get inspired <br /> by every minute of it.
        </div>
        <div className="flex gap-56 mt-[100px]">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/illustration/thinking.png"
              alt="thinking"
              width={275}
              height={275}
            />
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Curabitur ac ultrices odio.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Image
              src="/images/illustration/idea.png"
              alt="idea"
              width={150}
              height={150}
              className="mt-20"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Curabitur ac ultrices odio.{" "}
            </p>
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
            One of the best daily podcasts that <br />
            covers every topic on Spotify.
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
      </section>
      {/* Section 2 end */}

      <Image
        src="/images/pattern/navigation_1.png"
        alt="navigation_1"
        width={50}
        height={50}
        className="absolute top-[2675px] left-[50%]"
      />

      {/* section 3 */}
      <section className="flex flex-col text-center bg-[#EDF3F7]">
            <div className="font-bold text-[59px] mt-[150px] ">What our listeners say</div>
            <p className="font-medium text-[22px] mt-5 mb-[100px]">Their experience throughout every platform</p>
            <Slider />
      </section>
    </div>
  );
};

export default Landing;
