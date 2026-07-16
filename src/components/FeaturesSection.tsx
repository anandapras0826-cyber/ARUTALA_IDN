import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Palette, Truck, Printer, Package, Zap, Smile } from "lucide-react";

const features = [
  { title: "Desain Original", icon: Palette, desc: "Desain estetik & tidak pasaran." },
  { title: "Delivery", icon: Truck, desc: "Diantar langsung ke lokasi Anda." },
  { title: "Vendor Berkualitas", icon: Printer, desc: "Hasil cetak tajam & tahan lama." },
  { title: "Packaging Rapi", icon: Package, desc: "Aman sampai di tangan Anda." },
  { title: "Fast Response", icon: Zap, desc: "Admin sigap membalas pesan." },
  { title: "Friendly Service", icon: Smile, desc: "Pelayanan ramah & solutif." }
];

export function FeaturesSection() {
  return (
    <section id="layanan" className="py-24 bg-secondary">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-accent font-medium text-sm">Company Feature</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-gray-900">
            Experience Digital Printing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami memberikan layanan terbaik untuk memastikan Anda mendapatkan hasil yang memuaskan tanpa ribet.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <Card 
              key={i} 
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-accent hover:border-accent overflow-hidden"
            >
              <CardHeader className="text-center pb-2 relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <feat.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="font-heading text-xl text-gray-900 group-hover:text-white transition-colors duration-300">
                  {feat.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300">
                  {feat.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
