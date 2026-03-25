import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import PartnerLogos from "../components/landing/PartnerLogos";
import ChatBubbleSection from "../components/landing/ChatBubbleSection";
import StatsReviews from "../components/landing/StatsReviews";
import ServicesGrid from "../components/landing/ServicesGrid";
import AboutUs from "../components/landing/AboutUs";
import FAQSection from "../components/landing/FAQSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-jakarta">
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <ChatBubbleSection />
      <StatsReviews />
      <ServicesGrid />
      <AboutUs />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}