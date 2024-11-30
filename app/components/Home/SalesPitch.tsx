import {
  ClipboardIcon,
  ConsultationIcon,
  LeavesIcon,
  LikeIcon,
} from '~/assets/icons';

function SalesPitch() {
  return (
    <div className="flex w-full pl-10 pr-10 pt-[80px] pb-[80px]">
      <div className="flex flex-col w-full gap-10 items-start">
        <div className="flex flex-col items-start gap-2 w-[407px]">
          <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
            🧐 Why Health & Fitness
          </span>
          <div className="flex flex-col items-center gap-4">
            <span className="font-['Rubik'] font-medium text-[40px] leading-[47.4px] text-[#1B1F23]">
              Clean Supplements - Made For You
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full h-[183px] gap-8 justify-start self-start">
          <div className="flex flex-col gap-6 w-[356px] self-start">
            <div className="flex w-[50px] h-[50px] bg-[#1B1F23] rounded-full items-center justify-center">
              <LikeIcon />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-['Rubik'] font-medium text-[18px] leading-[21.33px] text-[#1B1F23]">
                We Make It Easy
              </span>
              <span className="font-['Rubik'] font-normal text-[16px] leading-6 text-[#1B1F23]/80 text-start text-pretty">
                Personalized Solutions & Guidance Mean You Get Just What You
                Need Nothing More
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[356px] self-start">
            <div className="flex w-[50px] h-[50px] bg-[#1B1F23] rounded-full items-center justify-center">
              <LeavesIcon />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-['Rubik'] font-medium text-[18px] leading-[21.33px] text-[#1B1F23]">
                Clean & Effective
              </span>
              <span className="font-['Rubik'] font-normal text-[16px] leading-6 text-[#1B1F23]/80 text-start text-pretty">
                Proven Ingredients, not Artificial, Crafted By Experts For
                Optimal Effectiveness
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[356px] self-start">
            <div className="flex w-[50px] h-[50px] bg-[#1B1F23] rounded-full items-center justify-center">
              <ConsultationIcon />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-['Rubik'] font-medium text-[18px] leading-[21.33px] text-[#1B1F23]">
                Your Free Dietitian
              </span>
              <span className="font-['Rubik'] font-normal text-[16px] leading-6 text-[#1B1F23]/80 text-start text-pretty">
                Every Gainful Subscriber Gets Free, 1:1 Access Their Own
                Registered Dietitian
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[356px] self-start">
            <div className="flex w-[50px] h-[50px] bg-[#1B1F23] rounded-full items-center justify-center">
              <ClipboardIcon />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-['Rubik'] font-medium text-[18px] leading-[21.33px] text-[#1B1F23]">
                Made For You
              </span>
              <span className="font-['Rubik'] font-normal text-[16px] leading-6 text-[#1B1F23]/80 text-start text-pretty">
                Performance is Personal. Personalized & Customizable Products
                For Your Needs, Body & Goals
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPitch;
