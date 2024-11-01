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
      href: "https://twitter.com/company",
      label: "Twitter",
    },
    {
      icon: <MessageSquare size={24} />,
      href: "https://discord.gg/company",
      label: "Discord",
    },
    {
      icon: <Youtube size={24} />,
      href: "https://youtube.com/company",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-black via-red-900 to-black relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-red-500 to-red-800"></div>

      <div className=" px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block">
              COMPANY NAME
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Pushing boundaries since October 31, 2024. Join us on our journey
              to revolutionize the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-red-500">Address:</span> 123 Innovation
                Street
              </p>
              <p className="text-gray-400">
                <span className="text-red-500">Email:</span> contact@company.com
              </p>
              <p className="text-gray-400">
                <span className="text-red-500">Phone:</span> +1 (555) 123-4567
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block">
              Stay Updated
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-red-500 border border-red-800"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
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
              © 2024 Company Name. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
