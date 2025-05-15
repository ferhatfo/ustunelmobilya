import Image from 'next/image';

export default function MultiPageHeader({ subtitle, title, isImage, imgUrl }) {
  return (
    <section className="relative from-[#f5f5f5] py-10 md:py-15 bg-[#336159] rounded-b-[30px] overflow-visible">
      <div className="container mx-auto px-4 relative">
        <div>
          <h6 className="text-md md:text-lg font-medium text-white">{subtitle}</h6>
          <h2 className="text-[28px] md:text-[42px] text-white font-bold pt-1">{title}</h2>
        </div>
        {
          isImage && (
            <div className="relative md:absolute top-0 right-0 pt-8 md:pt-5 max-w-[600px]">
              <Image
                src={imgUrl}
                alt="Azur Peyzaj"
                className="object-cover max-h-[450px]"
                width={538}
                height={350}
                priority
              />
            </div>
          )
        }
        
      </div>
    </section>
  );
}
