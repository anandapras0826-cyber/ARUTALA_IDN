import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { Sparkles, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary pt-20 lg:pt-0">
      {/* Background with abstract curved lines/pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border border-white/20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full border border-white/10" />
      </div>
      
      <div className="container px-6 relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm italic">Solusi Cetak & Desain Kreatif</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
              Desain Estetik.<br/>
              Cetak Berkualitas.<br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-orange-300">
                Tepat Waktu.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              Kami membantu kebutuhan desain dan percetakan tanpa perlu antre. Gak pakai ribet, beres diantar sampai depan pintu dengan hasil memuaskan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="#katalog" 
                className={cn(buttonVariants({ size: "lg" }), "bg-accent text-white hover:bg-accent/90 rounded-full px-8 text-base shadow-[0_4px_20px_rgba(244,107,53,0.4)] transition-all duration-300 hover:scale-105 group")}
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#tentang-kami" 
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8 text-base border-white/20 text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105")}
              >
                About Us
              </Link>
            </div>
          </div>
          
          {/* Kolom Kanan: Collage Image */}
          <div className="relative h-[500px] lg:h-[600px] w-full mt-10 lg:mt-0 flex items-center justify-center lg:justify-end">
             {/* Decorative Background Box */}
             <div className="absolute top-[10%] right-[10%] w-[70%] h-[75%] bg-accent/20 rounded-3xl rotate-6 blur-sm" />
             <div className="absolute top-[12%] right-[12%] w-[70%] h-[75%] bg-accent rounded-3xl -rotate-3 shadow-2xl" />
             
             {/* Image 1: ID Card (Top Left) */}
             <div className="absolute top-[5%] left-[5%] w-[45%] h-[40%] bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white z-20 flex flex-col items-center justify-center transform -rotate-6 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-50">
                <span className="text-5xl mb-2">🏷️</span>
                <span className="text-sm font-bold text-gray-800">ID Card</span>
             </div>
             
             {/* Image 2: T-Shirt (Center Right) */}
             <div className="absolute top-[20%] right-[5%] w-[50%] h-[45%] bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white z-30 flex flex-col items-center justify-center transform rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-50">
                <span className="text-6xl mb-2">👕</span>
                <span className="text-sm font-bold text-gray-800">Custom T-Shirt</span>
             </div>
             
             {/* Image 3: Mug (Bottom Left) */}
             <div className="absolute bottom-[10%] left-[15%] w-[45%] h-[40%] bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white z-40 flex flex-col items-center justify-center transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-50">
                <span className="text-5xl mb-2">☕</span>
                <span className="text-sm font-bold text-gray-800">Mug Printing</span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
