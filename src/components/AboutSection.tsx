export function AboutSection() {
  return (
    <section id="tentang-kami" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Tentang Arutala</h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Arutala berasal dari bahasa Sanskerta yang berarti <strong className="text-foreground">"Rembulan Malam"</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kami hadir menjadi penerang bagi pelanggan yang membutuhkan solusi desain hingga cetak tanpa ribet. Dari mahasiswa yang butuh banner acara hingga UMKM yang butuh packaging menarik, kami siap membantu.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
            {/* Placeholder Image */}
            <div className="text-muted-foreground flex flex-col items-center">
               <span className="text-6xl mb-4">🌙</span>
               <span>Ilustrasi Rembulan Malam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
