import MultiPageDescription from '@/components/organisms/MultiPageDescription';
import MultiPageHeader from '@/components/organisms/MultiPageHeader';
import RosinanteAtolyesi from '@/components/organisms/rosinanteAtolyesi';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Hakkımızda - Azur Peyzaj</title>
        <meta name="description" content="Biz kimiz, ne yaparız?" />
      </Head>
      <MultiPageHeader
        subtitle="Rosinante Atölyesi"
        title="Rosinante Neden Bu isimle Anılıyor"
        isImage={true}
        imgUrl="/images/rosinante.webp"
      />
      <MultiPageDescription
        description="Rosinante, Don Kişot’un efsanevi atıdır. İsmindeki anlam, bir yandan Don
        Kişot'un hayal gücünü ve idealizmini simgelerken, diğer yandan sadece bir at
        değil, “kahramanlık yolunda giden, fakat zamanla gerçeklikten kopan bir figür”
        olarak betimlenir. Rosinante, cesaretin, idealizmin ve doğayla uyumun
        simgesidir. Rosinante Atölyesi, bu ismi alarak, hayal gücü ve yaratıcılıkla
        doğayla iç içe, sanatla harmanlanmış bir yaşam alanı yaratmayı amaçlamaktadır.
        Tıpkı Don Kişot gibi, doğayı ve sanatı savunarak her yaştan bireye ilham vermek,
        onlara cesaret ve yaratıcılık katmak istiyoruz."
      />
      <RosinanteAtolyesi/>
    </>
  );
}