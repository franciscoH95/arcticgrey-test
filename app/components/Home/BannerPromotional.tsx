function BannerPromotional() {
  return (
    <div className="flex w-full pl-10 pr-10 pt-[80px] pb-[80px]">
      <div className="flex flex-col relative w-full h-[750px] overflow-hidden gap-[50px] items-center justify-self-center rounded-lg">
        <img
          src="https://cdn.shopify.com/s/files/1/0904/0271/7993/files/e4c9683702294b62e03a4063cd120030.png?v=1732090550"
          alt=""
          className="absolute z-[-1] object-cover w-full h-full"
        />
        <div className="flex flex-col relative w-full h-[750px] bg-black/40 justify-center pl-[80px] gap-10">
          <div className="flex flex-col gap-2 items-start">
            <span className="font-['Rubik'] font-semibold text-[50px] leading-[59.25px] text-white">
              The Next Generation is Here
            </span>
            <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-white">
              Innovative Engineering. Intelligent Design. Meet The Plunge All-I.
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <button className="w-[190px] h-[50px] p-[10px] bg-white rounded-lg gap-[10px]">
              <span className="font-['Rubik'] font-medium text-[16px] leading-[18.96px]">
                Take The Plunge
              </span>
            </button>
            <button className="w-[190px] h-[50px] border-solid border-[1px] border-white rounded-lg gap-[10px] p-[10px]">
              <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-white">
                Dive Deeper
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPromotional;
