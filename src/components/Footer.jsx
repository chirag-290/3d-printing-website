import React from 'react';
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaTwitter },
    { label: "Dribbble", icon: FaDribbble },
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Blog", key: "item-1-2" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Pricing", key: "item-1-4" },
      { label: "Testimonials", key: "item-1-5" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  ];

  return (
    <div className="bg-slate-200 text-gray-800 p-4 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              {/* <Link to='/'>
                <img
                  src={"https://i.imgur.com/520zDfd.png"}
                  alt=""
                  className="w-16 h-auto mr-2"
                />
              </Link> */}
              <span className="text-3xl font-bold">3DPRINT MARKETPLACE</span>
            </div>
            <div className="text-gray-400">
              <span>Copyright © 2024 Your Company</span>
              <span className="block">All rights reserved</span>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              {socialLinks.map((socialLink, index) => {
                const Icon = socialLink.icon;
                return (
                  <Icon
                    key={`social-${index}`}
                    className="w-10 h-10 p-2 rounded-full bg-gray-400 hover:bg-gray-300 hover:text-gray-800 cursor-pointer transition duration-300"
                  />
                );
              })}
            </div>
          </div>
          <div className="grid w-full py-5 sm:py-0 grid-cols-2">
            {links.map((col, index) => (
              <ul key={`col-${index}`} className={`col col-${index + 1} text-gray-400 ${index === 0 ? 'text-2xl' : ''}`}>
                {col.map((link, linkIndex) => (
                  <li key={`link-${index}-${linkIndex}`} className="cursor-pointer">
                    {link.label}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold">Stay up to date</label>
            <input
              type="email"
              placeholder="Subscribe to our email"
              className="mt-2 w-full border-none rounded-lg py-3 px-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
