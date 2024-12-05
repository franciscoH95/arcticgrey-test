import {Money} from '@shopify/hydrogen';
import type {Product} from '@shopify/hydrogen/storefront-api-types';

export default function Item({product}: {product: Product}) {
  return (
    <div className="flex flex-col p-5 gap-[14px] w-[220px] rounded-lg bg-[#F6F6F5] snap-start">
      <img
        src={product.images.edges[0].node.url}
        alt=""
        className="h-[140px] w-[180px]"
      />
      <div className="flex flex-col h-full gap-[14px] justify-between">
        <span className="font-['Rubik'] font-medium text-sm leading-[18px] text-[#1B1F23]">
          {product.title}
        </span>
        <div className="flex flex-row justify-between items-center">
          <span className="font-['Rubik'] font-normal text-sm leading-[20px] text-[#1B1F23]">
            {product.priceRange.minVariantPrice.amount ? (
              <Money data={product.priceRange.minVariantPrice} />
            ) : (
              '-'
            )}
          </span>
          <button className="flex items-center bg-[#1B1F23] py-[6px] pr-[12px] pl-[15px] gap-[10px] rounded">
            <span className="font-['Rubik'] font-normal text-xs leading-[14.22px] text-white">
              Add to Cart +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
