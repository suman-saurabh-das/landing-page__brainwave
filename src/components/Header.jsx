import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';

import { brainwave } from '../assets';
import { navigation } from '../constants/index';
import Button from '../components/Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';

const Header = () => {
  // useLocation() hook gives us access to the current URL that we are on.
  const pathname = useLocation();
  // console.log(pathname);
  const [openNavigation, setOpenNavigation] = useState(true);

  // Toggle the navbar menu (mobile devices)
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  // Close the mobile navbar menu when any link is clicked
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`lg:backdrop-blur-sm lg:bg-n-8/90 border-b border-n-6 fixed top-0 left-0 w-full z-50 ${openNavigation ? "bg-n-8" : "backdrop-blur-sm bg-n-8/90"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Brainwave logo */}
        <a className="block xl:mr-8 w-[12rem]" href="#hero">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>

        {/* Navbar */}
        <nav className={`lg:flex bg-n-8 lg:bg-transparent fixed top-[5rem] right-0 bottom-0 left-0 lg:mx-auto lg:static ${openNavigation ? "flex" : "hidden"}`}>
          {/* Nav items container */}
          <div className="flex flex-col lg:flex-row items-center justify-center m-auto relative z-2">
            {
              navigation.map((item) => (
                <a className={`block font-code lg:leading-5 lg:-mr-0.25 px-6 xl:px-12 py-6 lg:py-8 relative text-2xl lg:text-xs text-n-1 lg:hover:text-n-1 hover:text-color-1 transition-colors uppercase ${item.onlyMobile ? "lg:hidden" : ""} ${item.url === pathname.hash ? "lg:text-n-1 z-2" : "lg:text-n-1/50"}`}
                  href={item.url}
                  key={item.id}
                  onClick={handleClick}
                >
                  {item.title}
                </a>
              ))
            }
          </div>
          {/* Background styles for navbar (mobile devices) */}
          <HamburgerMenu />
        </nav>

        <a className="hidden lg:block button mr-8 text-n-1/50 hover:text-n-1 transition-colors" href="#signup">
          New account
        </a>

        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        {/* Hamburger menu button (mobile devices) */}
        <Button className="ml-auto lg:hidden" onClick={toggleNavigation} px="px-3">
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}

export default Header;
