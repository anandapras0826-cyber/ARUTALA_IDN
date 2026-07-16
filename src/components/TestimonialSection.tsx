import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Budi Setiawan", role: "Mahasiswa", text: "Pelayanannya cepat banget, revisi desain juga ramah. Mantap Arutala!" },
  { name: "Ayu Lestari", role: "Owner UMKM", text: "Hasil cetak stiker untuk packaging kue saya bagus dan warnanya tajam." },
  { name: "Andi Pratama", role: "Ketua Panitia Event", text: "Desain banner keren dan diantar langsung ke lokasi acara. Sangat membantu!" },
  { name: "Siti Nurhaliza", role: "Freelancer", text: "Sangat dimudahkan dengan form pemesanannya, nggak perlu bolak-balik nanya admin." },
];

export function TestimonialSection() {
  return (
    <section id="testimoni" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lines" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri: Gambar Pekerja / Klien */}
          <div className="relative w-full h-[500px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center">
             <div className="flex flex-col items-center opacity-30">
                <span className="text-6xl mb-4">🎨</span>
                <span className="text-white font-heading text-lg">Klien / Desainer Image Placeholder</span>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-10 left-10 w-20 h-20 bg-accent/30 rounded-full blur-xl" />
             <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </div>

          {/* Kolom Kanan: Konten Testimoni */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="text-accent font-medium text-sm">Testimonials</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-10 leading-tight">
              What Our Clients Say
            </h2>

            <div className="w-full max-w-lg">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {testimonials.map((testi, i) => (
                    <CarouselItem key={i}>
                      <div className="p-1">
                        {/* Quote Box with Glassmorphism */}
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 relative shadow-2xl">
                          <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10" />
                          
                          <div className="flex gap-1 text-accent mb-6">
                             {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                          </div>
                          
                          <p className="text-gray-300 text-lg md:text-xl italic mb-8 leading-relaxed">
                            "{testi.text}"
                          </p>
                          
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                              {testi.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-heading font-bold text-white text-lg">{testi.name}</p>
                              <p className="text-sm text-gray-400">{testi.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex gap-2 mt-8">
                  <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary transition-colors" />
                  <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary transition-colors" />
                </div>
              </Carousel>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
