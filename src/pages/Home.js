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

const Home = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <HeroSection />
      <IntroductionSection />
      <StatsSection />
      <HowItWorksSection />
      <CertificateSection />
      <CallToActionSection />  
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;