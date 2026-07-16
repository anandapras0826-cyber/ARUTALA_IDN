import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { Phone, Clock, Mail, Search, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="w-full flex flex-col z-50 sticky top-0">
      {/* Top Bar */}
      <div className="hidden lg:flex w-full bg-white border-b border-border/40 py-3">
        <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Kiri: Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Arutala Logo" width={140} height={40} className="object-contain" priority />
          </Link>
          
          {/* Tengah: Kontak */}
          <div className="flex items-center gap-8 text-[13px] text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>Senin - Sabtu: 08:00 - 17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>halo@arutala.com</span>
            </div>
          </div>
          
          {/* Kanan: Kosong */}
          <div className="w-[120px]"></div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-primary text-white shadow-sm">
        <div className="container flex h-20 max-w-7xl mx-auto items-center px-6 justify-between lg:justify-start">
          
          {/* Mobile Logo */}
          <Link href="/" className="flex lg:hidden items-center space-x-2">
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">
              ARUTALA<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Links (Kiri pada desktop) */}
          <div className="hidden lg:flex gap-8 items-center flex-1">
            <Link href="/" className="text-sm font-medium text-accent transition-colors duration-300 ease-in-out">Home</Link>
            <Link href="#tentang-kami" className="text-sm font-medium hover:text-accent transition-colors duration-300 ease-in-out">About Us</Link>
            <Link href="#layanan" className="text-sm font-medium hover:text-accent transition-colors duration-300 ease-in-out">Services</Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors duration-300 ease-in-out">Portfolio</Link>
            <Link href="#berita" className="text-sm font-medium hover:text-accent transition-colors duration-300 ease-in-out">News</Link>
            <Link href="#kontak" className="text-sm font-medium hover:text-accent transition-colors duration-300 ease-in-out">Contact</Link>
          </div>

          {/* Kanan: Search & GET A QUOTE */}
          <div className="hidden lg:flex items-center gap-4">
            <button aria-label="Search" className="w-10 h-10 bg-accent flex items-center justify-center text-white rounded hover:bg-accent/90 transition-colors duration-300 ease-in-out">
              <Search className="w-5 h-5" />
            </button>
            <Link href="#order" className={cn(buttonVariants(), "bg-accent text-white hover:bg-accent/90 font-semibold rounded px-6 transition-all duration-300 ease-in-out hover:scale-105")}>
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
