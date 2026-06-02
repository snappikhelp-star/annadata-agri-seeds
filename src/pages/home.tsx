import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Leaf, ShieldPlus, Droplets, ScanLine, Star, Award, CheckCircle, Users, Heart, ShieldCheck, Truck, ThumbsUp, Clock, BadgeCheck, Sprout } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

import logoPath from "@assets/ChatGPT_Image_May_22,_2026,_10_59_37_PM_1779470996795.png";
import ownerPhotoPath from "@assets/2d15bd6ce2f040b69e7c52160dd6bba7FR_1779471098722.jpg";
import heroImagePath from "@assets/195277ea-a5c0-48a6-bb1b-33ee9adfe661_1779476882697.png";
import bannerWidePath from "@assets/a5fd3043-fdbf-4d76-adf5-6f0016548e78_1779476882694.png";
import farmFieldPath from "@assets/ChatGPT_Image_May_22,_2026,_11_08_32_PM_1779471766407.png";

const FACEBOOK_LINK = "https://www.facebook.com/share/1NNq1tBFvf/?mibextid=wwXIfr";

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] w-full bg-background flex flex-col relative selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <FloatingWhatsApp />

      <main className="flex-1 flex flex-col w-full">
        <TickerStrip />
        <HeroSection />
        <ProductsSection />
        <WhyChooseSection />
        <BannerDivider />
        <StatsSection />
        <TestimonialsSection />
        <OwnerSection />
        <FarmerSupportSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

/* ─── Floating WhatsApp ─── */
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <motion.a
      href="https://wa.me/919691712455"
      target="_blank"
      rel="noreferrer"
      data-testid="button-floating-whatsapp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-4 z-[999] flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1ebe5d] transition-colors px-4 py-4 sm:px-5"
      style={{ boxShadow: "0 6px 28px rgba(37,211,102,0.5)" }}
    >
      <FaWhatsapp className="w-6 h-6 flex-shrink-0" />
      <span className="font-bold text-sm hidden sm:block whitespace-nowrap">WhatsApp करें</span>
    </motion.a>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[60] bg-foreground/95 backdrop-blur-sm py-2.5 text-center">
        <span className="text-secondary font-bold font-hindi tracking-widest text-base md:text-lg">|| श्री गणेशाय नमः ||</span>
        <span className="text-white/40 mx-3">•</span>
        <span className="text-white/85 font-hindi text-sm md:text-base font-semibold">जय जवान जय किसान</span>
      </div>
      <header className={`fixed top-[46px] left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2 glass-dark shadow-lg" : "py-3 bg-transparent"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <img src={logoPath} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full border-2 border-secondary/60 shadow-lg bg-white" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm md:text-lg text-secondary tracking-wide leading-tight drop-shadow-sm">ANNADATA AGRI AND SEEDS</span>
              <span className="font-hindi text-[10px] md:text-xs text-secondary font-semibold">Salamatpur, Raisen</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link href="/reviews" data-testid="nav-reviews" className="glass px-3 py-2 rounded-full text-white font-medium text-sm flex items-center gap-1.5 hover:bg-white/20 transition-colors border border-secondary/30">
              <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />Reviews
            </Link>
            <a href="tel:9691712455" data-testid="nav-call" className="glass px-3 py-2 rounded-full text-white font-medium text-sm flex items-center gap-1.5 hover:bg-white/20 transition-colors">
              <Phone className="w-3.5 h-3.5 text-secondary" />9691712455
            </a>
            <a href="https://wa.me/9691712455" target="_blank" rel="noreferrer" data-testid="nav-whatsapp" className="bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1.5 hover:bg-[#1ebe5d] transition-colors shadow-lg">
              <FaWhatsapp className="w-3.5 h-3.5" />WhatsApp
            </a>
          </div>
          <a href="https://wa.me/9691712455" target="_blank" rel="noreferrer" className="md:hidden bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </header>
    </>
  );
}

/* ─── Ticker Strip ─── */
function TickerStrip() {
  const items = [
    "🌱 खरीफ सीजन — हाइब्रिड सोयाबीन बीज उपलब्ध",
    "🧴 कीटनाशक पर विशेष छूट — अभी संपर्क करें",
    "🌾 गेहूं • सोयाबीन • चना के प्रीमियम बीज",
    "📞 Call करें: 9691712455 — केशव मीणा",
    "🛡️ 100% असली माल — कोई मिलावट नहीं",
    "⭐ Google Rating 4.9 — 200+ Happy Farmers",
    "💬 WhatsApp पर ऑर्डर करें — तुरंत जवाब",
    "🌿 फसल दवाइयां • खरपतवार नाशक • बीज",
    "📍 रायसेन रोड, त्रिमूर्ति चौराहा, सलामतपुर",
    "🎯 46K+ Instagram • 31K+ Facebook • 8.7K+ YouTube",
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div
      className="fixed z-[45] w-full overflow-hidden bg-secondary border-b-2 border-secondary/60 shadow-md"
      style={{ top: "82px" }}
    >
      <div className="flex items-center h-9">
        {/* Label badge */}
        <div className="flex-shrink-0 bg-foreground text-secondary font-bold text-xs px-4 h-full flex items-center gap-1.5 z-10 border-r border-black/20">
          <span className="animate-pulse">🔴</span>
          <span className="uppercase tracking-widest hidden sm:block">LIVE</span>
        </div>

        {/* Scrolling track */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          <div className="animate-ticker flex gap-0 whitespace-nowrap">
            {allItems.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-foreground font-hindi font-semibold text-sm px-6"
              >
                {item}
                <span className="text-foreground/40 ml-2">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─── */
function HeroSection() {
  const slides = [
    {
      badge: "🌾 मुख्य उत्पाद — धान",
      title: "धान के प्रीमियम\nहाइब्रिड बीज",
      subtitle: "उच्च उत्पादन • बेहतर गुणवत्ता • किसान की पसंद",
      color: "#22c55e",
      bg: "from-green-950/85 via-green-900/50 to-transparent",
    },
    {
      badge: "🌿 रबी सीजन — गेहूं",
      title: "गेहूं के बेस्ट\nसर्टिफाइड बीज",
      subtitle: "अधिक पैदावार • जल्दी अंकुरण • टॉप ब्रांड उपलब्ध",
      color: "#f9a825",
      bg: "from-amber-950/85 via-amber-900/50 to-transparent",
    },
    {
      badge: "🌱 खरीफ सीजन — सोयाबीन",
      title: "सोयाबीन • चना\nकीटनाशक दवाइयां",
      subtitle: "असली ब्रांड • सही दाम • विशेषज्ञ सलाह मुफ्त",
      color: "#26a69a",
      bg: "from-teal-950/85 via-teal-900/50 to-transparent",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="w-full pt-[118px]">
      {/* Clean hero photo — no overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full relative"
      >
        <img
          src={heroImagePath}
          alt="Annadata Agri & Seeds — Keshav Meena"
          className="w-full h-auto block"
          style={{ maxHeight: "92vh", objectFit: "cover", objectPosition: "center top" }}
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-foreground to-transparent" />
      </motion.div>

      {/* ── Crop Slider — below the photo ── */}
      <div className="w-full bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,168,37,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-0"
          >
            {/* Color accent bar */}
            <div className="hidden md:block w-1.5 self-stretch rounded-r-full flex-shrink-0" style={{ background: slide.color }} />
            <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 px-6 md:px-12 py-6 md:py-8">
              {/* Badge + headline */}
              <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs md:text-sm font-bold font-hindi self-center md:self-start"
                  style={{ background: `${slide.color}28`, border: `1.5px solid ${slide.color}60` }}
                >{slide.badge}</span>
                <h2
                  className="font-hindi font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight whitespace-pre-line"
                >{slide.title}</h2>
                <p className="font-hindi text-white/70 text-sm md:text-base">{slide.subtitle}</p>
              </div>
              {/* CTA */}
              <div className="flex flex-col gap-3 items-center md:items-end flex-shrink-0">
                <a
                  href="tel:919691712455"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white transition-all hover:scale-105 shadow-lg"
                  style={{ background: slide.color, boxShadow: `0 6px 20px ${slide.color}55` }}
                >
                  <Phone className="w-5 h-5" /> अभी कॉल करें
                </a>
                <a
                  href="https://wa.me/919691712455"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white transition-all hover:scale-105"
                  style={{ background: "#25D366", boxShadow: "0 6px 20px rgba(37,211,102,0.4)" }}
                >
                  <FaWhatsapp className="w-5 h-5" /> WhatsApp करें
                </a>
              </div>
            </div>
          </motion.div>
          {/* Dots navigation */}
          <div className="flex justify-center gap-2 pb-5">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "28px" : "8px",
                  background: i === current ? slide.color : "rgba(255,255,255,0.3)"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── जय जवान जय किसान — big highlight strip ── */}
      <div className="w-full bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,168,37,0.10)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-4 md:gap-8">
              <div className="h-0.5 w-12 md:w-24 bg-secondary/50 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-secondary/60" />
              <div className="h-0.5 w-12 md:w-24 bg-secondary/50 rounded-full" />
            </div>
            <h2
              className="font-hindi font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #F9A825 0%, #FFD54F 40%, #F57F17 70%, #F9A825 100%)", WebkitBackgroundClip: "text" }}
            >
              जय जवान जय किसान
            </h2>
            <p className="text-white/60 text-sm md:text-base font-hindi mt-1">किसान की मुस्कान — हमारी पहचान</p>
          </motion.div>
        </div>
      </div>

      {/* CTA strip — below the image, no text-on-image mixing */}
      <div className="bg-primary w-full">
        <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col items-center gap-6">

          {/* Stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: <Users className="w-4 h-4" />, label: "200+ Farmers Trusted" },
              { icon: <Heart className="w-4 h-4" />, label: "44K+ Instagram" },
              { icon: <FaFacebook className="w-4 h-4" />, label: "31K+ Facebook" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-secondary/30 text-white text-sm font-medium">
                <span className="text-secondary">{b.icon}</span>{b.label}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-lg"
          >
            <a href="tel:9691712455" data-testid="button-call-now"
              className="flex-1 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-2xl flex items-center justify-center gap-2 text-lg transition-all hover:-translate-y-1 shadow-xl"
              style={{ boxShadow: "0 8px 24px rgba(249,168,37,0.45)" }}>
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href="https://wa.me/919691712455" target="_blank" rel="noreferrer" data-testid="button-whatsapp-hero"
              className="flex-1 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-2xl flex items-center justify-center gap-2 text-lg transition-all hover:-translate-y-1 shadow-xl"
              style={{ boxShadow: "0 8px 24px rgba(37,211,102,0.45)" }}>
              <FaWhatsapp className="w-6 h-6" /> WhatsApp
            </a>
            <a href="https://maps.app.goo.gl/dy3bDjTpZpWxKrmo6?g_st=ic" target="_blank" rel="noreferrer" data-testid="button-directions"
              className="flex-1 py-4 glass text-white font-bold rounded-2xl flex items-center justify-center gap-2 text-lg transition-all hover:-translate-y-1 border border-white/20">
              <MapPin className="w-5 h-5 text-secondary" /> Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Products ─── */
function ProductsSection() {
  const products = [
    {
      icon: <Leaf className="w-8 h-8" />, nameHi: "बीज", nameEn: "Seeds",
      descHi: "धान, गेहूं, सोयाबीन, चना सहित सभी प्रमुख खरीफ और रबी फसलों के प्रमाणित हाइब्रिड बीज — अधिक पैदावार, बेहतर गुणवत्ता।",
      desc: "Certified hybrid seeds for rice, wheat, soybean & all major crops.",
      accent: "#4CAF50", bg: "from-[#1B5E20] to-[#2E7D32]"
    },
    {
      icon: <ShieldPlus className="w-8 h-8" />, nameHi: "कीटनाशक", nameEn: "Pesticides",
      descHi: "फसल को कीड़े-मकौड़ों और बीमारियों से बचाने के लिए विश्वसनीय ब्रांड्स के कीटनाशक — सही दाम, असली माल।",
      desc: "Trusted brand pesticides to protect crops from insects & disease.",
      accent: "#00897B", bg: "from-[#004D40] to-[#00695C]"
    },
    {
      icon: <Droplets className="w-8 h-8" />, nameHi: "फसल दवाइयां", nameEn: "Crop Medicines",
      descHi: "जड़ सड़न, झुलसा, धब्बा रोग जैसी सभी फसल बीमारियों के लिए सटीक दवाइयां — विशेषज्ञ सलाह के साथ।",
      desc: "Precise solutions for root rot, blight & all crop diseases.",
      accent: "#26A69A", bg: "from-[#00695C] to-[#00796B]"
    },
    {
      icon: <ScanLine className="w-8 h-8" />, nameHi: "खरपतवार नाशक", nameEn: "Weed Killers",
      descHi: "खेत को खरपतवार से साफ रखने के लिए प्री और पोस्ट-इमर्जेंट हर्बिसाइड — अधिक उपज, कम मेहनत।",
      desc: "Pre & post-emergent herbicides for clean fields and high yields.",
      accent: "#F9A825", bg: "from-[#5D4037] to-[#4E342E]"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative z-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img src={farmFieldPath} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary font-bold mb-3 uppercase tracking-wider text-sm">
            <Star className="w-4 h-4 fill-secondary text-secondary" />Premium Agricultural Products
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground font-hindi">
            हमारे उत्पाद
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-1 bg-secondary mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`bg-gradient-to-br ${product.bg} rounded-2xl p-5 md:p-7 relative overflow-hidden group cursor-default`}
              style={{ boxShadow: `0 16px 48px -8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.08)` }}
              data-testid={`card-product-${i}`}
            >
              <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-25 group-hover:opacity-45 transition-opacity duration-700"
                style={{ background: product.accent }} />

              <div className="relative z-10 mb-4">
                <div className="w-13 h-13 md:w-15 md:h-15 rounded-xl flex items-center justify-center relative p-3"
                  style={{ background: `linear-gradient(135deg, ${product.accent}35, ${product.accent}12)`, border: `1.5px solid ${product.accent}55`, boxShadow: `0 4px 16px ${product.accent}25, inset 0 1px 0 rgba(255,255,255,0.15)` }}>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent" />
                  <span style={{ color: product.accent }} className="relative z-10">{product.icon}</span>
                </div>
              </div>

              <h3 className="text-lg md:text-2xl font-bold text-white font-hindi mb-0.5 relative z-10 leading-tight">{product.nameHi}</h3>
              <p className="font-semibold mb-3 text-[10px] md:text-xs uppercase tracking-widest relative z-10" style={{ color: product.accent }}>{product.nameEn}</p>
              <p className="text-white/85 leading-relaxed relative z-10 text-xs md:text-sm font-hindi mb-2">{product.descHi}</p>
              <p className="text-white/45 leading-relaxed relative z-10 text-[10px] md:text-xs italic">{product.desc}</p>
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyChooseSection() {
  const reasons = [
    { icon: <BadgeCheck className="w-7 h-7" />, title: "100% असली सामान", titleEn: "Genuine Products", desc: "केवल प्रमाणित और लाइसेंस प्राप्त ब्रांड्स का सामान — कोई मिलावट नहीं।", color: "#4CAF50" },
    { icon: <ShieldCheck className="w-7 h-7" />, title: "विशेषज्ञ सलाह", titleEn: "Expert Guidance", desc: "कौन सी दवाई, कितनी मात्रा — हर फसल के लिए सही सलाह बिल्कुल मुफ्त।", color: "#F9A825" },
    { icon: <ThumbsUp className="w-7 h-7" />, title: "किसान का भरोसा", titleEn: "Farmer's Trust", desc: "1 साल में 200+ किसान भाइयों ने हम पर भरोसा किया और परिणाम पाए।", color: "#00897B" },
    { icon: <Clock className="w-7 h-7" />, title: "समय पर उपलब्धता", titleEn: "Always Available", desc: "बुवाई के सीजन में भी स्टॉक हमेशा तैयार — कभी खाली हाथ न जाएं।", color: "#7E57C2" },
    { icon: <Sprout className="w-7 h-7" />, title: "हाइब्रिड बीज", titleEn: "Hybrid Seeds", desc: "सोयाबीन, गेहूं, चना सहित सभी प्रमुख फसलों के उच्च उत्पादन बीज।", color: "#EF6C00" },
    { icon: <Truck className="w-7 h-7" />, title: "आसान पहुंच", titleEn: "Easy Access", desc: "रायसेन रोड, त्रिमूर्ति चौराहा, सलामतपुर — सालों में सबसे सुविधाजनक स्थान।", color: "#0288D1" },
  ];

  return (
    <section className="py-16 md:py-24 bg-foreground relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <img src={farmFieldPath} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,168,37,0.06)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-secondary font-bold mb-3 uppercase tracking-wider text-sm">
            <Star className="w-4 h-4 fill-secondary" />हमें क्यों चुनें?
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white font-hindi">
            अन्नदाता की खासियत
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-1 bg-secondary mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-2xl p-6 md:p-7 border border-white/8 group overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(4px)" }}
            >
              {/* Glow */}
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: r.color }} />
              {/* Top border accent */}
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60" style={{ background: r.color }} />

              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative"
                style={{ background: `${r.color}18`, border: `1.5px solid ${r.color}40`, boxShadow: `0 4px 20px ${r.color}20` }}>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent" />
                <span style={{ color: r.color }} className="relative z-10">{r.icon}</span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white font-hindi mb-0.5 leading-tight">{r.title}</h3>
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: r.color }}>{r.titleEn}</p>
              <p className="text-white/60 text-sm leading-relaxed font-hindi">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Strip ─── */
function StatsSection() {
  const stats = [
    { val: "200+", label: "किसान ग्राहक", sub: "Happy Farmers" },
    { val: "44K+", label: "इंस्टाग्राम", sub: "Followers" },
    { val: "31K+", label: "फेसबुक", sub: "Followers" },
    { val: "8K+", label: "यूट्यूब", sub: "Subscribers" },
    { val: "4.9★", label: "गूगल रेटिंग", sub: "Google Rating" },
    { val: "1 Yr", label: "अनुभव", sub: "Since July 2025" },
  ];

  return (
    <section className="bg-secondary relative overflow-hidden py-10 md:py-14">
      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center flex flex-col items-center"
            >
              <span className="text-4xl md:text-5xl font-black text-foreground leading-none drop-shadow">{s.val}</span>
              <span className="text-foreground/90 font-hindi font-bold text-base md:text-lg mt-1">{s.label}</span>
              <span className="text-foreground/60 text-xs uppercase tracking-wider mt-0.5">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Banner Divider ─── */
function BannerDivider() {
  return (
    <div className="w-full relative overflow-hidden">
      <motion.img
        src={bannerWidePath}
        alt="Annadata Agri & Seeds Products"
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-auto block"
      />
      {/* Text overlay on the blank right-side space */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-[45%] flex flex-col items-center md:items-end gap-3 px-4 md:px-10 text-center md:text-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-hindi font-bold text-xs md:text-sm text-white"
            style={{ background: "rgba(249,168,37,0.25)", border: "1.5px solid rgba(249,168,37,0.6)" }}>
            🌾 मुख्य उत्पाद — धान की खेती
          </div>
<h3 className="font-hindi font-black text-xl md:text-4xl lg:text-5xl text-white leading-tight text-center md:text-right max-w-[90%] md:max-w-full mx-auto md:mx-0"
  style={{ textShadow: "0 2px 20px rgba(0,0,0,0.95)" }}>
  धान • गेहूं • सोयाबीन
  <span className="block mt-2 text-[#F9A825] bg-black/35 px-2 py-1 rounded-lg inline-block">
    हर फसल के लिए तैयार
  </span>
</h3>
          <p className="text-white/90 font-hindi text-sm md:text-base font-medium leading-relaxed"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.95)" }}>
            रायसेन जिले के किसानों का भरोसेमंद साथी<br />
            असली बीज • सही दवाई • मुफ्त सलाह
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end pointer-events-auto mt-4">
            <a href="tel:9691712455"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
              style={{ background: "#F9A825", boxShadow: "0 4px 16px rgba(249,168,37,0.5)" }}>
              <Phone className="w-4 h-4" /> 9691712455
            </a>
            <a href="https://wa.me/9691712455" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
              style={{ background: "#25D366", boxShadow: "0 4px 16px rgba(37,211,102,0.5)" }}>
              <FaWhatsapp className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  const testimonials = [
    { name: "रामप्रशाद मीणा", text: "बहुत अच्छी दुकान है। बीज की गुणवत्ता शानदार है, दाम भी सही हैं। दिल से धन्यवाद केशव भाई।", rating: 5 },
    { name: "Suresh Yadav", text: "Keshav bhai ka saman hamesha asli hota hai. Crop ka result bahut achha aaya is baar.", rating: 5 },
    { name: "महेश कुमार वर्मा", text: "कीटनाशक दवाई से फसल पूरी तरह ठीक हो गई। नई दुकान है पर सेवा पुरानों से बेहतर है।", rating: 5 },
    { name: "रामकिशन सोनी", text: "केशव भाई बहुत अच्छे इंसान हैं। कभी गलत नहीं बेचते। हर बार सही दवाई और सही सलाह देते हैं।", rating: 5 },
    { name: "गोविंद सिंह राजपूत", text: "पूरे रायसेन जिले में इतनी अच्छी कृषि दुकान नहीं मिलेगी। असली माल, सही दाम, और बढ़िया सलाह।", rating: 5 },
    { name: "Santosh Verma", text: "Pesticide quality is very good. My wheat crop recovered fully. Very honest and helpful shop owner.", rating: 5 },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4F1EB] relative border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-5">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Trusted by Farmers
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold text-foreground font-hindi">
              किसान भाइयों का विश्वास
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="bg-white px-5 py-4 rounded-2xl border border-border flex items-center gap-4 shadow-md flex-shrink-0">
            <div className="text-4xl font-black text-foreground">4.9</div>
            <div>
              <div className="flex text-secondary mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="text-xs text-muted-foreground font-medium">Google Rating | 200+ Happy Farmers</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-8">
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border/50 relative"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.07)" }}>
              <MessageCircle className="absolute top-5 right-5 w-8 h-8 text-primary/10" />
              <div className="flex text-secondary mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-base text-foreground/80 font-medium leading-relaxed mb-5 font-hindi">"{t.text}"</p>
              <div className="font-bold text-primary text-sm">— {t.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviews" data-testid="link-see-all-reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
            <Star className="w-4 h-4" /> सभी Reviews देखें / Leave a Review
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Owner ─── */
function OwnerSection() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden border-t-4 border-secondary">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <img src={farmFieldPath} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse scale-110" />
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full p-1.5 relative z-10"
              style={{ background: "conic-gradient(from 0deg, #F9A825, #1B5E20, #F9A825, #1B5E20, #F9A825)", boxShadow: "0 0 60px 10px rgba(249,168,37,0.3)" }}>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-foreground">
                <img src={ownerPhotoPath} alt="Keshav Meena" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-xl font-bold text-sm z-20 shadow-xl border-2 border-foreground">
              Proprietor
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 text-center md:text-left">
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Meet the Owner</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-1 font-hindi">प्रो. केशव मीणा</h2>
            <h3 className="text-lg md:text-xl text-secondary/90 font-medium mb-7">Keshav Meena • Annadata Agri & Seeds</h3>

            <div className="flex flex-wrap gap-5 justify-center md:justify-start mb-7">
              {[
                { val: "1 Year", label: "In Business" },
                { val: "44K+", label: "Instagram" },
                { val: "31K+", label: "Facebook" },
                { val: "8K+", label: "YouTube" },
                { val: "200+", label: "Farmers" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-secondary">{s.val}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg text-background/75 leading-relaxed mb-7 font-hindi border-l-4 border-secondary pl-5 italic">
              "सिर्फ 1 साल में हजारों किसानों का विश्वास जीता। किसान भाइयों के लिए दिल से काम करते हैं — यही हमारी पहचान है।"
            </p>
            <p className="text-white/50 text-sm mb-7">Shop opened: 03 July 2025 • Raisen Road, Salamatpur</p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a href="https://www.instagram.com/lifeofkeshavmeena?igsh=MXc0emJjanFrbzluOQ==" target="_blank" rel="noreferrer" data-testid="link-owner-instagram"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-white text-sm font-semibold">
                <FaInstagram className="w-4 h-4 text-pink-400" />@lifeofkeshavmeena
              </a>
              <a href="https://youtube.com/@keshavmeena2912?si=pB_hKbc32HgS1aWt" target="_blank" rel="noreferrer" data-testid="link-owner-youtube"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-white text-sm font-semibold">
                <FaYoutube className="w-4 h-4 text-red-500" />@keshavmeena2912
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" data-testid="link-owner-facebook"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-white text-sm font-semibold">
                <FaFacebook className="w-4 h-4 text-[#1877F2]" />Facebook 31K+
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative z-10 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground font-hindi mb-3">
            संपर्क करें
          </motion.h2>
          <p className="text-muted-foreground text-lg">Get In Touch — We're Always Here for You</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            <a href="tel:9691712455" data-testid="contact-call"
              className="bg-card hover:bg-card/70 p-6 rounded-2xl border border-border flex items-center gap-5 transition-all hover:shadow-lg hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-0.5">Call Us</h4>
                <p className="text-muted-foreground text-sm mb-1">Available morning to evening</p>
                <span className="text-2xl font-black text-primary">9691712455</span>
              </div>
            </a>

            <a href="https://maps.app.goo.gl/dy3bDjTpZpWxKrmo6?g_st=ic" target="_blank" rel="noreferrer" data-testid="contact-maps"
              className="bg-card hover:bg-card/70 p-6 rounded-2xl border border-border flex items-start gap-5 transition-all hover:shadow-lg hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Visit Store</h4>
                <p className="text-foreground/70 text-base font-hindi leading-relaxed">
                  Raisen Road, Trimurti Chouraha,<br />Salamatpur, Dist. Raisen, M.P.
                </p>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a href="https://wa.me/919691712455" target="_blank" rel="noreferrer" data-testid="contact-whatsapp"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-base transition-colors shadow-lg">
                <FaWhatsapp className="w-5 h-5" />WhatsApp
              </a>
              <a href="https://www.instagram.com/ANNADATA_AGRI_AND_SEEDS" target="_blank" rel="noreferrer" data-testid="contact-instagram"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white p-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-base transition-colors shadow-lg">
                <FaInstagram className="w-5 h-5" />Instagram
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" data-testid="contact-facebook"
                className="bg-[#1877F2] hover:bg-[#1565d8] text-white p-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-base transition-colors shadow-lg col-span-2">
                <FaFacebook className="w-5 h-5" />Facebook Page — 31K+ Followers
              </a>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border overflow-hidden min-h-[340px] relative flex items-center justify-center group">
            <a href="https://maps.app.goo.gl/dy3bDjTpZpWxKrmo6?g_st=ic" target="_blank" rel="noreferrer"
              className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 backdrop-blur-sm">
              <span className="bg-white text-foreground px-5 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />Open in Google Maps
              </span>
            </a>
            <div className="w-full min-h-[340px] bg-[#E8E6E1] relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: "linear-gradient(rgba(27,94,32,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(27,94,32,0.15) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="absolute top-1/4 left-0 right-0 h-px bg-primary/20" />
              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-secondary/30" />
              <div className="w-5 h-5 rounded-full bg-primary absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg z-10 animate-pulse" />
              <MapPin className="w-14 h-14 text-primary drop-shadow-xl z-10 -mt-4" />
              <div className="w-20 h-3 bg-black/15 rounded-full blur-sm mt-1" />
              <div className="mt-4 bg-white px-4 py-2 rounded-xl font-bold text-foreground shadow-md z-10 border border-border text-sm">Annadata Agri & Seeds</div>
              <div className="mt-1 text-xs text-muted-foreground z-10 font-hindi">सलामतपुर, रायसेन</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function FarmerSupportSection() {
  const problemSuggestions = [
    "PB1 धान चाहिए",
    "धान का प्रोजेक्ट कराना है",
    "घर से धान उठवाना है",
    "धान खरीदी की जानकारी चाहिए",
    "धान का रेट जानना है",
    "हाइब्रिड बीज चाहिए",
    "सोयाबीन बीज चाहिए",
    "गेहूं बीज चाहिए",
    "चना बीज चाहिए",
    "खाद की सलाह चाहिए",
    "फसल में कीड़ा लग गया है",
    "खरपतवार नाशक चाहिए",
    "फसल पीली पड़ रही है",
    "फसल की ग्रोथ रुक गई है",
    "कौन सी दवाई डालें?",
    "Keshav Bhai se direct baat karni hai",
    "अन्य समस्या",
  ];

  const [form, setForm] = useState({
    service: "धान के प्रोजेक्ट",
    name: "",
    mobile: "",
    village: "",
    problem: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectProblem = (problem) => {
    setForm({
      ...form,
      problem,
      message: problem === "अन्य समस्या" ? "" : problem,
    });
  };

  const sendToWhatsApp = () => {
    if (!form.name.trim()) {
      alert("कृपया अपना नाम भरें");
      return;
    }

    if (!form.mobile.trim()) {
      alert("कृपया मोबाइल नंबर भरें");
      return;
    }

    if (!form.message.trim()) {
      alert("कृपया अपनी समस्या select करें या खुद लिखें");
      return;
    }

    const whatsappMessage = `
नमस्ते Annadata Agri & Seeds,

मुझे खेती से जुड़ी जानकारी चाहिए।

Enquiry Type: ${form.service}
नाम: ${form.name}
मोबाइल नंबर: ${form.mobile}
गांव / स्थान: ${form.village || "नहीं भरा"}
समस्या: ${form.message}

कृपया मुझे जानकारी दें।
धन्यवाद।
`;

    window.open(
      `https://wa.me/919691712455?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section
      id="farmer-support"
      className="py-16 md:py-24 bg-gradient-to-b from-[#0b2f18] via-[#123f22] to-[#071f10] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <img src={farmFieldPath} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-secondary font-bold tracking-widest font-hindi mb-3">
            किसान सहायता केंद्र
          </p>

          <h2 className="text-3xl md:text-5xl font-black font-hindi leading-tight">
            आपकी समस्या क्या है?
            <span className="block text-secondary mt-2">
              Select करें और WhatsApp पर भेजें
            </span>
          </h2>

          <p className="text-white/75 mt-5 max-w-3xl mx-auto font-hindi leading-relaxed">
            किसान भाई अपनी enquiry select करें। अगर आपकी समस्या list में नहीं है,
            तो “अन्य समस्या” select करके खुद लिख सकते हैं।
          </p>
        </motion.div>

        <motion.div
          id="farmer-enquiry-form"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white text-[#0b2f18] rounded-3xl p-6 md:p-9 shadow-2xl border-4 border-secondary/40"
        >
          <h3 className="text-2xl md:text-3xl font-black font-hindi mb-5 text-center">
            अपनी enquiry भेजें
          </h3>

          <div className="mb-6">
            <label className="block font-bold font-hindi mb-3">
              आपकी समस्या चुनें
            </label>

            <div className="flex flex-wrap gap-2">
              {problemSuggestions.map((problem, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectProblem(problem)}
                  className={`px-4 py-2 rounded-full border font-hindi text-sm transition-all ${
                    form.problem === problem
                      ? "bg-green-800 text-white border-green-800"
                      : "bg-green-50 text-green-900 border-green-200 hover:bg-green-100"
                  }`}
                >
                  {problem}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="आपका नाम *"
              className="w-full border-2 border-green-800/20 rounded-xl px-4 py-3 outline-none focus:border-green-700"
            />

            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="मोबाइल नंबर *"
              className="w-full border-2 border-green-800/20 rounded-xl px-4 py-3 outline-none focus:border-green-700"
            />

            <input
              name="village"
              value={form.village}
              onChange={handleChange}
              placeholder="गांव / स्थान"
              className="w-full border-2 border-green-800/20 rounded-xl px-4 py-3 outline-none focus:border-green-700"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border-2 border-green-800/20 rounded-xl px-4 py-3 outline-none focus:border-green-700 bg-white"
            >
              <option>धान के प्रोजेक्ट</option>
              <option>धान PB1 वैरायटी</option>
              <option>धान खरीदी जानकारी</option>
              <option>खाद, बीज और दवाई सलाह</option>
              <option>फसल समस्या समाधान</option>
              <option>Direct Keshav Bhai Connect</option>
              <option>अन्य enquiry</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="अगर आपकी समस्या list में नहीं है तो यहाँ खुद लिखें..."
              className="md:col-span-2 w-full border-2 border-green-800/20 rounded-xl px-4 py-3 outline-none focus:border-green-700 resize-none"
            />
          </div>

          <div className="text-center mt-7">
            <button
              type="button"
              onClick={sendToWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp पर Details भेजें
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="bg-foreground text-background pt-14 pb-8 border-t-[6px] border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="text-secondary font-bold text-xl mb-5 tracking-widest font-hindi">|| श्री गणेशाय नमः ||</div>
          <img src={logoPath} alt="Logo" className="w-20 h-20 rounded-full border-2 border-secondary/60 mb-5 bg-white object-contain shadow-xl" />
          <h2 className="text-3xl font-serif font-bold text-white mb-1">ANNADATA AGRI & SEEDS</h2>
          <p className="text-secondary text-xl font-hindi font-semibold mb-2">जय जवान जय किसान</p>
          <p className="text-white/50 text-sm mb-6">Raisen Road, Trimurti Chouraha, Salamatpur, Dist. Raisen</p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.instagram.com/ANNADATA_AGRI_AND_SEEDS" target="_blank" rel="noreferrer" data-testid="footer-instagram-shop"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-secondary hover:text-foreground transition-all border border-white/10 text-sm font-medium text-white">
              <FaInstagram className="w-4 h-4" />@ANNADATA_AGRI
            </a>
            <a href="https://www.instagram.com/lifeofkeshavmeena?igsh=MXc0emJjanFrbzluOQ==" target="_blank" rel="noreferrer" data-testid="footer-instagram-owner"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-secondary hover:text-foreground transition-all border border-white/10 text-sm font-medium text-white">
              <FaInstagram className="w-4 h-4 text-pink-400" />@lifeofkeshevmeena
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" data-testid="footer-facebook"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-[#1877F2] transition-all border border-white/10 text-sm font-medium text-white">
              <FaFacebook className="w-4 h-4 text-[#1877F2]" />Facebook 31K+
            </a>
            <a href="https://wa.me/919691712455" target="_blank" rel="noreferrer" data-testid="footer-whatsapp"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-[#25D366] transition-all border border-white/10 text-sm font-medium text-white">
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-background/50 text-sm gap-3 text-center md:text-left">
          <p>© {new Date().getFullYear()} Annadata Agri & Seeds. All rights reserved.</p>
          <p>Est. 03 July 2025 • Salamatpur, Raisen, Madhya Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
