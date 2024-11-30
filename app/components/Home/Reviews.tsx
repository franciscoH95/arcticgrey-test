import {Star5Icon} from '~/assets/icons';

function Reviews() {
  const logos = {
    rolling_stone:
      'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/rolling_stone_logo.png?v=1731906559',
    mens_journal:
      'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/mens_journal_logo.png?v=1731906560',
    la_weekly:
      'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/la_weekly_logo.png?v=1731906560',
    herb: 'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/herb_logo.png?v=1731906560',
    new_york_times:
      'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/new_york_times_logo.png?v=1731906560',
    bbc_news:
      'https://cdn.shopify.com/s/files/1/0904/0271/7993/files/bbc_news_logo.png?v=1731906560',
  };

  return (
    <div className="flex flex-row relative h-[118px] w-full bg-[#F6F6F5] border-solid border-[1px] border-[#1B1F231A]/10 items-center">
      <div className="flex flex-col absolute left-10 gap-3">
        <div className="flex h-[38px] w-[198px] bg-black/10 border-solid border-[1px] border-black rounded-lg text-center items-center justify-center">
          <span className="font-['Rubik'] font-medium text-sm leanding-[16.59px] text-[#1B1F23]">
            #1 Doctor Recommended
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Star5Icon />
          <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
            12,000+ 5-star Reviews
          </span>
        </div>
      </div>
      <div className="flex absolute left-[433px] h-[70px] border-solid border-[1px] border-[#1B1F23]/10"></div>
      <div className="flex flex-row absolute gap-2 items-center right-24">
        <div className="flex h-10 w-[120px] bg-white items-center justify-center rounded-lg">
          <img src={logos.rolling_stone} alt="" className="" />
        </div>
        <div className="flex h-10 w-[120px] bg-white items-center justify-center rounded-lg">
          <img src={logos.mens_journal} alt="" className="" />
        </div>
        <div className="flex h-10 w-[120px] bg-white items-center justify-center rounded-lg">
          <img src={logos.la_weekly} alt="" className="" />
        </div>
        <div className="flex h-10 w-[120px] bg-white items-center justify-center rounded-lg">
          <img src={logos.herb} alt="" className="" />
        </div>
        <div className="flex h-10 w-[120px] bg-white items-center justify-center rounded-lg">
          <img src={logos.new_york_times} alt="" className="" />
        </div>
        <div className="flex h-10 w-[120px] bg-white items-center justify-center rounded-lg">
          <img src={logos.bbc_news} alt="" className="" />
        </div>
        <div className="flex h-10 w-[120px] bg-white items-center justify-center rounded-lg">
          <img src={logos.rolling_stone} alt="" className="" />
        </div>
        <div className="flex h-10 w-[120px] bg-white items-center justify-center rounded-lg">
          <img src={logos.mens_journal} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
