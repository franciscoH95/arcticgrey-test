function Banner() {
  return (
    <div className="relative w-full h-[920px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src={`https://cdn.shopify.com/videos/c/o/v/817fde39ed874983b2fc5c64a132f25c.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="relative text-white text-center h-[920px] bg-black/30">
        <div className="flex flex-col absolute w-[840px] items-start left-10 top-[65%] gap-10">
          <h1 className="font-semibold text-[70px] leading-[83px] font-['rubik'] text-left">
            Great things never came from comfort zones.
          </h1>
          <button className="w-[160px] h-[50px] bg-white p-[10px] gap-[10px] rounded-lg">
            <span className="text-[#1B1F23] font-medium text-[16px] leading-[19px] font-['Rubik']">
              Shop Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
