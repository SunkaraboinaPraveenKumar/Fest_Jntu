import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-quest-700 text-xl font-bold">QUEST</span>
              <span className="ml-1 text-sm bg-quest-700 text-white px-1.5 py-0.5 rounded">2025</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              A National level Technical symposium by JNTUH-UCESTH CSE-DEPARTMENT
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-quest-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-quest-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-quest-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-quest-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {['Home', 'About', 'Events', 'Stalls', 'Schedule', 'Sponsors', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-quest-600 dark:hover:text-quest-400 text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex">
                <MapPin className="h-5 w-5 text-quest-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  JNTUH-UCESTH, Kukatpally, Hyderabad, Telangana
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-quest-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  +91 123456789
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-quest-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  sunkaraboinap@gmail.com
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
              Subscribe
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Get the latest updates about QUEST 2025
            </p>
            <div className="mt-4 flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none focus-visible:ring-0"
              />
              <Button className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} QUEST 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;