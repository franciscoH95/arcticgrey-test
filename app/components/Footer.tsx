import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import {
  CupFillIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '~/assets/icons';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
            {footer && header.shop.primaryDomain?.url && (
              <FooterMenu
                menus={footer}
                primaryDomainUrl={header.shop.primaryDomain.url}
                publicStoreDomain={publicStoreDomain}
              />
            )}
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

function FooterMenu({
  menus,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  menus: FooterQuery;
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
}) {
  return (
    <div className="flex flex-col w-full bg-[#F6F6F5]">
      <div className="flex flex-row gap-[140px] md:gap-[40px] justify-between pt-[80px] pb-[80px] pl-10 pr-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-['Rubik'] font-semibold text-[24px] leading-[28.44px] text-[#1B1F23]">
              Be a Part of Our Journey
            </span>
            <span className="flex flex-col font-['Rubik'] font-normal text-[16px] leading-[26px] text-[#1B1F23]/80">
              <span>Welcome to UNCMFRT. Sign up for exclusive</span>
              <span>content and we&apos;ll send you 10% off.</span>
            </span>
          </div>
          <div className="flex flex-row">
            <input
              type="mail"
              className="px-[20px] py-[13px] rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none border-[1px] border-[#DDDDDD]
                        placeholder-font-['Rubik'] placeholder-font-normal placeholder-text-[14px] placeholder-leading-[16.59px] placeholder-black/80"
              placeholder="Email Address"
            />
            <button className="w-[136px] h-[50px] bg-[#1B1F23] px-[20px] py-[13px] rounded-tr-lg rounded-br-lg gap-2 border-[#1B1F23] border-[1px]">
              <span className="font-['Rubik'] font-medium text-[14px] leading-[16.59px] text-white">
                Subscribe
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-[60px]">
          {Object.values(menus).map((menu) => (
            <div className="flex flex-col gap-6" key={menu?.id}>
              <span className="font-['Rubik'] font-medium text-[18px] leading-[21.33px] text-[#1B1F23]">
                {menu?.title}
              </span>
              <nav className="flex flex-col gap-4" role="navigation">
                {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
                  if (!item.url) return null;
                  const url =
                    item.url.includes('myshopify.com') ||
                    item.url.includes(publicStoreDomain) ||
                    item.url.includes(primaryDomainUrl)
                      ? new URL(item.url).pathname
                      : item.url;
                  const isExternal = !url.startsWith('/');
                  return isExternal ? (
                    <a
                      href={url}
                      key={item.id}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <NavLink
                      end
                      key={item.id}
                      prefetch="intent"
                      style={activeLinkStyle}
                      to={url}
                    >
                      <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
                        {item.title}
                      </span>
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[34px]">
          <div className="flex flex-col gap-6">
            <span className="font-['Rubik'] font-medium text-[18px] leading-[21.33px] text-[#1B1F23]">
              Contact Us
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
                Let Us Help You
              </span>
              <span className="font-['Rubik'] font-bold text-[24px] leading-[28.44px] text-[#1B1F23]">
                (888) 860-0572
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="font-['Rubik'] font-medium text-[18px] leading-[21.33px] text-[#1B1F23]">
                Connect With Us
              </span>
              <div className="flex flex-row gap-6 items-center">
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <YoutubeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-[50px] border-solid border-black/10 border-t border-b items-center justify-between pl-10 pr-10">
        <span className="font-['Rubik'] font-normal text-[16px] leading-[18.96px] text-[#1B1F23]">
          © uncmfrt.com. All right reserved.
        </span>
        <span className="flex flex-row items-center gap-1 font-['Noah Head'] font-light text-[14px] leading-[17.49px] text-[#1B1F23]">
          Made with <HeartIcon /> and <CupFillIcon /> by Arctic Grey
        </span>
      </div>
    </div>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  title: '',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
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
    color: isPending ? 'grey' : 'white',
  };
}
