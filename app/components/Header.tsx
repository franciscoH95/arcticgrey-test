import {Suspense, useState} from 'react';
import {Await, NavLink, useAsyncValue} from '@remix-run/react';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {
  UserIcon,
  BagIcon,
  SearchIcon,
  MenIcon,
  WomanIcon,
} from '~/assets/icons';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className="flex flex-row bg-white top-5 px-6 py-5 ml-10 mr-10 sticky z-10 rounded-lg h-16 items-center justify-between">
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <strong>{shop.name}</strong>
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      <SearchToggle />
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="relative font-['Rubik'] font-normal text-[14px] leading-[16.59px] text-black cursor-pointer no-underline group"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
            <span className="absolute left-0 bottom-[-10px] w-full h-[1px] bg-black transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>
          </NavLink>
        );
      })}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <GenreToggle />
      <QuizBtn />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement={<UserIcon />}>
            {(isLoggedIn) => (isLoggedIn ? 'Account' : <UserIcon />)}
          </Await>
        </Suspense>
      </NavLink>
      <CartToggle cart={cart} />
    </nav>
  );
}

function GenreToggle() {
  const [genre, setGenre] = useState('men');

  return (
    <button
      className="flex bg-[#E4E4E4] w-auto h-[45px] gap-[10px] items-center justify-center rounded-lg pt-[10px] pb-[10px] ps-[16px] pe-[6px]"
      onClick={() => setGenre(genre === 'men' ? 'women' : 'men')}
    >
      <span
        className={`font-medium text-sm leading-4 font-['rubik'] ${
          genre === 'men' ? 'translate-x-0' : 'translate-x-10'
        }`}
      >
        {genre === 'men' ? 'Men' : 'Women'}
      </span>
      <div
        className={`flex w-[33px] h-[33px] bg-white rounded-full items-center justify-center transition duration-300 gap-[10px] ${
          genre === 'men' ? 'translate-x-0' : '-translate-x-14'
        }`}
      >
        {genre === 'men' ? <MenIcon /> : <WomanIcon />}
      </div>
    </button>
  );
}

function QuizBtn() {
  return (
    <button className="bg-[#1B1F23] text-white rounded-lg p-[10px] gap-[10px] w-[140px] h-[45px]">
      <span className="font-medium text-sm leading-4 font-['rubik']">
        Take The Quiz
      </span>
    </button>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button
      className="justify-items-end font-normal leading-4"
      onClick={() => open('search')}
    >
      <SearchIcon />
    </button>
  );
}

function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      <BagIcon />
      {/* {count === null ? <span>&nbsp;</span> : count} */}
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}
