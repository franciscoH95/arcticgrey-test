import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';
import type {CartLayout} from '~/components/CartMain';
import {CartForm, Image, type OptimisticCartLine} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {Link} from '@remix-run/react';
import {ProductPrice} from './ProductPrice';
import {useAside} from './Aside';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {CircleArrowIcon} from '~/assets/icons';

type CartLine = OptimisticCartLine<CartApiQueryFragment>;

/**
 * A single line item in the cart. It displays the product image, title, price.
 * It also provides controls to update the quantity or remove the line item.
 */
export function CartLineItem({
  layout,
  line,
}: {
  layout: CartLayout;
  line: CartLine;
}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  const {close} = useAside();

  return (
    <div key={id} className="flex flex-row rounded-lg p-4 gap-4 bg-white">
      {image && (
        <Image
          alt={title}
          aspectRatio="1/1"
          data={image}
          height={90}
          loading="lazy"
          width={90}
        />
      )}

      <div className="flex flex-col gap-3 justify-center w-full">
        <div className="flex flex-row justify-between items-center">
          <Link
            prefetch="intent"
            to={lineItemUrl}
            onClick={() => {
              if (layout === 'aside') {
                close();
              }
            }}
          >
            <span className="font-['Rubik'] font-semibold text-[14px] leading-[19px] text-[#1B1F23] text-balance break-words">
              {product.title}
            </span>
          </Link>
          <ProductPrice price={line?.cost?.totalAmount} />
        </div>
        <div className="flex flex-row justify-between items-end">
          {/* <ul>
            {selectedOptions.map((option) => (
              <li key={option.name}>
                <small>
                  {option.name}: {option.value}
                </small>
              </li>
            ))}
          </ul> */}
          <CartLineQuantity line={line} />
          <div className="flex flex-row gap-2 px-4 py-[10px] border border-dashed border-black/20 rounded-[6px] select-none">
            <CircleArrowIcon />
            <span className="font-['Rubik'] font-normal text-[12px] leading-[14.22px] text-[#1B1F23]/70">
              Subscribe & Save 10%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Provides the controls to update the quantity of a line item in the cart.
 * These controls are disabled when the line item is new, and the server
 * hasn't yet responded that it was successfully added to the cart.
 */
function CartLineQuantity({line}: {line: CartLine}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity, isOptimistic} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div className="flex flex-row gap-[18px] border border-black/20 rounded-[6px] px-3 py-[10px]">
      <div className={`${quantity <= 1 ? 'hidden' : 'block'}`}>
        <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
          <button
            aria-label="Decrease quantity"
            disabled={quantity <= 1 || !!isOptimistic}
            name="decrease-quantity"
            value={prevQuantity}
            className="flex items-center w-[10px] h-[10px]"
            title="Less"
          >
            <span className="text-[#1B1F23]/70">&#8722; </span>
          </button>
        </CartLineUpdateButton>
      </div>
      <div className={`${quantity > 1 ? 'hidden' : 'block'}`}>
        <CartLineRemoveButton
          lineIds={[lineId]}
          disabled={quantity > 1 || !!isOptimistic}
        />
      </div>
      <div className="flex items-center">
        <span className="font-['Rubik'] font-normal text-[12px] leading-[14.22px] text-[#1B1F23]/70">
          {quantity}
        </span>
      </div>
      <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
        <button
          aria-label="Increase quantity"
          name="increase-quantity"
          value={nextQuantity}
          disabled={!!isOptimistic}
          className="flex items-center w-[10px] h-[10px]"
          title="Add"
        >
          <span className="text-[#1B1F23]/70">&#43;</span>
        </button>
      </CartLineUpdateButton>
    </div>
  );
}

/**
 * A button that removes a line item from the cart. It is disabled
 * when the line item is new, and the server hasn't yet responded
 * that it was successfully added to the cart.
 */
function CartLineRemoveButton({
  lineIds,
  disabled,
}: {
  lineIds: string[];
  disabled: boolean;
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <button
        disabled={disabled}
        type="submit"
        className={`${
          disabled ? 'hidden' : 'block'
        } flex items-center w-[10px] h-[10px]`}
        title="Remove"
      >
        <span className="text-[#1B1F23]/70">&#8722;</span>
      </button>
    </CartForm>
  );
}

function CartLineUpdateButton({
  children,
  lines,
}: {
  children: React.ReactNode;
  lines: CartLineUpdateInput[];
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}
