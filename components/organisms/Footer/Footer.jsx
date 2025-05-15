import Image from 'next/image';
import Link from 'next/link';
import services from '@/data/services.json';
import { slugify } from '@/utils/slugify';
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
        <div className="pt-[40px] md:pb-[40px] border-t border-[#336159]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Home Links */}
            <div>
              <h6 className="font-medium pb-[15px] text-[#336159]">Azur Peyzaj</h6>
              <ul className="space-y-1">
                <li><FooterLink href="/about" text="Hakkımızda" /></li>
                <li><FooterLink href="/services" text="Hizmetlerimiz" /></li>
                <li><FooterLink href="/blogs" text="Blog" /></li>
                <li><FooterLink href="/Rosinante" text="Rosinante Atölyesi" /></li>
                <li><FooterLink href="/contact" text="İletişim" /></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h6 className="font-medium pb-[15px] text-[#336159]">Hizmetlerimiz</h6>
              <ul className="space-y-1">
                {services.map((service, index) => (
                  <li>
                    <Link href={`/services/${slugify(service.title)}`} className='text-[14px] font-normal hover:text-[#336159] transition-colors'>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="font-medium pb-[15px] text-[#336159]">Politikalar</h6>
              <ul className="space-y-1">
                <li><FooterLink href="" text="Kişisel Verilerin İşlenmesine İlişkin Kurumsal Genel Aydınlatma Metni" /></li>
                <li><FooterLink href="" text="Çerez Politikası" /></li>
                <li><FooterLink href="" text="Veri Sorumlusuna Başvuru Formu" /></li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium pb-[15px] text-[#336159]">İletişim</h6>
              <p className="text-[14px] pb-[10px]">Çıplaklı Mah. Akdeniz Bulvarı  <br/> No 363 Döşemealtı/Antalya</p>
              <div className="flex items-center pb-[20px]">
                <Link href="https://www.instagram.com" target="_blank" className="mr-[15px]">
                  <Image 
                    src="/images/svg/instagram.svg" 
                    alt="Instagram" 
                    width={24} 
                    height={24} 
                  />
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=+905322504351 &text=Merhaba bilgi almak istiyorum" target="_blank">
                  <Image 
                    src="/images/svg/Whatsup.svg" 
                    alt="WhatsApp" 
                    width={24} 
                    height={24} 
                  />
                </Link>
              </div>
              <h6 className="font-medium pb-[5px] text-[#336159]">Rosinante Atölyesi</h6>
              <p className="text-[14px] pb-[10px]">Aşağıoba Mahallesi 1 Sokak  <br/> No 255/B Döşemealtı/Antalya </p>
              <div className="flex items-center pb-[20px]">
                <Link href="https://www.instagram.com/rosinante.nm/" target="_blank" className="mr-[15px]">
                  <Image 
                    src="/images/svg/instagram.svg" 
                    alt="Instagram" 
                    width={24} 
                    height={24} 
                  />
                </Link>
              </div>
              <p className="py-[5px] text-[14px]"><Link href="tel:+902423110707">+90 242 311 07 07 </Link></p>
              <p className="text-[14px]"><Link href="tel:+905322504351">+90 532 250 43 51 </Link></p>
              <p className="text-[14px] pt-[5px]"><Link href="mailto:azurpeyzaj@gmail.com">azurpeyzaj@gmail.com</Link></p>
              
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-[40px] mt-[40px] md:mt-[0] border-t border-[#336159]">
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
    className="text-[14px] font-normal hover:text-[#336159] transition-colors"
  >
    {text}
  </Link>
);

export default Footer;