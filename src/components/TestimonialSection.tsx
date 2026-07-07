import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Budi Setiawan", role: "Mahasiswa", text: "Pelayanannya cepat banget, revisi desain juga ramah. Mantap Arutala!" },
  { name: "Ayu Lestari", role: "Owner UMKM", text: "Hasil cetak stiker untuk packaging kue saya bagus dan warnanya tajam." },
  { name: "Andi Pratama", role: "Ketua Panitia Event", text: "Desain banner keren dan diantar langsung ke lokasi acara. Sangat membantu!" },
  { name: "Siti Nurhaliza", role: "Freelancer", text: "Sangat dimudahkan dengan form pemesanannya, nggak perlu bolak-balik nanya admin." },
];

export function TestimonialSection() {
  return (
    <section id="testimoni" className="py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Apa Kata Mereka?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Testimoni dari klien yang telah mempercayakan kebutuhan desain dan cetaknya kepada kami.</p>
        </div>
        
        <div className="max-w-4xl mx-auto px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testi, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-muted/30 border-border">
                      <CardContent className="flex flex-col gap-4 p-6">
                        <div className="flex gap-1 text-accent">
                           {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-muted-foreground italic">&quot;{testi.text}&quot;</p>
                        <div>
                          <p className="font-heading font-bold">{testi.name}</p>
                          <p className="text-sm text-muted-foreground">{testi.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
