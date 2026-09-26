import { Share2, Mail, Phone, MapPin, MessageCircle, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Description and Social */}
          <div>
            <h3 className="font-bold text-lg mb-3">Nagar Palika Parishad, Etah</h3>
            <p className="text-sm text-gray-300 mb-4">
              Dedicated to serving our citizens with transparency, efficiency, and
              digital governance excellence.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-blue-300 transition"
                title="Share"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition"
                title="Message"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition"
                title="Connect"
              >
                <Zap className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition">
                  About-Us
                </a>
              </li>
              <li>
                <a href="/staff" className="text-gray-300 hover:text-white transition">
                  Staff
                </a>
              </li>
              <li>
                <a href="/publicgrievance" className="text-gray-300 hover:text-white transition">
                  Public Grievance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Government Disclaimers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition">
                  Help Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <p>Etah Town Hall, Station Road, Etah - 207001</p>
              </div>
              <div className="flex gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <p>+91 5724-222-111</p>
              </div>
              <div className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <p>info@etahparishad.gov.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 pt-6 text-center text-sm text-gray-400">
        <p>
          &copy; 2025 Nagar Palika Parishad, Etah. All rights reserved. | Official
          Government Website 
          Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        <p>
          Hosted By - SDV Edutech Pvt. Ltd.
        </p>
      </div>
    </footer>
  )
}
