import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const About = () => {
  return (
    <div className="relative">
      {/* section 1 */}
      <section className="flex flex-col text-center items-center bg-[#F7EDE8]">
        <div className="font-bold text-8xl mt-16">
          About <br /> <span className="text-[#CD4631]">Pod of Cast</span>
        </div>
        <p className="mt-10 mb-[70px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad
          minim veniam–quis.
        </p>
        <div className="flex">
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

      <div className="absolute flex top-[750px] left-[350px]">
        <div className="border-2 border-black text-center bg-white px-[94px] py-[59px] mr-5 rounded-lg cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(205,70,49)] ease-in-out duration-300 hover:scale-[102%]">
            <div className="font-bold text-[59px]"><span className="text-[#CD4631] mb-5">76</span>K</div>
            <p className="text-[#4D4D4D]">Community Members</p>
        </div>
        <div className="w-[373px] border-2 border-black text-center bg-white px-[94px] py-[59px] mr-5 rounded-lg cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(205,70,49)] ease-in-out duration-300 hover:scale-[102%]">
            <div className="font-bold text-[59px]"><span className="text-[#CD4631] mb-5">128</span>K</div>
            <p className="text-[#4D4D4D]">Podcast Subscribers</p>
        </div>
        <div className="w-[373px] border-2 border-black text-center bg-white px-[94px] py-[59px] mr-5 rounded-lg cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(205,70,49)] ease-in-out duration-300 hover:scale-[102%]">
            <div className="font-bold text-[59px]"><span className="text-[#CD4631] mb-5">59</span>K</div>
            <p className="text-[#4D4D4D]">Daily Listeners</p>
        </div>
      </div>

      <Image src="/images/pattern/pattern_3.png" alt="pattern-3" width={120} height={120} className="absolute top-[799px] right-0"/>

      {/* section 2 */}
      <div className="relative flex flex-col justify-center items-center">
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
        <Image src="/images/pattern/Sparkle_1.png" alt="Sparkle" width={120} height={120} className="absolute top-[990px] left-[700px]"/>
        <div className="font-bold text-[36px] mt-[60px]">About and History</div>
        <div className="flex justify-center gap-10 mt-[80px] border-b border-gray-300">
          <div className="text-[16px] mb-[81px]">
            Eu non <span className="font-bold">diam</span> phasellus vestibulum
            lorem. Fringilla est ullamcorper
            <br /> eget nulla facilisi etiam dignissim. Id diam vel quam
            <span className="font-bold">
              {" "}
              elementum <br /> pulvinar.
            </span>
            <br />
            <br />
            Elementum eu facilisis sed odio morbi quis commodo. <br /> Sed odio
            morbi quis commodo odio aenean sed adipiscing odio <br /> diam. uno
            fablotoson louw uit.
          </div>
          <div className="text-[16px]">
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-bold">consectetur adipiscing</span> elit. Quam{" "}
            <br />
            pellentesque at bibendum euismod tellus duis cursus dignissim odio.{" "}
            <br />
            Sit vulputate et integer in. Sit vel, senectus iaculis morbi.{" "}
            <span className="font-bold">Amet</span> <br />
            interdum imperdiet laoreet <span className="font-bold">
              morbi
            </span>{" "}
            tincidunt fermentum, libero. Ante <br />
            enim eget. <br />
            <br /> Viverra at porttitor accumsan.{" "}
            <span className="underline hover:cursor-pointer">
              Orci non here
            </span>
          </div>
        </div>
        
        <Image src="/images/pattern/pattern_4_blue.png" alt="sparkle" width={120} height={120} className="absolute top-[1470px] right-[35%]"/>

        <div className="font-bold text-[36px] mt-[100px]">
          Founder and Main Host
        </div>
        <div className="flex mt-[80px] mb-[140px] gap-5">
          {/* box 1 */}
          <div className=" relative flex items-end border-2 border-black rounded-lg p-4 hover:cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(0,0,1)] ease-in-out duration-300 hover:scale-[102%]">
            <Image src="/images/illustration/Face-1.png" alt="smile" width={130} height={130} className="absolute top-5 right-1 rotate-12"/>
            <Image
              src="/images/avatar/avatar_host_1.png"
              alt="host_1"
              width={259}
              height={488}
            />
            <div className="ml-5">
              <div className="border-b border-gray-300">
                <p>host 1</p>
                <div className="font-bold text-[36px]">
                  Porter <br /> Severus
                </div>
                <p className="text-[14px] mb-5">
                  Lorem ipsum dolor sit amet con <br />
                  sectet piscing elit, sed do eiusmod <br /> tempor rarylet
                  podofcast.
                </p>
              </div>
              <div>
                <div className="flex justify-end items-center gap-[10px] mt-[10px]">
                  <p className="text-[12px] font-bold">follow me:</p>
                  <Image
                    src="/images/icon/tiktok_fullColor.png"
                    alt="tiktok"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/icon/twitter_fullColor.png"
                    alt="tiktok"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/icon/instagram_fullColor.png"
                    alt="tiktok"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* box 1 end */}

          {/* box 2 */}
          <div className="relative flex items-end border-2 border-black rounded-lg p-4 hover:cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(0,0,1)] ease-in-out duration-300 hover:scale-[102%]">
            <Image src="/images/illustration/Star.png" alt="smile" width={120} height={120} className="absolute top-5 right-1 rotate-12"/>
            <Image
              src="/images/avatar/avatar_host_2.png"
              alt="host_2"
              width={259}
              height={488}
            />
            <div className="ml-5">
              <div className="border-b border-gray-300">
                <p>host 1</p>
                <div className="font-bold text-[36px]">
                  Porter <br /> Severus
                </div>
                <p className="text-[14px] mb-5">
                  Lorem ipsum dolor sit amet con <br />
                  sectet piscing elit, sed do eiusmod <br /> tempor rarylet
                  podofcast.
                </p>
              </div>
              <div>
                <div className="flex justify-end items-center gap-[10px] mt-[10px]">
                  <p className="text-[12px] font-bold">follow me:</p>
                  <Image
                    src="/images/icon/tiktok_fullColor.png"
                    alt="tiktok"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/icon/twitter_fullColor.png"
                    alt="tiktok"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/images/icon/instagram_fullColor.png"
                    alt="tiktok"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* box 2 end */}
        </div>
      </div>
      {/* section 2 end */}

      {/* section 3 */}
      <section className="flex flex-col text-center bg-[#F7EDE8]">
        <div className="font-bold text-[59px] mt-[140px] ">Our Sponsor</div>
        <p className="font-medium text-[22px] mt-5 mb-[100px]">
          Our current official sponsor
        </p>
        <div className="ml-32">
          <div className="flex gap-5">
            {/* card 1 */}
            <div className="w-[570px] h-[245px] flex flex-col justify-center items-center border border-black bg-white px-[17px] text-start rounded-lg">
              <Link href="" className="border-b border-gray-300">
                <Image
                  src="/images/icon/GPodcast_largeIcon.png"
                  alt="GooglePodcast"
                  width={300}
                  height={54}
                  className="mb-5"
                />
              </Link>
              <p className="font-medium text-[14px] mt-[30px]">
                Quis dictum cursus faucibus mattis dignissim. Pellentes <br />{" "}
                que purus in sed sodales in mauris molestie. Eleifend estcon{" "}
                <br />
                sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>
            {/* card 1 end */}

            {/* card 2 */}
            <div className="w-[570px] h-[245px] flex flex-col justify-center items-center border border-black bg-white px-[17px] text-start rounded-lg">
              <Link href="" className="border-b border-gray-300">
                <Image
                  src="/images/icon/Spotify_largeIcon.png"
                  alt="Spotify"
                  width={193}
                  height={53}
                  className="mb-5"
                />
              </Link>
              <p className="font-medium text-[14px] mt-[30px]">
                Quis dictum cursus faucibus mattis dignissim. Pellentes <br />{" "}
                que purus in sed sodales in mauris molestie. Eleifend estcon{" "}
                <br />
                sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>
            {/* card 2 end */}

            {/* card 3 */}
            <div className="w-[570px] h-[245px] flex flex-col justify-center items-center border border-black bg-white px-[17px] text-start rounded-lg">
              <Link href="" className="border-b border-gray-300">
                <Image
                  src="/images/icon/Youtube_largeIcon.png"
                  alt="Youtube"
                  width={225}
                  height={53}
                  className="mb-5"
                />
              </Link>
              <p className="font-medium text-[14px] mt-[30px]">
                Quis dictum cursus faucibus mattis dignissim. Pellentes <br />{" "}
                que purus in sed sodales in mauris molestie. Eleifend estcon{" "}
                <br />
                sctetur interdum eu in auctor. Gravida leo et.
              </p>
            </div>
            {/* card 3 end */}
          </div>
          {/* icon slides */}
          <div className="flex mt-[60px] gap-5 mb-[100px]">
            <IoIosArrowDropleft className="text-5xl hover:text-[#CD4631] cursor-pointer" />
            <IoIosArrowDropright className="text-5xl hover:text-[#CD4631] cursor-pointer" />
          </div>
          {/* icon */}
        </div>
      </section>
      {/* section 3 end */}

      {/* section 4 */}
      <section className="relative flex flex-col items-center text-center">
        <div className="font-bold text-[59px] mt-[140px] ">Get in touch</div>
        <p className="font-medium text-[22px] mt-5 mb-[100px]">
          Send your message to us
        </p>
        <Image src="/images/illustration/Scribble.png" alt="scribble" width={67} height={23} className="absolute top-[105px] right-[39%] rotate-12"/>
        <Image src="/images/illustration/Shining_stars.png" alt="scribble" width={78} height={78} className="absolute top-[385px] right-[13%]"/>
        <Image src="/images/pattern/pattern_3.png" alt="scribble" width={120} height={120} className="absolute top-[800px] left-5"/>
        <ContactForm />
      </section>
      {/* section 4 end */}

      <Image
        src="/images/pattern/navigation.png"
        alt="navigation"
        width={50}
        height={50}
        className="absolute top-[5090px] left-[50%]"
      />

      {/* section 5 */}
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
          className="absolute top-[5710px] right-[41%] rotate-90"
        />
        <Image
          src="/images/mockUp/phone_left.png"
          alt="sparkle"
          width={500}
          height={500}
          className="absolute top-[5495px] left-0 "
        />
        <Image
          src="/images/mockUp/phone_right.png"
          alt="sparkle"
          width={400}
          height={400}
          className="absolute top-[5303px] right-0 "
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
      {/* section 5 end */}

      {/* footer */}
      <section className="mt-[140px]">
        <Footer />
      </section>
      {/* footer end */}
    </div>
  );
};

export default About;
