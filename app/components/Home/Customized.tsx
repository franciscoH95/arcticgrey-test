import {
  LeavesBlackIcon,
  LeavesIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from '~/assets/icons';

function Customized() {
  return (
    <div className="flex w-full pl-10 pr-10 pt-[80px] pb-[80px] bg-[#F6F6F5]">
      <div className="flex flex-col w-full gap-[52px] items-center">
        <div className="flex flex-col items-center gap-2">
          <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-center text-black">
            Simple & Effective Ingredients
          </span>
          <span className="font-['Rubik'] font-medium text-[40px] leading-[47.4px] text-[#1B1F23]">
            Customized Protein Powder
          </span>
        </div>
        <div className="flex flex-row w-full items-center justify-around">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-[4px] border-solid border-[1px]
                        border-[#1B1F231A] bg-[#F5F5F5] hover:bg-[#1B1F23] group transition duration-300"
          >
            <LeftArrowIcon className="group-hover:fill-white transition duration-300" />
          </button>
          <div className="flex flex-col xl:flex-row">
            <div className="flex w-full xl:w-[590px] h-[548px] bg-white rounded-tl-[8px] rounded-bl-[8px] border-solid border-[1px] border-black/10 items-center justify-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0904/0271/7993/files/Protein.png?v=1732656615"
                alt=""
                className="w-[356px] h-[356px]"
              />
            </div>
            <div className="w-[700px] h-[548px] rounded-tr-[8px] rounded-br-[8px] border-solid border-[1px] border-black/10 bg-white">
              <div className="flex flex-col bg-[#1B1F23] rounded-tr-[8px] gap-6 items-center py-10 px-14">
                <span className="font-['Rubik'] font-medium text-[24px] leading-[28.44px] text-white">
                  The Blend
                </span>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-row gap-6 items-center">
                    <div className="flex w-[50px] h-[50px] bg-[#252A2F] rounded-full items-center justify-center">
                      <LeavesIcon />
                    </div>
                    <span className="font-['Rubik'] font-normal text-[18px] leading-[21.33px] text-white">
                      Whey Based
                    </span>
                  </div>
                  <div className="flex flex-row gap-6 items-center">
                    <div className="flex w-[50px] h-[50px] bg-[#252A2F] rounded-full items-center justify-center">
                      <LeavesIcon />
                    </div>
                    <span className="font-['Rubik'] font-normal text-[18px] leading-[21.33px] text-white">
                      Build Muscle
                    </span>
                  </div>
                  <div className="flex flex-row gap-6 items-center">
                    <div className="flex w-[50px] h-[50px] bg-[#252A2F] rounded-full items-center justify-center">
                      <LeavesIcon />
                    </div>
                    <span className="font-['Rubik'] font-normal text-[18px] leading-[21.33px] text-white">
                      Clean Ingredients
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center pt-[30px] pb-10 px-[45px]">
                <span className="font-['Rubik'] font-medium text-[18px] leading-[21.33px] text-[#1B1F23]">
                  Active Ingredients
                </span>
                <div className="flex flex-row gap-10 mt-6">
                  <div className="flex flex-col gap-3 items-start">
                    <div className="flex w-[45px] h-[45px] bg-[#F6F6F5] rounded-full items-center justify-center">
                      <LeavesBlackIcon />
                    </div>
                    <span className="font-['Rubik'] font-medium text-[16px] leading-[18.96px] text-[#1B1F23]">
                      Whey Protein Isolate
                    </span>
                    <span className="font-['Rubik'] font-normal text-[14px] leading-5 text-[#1B1F23]/60 text-pretty">
                      Low Calorie With Virtually No Fat or Lactose, Quickly
                      Absorbed To Maximize Muscle Building & Repair.
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 items-start">
                    <div className="flex w-[45px] h-[45px] bg-[#F6F6F5] rounded-full items-center justify-center">
                      <LeavesBlackIcon />
                    </div>
                    <span className="font-['Rubik'] font-medium text-[16px] leading-[18.96px] text-[#1B1F23]">
                      Whey Protein Isolate
                    </span>
                    <span className="font-['Rubik'] font-normal text-[14px] leading-5 text-[#1B1F23]/60 text-pretty">
                      Low Calorie With Virtually No Fat or Lactose, Quickly
                      Absorbed To Maximize Muscle Building & Repair.
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 items-start">
                    <div className="flex w-[45px] h-[45px] bg-[#F6F6F5] rounded-full items-center justify-center">
                      <LeavesBlackIcon />
                    </div>
                    <span className="font-['Rubik'] font-medium text-[16px] leading-[18.96px] text-[#1B1F23]">
                      Whey Protein Isolate
                    </span>
                    <span className="font-['Rubik'] font-normal text-[14px] leading-5 text-[#1B1F23]/60 text-pretty">
                      Low Calorie With Virtually No Fat or Lactose, Quickly
                      Absorbed To Maximize Muscle Building & Repair.
                    </span>
                  </div>
                </div>
                <button className="bg-[#1B1F23] mt-[33px] p-[10px] gap-[10px] rounded-[8px] w-full">
                  <span className="font-['Rubik'] font-medium text-[16px] leading-[18.96px] text-white">
                    Customize This Blend
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-[4px] border-solid border-[1px]
                      border-[#1B1F231A] bg-[#F5F5F5] hover:bg-[#1B1F23] group transition duration-300"
          >
            <RightArrowIcon className="group-hover:fill-white transition duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customized;
