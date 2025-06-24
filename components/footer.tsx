import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-construction-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SU</span>
              </div>
              <div>
                <div className="text-lg font-bold">Southern Underground</div>
                <div className="text-sm opacity-80">of Louisiana</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Building the foundations of tomorrow through innovative construction and infrastructure solutions since 2015.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground hover:text-construction-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-construction-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/directional-boring" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Directional Boring
                </Link>
              </li>
              <li>
                <Link href="/services/utility-installation" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Utility Installation
                </Link>
              </li>
              <li>
                <Link href="/services/civil-construction" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Civil Construction
                </Link>
              </li>
              <li>
                <Link href="/services/pile-installation" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Pile Installation
                </Link>
              </li>
              <li>
                <Link href="/services/water-sewer-treatment" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Water & Sewer Treatment
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/safety" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/careers" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="opacity-80">
                  4922 Rankin Street<br />
                  Zachary, Louisiana 70791
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="opacity-80">(225) 555-0123</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <div className="opacity-80">info@southernunderground.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 Southern Underground of Louisiana. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="opacity-80 hover:opacity-100 hover:text-construction-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}