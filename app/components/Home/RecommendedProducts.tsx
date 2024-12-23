import {Await} from '@remix-run/react';
import type {
  CollectionConnection,
  Product as ProductType,
} from '@shopify/hydrogen/storefront-api-types';
import {Suspense} from 'react';
import {BlackStarIcon, LeftArrowIcon, RightArrowIcon} from '~/assets/icons';
import {AddToCartButton} from '../AddToCartButton';
import {useAside} from '~/components/Aside';

function Product({product}: {product: ProductType}) {
  const {open} = useAside();
  return (
    <div className="flex flex-col h-auto relative bg-white rounded-lg group">
      <img
        src={product.images.edges[0].node.url}
        alt=""
        className="w-auto h-[365px] rounded-lg m-[26px] group-hover:scale-105 transition ease-in-out duration-500"
      />
      <div className="flex absolute bg-[#FFED92] top-[10px] left-[10px] rounded-[4px] px-[10px] py-[6px] gap-[10px]">
        <span className="font-['Rubik'] font-normal text-[12px] leading-[14.22px] text-[#1B1F23]">
          Bestseller
        </span>
      </div>
      <div className="flex flex-col mr-5 ml-5 mb-5">
        <div className="flex flex-col w-full h-full gap-4 group-hover:opacity-0 group-hover:-translate-y-5 transition ease-in-out duration-500">
          <div className="flex flex-row gap-1">
            <div className="flex w-auto px-[10px] py-[5px] bg-[#f6f6f5] rounded-[4px] gap-1 items-center">
              <div className="w-[5px] h-[5px] bg-[#101226] rounded-full"></div>
              <span className="font-['Rubik'] font-normal text-[10px] leading-[11.85px] text-black text-center">
                GMO Free
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-[5px]">
              <span className="font-['Rubik'] font-medium text-[16px] leading-[18.96px] text-[#1B1F23]">
                {product.title}
              </span>
              <span className="font-['Rubik'] font-normal text-[13px] leading-[15.41px] text-[#1B1F23]/70">
                {product.description}
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-row items-center">
                <BlackStarIcon />
                <BlackStarIcon />
                <BlackStarIcon />
                <BlackStarIcon />
                <BlackStarIcon />
              </div>
              <button className="bg-[#1b1f23] px-[15px] py-[5px] rounded-[4px] gap-[10px]">
                <span className="font-['Rubik'] font-normal text-[13px] leading-[15.41px] text-white">
                  Add • ${product.priceRange.minVariantPrice.amount}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute pr-10 flex flex-col w-full">
          <div className="flex flex-col gap-[10px] translate-y-3 opacity-0 group-hover:opacity-100 transition ease-in-out group-hover:-translate-y-3 duration-500">
            <div className="flex flex-row gap-[10px]">
              <div className="flex flex-row w-full items-start border border-[#eeeeee] rounded bg-[#f6f6f5] py-[10px] pl-[10px] pr-3 gap-2">
                <div className="w-4 h-4 rounded-full border border-[#1B1F23] flex items-center justify-center cursor-pointer">
                  <div className="w-2 h-2 bg-[#1B1F23] rounded-full hidden"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-['Rubik'] font-normal text-xs leading-[14.22px] text-[#1B1F23]">
                    One-Time Purchase
                  </span>
                  <span className="font-['Rubik'] font-medium text-xs leading-[14.22px] text-[#1B1F23]">
                    ${product.priceRange.minVariantPrice.amount}
                  </span>
                </div>
              </div>
              <div className="flex flex-row w-full items-start border border-[#eeeeee] rounded bg-[#f6f6f5] py-[10px] pl-[10px] pr-3 gap-2">
                <div className="w-4 h-4 rounded-full border border-[#1B1F23] flex items-center justify-center cursor-pointer">
                  <div className="w-2 h-2 bg-[#1B1F23] rounded-full hidden"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-['Rubik'] font-normal text-xs leading-[14.22px] text-[#1B1F23]">
                    Subscribe & Save
                  </span>
                  <div className="flex gap-1 items-center">
                    <span className="font-['Rubik'] font-medium text-xs leading-[14.22px] text-[#1B1F23]">
                      ${product.priceRange.minVariantPrice.amount}
                    </span>
                    <span className="font-['Rubik'] font-medium text-[10px] leading-[11.85px] text-[#802608]">
                      Save 10%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex w-full rounded-lg gap-[10px] bg-[#1B1F23] items-center justify-center py-[14px]">
              <AddToCartButton
                disabled={!product || !product.availableForSale}
                onClick={() => {
                  open('cart');
                }}
                lines={
                  product
                    ? [
                        {
                          merchandiseId: product.variants.nodes[0].id,
                          quantity: 1,
                          product,
                        },
                      ]
                    : []
                }
              >
                <span className="font-['Rubik'] font-medium text-sm leading-[15.59px] text-white">
                  {product?.availableForSale
                    ? 'Add to Cart - ' +
                      product.priceRange.minVariantPrice.amount
                    : 'Sold out'}
                </span>
              </AddToCartButton>
            </button>
          </div>
          <span className="font-['Rubik'] w-full font-normal text-xs leading-[14.22px] text-[#1B1F23] text-center opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">
            View Full Details
          </span>
        </div>
      </div>
    </div>
  );
}

function RecommendedProducts({
  collections,
}: {
  collections: Promise<CollectionConnection | null>;
}) {
  return (
    <div className="flex w-full pl-10 pr-10 pt-[80px] pb-[61px] bg-[#F6F6F5]">
      <div className="flex flex-col w-full gap-[50px] items-center justify-self-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row gap-[50px] items-center">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-[4px] border-solid border-[1px]
                        border-[#1B1F231A] bg-[#F5F5F5] hover:bg-[#1B1F23] group transition duration-300"
            >
              <LeftArrowIcon className="group-hover:fill-white transition duration-300" />
            </button>
            <div className="flex flex-col items-center gap-2">
              <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-center text-black">
                🌟 Trending
              </span>
              <span className="font-['Rubik'] font-medium text-[40px] leading-[47.4px] text-[#1B1F23]">
                Supplements
              </span>
            </div>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-[4px] border-solid border-[1px]
                      border-[#1B1F231A] bg-[#F5F5F5] hover:bg-[#1B1F23] group transition duration-300"
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
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={collections}>
            {(response) => (
              <div className="flex flex-row w-full gap-5 justify-center">
                {response
                  ? response.edges[0].node.products.edges
                      .reverse()
                      .map((product) => (
                        <Product key={product.node.id} product={product.node} />
                      ))
                  : null}
              </div>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default RecommendedProducts;

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      optionValues {
        name
      }
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;

const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
` as const;
