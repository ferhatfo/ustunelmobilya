import services from "@/data/services.json";
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import Head from "next/head";
import MultiPageHeader from "@/components/organisms/MultiPageHeader";

export async function getStaticPaths() {
  const paths = services.map((service) => ({
    params: { slug: slugify(service.title) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => slugify(s.title) === params.slug);

  return {
    props: {
      service: service || null,
    },
  };
}

export default function ServiceDetailPage({ service }) {
  if (!service) return <div>Hizmet bulunamadı.</div>;

  return (
    <>
      <Head>
        <title>{service.title} - Azur Peyzaj</title>
        <meta name="description" content={service.description} />
      </Head>

      <MultiPageHeader
        subtitle="Hizmet Detayı"
        title={service.title}
        isImage={false}
      />

      <div className="container mx-auto p-4 md:p-8 space-y-6">
        <p className="text-lg text-gray-700">{service.description}</p>
        <Image
          src={service.image}
          alt={service.title}
          width={1000}
          height={600}
          className="rounded-xl w-full h-auto"
        />
      </div>
    </>
  );
}
