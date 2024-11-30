import {InstagramIcon} from '~/assets/icons';

interface Image {
  id: number;
  url: string;
  className: string;
}

function IgElement({image}: {image: Image}) {
  return (
    <div className="relative rounded-lg aspect-square overflow-hidden group">
      <div className="absolute flex w-full h-full group-hover:bg-black/50 items-center justify-center transition duration-300">
        <InstagramIcon className="fill-white opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>
      <img
        src={image.url}
        alt=""
        className={`w-full h-full z-[-1] ${image.className}`}
      />
    </div>
  );
}

function BannerInsta() {
  const images = [
    {
      id: 0,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig1.jpg?v=1732941979',
      className: 'object-cover object-top',
    },
    {
      id: 1,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig2.jpg?v=1732941980',
      className: '',
    },
    {
      id: 2,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig3.jpg?v=1732941979',
      className: '',
    },
    {
      id: 3,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig4.jpg?v=1732941980',
      className: '',
    },
    {
      id: 4,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig5.jpg?v=1732941979',
      className: 'object-cover',
    },
    {
      id: 5,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig6.jpg?v=1732941979',
      className: '',
    },
    {
      id: 6,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig7.jpg?v=1732941979',
      className: '',
    },
    {
      id: 7,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig8.jpg?v=1732941979',
      className: '',
    },
    {
      id: 8,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig9.jpg?v=1732941979',
      className: 'object-cover object-bottom',
    },
    {
      id: 9,
      url: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/ig10.jpg?v=1732941979',
      className: 'object-cover object-bottom',
    },
  ];

  return (
    <div className="flex w-full pl-10 pr-10 pb-[80px]">
      <div className="grid grid-rows-2 grid-cols-6 w-full gap-[10px]">
        <div className="flex flex-col h-auto w-auto col-span-2 rounded-lg bg-[#F6F6F5] items-center justify-center gap-8">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#1B1F23] border-2 border-solid border-white rounded-full drop-shadow-md">
              <span className="font-['Rubik'] font-semibold text-[11px] leading-[13.04px] text-white tracking-wide">
                Logo
              </span>
            </div>
            <div className="flex flex-row">
              <span className="font-['Rubik'] font-semibold text-[20px] leading-[23.7px] text-[#1B1F23]">
                @
              </span>
              <span className="font-['Rubik'] font-bold text-[20px] leading-[23.7px] text-[#1B1F23]">
                uncmfrt.com
              </span>
            </div>
          </div>
          <button className="w-[240px] h-[55px] bg-white py-[13px] rounded-lg border-solid border-[1px] border-black gap-2">
            Follow Us on Instagram
          </button>
        </div>
        {images.map((image) => (
          <IgElement key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default BannerInsta;
