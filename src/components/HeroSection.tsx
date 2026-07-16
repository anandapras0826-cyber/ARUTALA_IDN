import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with night sky vibe */}
      <div className="absolute inset-0 bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black -z-10">
         <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="container px-6 relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-[-10vh]">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
          Desain Estetik.<br/>Cetak Berkualitas.<br/>
          <span className="text-accent">Diantar Sampai Senyum.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Kami membantu kebutuhan desain dan percetakan tanpa perlu antre. Gak pakai ribet, beres diantar sampai depan pintu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="#order" className={cn(buttonVariants({ size: "lg" }), "bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base")}>
            Konsultasi Gratis
          </Link>
          <Link href="#katalog" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8 text-base border-border hover:bg-white/5")}>
            Lihat Katalog
          </Link>
        </div>
      </div>
    </section>
  );
}
