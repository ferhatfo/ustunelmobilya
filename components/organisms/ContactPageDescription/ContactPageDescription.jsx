import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
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
                        info@azurpeyzaj.com.tr
                    </p>

                    <h6 className="text-[#336159] pb-1">Adres</h6>
                    <p className="pb-[15px] text-gray-700 leading-relaxed text-sm">
                    Çıplaklı Mah. Akdeniz Bulvarı<br/>
                    No 363 Döşemealtı/Antalya
                    </p>

                    <h6 className="text-[#336159] pb-1">Sosyal Medya</h6>
                    <div className="flex items-center pt-[5px] pb-[15px] gap-5">
                        <Link href="https://www.instagram.com/azurpeyzaj.com.tr/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} color="#336159" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/azur-peyzaj/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} color="#336159" />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61576887500784&locale=tr_TR" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} color="#336159" />
                        </Link>
                        <Link href="https://www.youtube.com/@AzurPeyzaj" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={24} color="#336159" />
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <h6 className="text-[#336159] pb-1">Rosinante Atölyesi</h6>
                    <p className="pb-[15px] text-gray-700 leading-relaxed text-sm">
                    Aşağıoba Mahallesi 1 Sokak<br/>
                    No 255 Döşemealtı/Antalya
                    </p>

                </div>

                
                
            </div>
        </section>
    )
}