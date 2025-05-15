import MultiPageHeader from '@/components/organisms/MultiPageHeader';
import Head from 'next/head';
import BlogSection from '@/components/organisms/BlogSection';
export default function blogsPage({ blogs }) {
  return (
    <>
        <Head>
            <title>Blog - Azur Peyzaj</title>
            <meta name="description" content={`Azur Peyzaj olarak sunduğumuz farklı peyzaj hizmetini inceleyin.`} />
        </Head>

        <MultiPageHeader
            subtitle="Blog Paylaşımlarımız"
            title="Peyzaj Tasarım Rehberi"
            isImage={false}
        />
       
        <BlogSection/>
    </>
  );
}
