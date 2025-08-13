import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/organisms/Navbar";
import Slideshow from "@/components/organisms/Slideshow";
import { Montserrat, Playfair_Display } from "next/font/google";
import AboutSection from "@/components/organisms/AboutSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import Footer from "@/components/organisms/Footer";
import Head from 'next/head';
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Üstünel Mobilya</title>
        <meta name="description" content="Üstünel Mobilya" />
      </Head>
      <main>
        <Slideshow/>
        <AboutSection/>
        <ServicesSection/>
      </main>
    </>
  );
}
