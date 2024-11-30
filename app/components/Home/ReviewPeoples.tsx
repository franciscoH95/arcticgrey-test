import {useState} from 'react';
import {LeftArrowIcon, PlusIcon, RightArrowIcon} from '~/assets/icons';

interface Video {
  id: number;
  url: string;
  className: string;
}

function Review({
  video,
  currentIndex,
  itemIndex,
}: {
  video: Video;
  currentIndex: number;
  itemIndex: number;
}) {
  return (
    <div className="flex flex-col w-[300px] gap-4">
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`${
          currentIndex === itemIndex ? 'h-[500px]' : 'h-[420px]'
        } w-[300px] object-cover rounded-lg`}
      >
        <source src={video.url} type="video/mp4" />
      </video>
      <div className="flex rounded-lg bg-white justify-between p-[5px] items-center">
        <div className="flex w-[70px] h-[70px] bg-[#F6F6F5] items-center justify-center rounded-[4px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0904/0271/7993/files/magnesiumL.png?v=1732656389"
            alt=""
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-['Rubik'] font-normal text-[13px] leading-[15.41px] text-[#1B1F23]">
            Magnesium L-Threonate
          </span>
          <span className="font-['Rubik'] font-medium text-[12px] leading-[14.22px] text-[#1B1F23]">
            $49.95
          </span>
        </div>
        <div className="flex relative w-8 h-8 rounded-full bg-[#1B1F23] items-center justify-center right-3">
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}

function ReviewPeople() {
  const videos = [
    {
      id: 0,
      url: 'https://cdn.shopify.com/videos/c/o/v/87fa6a8d92814f518763c8436787b286.mp4',
      className: '',
    },
    {
      id: 1,
      url: 'https://cdn.shopify.com/videos/c/o/v/a9a3ed17e65a48c78fa06b479e050131.mp4',
      className: '',
    },
    {
      id: 2,
      url: 'https://cdn.shopify.com/videos/c/o/v/60c059b5dde541549871d94945c58ac0.mp4',
      className: '',
    },
    {
      id: 3,
      url: 'https://cdn.shopify.com/videos/c/o/v/accdc76cbca74e3ab555180d68eb2f9a.mp4',
      className: '',
    },
    {
      id: 4,
      url: 'https://cdn.shopify.com/videos/c/o/v/2cf79aaf2ac3416e960ce1f96a300b30.mp4',
      className: '',
    },
    {
      id: 5,
      url: 'https://cdn.shopify.com/videos/c/o/v/d7519bcf4b3547729b91c37187c1d75c.mp4',
      className: '',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(3);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length * 2 - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length * 2 - 3 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="flex w-full pt-[80px] pb-[80px] bg-[#F6F6F5]">
      <div className="flex flex-col w-full gap-[50px] items-center justify-self-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row gap-[50px] items-center">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-[4px] border-solid border-[1px]
                        border-[#1B1F231A] bg-[#F5F5F5] hover:bg-[#1B1F23] group transition duration-300"
              onClick={prevSlide}
            >
              <LeftArrowIcon className="group-hover:fill-white transition duration-300" />
            </button>
            <div className="flex flex-col items-center gap-2">
              <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-center text-black">
                Trusted & Proven by Science
              </span>
              <span className="font-['Rubik'] font-medium text-[40px] leading-[47.4px] text-[#1B1F23]">
                Real People. Real Results.
              </span>
            </div>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-[4px] border-solid border-[1px]
                      border-[#1B1F231A] bg-[#F5F5F5] hover:bg-[#1B1F23] group transition duration-300"
              onClick={nextSlide}
            >
              <RightArrowIcon className="group-hover:fill-white transition duration-300" />
            </button>
          </div>
          <a
            href="/"
            className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23] text-center underline decoration-solid"
          >
            View All
          </a>
        </div>
        <div className="relative w-full">
          <div className="flex right-10 overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-5 items-center px-5"
              style={{
                transform: `translateX(-${
                  currentIndex === 0 || currentIndex === 1
                    ? (currentIndex * 100) / (videos.length * 2)
                    : ((currentIndex - 2.2667) * 100) / (videos.length * 2)
                }%)`,
              }}
            >
              {videos.concat(...videos).map((video, index) => (
                <Review
                  key={video.id}
                  video={video}
                  currentIndex={currentIndex}
                  itemIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPeople;
