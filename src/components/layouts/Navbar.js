'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconNormal from '../base/IconNormal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      isMenuOpen
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    // className='sticky top-0 z-50 bg-white border' Add this to make it sticky
    <header className="bg-grey--light" ref={navbarRef}>
      <nav className="container mx-auto p-5 py-6">
        <div className=' flex items-center justify-between'>
          <div className="flex items-center text-black lg:gap-16 gap-4">
            <div className="lg:hidden flex">
              <button
                className=""
                onClick={handleMenuToggle}
              >
                {isMenuOpen ?
                  <IconNormal src="images/navbar-close.svg" /> :
                  <IconNormal src="images/navbar-open.svg" />
                }
              </button>
            </div>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              className="dark:invert lg:flex hidden"
              width={185}
              height={32}
              priority
            />
            <Image
              src="/images/logo.svg"
              alt="Logo"
              className="dark:invert lg:hidden flex"
              width={139}
              height={24}
              priority
            />
            <div className='lg:flex hidden space-x-10'>
              <Link href="/">
                HOME
              </Link>
              <Link href="/">
                FORWARDING & 3PL
              </Link>
              <Link href="/">
                LEMBAGA JASA KEUANGAN
              </Link>
            </div>
          </div>
          <div>
            <button className="btn-blue text-center bg-black text-white lg:w-48 w-24 lg:py-4 py-2 focus:ring rounded-full text-lg">Masuk</button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col mt-2 bg-gray-700 py-2 px-4 text-white text-center transition-opacity duration-300">
            <Link className='py-2' href="/">HOME</Link>
            <Link className='py-2' href="/">FORWARDING & 3PL</Link>
            <Link className='py-2' href="/">LEMBAGA JASA KEUANGANL</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
