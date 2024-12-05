import {Money, useOptimisticCart} from '@shopify/hydrogen';
import {Await, Link, useRouteLoaderData} from '@remix-run/react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {CartLineItem} from '~/components/CartLineItem';
import {CartSummary} from './CartSummary';
import {LeftArrowIcon, RightArrowIcon} from '~/assets/icons';
import {Suspense, useState} from 'react';
import type {RootLoader} from '~/root';
import type {CollectionConnection} from '@shopify/hydrogen/storefront-api-types';
import Item from './CartRecommend';

export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
};

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 */
export function CartMain({layout, cart: originalCart}: CartMainProps) {
  const data = useRouteLoaderData<RootLoader>('root');
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const cart = useOptimisticCart(originalCart);
  const collections: Promise<CollectionConnection> =
    data?.collections.collections;

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const className = `${
    withDiscount ? 'with-discount' : ''
  } h-screen flex flex-col`;
  const cartHasItems = cart?.totalQuantity! > 0;
  const freeShippingAmount = 80000;
  const freeShippingPorcent =
    (Number(cart.cost?.subtotalAmount?.amount) * 100) / freeShippingAmount;
  const classFreeShipping =
    freeShippingPorcent >= 100.0
      ? '100%'
      : freeShippingPorcent.toFixed(2).toString() + '%';

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 3 - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>
      <div className="flex absolute top-4 left-[175px] items-center justify-center w-9 h-9 px-[10px] py-[10px] gap-[10px] rounded-[60px] bg-[#1B1F23] text-white text-center">
        <span className="font-['Rubik'] font-normal text-[18px] leading-[21.33px] text-white">
          {cart.totalQuantity}
        </span>
      </div>
      <div className={className}>
        {!cartHasItems && <CartEmpty hidden={linesCount} layout={layout} />}

        {cartHasItems && (
          <>
            <div className="flex flex-col gap-2 items-center justify-center px-[30px] pt-[26px] pb-[22px]">
              <div className="flex flex-row gap-1">
                <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-center text-[#1B1F23]">
                  You are
                </span>
                <span className="font-['Rubik'] font-semibold text-[16px] leading-[18.96px] text-center text-[#1B1F23]">
                  {cart.cost?.subtotalAmount?.amount ? (
                    <Money data={cart.cost?.subtotalAmount} />
                  ) : (
                    'CLP 0 away'
                  )}
                </span>
                <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-center text-[#1B1F23]">
                  from eligible for free shipping
                </span>
              </div>
              <div className="flex flex-row w-full justify-center items-center gap-4">
                <span className="font-['Rubik'] font-normal text-[14px] leading-[16.59px] text-[#1B1F23]">
                  $0
                </span>
                <div className="w-full h-[3px] bg-black/15">
                  <div
                    className={`h-[3px] bg-black`}
                    style={{width: classFreeShipping}}
                  ></div>
                </div>
                <span className="font-['Rubik'] font-normal text-[14px] leading-[16.59px] text-[#1B1F23]">
                  ${freeShippingAmount}
                </span>
              </div>
            </div>
            <div className="flex flex-col rounded-xl p-4 mx-[30px] gap-3 bg-[#F6F6F5]">
              {(cart?.lines?.nodes ?? []).map((line) => (
                <CartLineItem key={line.id} line={line} layout={layout} />
              ))}
            </div>
            <div className="flex flex-col px-[30px] py-9 gap-5 w-full">
              <div className="flex flex-row justify-between items-center">
                <span className="font-['Rubik'] font-normal text-[22px] leading-[26.07px] text-[#1B1F23] select-none">
                  Enhance Your Performance
                </span>
                <div className="flex flex-row gap-3">
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-[4px] border-solid border-[1px]
                        border-[#1B1F231A] bg-[#F5F5F5] hover:bg-[#1B1F23] group transition duration-300"
                    onClick={handlePrev}
                  >
                    <LeftArrowIcon className="group-hover:fill-white transition duration-300" />
                  </button>
                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-[4px] border-solid border-[1px]
                      border-[#1B1F231A] bg-[#F5F5F5] hover:bg-[#1B1F23] group transition duration-300"
                    onClick={handleNext}
                  >
                    <RightArrowIcon className="group-hover:fill-white transition duration-300" />
                  </button>
                </div>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={collections}>
                  {(response) => (
                    <div className="flex w-full overflow-hidden">
                      <div
                        className="flex flex-row gap-3 snap-proximity snap-x"
                        style={{
                          transform: `translateX(-${
                            (currentIndex * 100) / 3
                          }%)`,
                        }}
                      >
                        {response
                          ? response.edges[2].node.products.edges.map(
                              (product) => (
                                <Item
                                  key={product.node.id}
                                  product={product.node}
                                />
                              ),
                            )
                          : null}
                      </div>
                    </div>
                  )}
                </Await>
              </Suspense>
            </div>
            <CartSummary cart={cart} layout={layout} />
          </>
        )}
      </div>
    </>
  );
}

function CartEmpty({
  hidden = false,
}: {
  hidden: boolean;
  layout?: CartMainProps['layout'];
}) {
  const {close} = useAside();
  return (
    <div
      hidden={hidden}
      className="flex flex-col gap-6 px-[30px] pt-[26px] pb-[22px]"
    >
      <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-center text-[#1B1F23]">
        Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
        started!
      </span>
      <Link
        to="/"
        onClick={close}
        prefetch="viewport"
        className="flex w-full bg-[#1B1F23] px-[10px] py-6 justify-center rounded-xl"
      >
        <span className="font-['Rubik'] font-semibold text-[18px] leading-[21.33px] text-white">
          Continue shopping
        </span>
      </Link>
    </div>
  );
}
