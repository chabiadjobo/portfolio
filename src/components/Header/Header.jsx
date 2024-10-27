import React from 'react';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../logo.svg';
import Nav from './Nav/Nav';
import { NavMobile } from './Nav/NavMobile';
import { FaMedium, FaResearchgate, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Header = () => {
  return (
    <header>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto w-5/6 max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img alt="Your Company" src={logo} className="h-8 w-auto" /> */}
                    {/* Profile image */}
                    <img
                      alt="Profile"
                      src={logo}
                      className="h-8 w-auto"
                      onClick={() => {
                        const img = new Image();
                        img.src = logo; // replace with the larger image URL
                        const win = window.open();
                        win.document.write(img.outerHTML);
                      }}
                    />
                  </div>
                  {/* Desktop Nav Menu */}
                  <Nav />
                </div>
                <div className="absolute inset-y-0 right-0 flex flex-col items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Social Media Icons */}
                  <div className="flex my-6 space-x-1 mb-0">
                    <a href="https://medium.com/@chamaurele" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                      <FaMedium size={24} />
                    </a>
                    <a href="https://www.researchgate.net/profile/Ayedesso-Marc-Aurele-Chabi-Adjobo" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                      <FaResearchgate size={24} />
                    </a>
                    <a href="https://github.com/chabiadjobo" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ayedessomarcaurelechabiadjobo" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                  {/* Contact Info */}
                  <div className="flex flex-col items-center text-center">
                    <a href="mailto:chabiadjobo.marcaurele@gmail.com" className="text-sm mb-0 text-gray-700">chabiadjobo.marcaurele@gmail.com</a>
                    <span className="text-sm mt-0 text-gray-700">+33 7 55 33 60 53</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <NavMobile />
          </>
        )}
      </Disclosure>
    </header>
  );
};
