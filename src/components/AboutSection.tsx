import { CheckSquare } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="tentang-kami" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri: Gambar dengan overlapping elemen */}
          <div className="relative">
             {/* Background decorative box */}
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl z-0" />
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-2xl z-0" />
             
             {/* Main Image Placeholder */}
             <div className="relative z-10 w-full h-[500px] bg-gray-100 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center border border-gray-200">
               <div className="flex flex-col items-center opacity-50">
                 <span className="text-6xl mb-4">👷‍♂️</span>
                 <span className="font-heading font-bold text-gray-400">Worker Image Placeholder</span>
               </div>
             </div>
             
             {/* Overlapping yellow/orange box */}
             <div className="absolute -bottom-10 -left-10 bg-accent rounded-xl p-6 shadow-2xl z-20 hidden md:block">
               <div className="flex items-center gap-4 text-white">
                 <div className="text-4xl font-heading font-extrabold">10+</div>
                 <div className="text-sm font-medium leading-tight">Years of<br/>Experience</div>
               </div>
             </div>
          </div>
          
          {/* Kolom Kanan: Teks & Fitur */}
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-medium text-sm">About Us Printing</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
              Pilihan Cerdas Untuk Hasil Cetak Berkualitas
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Arutala hadir sebagai solusi desain hingga cetak tanpa ribet. Kami memastikan setiap detail dari ide Anda dapat direalisasikan dengan sempurna, cepat, dan diantar langsung ke depan pintu Anda.
            </p>
            
            <div className="space-y-6 mt-4 w-full">
               {/* Item 1 */}
               <div className="flex gap-4">
                 <div className="shrink-0 w-12 h-12 rounded bg-accent/10 flex items-center justify-center">
                   <CheckSquare className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                   <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">Kualitas Premium</h3>
                   <p className="text-gray-600 text-sm">Menggunakan mesin cetak terbaik dan material berkualitas tinggi untuk hasil yang tahan lama.</p>
                 </div>
               </div>
               
               {/* Item 2 */}
               <div className="flex gap-4">
                 <div className="shrink-0 w-12 h-12 rounded bg-accent/10 flex items-center justify-center">
                   <CheckSquare className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                   <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">Pengiriman Cepat</h3>
                   <p className="text-gray-600 text-sm">Tidak perlu antre, pesanan Anda akan kami antar langsung dengan aman.</p>
                 </div>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
