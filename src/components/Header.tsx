'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About the Project', href: '/about' },
  { name: 'Membership', href: '/membership' },
  { name: 'Expertise Contribution', href: '/expertise' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream/95 shadow-md' : 'bg-cream/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity duration-200">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo-placeholder.png"
                  alt="GSB Vineyard Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <span className="text-2xl font-serif text-earth-dark">GSB Vineyard</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-dark/70 hover:text-dark relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-olive-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-smooth" />
              </Link>
            ))}
            <Link
              href="/join"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-olive hover:bg-olive-dark rounded-full transition-all duration-200 ease-smooth hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Join the Community
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-dark/70 hover:text-dark hover:bg-olive-light/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-2">
            <div className="flex flex-col space-y-1">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2.5 text-base font-medium text-dark/70 hover:text-dark hover:bg-olive-light/10 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/join"
                className="mx-3 mt-2 px-5 py-2.5 text-sm font-medium text-center text-white bg-olive hover:bg-olive-dark rounded-full transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Join the Community
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
