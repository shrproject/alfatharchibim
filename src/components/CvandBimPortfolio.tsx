'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CVSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            CV dan BIM <span className="text-brand-gold">Portfolio</span>
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-start gap-8 md:gap-12">
            {/* Image on left - 1:1 aspect ratio on desktop */}
            <div className="w-full md:w-1/3 h-64 md:h-auto aspect-square relative">
            <Image
                src="/bim-cropped.png" // Ganti dengan path gambar Anda di /public
                alt="CV dan BIM Portfolio"
                fill
                className="object-cover rounded-lg shadow-lg"
            />
            </div>

            {/* Content on right */}
            <div className="w-full md:w-1/2 space-y-6">
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Temukan pengalaman profesional saya dalam bidang Building Information Modeling (BIM) beserta portofolio proyek-proyek unggulan yang telah saya kerjakan. Dari desain arsitektur hingga simulasi 3D.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="https://drive.google.com/file/d/1xV9kTe7-SjcrXdOYJDhgDnIdPrsF7b0b/view" // Ganti dengan halaman portofolio Anda
                        className='text-center'
                        target='_blank'
                        >
                        <Button variant="hero" size="lg" className='w-full sm:w-auto'>
                            Lihat Sekarang
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link
                        href="/cv-bim-portfolio-alfatharchi.pdf" // Ganti dengan halaman portofolio Anda
                        className='text-center'
                        download
                        >
                        <Button variant="premium" size="lg" className='w-full sm:w-auto'>
                            Download PDF
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}