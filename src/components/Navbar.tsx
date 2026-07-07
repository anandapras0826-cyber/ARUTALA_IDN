import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-xl mx-auto items-center px-6">
        <div className="flex w-full justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            {/* We use a text-based logo as a placeholder since there is no logo asset */}
            <span className="font-heading font-extrabold text-2xl tracking-tighter">
              ARUTALA<span className="text-accent">.</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#tentang-kami" className="text-sm font-medium hover:text-accent transition-colors">Tentang Kami</Link>
            <Link href="#cara-kerja" className="text-sm font-medium hover:text-accent transition-colors">Cara Kerja</Link>
            <Link href="#katalog" className="text-sm font-medium hover:text-accent transition-colors">Katalog</Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Portfolio</Link>
            <Link href="#faq" className="text-sm font-medium hover:text-accent transition-colors">FAQ</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6">
              <Link href="#order">Konsultasi Gratis</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
