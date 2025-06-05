import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react'

const Footer = () => {
  // Function to handle clicking on internal links
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-tecumseh-green">Tecumseh Golf</h3>
            <p className="text-gray-300 mb-4">
              Your complete golf experience. Serving the Windsor-Essex golf community since 1992.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Tecumseh-Golf-100063577331125/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-tecumseh-green transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/store" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Pro Shop
                </Link>
              </li>
              <li>
                <Link to="/services#fitting" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Club Fitting
                </Link>
              </li>
              <li>
                <Link to="/services#repair" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Club Repair
                </Link>
              </li>
              <li>
                <Link to="/services#simulator" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Simulator Testing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tecumseh-green transition-colors" onClick={handleLinkClick}>
                  Expert Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-tecumseh-green mt-0.5 flex-shrink-0" />
                <div>
                  <p>366 Manning Rd</p>
                  <p>Windsor, ON N8N 4W5</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-tecumseh-green flex-shrink-0" />
                <p>(519) 735-8933</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-tecumseh-green flex-shrink-0" />
                <p>info@tecumsehgolf.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-tecumseh-green mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 10AM-7PM</p>
                  <p>Sat: 9AM-6PM</p>
                  <p>Sun: 10AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tecumseh Golf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

