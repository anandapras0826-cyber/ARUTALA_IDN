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
    <section id="kenapa-arutala" className="py-24 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Kenapa Memilih Arutala?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Kami memberikan layanan terbaik untuk memastikan Anda mendapatkan hasil yang memuaskan tanpa ribet.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <Card key={i} className="bg-background border-border hover:border-accent transition-colors">
              <CardHeader>
                <feat.icon className="w-10 h-10 text-accent mb-4" />
                <CardTitle className="font-heading">{feat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
