import {Link, NavLink} from '@remix-run/react';
import {useRootLoaderData} from '~/root';
import footterImg from '../assets/images/footer-img.jpg'
import rightArrow from '../assets/images/right-arrow.svg'
import footerLogo from '../assets/images/footer-logo.svg'
import instaIcon from '../assets/images/insta.svg'
import tiktakIcon from '../assets/images/tiktak.svg'
import facebookIcon from '../assets/images/facebook.svg'
import yelpIcon from '../assets/images/yelp.svg'
import ytbIcon from '../assets/images/you-tube.svg'
import linkdinIcon from '../assets/images/linkdin.svg'
import twitterIcon from '../assets/images/twitter.svg'



export function Footer({menu, shop}) {
  return (
    <footer className="footer bg-red-100 py-[55px] relative">
        <div className="footer-top border-0 border-b-Black border-solid border-b-1 pb-[55px] smscreen:pb-0">
            <div className="container-fluid">
                <div className="flex flex-wrap flex-row lgscreen:flex-col items-center justify-between m-0 p-0">
                    <div className="lg:w-6/12 w-full">
                        <div className="title title-relative title-black mb-[40px] smscreen2:mb-28 last:mb-0">
                            <div className="flex flex-wrap gap-[5px] items-center">
                                <h5>
                                    Join Us On Instagram @Withaura
                                </h5>
                                <Link to={'/'}>
                                    <img src={rightArrow} alt="arrow"/>
                                </Link>
                            </div>
                        </div>
                        <div className="footer-img">
                            <img src={footterImg} height="600" width="600" alt="footer-img" className="h-auto w-full"/>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full relative lgscreen:py-[55px]">
                        <div className="flex flex-col justify-between gap-[55px] smscreen:gap-0 items-center m-0 p-0">
                            <div className="footer-form w-full">
                                <div className="title title-black title-relative mb-[40px] last:mb-0 ">
                                    <h5>
                                        Join Our Email List
                                    </h5>
                                </div>
                                <div className="subscribe__form flex flex-wrap justify-center lgscreen:flex-col gap-[20px] mb-[20px] last:mb-0">
                                    <input type="email" placeholder="Enter address" className="bg-transparent placeholder:text-Black border-0 border-b-Black border-solid border-b-1 w-[434px] xsscreen2:w-[298px] min_width_768:w-[600px] placeholder:text-black"/>
                                    <button style={{border:'1px solid black'}} className="subscribe__btn btn btn-black btn-transparent ">Subscribe</button>
                                </div>
                                <div className="content ">
                                    <p>
                                        By signing up you agree to our
                                        <Link to={'/'}>Terms of Use </Link> and
                                        <Link to={'/'}>
                                            Privacy Policy
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap smscreen:gap-[55px] justify-between items-center gap-[168px] xl:pt-[354px]">
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <Link to={"/"}>
                                                Terms of Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                    Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                CA Privacy Notice 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                FDA Disclaimer 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                 Cookie Notice 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                 Return Policy 
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to={"/"}>
                                                Our Story                                            
                                             </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                 FAQs                                            
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/"}>
                                                Blog                                            
                                            </Link>
                                        </li>
                                        <div className="footer-logo hidden smscreen2:block pr-10 mt-[40px]">
                                            <Link to={'/'}>
                                                <img src={footerLogo} height="200" width="150" alt="footer-logo" className="max-w-[75px] h-[100px]"/>
                                            </Link>
                                        </div>
                                    </ul>
                                    <div className="footer-logo smscreen2:hidden">
                                        <Link to={'/'}>
                                            <img src={footerLogo} height="200" width="150" alt="footer-logo"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bootom mt-[55px] smscreen:mt-[30px]">
            <div className="container-fluid">
                <div className="flex flex-row smscreen:flex-col-reverse justify-between items-center gap-2 smscreen:gap-5">
                    <div className="copyright content smscreen:text-center">
                        <p>
                            Copyright aura 2023. All rights reserved.
                        </p>
                    </div>
                    <div className="social-media">
                        <div className="flex gap-x-[20px] items-center">
                            <Link to={'/'} className="social-icon">
                                <img src={instaIcon} height="20" width="20" alt="social-icon"/>
                            </Link>
                            <Link to={'/'} className="social-icon">
                                <img src={facebookIcon} height="20" width="20" alt="social-icon"/>
                            </Link>
                            <Link to={'/'} className="social-icon">
                                <img src={tiktakIcon} height="20" width="20" alt="social-icon"/>
                            </Link>
                            <Link to={'/'} className="social-icon">
                                <img src={twitterIcon} height="20" width="20" alt="social-icon"/>
                            </Link>
                            <Link to={'/'} className="social-icon">
                                <img src={yelpIcon} height="20" width="20" alt="social-icon"/>
                            </Link>
                            <Link to={'/'} className="social-icon">
                                <img src={ytbIcon} height="20" width="20" alt="social-icon"/>
                            </Link>
                            <Link to={'/'} className="social-icon">
                                <img src={linkdinIcon} height="20" width="20" alt="social-icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}


function FooterMenu({menu, primaryDomainUrl}) {
  const {publicStoreDomain} = useRootLoaderData();

  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <Link to={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </Link>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
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


function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}
