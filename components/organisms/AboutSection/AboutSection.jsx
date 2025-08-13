'use client';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
export default function AboutSection() {
  return (
    <section>
      <div className="bg-[#A91E22] p-10 w-full max-w-[1140px] mx-auto my-10 md:my-20 flex flex-col md:flex-row items-center gap-12" style={{ borderRadius: '30px' }}>
        {/* Text Area */}
        <div className="text-white md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Biz Kimiz?</h2>
          <p className="text-md leading-relaxed mb-8">
          Antalya Yeni Sanayi’de kök salmış, marangozluktan modern mobilyacılığa uzanan bir aile hikâyesiyiz. İki kardeş olarak babamızdan devraldığımız bu mesleği, yarım asırdır ustalıkla ve tutkuyla sürdürüyoruz.
Kurulduğumuz günden bu yana sadece mobilya üretmiyor, aynı zamanda yaşam alanlarına karakter ve sıcaklık katıyoruz.

          </p>
        </div>

        {/* Image Area */}
        <div className="md:w-1/2 relative flex justify-start">
          <Image
            src="/images/about-img.webp"
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
