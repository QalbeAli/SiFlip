import React from "react";
import { Mail, Twitter, MessageSquare, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Mail size={24} />,
      href: "mailto:contact@company.com",
      label: "Email",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://x.com/AlfredNobal?s=09",
      label: "Twitter",
    },
    {
      icon: <MessageSquare size={24} />,
      href: "https://discord.gg/company",
      label: "Discord",
    },
    {
      icon: <Youtube size={24} />,
      href: "https://m.youtube.com/watch?v=AQBhOaNXfAY",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-black via-red-900 to-black relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-red-500 to-red-800"></div>

      <div className="px-6 py-16">
        <div className="flex flex-col items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12 mb-12">
            <div className="flex flex-col items-center  space-y-4">
              <h3 className="text-2xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block text-center">
                SiFlip
              </h3>
              <p className="text-gray-400 leading-relaxed text-center">
                Fuaxdoxx Remember
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block text-center">
                Contact Us
              </h3>
              <div className="space-y-2 text-center">
                <p className="text-gray-400">
                  <span className="text-red-500">Email:</span>{" "}
                  Contact@siflip.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="text-gray-500 text-sm">
              © 2024 SiFlip. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-2 text-2xl">
        # 3<sup className="text-red-500">4</sup> * 10/31 #
      </div>
    </footer>
  );
};

export default Footer;
