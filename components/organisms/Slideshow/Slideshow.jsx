'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Button from '@/components/atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
const slides = [
  {
    id: 1,
    image: '/images/slide1.webp',
    title: 'Yarım Asırlık Ustalıkla Yaşam Alanınızı Şekillendiriyoruz',
  },
  {
    id: 2,
    image: '/images/slide2.webp',
    title: 'Mobilyada Sadece İş Değil, Aile Geleneği',
  },
  {
    id: 3,
    image: '/images/slide3.webp',
    title: 'Antalya’dan Dünyaya Uzanıyor, Hayallerinizi Gerçeğe Dönüştürüyoruz',
  },
  {
    id: 4,
    image: '/images/slide4.webp',
    title: 'Usta Ellerin Tecrübesi & Modern Tasarım',
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const progressRefs = useRef([]);
  const intervalRef = useRef(null);
  

  const animateSlide = (index) => {
    const img = imageRef.current;
    const content = contentRef.current;

    gsap.fromTo(
      img,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      content,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
  };

  const goToSlide = (index) => {
    clearTimeout(intervalRef.current);
    setCurrent(index);
  };

  useEffect(() => {
    animateSlide(current);

    // Eski animasyonları durdur
    progressRefs.current.forEach((ref) => {
      gsap.killTweensOf(ref);
      gsap.set(ref, { width: '0%' });
    });

    // Yeni progress bar'ı başlat
    gsap.to(progressRefs.current[current], {
      width: '100%',
      duration: 10,
      ease: 'linear',
    });

    // Slide geçişini ayarla
    intervalRef.current = setTimeout(() => {
      const nextIndex = (current + 1) % slides.length;
      setCurrent(nextIndex);
    }, 10000);

    return () => clearTimeout(intervalRef.current);
  }, [current]);

 

  return (
    <section>
      <div className="relative w-full h-[calc(100vh-60px)] overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            ref={imageRef}
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        </div>

        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-left z-10 p-4 top-[-25%]"
          ref={contentRef}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center max-w-[50%]" style={{ lineHeight: '60px' }}>{slides[current].title}</h2>

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20 w-[200px]">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="cursor-pointer w-full h-1 bg-white/30 rounded overflow-hidden"
            >
              <div
                ref={(el) => (progressRefs.current[index] = el)}
                className="h-full bg-white w-0"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
