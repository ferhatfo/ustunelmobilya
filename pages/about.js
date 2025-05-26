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
        description="Azur Peyzaj ailesi olarak, Antalya’nın doğal güzelliklerine ve peyzaj
        mimarisine değer katmayı hedefliyoruz. Sektöre yenilikçi bir bakış açısı ve profesyonel bir yaklaşım getirmeyi
        amaçlıyoruz. Müşterilerimize, sadece estetik değil, işlevsel ve sürdürülebilir
        yaşam alanları sunuyoruz.
        Azur Peyzaj, peyzaj tasarımı, bahçe uygulamaları ve doğa eğitimleri gibi geniş
        bir yelpazede hizmet sunuyor. Bunun yanında, otel peyzajları, rezidanslar ve
        eşsiz yapılar gibi farklı yapı tiplerine özel çözümler geliştiriyoruz. Her proje,
        müşterimizin ihtiyaçlarına özel olarak tasarlanır ve uygulanır.
        Ekip olarak, sadece teknik bilgiye dayalı değil, doğa ile barışık çözümler
        üreterek, çevreye olan duyarlılığı en üst seviyeye taşıyoruz.
        Farklı alanlarda sunduğu peyzaj danışmanlığı, doğa atölyeleri ve çocuklara
        yönelik etkinliklerle her yaş grubuna hitap ediyoruz. "
      />
      <AboutPageDescription/>
    </>
  );
}