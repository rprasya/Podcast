import ScrollBar from "@/components/ScrollBar";
import Supported from "@/components/Supported";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative">
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

      <Image src="/images/pattern/navigation.png" alt="navigation" width={50} height={50} className="absolute top-[1270px] left-[50%]"/>

      {/* Section 2 */}
      <section className="text-center">
        <div className="font-bold text-6xl mt-[140px]">Talk. Listen. Get inspired <br /> by every minute of it.</div>
        <div className="flex justify-center items-center mt-[100px]">
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/illustration/thinking.png" alt="thinking" width={275} height={275} />
            <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur ac ultrices odio. </p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <Image src="/images/illustration/idea.png" alt="idea" width={150} height={150} />
            <p className="mt-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur ac ultrices odio. </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-[#CD4631] text-9xl">,,</p>
          <p className="font-bold text-4xl">One of the best daily podcasts that <br />
          covers every topic on Spotify.</p>
          <div className="flex justify-center items-center">
            <Image src="/images/avatar/avatar.png" alt="avatar" width={48} height={48}/>
            <p>John Smith,</p>
            <div>
              <Image src="/images/icon/icon_spotify.png" alt="spotify" width={16} height={16}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
