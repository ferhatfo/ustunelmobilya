import Image from 'next/image';
import Button from '@/components/atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
import blogs from '@/data/blogs.json';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';

export default function BlogSection({isIndex}) {
  return (
    <section className="bg-white py-5 md:py-15 md:pb-20 pb-10">
      <div className="container mx-auto px-4">
        {isIndex && (
          <div className="text-center mb-8 md:mb-8">
            <h2 className="text-3xl font-bold text-[#336159] mb-4">Peyzaj Tasarım Rehberi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Profesyonel peyzaj mimarlarımız tarafından hazırlanan en güncel tasarım trendleri, uygulama teknikleri, sürdürülebilir peyzaj çözümleri ve dünyadan ilham verici örnek projelerle zenginleştirilmiş rehberimiz, bahçe tasarımına dair tüm sorularınıza yanıt bulmanızı sağlayacak.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, isIndex ? 6 : blogs.length).map((blog) => (
            <div key={blog.id} className="overflow-hidden">
              <div className="relative h-60">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 py-8 bg-gray-100 rounded-xl rounded-tl-none rounded-tr-none">
                <h2 className="text-xl font-semibold text-[#336159] mb-3">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{blog.description}</p>
                <Link href={`/blogs/${slugify(blog.title)}`}>
                  <Button
                    text="İncele"
                    backgroundColor="#ffffff"
                    textColor="#336159"
                    icon={<FaArrowRight size={14} />}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {isIndex && (
          <div className="grid place-items-center mt-12">
            <Link href="/blogs">
              <Button
                text="Tüm Yazıları Gör"
                backgroundColor="#336159"
                textColor="#fff"
                icon={<FaArrowRight size={14} />}
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
