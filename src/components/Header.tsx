'use client';

import { Button } from "./ui/button";
import { Menu, X, Briefcase } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Navigation Links - Left Side */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link 
            href="/" 
            className={`hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/callisto" 
            className={`hover:text-primary transition-colors ${pathname === '/callisto' ? 'text-primary' : ''}`}
          >
            Callisto
          </Link>
          {/*
          <Link 
            href="/voidborn" 
            className={`hover:text-primary transition-colors ${pathname === '/voidborn' ? 'text-primary' : ''}`}
          >
            Voidborn
          </Link> */}
          <Link 
            href="/news" 
            className={`hover:text-primary transition-colors ${pathname === '/news' ? 'text-primary' : ''}`}
          >
            News
          </Link>
          <Link 
            href="/faq" 
            className={`hover:text-primary transition-colors ${pathname === '/faq' ? 'text-primary' : ''}`}
          >
            FAQ
          </Link>
        </nav>

        {/* Mobile Menu Button - Left */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Spacer - Center */}
        <div className="flex-1 lg:flex-none"></div>

        {/* Actions - Right Side */}
        <div className="flex items-center gap-3">
          <Link href="/careers">
            <Button 
              variant="outline" 
              size="sm"
              className={`hidden sm:flex items-center gap-2 hover:bg-purple-600/20 hover:border-purple-400 transition-all ${
                pathname === '/careers' ? 'bg-purple-600/20 border-purple-400' : ''
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Careers
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary/20 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className={`block hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/callisto" 
              className={`block hover:text-primary transition-colors ${pathname === '/callisto' ? 'text-primary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Callisto
            </Link>
            {/*
            <Link 
              href="/voidborn" 
              className={`block hover:text-primary transition-colors ${pathname === '/voidborn' ? 'text-primary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Voidborn
              */}
            </Link>
            <Link 
              href="/news" 
              className={`block hover:text-primary transition-colors ${pathname === '/news' ? 'text-primary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="/faq" 
              className={`block hover:text-primary transition-colors ${pathname === '/faq' ? 'text-primary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4 border-t">
              <Link 
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full flex items-center gap-2 hover:bg-purple-600/20 hover:border-purple-400 transition-all ${
                    pathname === '/careers' ? 'bg-purple-600/20 border-purple-400' : ''
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  Careers
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
