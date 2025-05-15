import AboutPageDescription from '@/components/organisms/AboutPageDescription';
import MultiPageDescription from '@/components/organisms/MultiPageDescription';
import MultiPageHeader from '@/components/organisms/MultiPageHeader';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Hakkımızda - Azur Peyzaj</title>
        <meta name="description" content="Biz kimiz, ne yaparız?" />
      </Head>
      <MultiPageHeader
        subtitle="Hakkımızda"
        title="Azur Peyzaj"
        isImage={true}
        imgUrl="/images/about-img.webp"
      />
      <MultiPageDescription
        description="Rosinante Atölyesi olarak, Antalya’nın doğal güzelliklerine ve peyzaj
        mimarisine değer katmayı hedefliyoruz. Uzun yıllardır hukukçu bir aileden gelen
        bizler, sektöre yenilikçi bir bakış açısı ve profesyonel bir yaklaşım getirmeyi
        amaçlıyoruz. Müşterilerimize, sadece estetik değil, işlevsel ve sürdürülebilir
        yaşam alanları sunuyoruz.
        Atölyemiz, peyzaj tasarımı, bahçe uygulamaları ve doğa eğitimleri gibi geniş
        bir yelpazede hizmet sunuyor. Bunun yanında, otel peyzajları, rezidanslar ve
        eşsiz yapılar gibi farklı yapı tiplerine özel çözümler geliştiriyoruz. Her proje,
        müşterimizin ihtiyaçlarına özel olarak tasarlanır ve uygulanır.
        Ekip olarak, sadece teknik bilgiye dayalı değil, doğa ile barışık çözümler
        üreterek, çevreye olan duyarlılığı en üst seviyeye taşıyoruz. Rosinante Atölyesi,
        farklı alanlarda sunduğu peyzaj danışmanlığı, doğa atölyeleri ve çocuklara
        yönelik etkinliklerle her yaş grubuna hitap etmektedir. "
      />
      <AboutPageDescription/>
    </>
  );
}