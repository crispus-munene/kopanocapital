import { Mail, Facebook, Linkedin, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <section className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-8 py-16 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Empowering Your Financial Journey
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We believe everyone deserves access to fair, transparent lending. <br/>
              Our mission is To be the leading workforce-focused micro-lender<br/> that
              transforms lives by making credit accessible, affordable,<br/> and reliable.
            </p>
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#2b5182]" />
                <span>Plot 205, Independence Avenue, Gaborone </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2b5182]" />
                <span>+267 3164166/74526207</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Product</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Overview
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="#partnering" className="text-gray-400 hover:text-white transition-colors duration-300">
                Partnering With Us
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a> */}
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Blog
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                FAQs
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 Kopano Capital. Access To Finance Simplified.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="mailto:info@kopanocapital.co.bw" 
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#2b5182] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
                target="_blank"
              >
                <Mail className="w-5 h-5 text-gray-300" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61579396015520" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#2b5182] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-300" />
              </a>
              <a 
                href="https://www.linkedin.com/company/kopano-capital-proprietary-limited/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#2b5182] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;