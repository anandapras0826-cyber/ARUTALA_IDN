export function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Konsultasi / Brief", desc: "Isi form atau chat via WhatsApp." },
    { num: "02", title: "DP & Desain", desc: "Bayar DP 50%, kami mulai proses desain." },
    { num: "03", title: "Approval", desc: "Revisi jika perlu, lalu konfirmasi hasil." },
    { num: "04", title: "Cetak & Delivery", desc: "Pelunasan, barang dicetak dan dikirim." }
  ];

  return (
    <section id="cara-kerja" className="py-24 bg-background border-t border-border">
      <div className="container max-w-7xl mx-auto px-6">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Cara Kerja Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">4 langkah mudah mewujudkan kebutuhan cetak dan desain Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {steps.map((step, i) => (
             <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-xl border border-accent/20 mb-6 z-10">
                  {step.num}
                </div>
                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-border z-0" />
                )}
                <h3 className="font-heading font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
