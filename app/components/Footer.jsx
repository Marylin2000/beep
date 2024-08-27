import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from 'react-icons/fa';
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10 border-b border-gray-700">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About Beep</h4>
            <p className="text-gray-400 text-sm">
              Beep is your one-stop shop for all things trendy. We offer a wide range of products from electronics to fashion, ensuring quality and affordability for all our customers.
            </p>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="/faq">FAQs</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="/returns">Returns & Refunds</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="/shipping">Shipping Information</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="/shop">Shop</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="/blog">Blog</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="/account">My Account</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="/wishlist">Wishlist</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on new products and upcoming sales.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 flex-1 rounded-l-lg bg-gray-800 text-sm text-gray-300 outline-none"
              />
              <button className="bg-green-500 px-4 py-2 rounded-r-lg text-sm hover:bg-green-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://facebook.com" className="hover:text-white transition duration-300"><FaFacebookF size={20} /></a>
              <a href="https://twitter.com" className="hover:text-white transition duration-300"><FaTwitter size={20} /></a>
              <a href="https://instagram.com" className="hover:text-white transition duration-300"><FaInstagram size={20} /></a>
              <a href="https://youtube.com" className="hover:text-white transition duration-300"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="flex items-center space-x-2">
                <FiPhoneCall size={20} />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail size={20} />
                <span>support@beep.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMapPin size={20} />
                <span>1234 Beep St, Shop City, Country</span>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Payment Methods</h4>
            <div className="flex space-x-4 text-gray-400">
              <FaCcVisa size={40} className="hover:text-white transition duration-300" />
              <FaCcMastercard size={40} className="hover:text-white transition duration-300" />
              <FaCcPaypal size={40} className="hover:text-white transition duration-300" />
              <FaCcAmex size={40} className="hover:text-white transition duration-300" />
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-white transition duration-300">
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li className="hover:text-white transition duration-300">
                <a href="/terms">Terms of Service</a>
              </li>
              <li className="hover:text-white transition duration-300">
                <a href="/sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © 2024 Beep. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
