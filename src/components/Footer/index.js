import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex ">
        <div className="">
          <div className="flex items-end">
            <Image
              src="/images/icon/logo.png"
              alt="logo"
              width={74}
              height={74}
            />
            <p className="text-[14px] ml-[24px]">©2021.</p>
          </div>
          <p className="text-[14px] my-[40px]">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
          <div className="flex gap-[25px]">
            <FaTwitter className="text-[24px] hover:text-[#CD4631]" />
            <FaInstagram className="text-[24px] hover:text-[#CD4631]" />
            <FaTiktok className="text-[24px] hover:text-[#CD4631]" />
          </div>
        </div>

        <div className="flex mx-[250px]">
          <div className="mr-[93px]">
            <p className="font-medium hover:cursor-pointer hover:text-[#CD4631] mb-5">
              About
            </p>
            <p className="font-medium hover:cursor-pointer hover:text-[#CD4631] mb-5">
              Testimonials
            </p>
            <p className="font-medium hover:cursor-pointer hover:text-[#CD4631]">
              Features
            </p>
          </div>
          <div>
            <p className="font-medium hover:cursor-pointer hover:text-[#CD4631] mb-5">
              Episodes
            </p>
            <p className="font-medium hover:cursor-pointer hover:text-[#CD4631] mb-5">
              Pricing
            </p>
            <p className="font-medium hover:cursor-pointer hover:text-[#CD4631] mb-5">
              Blog
            </p>
          </div>
        </div>

        <div>
          <p className="mb-[29px]">Listen to episodes on your fav platform:</p>
          <div className="flex gap-[38px]">
            <Link href="https://podcasts.google.com/">
              <Image
                src="/images/icon/Google-Podcast.png"
                alt="google-podcast"
                width={122}
                height={22}
              />
            </Link>
            <Link href="https://open.spotify.com/">
              <Image
                src="/images/icon/Spotify.png"
                alt="Spotify"
                width={80}
                height={22}
              />
            </Link>
            <Link href="https://www.youtube.com/">
              <Image
                src="/images/icon/Youtube.png"
                alt="Youtube"
                width={94}
                height={22}
              />
            </Link>
          </div>
          <div>
            <p className="mt-[60px] mb-[29px]">App available on:</p>
            <div className="flex gap-[20px]">
              <Link href="https://www.apple.com/store">
                <Image
                  src="/images/icon/app_store.png"
                  alt="apple_store"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://play.google.com/store/apps?hl=en-ID">
                <Image
                  src="/images/icon/google_play.png"
                  alt="google_play"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300 mt-[120px] mb-[50px] gap-[1000px]">
        <p className="text-[14px] mt-5">
          ©2022. All Rights Reserved.{" "}
          <span className="text-[#CD4631]">Pod of Cast</span>
        </p>
        <p className="text-[14px] mt-5">Terms . Privacy</p>
      </div>
    </div>
  );
};

export default Footer;
