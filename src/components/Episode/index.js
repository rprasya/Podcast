import Image from "next/image";

const Episode = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {/* card 1 */}
      <div className="bg-white border-2 border-black rounded-xl p-4 mb-5 cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(109,40,217)] ease-in-out duration-300 hover:scale-[102%]">
        <div className="flex items-center">
          <Image
            src="/images/cover/cover-5.png"
            alt="cover-5"
            width={166}
            height={166}
          />
          <div className="ml-5">
            <div className="flex flex-col items-start border-b border-gray-300">
              <p className="font-bold text-base text-[#CD4631] mb-1">Eps. 6</p>
              <div className="font-bold text-[22px] text-black hover:text-[#CD4631] mb-[15px]">
                Pandemic Becoming Endemic
              </div>
            </div>
            <p className="font-medium text-[#4D4D4D] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Curabitur ac ultrices odio.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-[6px]">
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              covid-19
            </div>
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              health
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-xs mr-[10px]">Hosted by:</p>
            <Image
              src="/images/avatar/host.png"
              alt="host"
              width={46}
              height={26}
            />
          </div>
        </div>
      </div>
      {/* card 1 end */}

      {/* card 2  */}
      <div className="bg-white border-2 border-black rounded-xl p-4 mb-5 cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(109,40,217)] ease-in-out duration-300 hover:scale-[102%]">
        <div className="flex items-center">
          <Image
            src="/images/cover/cover.png"
            alt="cover"
            width={166}
            height={166}
          />
          <div className="ml-5">
            <div className="flex flex-col items-start border-b border-gray-300">
              <p className="font-bold text-base text-[#CD4631] mb-1">Eps. 5</p>
              <div className="font-bold text-[22px] text-black hover:text-[#CD4631] mb-[15px]">
                Tesla Autopilot Controversy
              </div>
            </div>
            <p className="font-medium text-[#4D4D4D] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Curabitur ac ultrices odio.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-[6px]">
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              automation
            </div>
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              tech
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-xs mr-[10px]">Hosted by:</p>
            <Image
              src="/images/avatar/host.png"
              alt="host"
              width={46}
              height={26}
            />
          </div>
        </div>
      </div>
      {/* card 2 end */}

      {/* card 3 */}
      <div className="bg-white border-2 border-black rounded-xl p-4 mb-5 cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(109,40,217)] ease-in-out duration-300 hover:scale-[102%]">
        <div className="flex items-center">
          <Image
            src="/images/cover/cover-3.png"
            alt="cover-3"
            width={166}
            height={166}
          />
          <div className="ml-5">
            <div className="flex flex-col items-start border-b border-gray-300">
              <p className="font-bold text-base text-[#CD4631] mb-1">Eps. 4</p>
              <div className="font-bold text-[22px] text-black hover:text-[#CD4631] mb-[15px]">
                Women&apos;s Rights? Is it alright?
              </div>
            </div>
            <p className="font-medium text-[#4D4D4D] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Curabitur ac ultrices odio.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-[6px]">
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              women&apos;s rights
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-xs mr-[10px]">Hosted by:</p>
            <Image
              src="/images/avatar/host.png"
              alt="host"
              width={46}
              height={26}
            />
          </div>
        </div>
      </div>
      {/* card 3 end */}

      {/* card 4 */}
      <div className="bg-white border-2 border-black rounded-xl p-4 mb-5 cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(109,40,217)] ease-in-out duration-300 hover:scale-[102%]">
        <div className="flex items-center">
          <Image
            src="/images/cover/cover-1.png"
            alt="cover-1"
            width={166}
            height={166}
          />
          <div className="ml-5">
            <div className="flex flex-col items-start border-b border-gray-300">
              <p className="font-bold text-base text-[#CD4631] mb-1">Eps. 3</p>
              <div className="font-bold text-[22px] text-black hover:text-[#CD4631] mb-[15px]">
                How to Deal with Self– <br /> Confidence
              </div>
            </div>
            <p className="font-medium text-[#4D4D4D] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Curabitur ac ultrices odio.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-[6px]">
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              self-esteem
            </div>
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              health
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-xs mr-[10px]">Hosted by:</p>
            <Image
              src="/images/avatar/host.png"
              alt="host"
              width={46}
              height={26}
            />
          </div>
        </div>
      </div>
      {/* card 4 end */}

      {/* card 5 */}
      <div className="bg-white border-2 border-black rounded-xl p-4 mb-5 cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(109,40,217)] ease-in-out duration-300 hover:scale-[102%]">
        <div className="flex items-center">
          <Image
            src="/images/cover/cover-4.png"
            alt="cover-4"
            width={166}
            height={166}
          />
          <div className="ml-5">
            <div className="flex flex-col items-start border-b border-gray-300">
              <p className="font-bold text-base text-[#CD4631] mb-1">Eps. 2</p>
              <div className="font-bold text-[22px] text-black hover:text-[#CD4631] mb-[15px]">
                Type of Social Classes of <br /> People
              </div>
            </div>
            <p className="font-medium text-[#4D4D4D] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Curabitur ac ultrices odio.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-[6px]">
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              social class
            </div>
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              wealth
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-xs mr-[10px]">Hosted by:</p>
            <Image
              src="/images/avatar/host.png"
              alt="host"
              width={46}
              height={26}
            />
          </div>
        </div>
      </div>
      {/* card 5 end */}

      {/* card 6 */}
      <div className="bg-white border-2 border-black rounded-xl p-4 mb-5 cursor-pointer hover:shadow-[10px_10px_0px_0px_rgba(109,40,217)] ease-in-out duration-300 hover:scale-[102%]">
        <div className="flex items-center">
          <Image
            src="/images/cover/cover-2.png"
            alt="cover-2"
            width={166}
            height={166}
          />
          <div className="ml-5">
            <div className="flex flex-col items-start border-b border-gray-300">
              <p className="font-bold text-base text-[#CD4631] mb-1">Eps. 1</p>
              <div className="font-bold text-[22px] text-black hover:text-[#CD4631] mb-[15px]">
                Are you a Perplexed Mind <br /> Person?
              </div>
            </div>
            <p className="font-medium text-[#4D4D4D] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Curabitur ac ultrices odio.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-[6px]">
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              mind-behaviour
            </div>
            <div className="border border-black rounded-lg px-3 py-[6px] cursor-pointer hover:bg-[#CD4631] hover:text-white">
              health
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-xs mr-[10px]">Hosted by:</p>
            <Image
              src="/images/avatar/host.png"
              alt="host"
              width={46}
              height={26}
            />
          </div>
        </div>
      </div>
      {/* card 6 end */}
    </div>
  );
};

export default Episode;
