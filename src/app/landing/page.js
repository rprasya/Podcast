import Article from "@/components/Article";
import Episode from "@/components/Episode";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";
import ScrollBar from "@/components/ScrollBar";
import Slider from "@/components/Slider";
import Supported from "@/components/Supported";
import Image from "next/image";
import Link from "next/link";

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
        <div className="font-bold text-6xl mt-[140px]">
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
        className="absolute top-[2640px] left-[50%]"
      />

      {/* section 3 */}
      <section className="flex flex-col text-center bg-[#EDF3F7]">
        <div className="font-bold text-[59px] mt-[140px] ">
          What our listeners say
        </div>
        <p className="font-medium text-[22px] mt-5 mb-[100px]">
          Their experience throughout every platform
        </p>
        <Slider />
      </section>
      {/* section 3 end */}

      <Image
        src="/images/pattern/navigation_1.png"
        alt="navigation_1"
        width={50}
        height={50}
        className="absolute top-[3585px] left-[50%]"
      />

      {/* section 4 */}
      <section className="flex flex-col text-center">
        <div className="relative font-bold text-[59px] mt-[140px]">
          Membership benefits
          <Image
            src="/images/pattern/pattern_4.png"
            alt="..."
            width={240}
            height={240}
            className="absolute top-[-130px] right-[515px]"
          />
        </div>
        <p className="font-medium text-[22px] mt-5 mb-[100px]">
          Become our sponsor and get all benefits
        </p>
        <div className="grid grid-cols-3 mt-[80px]">
          <Membership
            image="/images/illustration/Scribble.png"
            title="Topic by Request"
            description="topic"
          />
          <Membership
            image="/images/illustration/Shining_stars.png"
            title="Exclusive Content"
            description="content"
          />
          <Membership
            image="/images/illustration/Face-1.png"
            title="Join the Community"
            description="community"
          />
          <Membership
            image="/images/illustration/Face-5.png"
            title="Livestreaming Access"
            description="access"
          />
          <Membership
            image="/images/illustration/Fire.png"
            title="Exclusive Episodes & Merch"
            description="exclusive"
          />
          <Membership
            image="/images/illustration/Star.png"
            title="And much more!"
            description="more"
          />
        </div>
        <div className="mt-10 mb-[130px]">
          <button className="W-[170] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
            SEE PRICING
          </button>
        </div>
      </section>
      {/* section 4 end */}

      <Image
        src="/images/pattern/navigation_1.png"
        alt="navigation_1"
        width={50}
        height={50}
        className="absolute top-[4840px] left-[50%]"
      />

      {/* section 5 */}
      <section className="flex flex-col items-center bg-[#F7EDE8]">
        <div className="relative font-bold text-[59px] mt-[140px]">
          Recent Episodes
        </div>
        <p className="font-medium text-[22px] mt-5 mb-[100px]">
          Available on your favorite platform
        </p>
        <div className="">
          <Episode />
        </div>
        <div>
          <button className="W-[253] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 mt-[100px] mb-[140px] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
            BROWSE ALL EPISODES
          </button>
        </div>
      </section>
      {/* section 5 end */}

      <Image
        src="/images/pattern/navigation_1.png"
        alt="navigation_1"
        width={50}
        height={50}
        className="absolute top-[6405px] left-[50%]"
      />

      {/* section 6 */}
      <section className="relative flex flex-col items-center">
        <div className="relative font-bold text-[59px] mt-[140px]">
          Become Our Sponsor
        </div>
        <p className="font-medium text-[22px] mt-5 mb-[100px]">
          Get exclusive episodes, merch and more
        </p>
        <Image
          src="/images/pattern/Sparkle_1.png"
          alt="sparkle"
          width={120}
          height={120}
          className="absolute top-[90px] right-[65%]"
        />
        <Image
          src="/images/pattern/Star.png"
          alt="star"
          width={150}
          height={150}
          className="absolute top-[320px] right-[15%]"
        />
        <Image
          src="/images/pattern/pattern_3_blue.png"
          alt="pattern_3_blue"
          width={120}
          height={120}
          className="absolute top-[990px] left-[15%] "
        />
        <div className="flex gap-5 mb-[140px]">
          {/* card 1 */}
          <div className="group">
            {/* box 1 */}
            <div className="border-2 border-black rounded-lg pt-[60px] pb-[30px] px-10 mb-5 group-hover:bg-[#F7EDE8] ">
              <div className="font-bold text-[36px] mb-5">Member</div>
              <p>
                Lorem ipsum dolor sit amet consectet <br /> cing elit, sed do
                eiusmod tempor.
              </p>
              <div className="flex justify-between items-center mt-[80px]">
                <button className="W-[160px] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                  SUBSCRIBE
                </button>
                <p className="font-bold text-[22px] text-[#CD4631]">
                  $9.99 <br />
                  <span className="text-base text-[#4D4D4D]">/month</span>
                </p>
              </div>
            </div>
            {/* box 2 */}
            <div className="border-2 border-black rounded-lg p-10 group-hover:bg-[#F7EDE8]">
              <p className="font-bold text-[#4D4D4D] mb-5">What’s included:</p>
              <ul className="mb-[50px]">
                <li className="mb-[10px]">• Exclusive Content</li>
                <li className="mb-[10px]">• 5% Discount on Merch</li>
                <li className="mb-[10px]">• Join the Community</li>
                <li>• Livestreaming Access</li>
              </ul>
            </div>
          </div>
          {/* card 1 end */}

          {/* card 2 */}
          <div className="group">
            {/* box 1 */}
            <div className="border-2 border-black rounded-lg pt-[60px] pb-[30px] px-10 mb-5 group-hover:bg-[#F7EDE8] ">
              <div className="flex justify-between items-center mb-5">
                <div className="font-bold text-[36px]">Family</div>
                <div className="font-bold text-sm text-white bg-[#CD4631] rounded-lg px-[6px] py-[3px]">
                  MOST POPULAR
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectet <br /> cing elit, sed do
                eiusmod tempor.
              </p>
              <div className="flex justify-between items-center mt-[80px]">
                <button className="W-[160px] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                  SUBSCRIBE
                </button>
                <p className="font-bold text-[22px] text-[#CD4631]">
                  $14.99 <br />
                  <span className="text-base text-[#4D4D4D]">/month</span>
                </p>
              </div>
            </div>
            {/* box 2 */}
            <div className="border-2 border-black rounded-lg p-10 group-hover:bg-[#F7EDE8]">
              <p className="font-bold text-[#4D4D4D] mb-5">What’s included:</p>
              <ul className="mb-[16px]">
                <li className="mb-[10px]">• Everything in Tier 1</li>
                <li className="mb-[10px]">• Free tickets to Events</li>
                <li className="mb-[10px]">• Limited Edition Merch</li>
                <li className="mb-[10px]">• Promote your Product</li>
                <li>• Request Topic</li>
              </ul>
            </div>
          </div>
          {/* card 2 end */}

          {/* card 3 */}
          <div className="group">
            {/* box 1 */}
            <div className="border-2 border-black rounded-lg pt-[60px] pb-[30px] px-10 mb-5 group-hover:bg-[#F7EDE8] ">
              <div className="font-bold text-[36px] mb-5">Official</div>
              <p>
                Lorem ipsum dolor sit amet consectet <br /> cing elit, sed do
                eiusmod tempor.
              </p>
              <div className="flex justify-between items-center mt-[80px]">
                <button className="W-[160px] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                  SUBSCRIBE
                </button>
                <p className="font-bold text-[22px] text-[#CD4631]">
                  $29.99 <br />
                  <span className="text-base text-[#4D4D4D]">/month</span>
                </p>
              </div>
            </div>
            {/* box 2 */}
            <div className="border-2 border-black rounded-lg p-10 group-hover:bg-[#F7EDE8]">
              <p className="font-bold text-[#4D4D4D] mb-5">What’s included:</p>
              <ul className="mb-[16px]">
                <li className="mb-[10px]">• Everything in Tier 2</li>
                <li className="mb-[10px]">
                  • Exclusive Badge on Livestreaming
                </li>
                <li className="mb-[10px]">• Become an Official Sponsor</li>
                <li className="mb-[10px]">• Early Access to All Episodes</li>
                <li>• Free Stikers and Merch</li>
              </ul>
            </div>
          </div>
          {/* card 3 end */}
        </div>
      </section>
      {/* section 6 end */}

      <Image
        src="/images/pattern/navigation_1.png"
        alt="navigation_1"
        width={50}
        height={50}
        className="absolute top-[7615px] left-[50%]"
      />

      {/* section 7 */}
      <section className="relative flex flex-col items-center">
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
        <Link href="/blog" className="flex items-center W-[170px] h-[62px] font-bold text-white bg-black rounded-lg px-6 py-3 mb-[140px] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          BROWSER ALL
        </Link>
      </section>
      {/* section 7 end */}

      <Image
        src="/images/pattern/navigation.png"
        alt="navigation"
        width={50}
        height={50}
        className="absolute top-[8925px] left-[50%]"
      />

      {/* section download app  */}
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
          className="absolute top-[9550px] right-[41%] rotate-90"
        />
        <Image
          src="/images/mockUp/phone_left.png"
          alt="sparkle"
          width={500}
          height={500}
          className="absolute top-[9332px] left-0 "
        />
        <Image
          src="/images/mockUp/phone_right.png"
          alt="sparkle"
          width={400}
          height={400}
          className="absolute top-[9139px] right-0 "
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
      {/* section download app end */}

      {/* footer */}
      <section className="mt-[140px]">
        <Footer />
      </section>
      {/* footer end */}
    </div>
  );
};

export default Landing;
