"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Send } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white pt-16 pb-8 relative overflow-hidden">
      
      {/* Inline styles for marquee animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>

      {/* Partner Section / Marquee */}
      <div className="border-b border-white/10 pb-12 mb-12">
        <div className="container max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center text-sm font-medium text-gray-400 tracking-widest uppercase">Dipercaya oleh berbagai perusahaan</p>
        </div>
        <div className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
          <div className="animate-scroll flex items-center space-x-16 opacity-50 px-8">
            {['TELKOM', 'MANDIRI', 'PERTAMINA', 'BCA', 'UNILEVER', 'GOJEK', 'TOKOPEDIA', 'GRAB'].map((partner, i) => (
              <span key={i} className="font-heading font-bold text-2xl text-gray-500">
                {partner}
              </span>
            ))}
             {/* Duplicate for infinite scroll illusion */}
            {['TELKOM', 'MANDIRI', 'PERTAMINA', 'BCA', 'UNILEVER', 'GOJEK', 'TOKOPEDIA', 'GRAB'].map((partner, i) => (
              <span key={i + 8} className="font-heading font-bold text-2xl text-gray-500">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-6 bg-white w-fit p-3 rounded-xl">
              <Image src="/logo.png" alt="Arutala Logo" width={140} height={40} className="object-contain" />
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Creative Design & Printing Partner. Kami memberikan solusi desain estetis dan cetak berkualitas tinggi yang diantar langsung ke depan pintu Anda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#tentang-kami" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#layanan" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="#berita" className="hover:text-accent transition-colors">News</Link></li>
              <li><Link href="#kontak" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Our Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-accent transition-colors">ID Card & Lanyard</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Sablon Kaos Custom</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Mug Printing</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Stempel Otomatis</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Brosur & Banner</Link></li>
            </ul>
          </div>
          
          {/* Kolom 4: Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Subscribe untuk mendapatkan update promo terbaru dan artikel seputar desain.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent w-full transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white font-medium rounded-lg px-4 py-3 flex items-center justify-center gap-2 transition-colors w-full group"
              >
                <span>Subscribe</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arutala Desain. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}