import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      {/* section 1 */}
      <section className="flex flex-col justify-center text-center bg-[#F7EDE8]">
        <div>
          <div className="font-bold text-8xl mt-16">
            About <br /> <span className="text-[#CD4631]">Pod of Cast</span>
          </div>
          <p className="mt-10 mb-[70px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim
            ad minim veniam–quis.
          </p>
          <button className="font-bold text-black bg-transparent rounded-lg border-2 border-black px-12 py-6 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] mr-[20px]">
            SUBSCRIBE
          </button>
          <button className="font-bold text-white bg-black rounded-lg px-12 py-6 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
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
        <div className="mt-32"></div>
        <div className="my-[120px]"></div>
      </section>
      {/* section 1 end */}

      {/* section 2 */}
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-[59px] mt-[140px]">
          What our listeners say
        </div>
        <p className="text-[22px] mt-5 mb-[70px]">
          Their experience throughout every platform
        </p>
        <Image
          src="/images/cover/img.png"
          alt="image"
          width={1160}
          height={640}
        />
        <div className="font-bold text-[36px] mt-[60px]">About and History</div>
        <div className="flex justify-center gap-10 mt-[80px] border-b border-gray-300">
          <div className="text-[16px] mb-[81px]">
            Eu non <span className="font-bold">diam</span> phasellus vestibulum
            lorem. Fringilla est ullamcorper
            <br /> eget nulla facilisi etiam dignissim. Id diam vel quam
            <span className="font-bold"> elementum <br /> pulvinar.</span>
            <br />
            <br />
            Elementum eu facilisis sed odio morbi quis commodo. <br /> Sed odio
            morbi quis commodo odio aenean sed adipiscing odio <br /> diam. uno
            fablotoson louw uit.
          </div>
          <div className="text-[16px]">
            Lorem ipsum dolor sit amet, <span className="font-bold">consectetur adipiscing</span>  elit. Quam <br />
            pellentesque at bibendum euismod tellus duis cursus dignissim odio. <br />
            Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <span className="font-bold">Amet</span> <br />
            interdum imperdiet laoreet <span className="font-bold">morbi</span> tincidunt fermentum, libero. Ante <br />
            enim eget. <br /><br /> Viverra at porttitor accumsan. <span className="underline hover:cursor-pointer">Orci non here</span>
          </div>
        </div>
        <div className="font-bold text-[36px] mt-[100px]">Founder and Main Host</div>
      </div>
      {/* section 2 end */}
    </div>
  );
};

export default About;
