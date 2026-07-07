import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const products = [
  { name: "Sticker Cromo", price: "Mulai Rp 5.000 / lbr", spec: "Bahan kertas cromo, cocok untuk label kemasan indoor." },
  { name: "Merchandise Kaos", price: "Mulai Rp 75.000 / pcs", spec: "Cotton Combed 30s, sablon DTF anti pecah." },
  { name: "Banner Spanduk", price: "Mulai Rp 20.000 / meter", spec: "Bahan flexi 280gr, warna tajam tahan cuaca." },
  { name: "Branding Package", price: "Mulai Rp 500.000", spec: "Logo, kartu nama, kop surat, stempel, template IG." },
];

export function CatalogSection() {
  return (
    <section id="katalog" className="py-24 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Katalog Produk</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Pilih layanan cetak atau desain yang Anda butuhkan dengan harga transparan.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, i) => (
            <Card key={i} className="flex flex-col h-full bg-background border-border hover:border-accent transition-all overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-4xl text-muted-foreground">📦</span>
              </div>
              <CardHeader>
                <CardTitle className="font-heading">{item.name}</CardTitle>
                <p className="text-accent font-bold mt-2">{item.price}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{item.spec}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Pesan Sekarang</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
