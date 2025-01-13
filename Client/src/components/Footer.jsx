import React from "react";
import {
  Mail,
  PhoneCall,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">JobPortal</h3>
            <p className="text-gray-300 mb-4">
              Find your dream job from thousands of listings. We connect
              talented professionals with amazing companies.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Job Alerts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Companies
                </a>
              </li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-xl font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Upload Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Job Search Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Salary Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">
                  123 Job Street, Work City, 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">contact@jobportal.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} JobPortal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
