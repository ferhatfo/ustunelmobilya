import Image from 'next/image';
import Link from 'next/link';
export default function ContactPageDescription(){
    return(
        <section className="py-[40px]">
            <div className="container mx-auto px-4 flex">
                <div className='w-full md:w-1/3'>
                    <h6 className="text-[#336159] pb-1">Telefon</h6>
                    <p className="pb-[3px] text-gray-700 leading-relaxed text-sm">
                        +90 242 311 07 07
                    </p>
                    <p className="pb-[15px] text-gray-700 leading-relaxed text-sm">
                        +90 532 250 43 51
                    </p>

                    <h6 className="text-[#336159] pb-1">Mail</h6>
                    <p className="pb-[15px] text-gray-700 leading-relaxed text-sm">
                        azurpeyzaj@gmail.com
                    </p>

                    <h6 className="text-[#336159] pb-1">Adres</h6>
                    <p className="pb-[15px] text-gray-700 leading-relaxed text-sm">
                    Çıplaklı Mah. Akdeniz Bulvarı<br/>
                    No 363 Döşemealtı/Antalya
                    </p>

                    <h6 className="text-[#336159] pb-1">Sosyal Medya</h6>
                    <div className="flex items-center pt-[5px] pb-[15px]">
                        <Link href="https://www.instagram.com" target="_blank" className="mr-[15px]">
                        <Image 
                            src="/images/svg/Instagram.svg" 
                            alt="Instagram" 
                            width={24} 
                            height={24} 
                        />
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=+905322504351&text=Merhaba bilgi almak istiyorum" target="_blank">
                        <Image 
                            src="/images/svg/Whatsup.svg" 
                            alt="WhatsApp" 
                            width={24} 
                            height={24} 
                        />
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <h6 className="text-[#336159] pb-1">Rosinante Atölyesi</h6>
                    <p className="pb-[15px] text-gray-700 leading-relaxed text-sm">
                    Aşağıoba Mahallesi 1 Sokak<br/>
                    No 255/B Döşemealtı/Antalya
                    </p>

                    <h6 className="text-[#336159] pb-1">Sosyal Medya</h6>
                    <div className="flex items-center pt-[5px] pb-[15px]">
                        <Link href="https://www.instagram.com/rosinante.nm/" target="_blank" className="mr-[15px]">
                        <Image 
                            src="/images/svg/Instagram.svg" 
                            alt="Instagram" 
                            width={24} 
                            height={24} 
                        />
                        </Link>
                    </div>
                </div>

                
                
            </div>
        </section>
    )
}