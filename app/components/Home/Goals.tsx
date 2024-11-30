import {CtaArrowIcon} from '~/assets/icons';

interface Image {
  id: number;
  url: string;
  title: string;
  description: string;
  className: string;
}

function Card(image: Image) {
  return (
    <div className="flex flex-col w-full h-[483px] gap-6 overflow-hidden group/card">
      <div className="overflow-hidden rounded-lg">
        <img
          src={image.url}
          alt={image.title}
          className={`w-auto h-[392px] object-cover rounded-lg transition duration-500 ${image.className}`}
        />
      </div>
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2 w-[250px] h-[67px]">
          <span className="font-['Rubik'] font-semibold text-lg leading-[21.33px] text-[#1B1F23]">
            {image.title}
          </span>
          <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23CC] text-pretty">
            {image.description}
          </span>
        </div>
        <div className="flex">
          <span
            className="flex relative w-[36.23px] h-9 border-solid border-[1px] rounded-full border-[#1B1F23] items-center justify-center
                           group-hover/card:rotate-45 hover:bg-black transition duration-300 group/button overflow-hidden"
          >
            <CtaArrowIcon
              className="absolute group-hover/button:opacity-0 group-hover/button:-translate-y-6 group-hover/button:translate-x-6
                         transition duration-500"
            />
            <CtaArrowIcon
              className="absolute group-hover/button:fill-white -translate-x-6 translate-y-6
                           group-hover/button:translate-x-0 group-hover/button:translate-y-0
                           transition duration-500 opacity-0 group-hover/button:opacity-100"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function Goals() {
  const images: Image[] = [
    {
      id: 0,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/sleep.jpg?v=1731991343',
      title: 'Sleep',
      description: 'Optimize your sleep patterns.',
      className:
        'object-[-250px] scale-x-[-1] group-hover/card:scale-y-[1.05] group-hover/card:scale-x-[-1.05]',
    },
    {
      id: 1,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/Cognitive_Function.jpg?v=1731991344',
      title: 'Cognitive Function',
      description: "Enhance your brain's performance and connectivity",
      className: 'object-center group-hover/card:scale-105',
    },
    {
      id: 2,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/Foundational_Health.png?v=1731991342',
      title: 'Foundational Health',
      description: 'Promoting healthy, natural deep sleep day to day',
      className: 'object-[-230px] group-hover/card:scale-105',
    },
    {
      id: 3,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/Athletic_Performance.jpg?v=1731991344',
      title: 'Athletic Performance',
      description: 'Increase your healthy tissue, muscle, and energy',
      className: 'object-[-100px] group-hover/card:scale-105',
    },
    {
      id: 4,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/Hormone_Support.jpg?v=1731991344',
      title: 'Hormone Support',
      description: 'Boost your mood, libido, and vitality',
      className: 'object-[-150px] group-hover/card:scale-105',
    },
  ];

  return (
    <div className="flex w-full pl-10 pr-10 pt-[80px] pb-[61px]">
      <div className="flex flex-col w-full gap-10 items-center justify-self-center">
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-center">
            COMFORTABLY UNCOMFORTABLE
          </span>
          <div className="flex flex-col items-center gap-4">
            <span className="font-['Rubik'] font-semibold text-[44px] leading-[47px] text-[#1B1F23]">
              Start with your Goals
            </span>
            <span className="font-['Rubik'] font-normal text-[16px] leading-[24px] text-center text-[#1B1F23B2] text-pretty ms-9 me-9">
              We cannot become what we want to be by remaining what we are.
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full gap-5 justify-center overflow-scroll">
          {images.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              url={item.url}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Goals;
