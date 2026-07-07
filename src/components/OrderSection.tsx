'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  nama: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  noWa: z.string().min(10, { message: "Nomor WhatsApp tidak valid." }),
  email: z.string().email({ message: "Email tidak valid." }),
  jenisProduk: z.string().min(1, { message: "Jenis produk wajib diisi." }),
  deadline: z.string().min(1, { message: "Deadline wajib diisi." }),
  quantity: z.string().min(1, { message: "Quantity wajib diisi." }),
  catatan: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm font-medium text-destructive">{message}</p>;
}

export function OrderSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      noWa: "",
      email: "",
      jenisProduk: "",
      deadline: "",
      quantity: "",
      catatan: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    alert("Pesanan berhasil dikirim! Kami akan menghubungi Anda segera via WhatsApp.");
    reset();
  }

  return (
    <section id="order" className="py-24 bg-background">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Mulai Konsultasi &amp; Pesan</h2>
          <p className="text-muted-foreground text-lg">Isi form di bawah ini dan ceritakan kebutuhan desain atau cetak Anda.</p>
        </div>
        
        <div className="bg-muted/30 p-8 rounded-2xl border border-border">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="nama" className={cn(errors.nama && "text-destructive")}>Nama Lengkap</Label>
                <Input id="nama" placeholder="Budi Setiawan" {...register("nama")} />
                <FieldError message={errors.nama?.message} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="noWa" className={cn(errors.noWa && "text-destructive")}>Nomor WhatsApp</Label>
                <Input id="noWa" placeholder="081234567890" {...register("noWa")} />
                <FieldError message={errors.noWa?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="email" className={cn(errors.email && "text-destructive")}>Email</Label>
                <Input id="email" placeholder="budi@example.com" {...register("email")} />
                <FieldError message={errors.email?.message} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="jenisProduk" className={cn(errors.jenisProduk && "text-destructive")}>Jenis Produk / Layanan</Label>
                <Input id="jenisProduk" placeholder="Misal: Banner, Stiker, Logo" {...register("jenisProduk")} />
                <FieldError message={errors.jenisProduk?.message} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="deadline" className={cn(errors.deadline && "text-destructive")}>Deadline (Tenggat Waktu)</Label>
                <Input id="deadline" type="date" {...register("deadline")} />
                <FieldError message={errors.deadline?.message} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="quantity" className={cn(errors.quantity && "text-destructive")}>Jumlah Pesanan (Quantity)</Label>
                <Input id="quantity" type="number" placeholder="100" {...register("quantity")} />
                <FieldError message={errors.quantity?.message} />
              </div>
            </div>
            
            {/* File upload is purely UI for now as requested for MVP */}
            <div className="space-y-2">
               <Label>Upload Referensi / Desain (Opsional)</Label>
               <Input type="file" className="cursor-pointer file:text-primary file:bg-accent file:border-0 file:mr-4 file:py-1 file:px-3 file:rounded-full file:font-semibold" />
               <p className="text-sm text-muted-foreground">Format didukung: JPG, PNG, PDF, ZIP (Max 200MB)</p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="catatan" className={cn(errors.catatan && "text-destructive")}>Catatan Tambahan</Label>
              <Textarea id="catatan" placeholder="Ceritakan lebih detail kebutuhan Anda..." className="resize-none" rows={4} {...register("catatan")} />
              <FieldError message={errors.catatan?.message} />
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg">
              Kirim Pesanan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
