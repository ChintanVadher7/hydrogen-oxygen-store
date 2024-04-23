import { Await, Link, NavLink } from '@remix-run/react';
import { Fragment, Suspense } from 'react';
import { useRootLoaderData } from '~/root';
import { IoCart } from "react-icons/io5";
import searchIcon from '../assets/images/search.svg'
import calenderIcon from '../assets/images/celender.svg'
import headerLogo from '../assets/images/header-logo.svg'
import peopleIcon from '../assets/images/people.svg'


// import HeaderCustom from './HeaderCustom';


export function Header({ header, isLoggedIn, cart, headerItems }) {
  const { shop, menu } = header;

  const openCart = () => {
      window.location.href = window.location.href + '#cart-aside';
  }
  

  return (
    <header className="header flex bg-transparent z-[2]">
      <div className="container-fluid w-full pt-[30px] pb-[16px]">
        <div className="header-bottom flex flex-wrap justify-between xl:items-stretch xlscreen:items-center w-full relative py-30 lg:pb-16">
          <div className="cat-btn flex-wrap gap-[30px] hidden smscreen2:flex">
            <Link to={'/'} className="btn-search ">
              <img src={searchIcon} height="16" width="16" alt="search" />
            </Link>
          </div>
          <div className="navbar">
            <div className="mobile-menu-main smscreen2:hidden">
              <ul className="flex flex-wrap items-center my-0 gap-10 lgscreen:gap-7 xl:h-full ">
                <li>
                  <Link to={'/'}>
                    Shop aura
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    Our Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo xl:flex xl:justify-center lgscreen:max-w-[90px]">
            <Link to={'/'}>
              <img src={headerLogo} width="80" height="33" alt="logo" />
            </Link>
          </div>
          <div className="cat-btn flex flex-wrap gap-[40px] smscreen2:gap-[20px] ml-30">
            <Link onClick={openCart} to={'/#cart-aside'} className="btn-search smscreen2:hidden">
              <img src={searchIcon} height="16" width="16" alt="search" />
            </Link>
            <Link to={'/'} className="calnder">
              <img src={calenderIcon} height="16" width="16" alt="search" />
            </Link>
            <Link to={'/'} className="people-icon">
              <img src={peopleIcon} height="16" width="16" alt="search" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


export function HeaderMenu({ menu, primaryDomainUrl, viewport, headerItems }) {
  const { publicStoreDomain } = useRootLoaderData();
  const className = `header-menu-${viewport}`;
  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <div className='flex'>
      <nav className={className} role="navigation">
        {viewport === 'mobile' && (
          <NavLink
            end
            onClick={closeAside}
            prefetch="intent"
            style={activeLinkStyle}
            to="/"
          >
            Home
          </NavLink>
        )}
        {headerItems ?
          headerItems?.headerItems?.values?.map((item) => {
            return (
              <NavLink
                className="header-menu-item"
                end
                key={item.id}
                onClick={closeAside}
                prefetch="intent"
                style={activeLinkStyle}
                to={'#'}
              >
                {item}
              </NavLink>
            );
          }) : ''}


      </nav>
      <HeaderCtas />
    </div>
  );
}


function HeaderCtas({ isLoggedIn, cart }) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <Link className="header-menu-mobile-toggle" to={"#mobile-menu-aside"}>
      <h3>☰</h3>
    </Link>
  );
}

function SearchToggle() {
  return <Link to={"#search-aside"}>Search</Link>;
}

/**
 * @param {{count: number}}
 */
function CartBadge({ count }) {
  return <Link to={"#cart-aside"}>Cart {count}</Link>;
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({ cart }) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
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


function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

