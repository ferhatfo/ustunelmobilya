'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const menuItems = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Hakkımızda', href: '/about' },
  { name: 'Hizmetler', href: '/services' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Rosinante Atölyesi', href: '/rosinante' },
  { name: 'İletişim', href: '/contact' },
  { name: '+90 242 311 07 07', href: 'tel:+902423110707' },
  { iconSrc: '/images/svg/Instagram.svg', href: 'https://www.instagram.com/azurpeyzaj.com.tr/', isIcon: true },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '-100%' },
        { x: '0%', duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 0.2,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: '-100%',
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  return (
    <header className="relative fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/svg/logo.svg" alt="Logo" width={130} height={40} />
        </Link>

        <button
          className="lg:hidden text-3xl z-[60] text-[#336159]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className="hidden lg:flex text-sm gap-4 font-medium">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-2 text-[#336159]">
              {item.isIcon ? (
                <Image src={item.iconSrc} alt="Icon" width={24} height={24} />
              ) : (
                item.name
              )}
            </Link>
          ))}
        </nav>

        <div
          ref={menuRef}
          className="fixed top-0 left-0 h-screen w-full bg-white z-40 flex flex-col justify-center items-center lg:hidden"
          style={{ transform: 'translateX(-100%)' }}
        >
          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <li
                key={item.name}
                ref={(el) => (linksRef.current[index] = el)}
              >
                <Link
                  href={item.href}
                  target={item.isIcon ? '_blank' : undefined}
                  rel={item.isIcon ? 'noopener noreferrer' : undefined}
                  className="text-xl font-medium flex items-center justify-center gap-2 text-[#336159]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.isIcon ? (
                    <Image src={item.iconSrc} alt="Icon" width={24} height={24} />
                  ) : (
                    item.name
                    
                  )}
                  
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
