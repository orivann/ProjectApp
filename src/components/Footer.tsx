import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-industrial rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">AquaPump</span>
            </div>
            <p className="text-industrial-grey-light mb-4">
              Leading provider of industrial pumping solutions with over 25 years of experience serving industries worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-industrial-blue" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-industrial-blue" />
                <span>info@aquapump.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-industrial-grey-light hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-industrial-grey-light hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-industrial-grey-light hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-industrial-grey-light hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-industrial-grey-light hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-industrial-grey-light">
              <li>Installation & Setup</li>
              <li>Maintenance & Repair</li>
              <li>Custom Solutions</li>
              <li>Technical Support</li>
              <li>Emergency Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-industrial-blue mt-1" />
                <div className="text-sm text-industrial-grey-light">
                  <p>123 Industrial Blvd</p>
                  <p>Manufacturing District</p>
                  <p>Dallas, TX 75201</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-industrial-blue" />
                <div className="text-sm text-industrial-grey-light">
                  <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                  <p>Emergency: 24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-industrial-grey mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-industrial-grey-light text-sm">
              © 2024 AquaPump Industries. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-industrial-grey-light hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-industrial-grey-light hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-industrial-grey-light hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;