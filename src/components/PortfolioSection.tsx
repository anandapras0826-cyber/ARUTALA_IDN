import { Button } from "./ui/button";

const portfolioItems = [
  { title: "Desain Logo UMKM", category: "Logo", height: "h-64" },
  { title: "Banner Event Kampus", category: "Banner", height: "h-80" },
  { title: "Packaging Kopi", category: "Packaging", height: "h-72" },
  { title: "Social Media Feed", category: "Social Media", height: "h-64" },
  { title: "Poster Acara", category: "Poster", height: "h-96" },
  { title: "Branding Kit", category: "Branding", height: "h-64" },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-background border-t border-border">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Portfolio Karya</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Lihat beberapa hasil karya desain dan cetak terbaik dari tim kami.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Semua', 'Logo', 'Poster', 'Social Media', 'Packaging'].map((cat, i) => (
             <Button key={i} variant={i === 0 ? "default" : "outline"} className={i === 0 ? "bg-accent text-accent-foreground hover:bg-accent/90" : "border-border text-muted-foreground"}>{cat}</Button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item, i) => (
            <div key={i} className={`relative w-full rounded-2xl overflow-hidden bg-muted group ${item.height}`}>
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                  <h3 className="font-heading font-bold text-white text-xl">{item.title}</h3>
                  <p className="text-accent mt-2">{item.category}</p>
               </div>
               {/* Placeholder for image */}
               <div className="w-full h-full flex items-center justify-center text-6xl">🎨</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
