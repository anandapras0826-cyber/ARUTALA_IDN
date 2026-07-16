import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function DesignGuidelineSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="text-accent font-medium text-sm">Design Guideline</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Panduan Desain Agar <br/> Hasil Cetak Sempurna
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Pastikan desain Anda siap cetak. Ikuti panduan kami agar warna, resolusi, dan format file sesuai standar untuk hasil yang memuaskan.
            </p>
            
            <div className="space-y-4 mb-10">
              {['Gunakan mode warna CMYK', 'Resolusi minimal 300 DPI', 'Sertakan font atau outline text', 'Beri margin aman/bleed 2mm'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Link 
              href="#panduan" 
              className={cn(buttonVariants({ size: "lg" }), "bg-accent text-white hover:bg-accent/90 rounded-full px-8 text-base shadow-[0_4px_20px_rgba(244,107,53,0.4)] transition-all duration-300 hover:scale-105")}
            >
              Unduh Template
            </Link>
          </div>
          
          {/* Kolom Kanan: Floating images & icons */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
             
             {/* Central Circle */}
             <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-[300px] h-[300px] border border-white/20 rounded-full" />
             </div>
             
             {/* Products */}
             <div className="absolute top-[10%] left-[20%] w-48 h-48 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white z-20 flex items-center justify-center rotate-[-5deg] hover:rotate-0 hover:scale-105 transition-transform duration-500">
               <span className="text-6xl">👕</span>
             </div>
             
             <div className="absolute bottom-[20%] right-[20%] w-40 h-40 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white z-30 flex items-center justify-center rotate-[8deg] hover:rotate-0 hover:scale-105 transition-transform duration-500">
               <span className="text-5xl">☕</span>
             </div>
             
             {/* Floating Icons (Ps, Ai, Id) */}
             <div className="absolute top-[20%] right-[10%] w-16 h-16 bg-[#31A8FF] rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl border-2 border-white/50 animate-bounce" style={{animationDuration: '3s'}}>
               Ps
             </div>
             
             <div className="absolute top-[45%] left-[5%] w-14 h-14 bg-[#FF9A00] rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-lg border-2 border-white/50 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
               Ai
             </div>
             
             <div className="absolute bottom-[10%] left-[30%] w-12 h-12 bg-[#FF3366] rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-base border-2 border-white/50 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
               Id
             </div>
             
          </div>
          
        </div>
      </div>
    </section>
  );
}
