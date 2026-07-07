'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  nama: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  noWa: z.string().min(10, { message: "Nomor WhatsApp tidak valid." }),
  email: z.string().email({ message: "Email tidak valid." }),
  jenisProduk: z.string().min(1, { message: "Jenis produk wajib diisi." }),
  deadline: z.string().min(1, { message: "Deadline wajib diisi." }),
  quantity: z.string().min(1, { message: "Quantity wajib diisi." }),
  catatan: z.string().optional(),
});

export function OrderSection() {
  const form = useForm<z.infer<typeof formSchema>>({
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Pesanan berhasil dikirim! Kami akan menghubungi Anda segera via WhatsApp.");
    form.reset();
  }

  return (
    <section id="order" className="py-24 bg-background">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Mulai Konsultasi & Pesan</h2>
          <p className="text-muted-foreground text-lg">Isi form di bawah ini dan ceritakan kebutuhan desain atau cetak Anda.</p>
        </div>
        
        <div className="bg-muted/30 p-8 rounded-2xl border border-border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="nama" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl><Input placeholder="Budi Setiawan" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name="noWa" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor WhatsApp</FormLabel>
                      <FormControl><Input placeholder="081234567890" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input placeholder="budi@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name="jenisProduk" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Produk / Layanan</FormLabel>
                      <FormControl><Input placeholder="Misal: Banner, Stiker, Logo" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="deadline" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline (Tenggat Waktu)</FormLabel>
                      <FormControl><Input type="date" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name="quantity" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Pesanan (Quantity)</FormLabel>
                      <FormControl><Input type="number" placeholder="100" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* File upload is purely UI for now as requested for MVP */}
              <div className="space-y-2">
                 <FormLabel>Upload Referensi / Desain (Opsional)</FormLabel>
                 <Input type="file" className="cursor-pointer file:text-primary file:bg-accent file:border-0 file:mr-4 file:py-1 file:px-3 file:rounded-full file:font-semibold" />
                 <FormDescription>Format didukung: JPG, PNG, PDF, ZIP (Max 200MB)</FormDescription>
              </div>

              <FormField control={form.control} name="catatan" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catatan Tambahan</FormLabel>
                    <FormControl><Textarea placeholder="Ceritakan lebih detail kebutuhan Anda..." className="resize-none" rows={4} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg">
                Kirim Pesanan
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
