import { Link } from '@remix-run/react';
import styles from './headerBottom.module.css'; // Assuming a CSS module

function HeaderCustom() {
  return (
    <div className={styles.headerBottom}>
      <div className={`${styles.catBtn} hidden smscreen2:flex`}>
        <button className={`${styles.navbarToggler} hidden smscreen2:flex smscreen2:flex-col p-0`}>
          <span />
          <span />
          <span />
        </button>
        <Link to="/search" className={styles.btnSearch}>
          <img src="/app/assets/images/search.svg" alt="search" width="16" height="16" />
        </Link>
      </div>
      <div className={styles.navbar}>
        <div className={`${styles.mobileMenuMain} smscreen2:hidden`}>
          <ul className={`${styles.menu} flex flex-wrap items-center my-0 gap-10 lgscreen:gap-7 xl:h-full`}>
            <li>
              <Link to="/shop">Shop aura</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Our Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.logo} xl:flex xl:justify-center lgscreen:max-w-[90px]`}>
        <Link href="index.html">
          <img src="/app/assets/images/header-logo.svg" alt="logo" width="80" height="33" />
        </Link>
      </div>
      <div className={`${styles.catBtn} flex flex-wrap gap-[40px] smscreen2:gap-[20px] ml-30`}>
        <Link to="/search" className={`${styles.btnSearch} smscreen2:hidden`}>
          <img src="/app/assets/images/search.svg" alt="search" width="16" height="16" />
        </Link>
        <Link href="#" className={styles.calnder}>
          <img src="/app/assets/images/celender.svg" alt="search" width="16" height="16" />
        </Link>
        <Link href="#" className={styles.peopleIcon}>
          <img src="/app/assets/images/people.svg" alt="search" width="16" height="16" />
        </Link>
      </div>
    </div>
  );
}

export default HeaderCustom;
