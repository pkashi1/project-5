"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const services = [
  { name: 'Directional Boring', href: '/services/directional-boring' },
  { name: 'Utility Installation', href: '/services/utility-installation' },
  { name: 'Civil Construction', href: '/services/civil-construction' },
  { name: 'Pile Installation', href: '/services/pile-installation' },
  { name: 'Water & Sewer Treatment', href: '/services/water-sewer-treatment' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(225) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@southernunderground.com</span>
              </div>
            </div>
            <div className="text-sm">
              4922 Rankin Street, Zachary, Louisiana 70791
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-construction-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SU</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-primary">Southern Underground</div>
              <div className="text-xs text-muted-foreground">of Louisiana</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-construction-500 ${
                isActive('/') ? 'text-construction-500' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-construction-500 ${
                isActive('/about') ? 'text-construction-500' : 'text-foreground'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-construction-500 transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors hover:text-construction-500 ${
                isActive('/projects') ? 'text-construction-500' : 'text-foreground'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/safety"
              className={`text-sm font-medium transition-colors hover:text-construction-500 ${
                isActive('/safety') ? 'text-construction-500' : 'text-foreground'
              }`}
            >
              Safety
            </Link>
            <Link
              href="/careers"
              className={`text-sm font-medium transition-colors hover:text-construction-500 ${
                isActive('/careers') ? 'text-construction-500' : 'text-foreground'
              }`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-construction-500 ${
                isActive('/contact') ? 'text-construction-500' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden lg:block">
              <Button asChild className="bg-construction-500 hover:bg-construction-600">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 px-0"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-4">
              <Link
                href="/"
                className="block text-base font-medium text-foreground hover:text-construction-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-base font-medium text-foreground hover:text-construction-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-base font-medium text-foreground">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm text-muted-foreground hover:text-construction-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/projects"
                className="block text-base font-medium text-foreground hover:text-construction-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/safety"
                className="block text-base font-medium text-foreground hover:text-construction-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Safety
              </Link>
              <Link
                href="/careers"
                className="block text-base font-medium text-foreground hover:text-construction-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block text-base font-medium text-foreground hover:text-construction-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full bg-construction-500 hover:bg-construction-600">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}