import Image from 'next/image';
import Link from 'next/link';
import services from '@/data/services.json';
import { slugify } from '@/utils/slugify';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 md:py-15 pb-0 md:pb-0 bg-gray-100 rounded-t-[30px]">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="pb-[40px] md:pb-[50px] text-center">
          <div className="flex justify-center">
            <Image 
              src="/images/svg/logo.svg" 
              alt="Logo" 
              width={200} 
              height={100} 
              className="max-w-[300px] mx-auto"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-[40px] md:pb-[40px] border-t border-[#A91E22]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Home Links */}
            <div>
              <h6 className="font-medium pb-[15px] text-[#A91E22]">Üstünel Mobilya</h6>
              <p>Antalya Yeni Sanayi’de kök salmış, marangozluktan modern mobilyacılığa uzanan bir aile hikâyesiyiz. İki kardeş olarak babamızdan devraldığımız bu mesleği, yarım asırdır ustalıkla ve tutkuyla sürdürüyoruz.</p>
            </div>

            {/* Services Links */}
            <div>
              <h6 className="font-medium pb-[15px] text-[#A91E22]">Hizmetlerimiz</h6>
              <ul className="space-y-1">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={`/services/${slugify(service.title)}`} className='text-[14px] font-normal hover:text-[#A91E22] transition-colors'>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="font-medium pb-[15px] text-[#A91E22]">Politikalar</h6>
              <ul className="space-y-1">
                <li><FooterLink href="" text="Kişisel Verilerin İşlenmesine İlişkin Kurumsal Genel Aydınlatma Metni" /></li>
                <li><FooterLink href="" text="Çerez Politikası" /></li>
                <li><FooterLink href="" text="Veri Sorumlusuna Başvuru Formu" /></li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium pb-[15px] text-[#A91E22]">İletişim</h6>
              <p className="text-[14px] pb-[10px]">Akdeniz sanayi sitesi, 5031 sokak  <br/> No:16-18 Kepez/Antalya</p>
              <div className="flex items-center pb-[20px] gap-3">
                <Link href="https://www.instagram.com/ustunel.mobilya/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} color="#A91E22" />
                </Link>
              </div>
           
              <p className="py-[5px] text-[14px]"><Link href="tel:+905336247335">Mesut Kalınsazlıoğlu :<br/> +90 533 624 73 35 </Link></p>
              <p className="text-[14px]"><Link href="tel:+905382979030">Hüseyin Kalınsazlıoğlu :<br/> +90 538 297 90 30 </Link></p>
              <p className="text-[14px] pt-[5px]"><Link href="mailto:ustunel_mesut@hotmail.com">ustunel_mesut@hotmail.com</Link></p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-[40px] mt-[40px] md:mt-[0] border-t border-[#A91E22]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[13px]">2025 © | All Right Rezerved</p>
            <p className="text-[13px]">Created by Nuans Agency</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable FooterLink component
const FooterLink = ({ href, text }) => (
  <Link 
    href={href} 
    className="text-[14px] font-normal hover:text-[#A91E22] transition-colors"
  >
    {text}
  </Link>
);

export default Footer;