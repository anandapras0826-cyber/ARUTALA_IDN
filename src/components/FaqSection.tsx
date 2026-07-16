import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  { q: "Berapa batas revisi untuk desain?", a: "Revisi desain maksimal 3 kali untuk perubahan minor. Jika ada perubahan konsep secara keseluruhan akan dikenakan biaya tambahan." },
  { q: "Berapa lama proses pengerjaan?", a: "Lama pengerjaan tergantung antrean dan kerumitan desain. Rata-rata untuk desain membutuhkan 1-3 hari kerja, sedangkan proses cetak 2-4 hari kerja." },
  { q: "Apakah bisa pesan desain saja tanpa cetak?", a: "Bisa! Anda akan mendapatkan file mentah (source file) dan file resolusi tinggi yang siap cetak." },
  { q: "Apakah bisa cetak tanpa desain (sudah punya file sendiri)?", a: "Sangat bisa. Pastikan file Anda beresolusi tinggi dan berformat PDF atau PNG/JPG untuk hasil maksimal." },
  { q: "Apakah melayani pengiriman luar kota?", a: "Ya, kami melayani pengiriman ke seluruh Indonesia menggunakan kurir terpercaya." }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">FAQ</h2>
              <p className="text-muted-foreground text-lg mb-8">Pertanyaan yang sering ditanyakan seputar layanan Arutala Desain.</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-heading text-lg">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
         </div>
      </div>
    </section>
  );
}
