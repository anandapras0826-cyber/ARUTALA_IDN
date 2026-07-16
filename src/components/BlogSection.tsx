import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "5 Tren Desain Kemasan Produk UMKM Tahun 2024",
    date: "12 Mei 2024",
    author: "Admin Arutala",
    image: "📦",
    category: "Desain Grafis"
  },
  {
    id: 2,
    title: "Pentingnya Branding Visual Untuk Meningkatkan Penjualan",
    date: "08 Mei 2024",
    author: "Admin Arutala",
    image: "🎯",
    category: "Branding"
  },
  {
    id: 3,
    title: "Tips Memilih Bahan Cetak Banner Yang Tahan Lama",
    date: "01 Mei 2024",
    author: "Admin Arutala",
    image: "🖨️",
    category: "Percetakan"
  }
];

export function BlogSection() {
  return (
    <section id="berita" className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-accent font-medium text-sm">Our Latest Blog</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-gray-900">
            Berita & Artikel Terbaru
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dapatkan tips seputar desain, branding, dan percetakan untuk mengembangkan bisnis Anda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Thumbnail Container */}
              <div className="relative h-60 w-full bg-gray-100 overflow-hidden flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{blog.image}</span>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm z-10">
                  {blog.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-accent" />
                    <span>{blog.author}</span>
                  </div>
                </div>
                
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300 leading-snug">
                  <Link href={`#blog-${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link href={`#blog-${blog.id}`} className="text-accent font-medium text-sm hover:underline flex items-center gap-2">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
