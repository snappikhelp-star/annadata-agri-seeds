import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, ArrowLeft, ExternalLink, MessageCircle, CheckCircle, ThumbsUp } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";

import logoPath from "@assets/ChatGPT_Image_May_22,_2026,_10_59_37_PM_1779470996795.png";

const GOOGLE_REVIEW_LINK = "https://maps.app.goo.gl/dy3bDjTpZpWxKrmo6?g_st=ic";

const testimonials = [
  { name: "रामप्रशाद मीणा", text: "बहुत अच्छी दुकान है। बीज की गुणवत्ता शानदार है, दाम भी सही हैं। दिल से धन्यवाद केशव भाई।", rating: 5, time: "2 weeks ago" },
  { name: "Suresh Yadav", text: "Keshav bhai ka saman hamesha asli hota hai. Crop ka result bahut achha aaya is baar. Highly recommended!", rating: 5, time: "1 month ago" },
  { name: "महेश कुमार वर्मा", text: "कीटनाशक दवाई से फसल पूरी तरह ठीक हो गई। नई दुकान है पर सेवा पुरानों से बेहतर है।", rating: 5, time: "3 weeks ago" },
  { name: "Dinesh Patel", text: "Best agri shop in Raisen area. Seeds quality is top class. Will visit again next season.", rating: 5, time: "1 week ago" },
  { name: "सुनील कुमार यादव", text: "केशव भाई से सही सलाह मिली, सही दवाई मिली। फसल को बहुत फायदा हुआ। पूरे गाँव में बताऊंगा।", rating: 5, time: "2 months ago" },
  { name: "Ramesh Chouhan", text: "Genuine products, honest price. Keshav bhai personally helped me choose the right seeds for my field.", rating: 4, time: "3 weeks ago" },
  { name: "भगवत प्रसाद यादव", text: "सोयाबीन के बीज बहुत अच्छे निकले। पिछले साल से दोगुनी फसल हुई। केशव भाई का बहुत-बहुत शुक्रिया।", rating: 5, time: "2 weeks ago" },
  { name: "Mohan Lal Meena", text: "Weed killer bahut effective tha. Ek hi spray mein khet saaf ho gaya. Daam bhi theek the. Aage bhi yahi aaunga.", rating: 5, time: "1 month ago" },
  { name: "रामकिशन सोनी", text: "केशव भाई बहुत अच्छे इंसान हैं। कभी गलत नहीं बेचते। हर बार सही दवाई और सही सलाह देते हैं।", rating: 5, time: "3 days ago" },
  { name: "Santosh Verma", text: "Pesticide quality is very good. My dhan (rice) crop recovered fully. Very honest and helpful shop owner.", rating: 5, time: "5 days ago" },
  { name: "गोविंद सिंह राजपूत", text: "पूरे रायसेन जिले में इतनी अच्छी कृषि दुकान नहीं मिलेगी। असली माल, सही दाम, और बढ़िया सलाह।", rating: 5, time: "1 week ago" },
  { name: "Prakash Chouhan", text: "I was worried about my crop disease. Keshav bhai identified the problem and gave the right medicine. Problem solved in 3 days!", rating: 5, time: "2 weeks ago" },
  { name: "विजय कुमार पटेल", text: "हाइब्रिड बीज की क्वालिटी लाजवाब है। अंकुरण 95% से ऊपर था। अन्नदाता दुकान पर पूरा भरोसा है।", rating: 5, time: "1 month ago" },
  { name: "Narayan Yadav", text: "Ghar ke paas hi itni achhi shop hai yeh pata nahi tha. Ab kahin aur jaane ki zaroorat nahi. Best service!", rating: 4, time: "3 weeks ago" },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-primary py-2 text-center text-white text-sm font-hindi font-medium">
        <span className="text-secondary font-bold">|| श्री गणेशाय नमः ||</span>
        <span className="mx-4 opacity-50">•</span>
        जय जवान जय किसान
      </div>

      {/* Header */}
      <header className="bg-primary shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" data-testid="back-to-home" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logoPath} alt="Logo" className="w-10 h-10 rounded-full border-2 border-secondary/60 bg-white object-contain" />
            <div>
              <p className="font-serif font-bold text-white text-sm leading-tight">ANNADATA AGRI</p>
              <p className="text-secondary text-xs font-hindi">Customer Reviews</p>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noreferrer"
            data-testid="header-review-button"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-secondary/90 transition-colors shadow-lg"
          >
            <Star className="w-4 h-4 fill-current" />
            Rate Us
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Hero rating card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-white text-center mb-12 relative overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(27,94,32,0.3)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,168,37,0.2)_0%,transparent_60%)]" />
          <div className="relative z-10">
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Google Rating</p>
            <div className="text-7xl font-black text-white mb-3 drop-shadow-lg">4.9</div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 text-secondary fill-current" />
              ))}
            </div>
            <p className="text-white/70 text-lg mb-8">Based on 200+ farmer reviews</p>
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="button-write-review"
              className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:bg-secondary/90 transition-all hover:-translate-y-1 shadow-2xl"
              style={{ boxShadow: "0 8px 24px rgba(249,168,37,0.4)" }}
            >
              <FaGoogle className="w-5 h-5" />
              अपना Review लिखें — Google पर
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-white/50 text-sm mt-4">Google Maps पर जाकर रेटिंग और अनुभव साझा करें</p>
          </div>
        </motion.div>

        {/* How to review steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-2xl border border-border p-8 mb-12"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
        >
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
            <ThumbsUp className="w-6 h-6 text-primary" />
            Review कैसे दें? — 3 आसान कदम
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "नीचे बटन दबाएं", desc: "\"Write a Review\" बटन पर क्लिक करें — Google Maps खुलेगा", icon: <FaGoogle className="w-6 h-6" /> },
              { step: "2", title: "Stars दें", desc: "1 से 5 तक stars चुनें और अपना अनुभव लिखें (Hindi या English)", icon: <Star className="w-6 h-6" /> },
              { step: "3", title: "Submit करें", desc: "Review submit करें और दुकान पर phone दिखाएं — पाएं विशेष लाभ!", icon: <CheckCircle className="w-6 h-6" /> },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-secondary mb-4 shadow-lg">
                  {s.icon}
                </div>
                <div className="text-2xl font-black text-primary mb-1">Step {s.step}</div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-hindi">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="button-review-steps"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-xl"
            >
              <FaGoogle className="w-5 h-5" />
              Google Review देने के लिए यहाँ क्लिक करें
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Existing reviews */}
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-foreground font-hindi mb-2">किसान भाइयों के अनुभव</h2>
          <p className="text-muted-foreground mb-8">What our farmers say about us</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border relative"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                data-testid={`review-card-${i}`}
              >
                <MessageCircle className="absolute top-5 right-5 w-8 h-8 text-primary/10" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm font-hindi">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.time}</p>
                  </div>
                </div>
                <div className="flex text-secondary mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  {[...Array(5 - t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-muted" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed font-hindi text-sm">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#F4F1EB] rounded-2xl p-8 text-center border border-border"
        >
          <h3 className="text-2xl font-serif font-bold text-foreground mb-2 font-hindi">आपका अनुभव हमारे लिए अनमोल है</h3>
          <p className="text-muted-foreground mb-6">Your review helps other farmers find us and trust us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid="button-final-review"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg"
            >
              <FaGoogle className="w-5 h-5" />
              Google Review दें
            </a>
            <a
              href="https://wa.me/916261737388"
              target="_blank"
              rel="noreferrer"
              data-testid="button-review-whatsapp"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#1ebe5d] transition-all shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp करें
            </a>
          </div>
          <p className="text-muted-foreground text-xs mt-5">
            Review देने के बाद दुकान पर phone दिखाएं और पाएं विशेष डिस्काउंट
          </p>
        </motion.div>

        {/* Social links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://www.instagram.com/ANNADATA_AGRI_AND_SEEDS" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:border-pink-400 hover:text-pink-600 transition-colors">
            <FaInstagram className="w-5 h-5 text-pink-500" /> @ANNADATA_AGRI_AND_SEEDS
          </a>
          <a href="https://www.instagram.com/lifeofkeshavmeena?igsh=MXc0emJjanFrbzluOQ==" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:border-pink-400 hover:text-pink-600 transition-colors">
            <FaInstagram className="w-5 h-5 text-pink-500" /> @lifeofkeshavmeena
          </a>
          <a href="https://youtube.com/@keshavmeena2912?si=pB_hKbc32HgS1aWt" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:border-red-400 hover:text-red-600 transition-colors">
            <FaYoutube className="w-5 h-5 text-red-500" /> @keshavmeena2912
          </a>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="bg-foreground text-white py-6 text-center mt-12">
        <p className="text-secondary font-hindi font-bold">|| श्री गणेशाय नमः || जय जवान जय किसान</p>
        <p className="text-white/50 text-sm mt-2">© {new Date().getFullYear()} Annadata Agri & Seeds — Salamatpur, Raisen</p>
      </footer>
    </div>
  );
}
