import blogs from '@/data/blogs.json';
import Image from 'next/image';
import { slugify } from '@/utils/slugify'; // Slugify fonksiyonunu buraya ekledik.
import Head from 'next/head';
import MultiPageHeader from '@/components/organisms/MultiPageHeader';

export async function getStaticPaths() {
  // Slug'ların doğru oluşturulduğundan emin olun.
  const paths = blogs.map((blog) => ({
    params: { slug: slugify(blog.title) }, // Slugify'ı kontrol ettik
  }));

  console.log(paths); // Bu satırla, paths'in doğru oluşturulup oluşturulmadığını kontrol edebilirsiniz.

  return { paths, fallback: false }; // fallback: false, mevcut olmayan slug'lar için 404 hatası verir
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((b) => slugify(b.title) === params.slug);

  if (!blog) {
    return {
      notFound: true, // Eğer blog bulunamazsa 404 sayfası dönecek
    };
  }

  return {
    props: {
      blog: blog || null,
    },
  };
}

const fixDescription = (desc) => {
  return desc.replace(/●\s*/g, '\n\n● ');
};

export default function BlogDetailPage({ blog }) {
  if (!blog) return <div>Blog bulunamadı.</div>;

  return (
    <>
      <Head>
        <title>{blog.title} - Azur Peyzaj</title>
        <meta name="description" content={blog.description} />
      </Head>

      <MultiPageHeader
        subtitle="Blog Paylaşımlarımız"
        title={blog.title}
        isImage={false}
      />

      <div className="container mx-auto p-4 md:p-8 space-y-6">
        <p className="text-lg text-gray-700 whitespace-pre-line">{fixDescription(blog.description)}</p>
        <Image
          src={blog.image}
          alt={blog.title}
          width={1000}
          height={600}
          className="rounded-xl w-full h-auto"
        />
        <div className="prose text-gray-700 mt-6">
          <p>{blog.content}</p>
        </div>
      </div>
    </>
  );
}
