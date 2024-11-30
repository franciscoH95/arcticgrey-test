import {HexaStarIcon} from '~/assets/icons';

function Slider() {
  const descriptions = [
    'High Quality Ingredients',
    'Independently Certified',
    'Expert Driven',
    'Shipped Internationally',
  ];

  return (
    <div className="flex bg-black w-full h-[50px] items-center overflow-hidden">
      <div className="flex gap-4 items-center whitespace-nowrap slider-track">
        {descriptions.map((item) => (
          <div
            className="flex gap-4 items-center whitespace-nowrap"
            key={`primary_${item}`}
          >
            <HexaStarIcon />
            <span className="text-white font-['Rubik'] font-medium text-sm leading-[16.59px]">
              {item}
            </span>
          </div>
        ))}
        {descriptions.map((item) => (
          <div
            className="flex gap-4 items-center whitespace-nowrap"
            key={`secondary_${item}`}
          >
            <HexaStarIcon />
            <span className="text-white font-['Rubik'] font-medium text-sm leading-[16.59px]">
              {item}
            </span>
          </div>
        ))}
        {descriptions.map((item) => (
          <div
            className="flex gap-4 items-center whitespace-nowrap"
            key={`tertiary_${item}`}
          >
            <HexaStarIcon />
            <span className="text-white font-['Rubik'] font-medium text-sm leading-[16.59px]">
              {item}
            </span>
          </div>
        ))}
        {descriptions.map((item) => (
          <div
            className="flex gap-4 items-center whitespace-nowrap"
            key={`quaternary_${item}`}
          >
            <HexaStarIcon />
            <span className="text-white font-['Rubik'] font-medium text-sm leading-[16.59px]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
