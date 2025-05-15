'use client';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
export default function AboutSection() {
  return (
    <section>
      <div className="bg-[#336159] p-10 w-full max-w-[1140px] mx-auto my-10 md:my-20 flex flex-col md:flex-row items-center gap-12" style={{ borderRadius: '30px' }}>
        {/* Text Area */}
        <div className="text-white md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Biz Kimiz?</h2>
          <p className="text-md leading-relaxed mb-8">
          Rosinante Atölyesi olarak, Antalya’nın doğal güzelliklerine ve peyzaj
          mimarisine değer katmayı hedefliyoruz. Uzun yıllardır hukukçu bir aileden gelen
          bizler, sektöre yenilikçi bir bakış açısı ve profesyonel bir yaklaşım getirmeyi
          amaçlıyoruz. Müşterilerimize, sadece estetik değil, işlevsel ve sürdürülebilir
          yaşam alanları sunuyoruz.
          </p>
          <Link href="/about">
            <Button
              text="Hakkımızda"
              backgroundColor="#ffffff"
              textColor="#336159"
              icon={<FaArrowRight size={14} />}
              />
          </Link>
        </div>

        {/* Image Area */}
        <div className="md:w-1/2 relative flex justify-start">
          <Image
            src="/images/slide2.webp"
            alt="Hakkımızda görseli"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
