function Blogs() {
  return (
    <div className="flex w-full pl-10 pr-10 pb-[80px]">
      <div className="flex flex-col w-full gap-[50px] items-center">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-col items-start gap-2">
            <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-center text-black">
              ✍️ Blogs
            </span>
            <span className="font-['Rubik'] font-medium text-[40px] leading-[47.4px] text-[#1B1F23]">
              Latest Articles
            </span>
          </div>
          <div className="flex flex-row">
            <a
              href="/"
              className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23] text-center underline decoration-solid"
            >
              View All
            </a>
          </div>
        </div>
        <div className="flex flex-row w-full gap-5 justify-center">
          <div className="flex flex-col relative w-full h-[450px] rounded-lg">
            <img
              src="https://cdn.shopify.com/s/files/1/0904/0271/7993/files/article1.jpg?v=1732940116"
              alt=""
              className="absolute w-full h-full object-cover object-right-top rounded-lg z-[-1]"
            />
            <div className="flex flex-col w-full h-full bg-gradient-to-tr from-black/75 to-black/10 justify-end pl-10 pb-10 gap-8 rounded-lg">
              <div className="flex flex-col gap-2">
                <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-white">
                  Balanced Diet
                </span>
                <span className="font-['Rubik'] font-medium text-[24px] leading-[28.44px] text-white">
                  Foundational Supplements:
                </span>
                <span className="font-['Rubik'] font-medium text-[24px] leading-[28.44px] text-white">
                  Build a Better You
                </span>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-white">
                  By Emily Thompson
                </span>
                <div className="h-4 border-solid border-[1px] border-white/20"></div>
                <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-white">
                  August 31, 2023
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-row">
              <img
                src="https://cdn.shopify.com/s/files/1/0904/0271/7993/files/article2.jpg?v=1732940116"
                alt=""
                className="w-[300px] h-[215px] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-8 items-start justify-center pl-[30px]">
                <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
                  Balanced Diet
                </span>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col">
                    <span className="font-['Rubik'] font-medium text-[18px] leading-[26px] text-[#1B1F23]">
                      Taming the Fire Within: Everything You
                    </span>
                    <span className="font-['Rubik'] font-medium text-[18px] leading-[26px] text-[#1B1F23]">
                      Need to Know About Inflammation
                    </span>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
                      By Emily Thompson
                    </span>
                    <div className="h-4 border-solid border-[1px] border-[#1B1F23]"></div>
                    <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
                      August 31, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <img
                src="https://cdn.shopify.com/s/files/1/0904/0271/7993/files/article3.jpg?v=1732940116"
                alt=""
                className="w-[300px] h-[215px] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-8 items-start justify-center pl-[30px]">
                <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
                  Balanced Diet
                </span>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col">
                    <span className="font-['Rubik'] font-medium text-[18px] leading-[26px] text-[#1B1F23]">
                      Optimize Your Sleep with These 15
                    </span>
                    <span className="font-['Rubik'] font-medium text-[18px] leading-[26px] text-[#1B1F23]">
                      Strategies
                    </span>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
                      By Emily Thompson
                    </span>
                    <div className="h-4 border-solid border-[1px] border-[#1B1F23]"></div>
                    <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
                      August 31, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
