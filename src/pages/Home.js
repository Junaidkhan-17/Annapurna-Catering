import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IntroductionSection from '../components/IntroductionSection';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import HowItWorksSection from '../components/HowItWorksSection';
//import MenuSection from '../components/MenuSection';
import CallToActionSection from '../components/CallToActionSection';
import BlogSection from '../components/BlogSection';
import CertificateSection from '../components/CertificateSection';
import '../pages/Home.css';
import PostCarousel from '../components/PostCarousel';
const Home = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "68px" }} >
      <HeroSection />
      <IntroductionSection />
      <PostCarousel />
      <StatsSection />
      <HowItWorksSection />
      <CertificateSection />
      <CallToActionSection />  
      <BlogSection />
      <Footer />
      </main>
    </>
  );
};

export default Home;