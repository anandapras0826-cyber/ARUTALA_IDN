import Link from 'next/link';
import { MapPin, Phone, Send } from 'lucide-react';
// PERBAIKAN: Menggunakan ikon Instagram dari react-icons/fa (FontAwesome)
import { FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-border mt-20 pt-16 pb-8">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="font-heading font-extrabold text-3xl tracking-tighter">
                ARUTALA<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Creative Design & Printing Partner yang menyediakan layanan desain grafis profesional, percetakan, serta delivery langsung ke lokasi Anda.
            </p>
            <div className="flex gap-4">
              {/* PERBAIKAN: Menambahkan aria-label, target="_blank", rel, dan menggunakan FaInstagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Arutala Desain"
                className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="tel:+6281234567890"
                aria-label="Hubungi Arutala Desain via Telepon"
                className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#tentang-kami" className="hover:text-accent transition-colors">Tentang Kami</Link></li>
              <li><Link href="#katalog" className="hover:text-accent transition-colors">Katalog Produk</Link></li>
              <li><Link href="#portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="#faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Kontak & Lokasi</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="shrink-0 text-accent" size={18} />
                <span>Jl. Pringsewu Selatan, Lampung</span>
              </li>
              <li className="flex gap-3">
                <Phone className="shrink-0 text-accent" size={18} />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex gap-3">
                <Send className="shrink-0 text-accent" size={18} />
                <span>hello@arutaladesain.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Arutala Desain. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}