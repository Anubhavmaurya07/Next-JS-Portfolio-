"use client";

import { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { links } from './Nav';
import Link from 'next/link';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const handleSheetToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button 
          className='flex justify-center items-center' 
          onClick={handleSheetToggle}
        >
          <CiMenuFries className='text-3xl text-accent' />
        </button>
      </SheetTrigger>
      <SheetContent onClick={handleCloseSheet}>
        {/* logo */}
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href={"/"}>
            <h1 className='text-4xl font-semibold'>
              Anubhav<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className='flex flex-col justify-center gap-8 items-center'>
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.path} 
              className={`${link.path === pathName && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
              onClick={handleCloseSheet}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
