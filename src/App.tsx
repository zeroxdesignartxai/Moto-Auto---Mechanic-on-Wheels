/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronDown, 
  CheckCircle2, 
  Wrench, 
  Droplets, 
  Lightbulb, 
  Wind, 
  Disc, 
  Battery, 
  Settings2, 
  Cpu, 
  Truck, 
  CreditCard, 
  FileText, 
  Stethoscope,
  SmilePlus
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Easy Fixes",
      icon: <Droplets className="w-14 h-14 text-blue-700" />,
      items: ["Fresh Oil Changes", "Bright New Light Bulbs", "Clear View Wiper Blades"],
      description: "Quick jobs to keep your car running smoothly every day."
    },
    {
      title: "Regular Repairs",
      icon: <Disc className="w-14 h-14 text-blue-700" />,
      items: ["Quiet & Safe Brakes", "Strong New Batteries", "Full Car Tune-ups"],
      description: "Standard maintenance for safety and long-lasting performance."
    },
    {
      title: "Hard Jobs",
      icon: <Cpu className="w-14 h-14 text-blue-700" />,
      items: ["Engine Repair", "Transmission & Gears", "Electrical Diagnosis"],
      description: "Big repairs handled with expert care and clear explanations."
    }
  ];

  const howItWorks = [
    { step: "01", title: "Give Us a Call", text: "Speak to Steve directly and tell him what your car needs." },
    { step: "02", title: "Steve Drives to You", text: "We bring the entire shop to your home or office anywhere in LA." },
    { step: "03", title: "Detailed Estimates", text: "We explain everything first in clear, easy-to-read words right in your driveway." },
    { step: "04", title: "Expert Care", text: "Steve fixes your car on-site with precision, respect, and professional tools." },
    { step: "05", title: "Back on the Road", text: "Your car is fixed, tested, and ready to go without you ever leaving home." }
  ];

  return (
    <div className="min-h-screen font-sans bg-[#fafaf9] text-slate-900 scroll-smooth selection:bg-blue-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-800 p-2.5 rounded-xl shadow-lg transform -rotate-3">
              <Wrench className="text-white w-8 h-8" />
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-2xl md:text-3xl font-display font-black tracking-tight text-blue-900">Moto Auto</span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600/70">Mechanic on Wheels</span>
            </div>
          </div>
          <a 
            href="tel:8185610957" 
            className="flex items-center gap-3 bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-blue-200 hover:-translate-y-1 active:translate-y-0"
            aria-label="Call us now"
          >
            <Phone className="w-6 h-6 animate-pulse" />
            <span className="hidden sm:inline">Call 818-561-0957</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-64 md:pb-40 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50/50 rounded-l-[5rem] -z-10 hidden lg:block"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-8 shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              Serving All of Los Angeles
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-8 text-slate-900 tracking-tight">
              The Mechanic <br />
              <span className="text-blue-800">That Comes <br className="hidden md:block"/> To You.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium">
              Moto Auto is your mobile repair shop. Steve brings the tools and expertise directly to your driveway anywhere in Los Angeles.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <a 
                href="tel:8185610957" 
                className="flex items-center justify-center gap-4 bg-blue-800 hover:bg-blue-900 text-white px-10 py-8 rounded-3xl font-black text-4xl transition-all shadow-2xl hover:shadow-blue-200/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-10 h-10" />
                Call Now
              </a>
              <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-center gap-3 bg-white border-4 border-slate-200 hover:border-blue-800 text-slate-800 px-10 py-8 rounded-3xl font-bold text-2xl transition-all hover:bg-slate-50"
              >
                See Services
                <ChevronDown className="w-8 h-8 text-blue-800" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 group overflow-hidden rounded-[3rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486006396193-47a73ba9208e?q=80&w=1200&auto=format&fit=crop" 
                alt="Friendly mechanic talking to a valued customer"
                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-6 bottom-6">
                <div className="bg-white/90 backdrop-blur-lg p-8 rounded-[2rem] shadow-2xl border border-white/50">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="bg-blue-800 text-white p-3 rounded-2xl shadow-lg">
                      <Stethoscope className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-display font-black text-slate-900">Total Care</h3>
                  </div>
                  <p className="text-xl text-slate-700 font-bold leading-snug">
                    "We explain everything first in plain English. No surprises."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="absolute -top-10 -left-10 bg-amber-400 p-8 rounded-full shadow-2xl transform rotate-12 z-20 hidden sm:block">
              <div className="text-slate-900 text-center font-black">
                <span className="text-4xl block">100%</span>
                <span className="text-sm uppercase tracking-tighter">Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-y border-slate-200">
        <div className="flex flex-wrap justify-around items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3 text-2xl font-bold italic"><CheckCircle2 className="w-8 h-8" /> Certified Mechanics</div>
          <div className="flex items-center gap-3 text-2xl font-bold italic"><CheckCircle2 className="w-8 h-8" /> Better Business Bureau</div>
          <div className="flex items-center gap-3 text-2xl font-bold italic"><CheckCircle2 className="w-8 h-8" /> 30 Years Local</div>
          <div className="flex items-center gap-3 text-2xl font-bold italic"><CheckCircle2 className="w-8 h-8" /> Quality Guaranteed</div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-7xl font-display font-black mb-8 leading-none italic tracking-tighter">Mobile Shop. <br/>Expert Care.</h2>
              <p className="text-2xl text-slate-600 font-medium leading-relaxed italic">
                From simple check-ups to bigger repairs, Steve handles every job right in your driveway with maximum convenience.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-[2rem] border-2 border-blue-100 hidden lg:block">
              <p className="text-xl font-black text-blue-900 italic">Always Fair. Always Honest. Powered by Moto Auto.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#fafaf9] border-2 border-slate-100 rounded-[3rem] p-12 transition-all hover:bg-white hover:shadow-warm hover:border-blue-100"
              >
                <div className="mb-10 p-5 bg-white rounded-3xl inline-block shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-4xl font-display font-black mb-6 text-slate-900 italic">{service.title}</h3>
                <p className="text-xl text-slate-500 mb-10 leading-relaxed font-bold italic">{service.description}</p>
                <ul className="space-y-5">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-2xl font-black text-slate-800">
                      <div className="mt-1.5 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-blue-800 font-black text-2xl italic">Learn More →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Split Section */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-blue-900 text-white rounded-[4rem] p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
            <h2 className="text-5xl font-display font-black mb-12 italic leading-tight">Moto Auto Mobile.</h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-blue-800 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold opacity-60 uppercase tracking-widest mb-2">Service Area</h4>
                  <p className="text-3xl font-black italic">Serving All of Los Angeles<br />Steve Drives To You</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-blue-800 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:-rotate-12 transition-transform">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold opacity-60 uppercase tracking-widest mb-2">When We're Mobile</h4>
                  <p className="text-3xl font-black italic">Monday — Friday: <br />8:00 AM to 5:00 PM</p>
                  <p className="text-xl mt-4 text-blue-200 italic font-bold">Steve Travels Anywhere in LA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-100 rounded-[4rem] p-16 flex flex-col justify-between">
            <div>
              <blockquote className="text-4xl font-display font-black text-amber-900 leading-[1.1] italic mb-12">
                "We treat your car like we're fixing it for our own family. Safety and respect are what we do best."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-amber-200 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop" alt="Founder John" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-2xl font-black text-amber-950 italic">Steve</p>
                  <p className="text-xl font-bold text-amber-800 uppercase tracking-widest">Master Mechanic & Your Neighbor</p>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-white/50 backdrop-blur-md p-8 rounded-3xl border-2 border-white/50">
              <p className="text-xl font-black text-amber-900 italic">Steve travels anywhere in LA to help you: <br /> <span className="text-4xl">818-561-0957</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:row items-center justify-center py-20 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black italic tracking-tighter decoration-blue-800 decoration-8 underline underline-offset-10">The Moto Auto Promise.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FileText />, title: "Clear Records", desc: "Digital and printed records that you can actually understand." },
              { icon: <CreditCard />, title: "Clear Pricing", desc: "We tell you exactly what it costs before we even touch your car." },
              { icon: <Truck />, title: "LA Mobile", desc: "Steve drives to any place in Los Angeles to pick up your car." },
              { icon: <CheckCircle2 />, title: "100% Trust", desc: "If you're not happy, we'll make it right. No arguments." }
            ].map((feature, i) => (
              <div key={i} className="group bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-soft hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-50 text-blue-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <h4 className="text-3xl font-display font-black mb-4 italic text-slate-900">{feature.title}</h4>
                <p className="text-xl text-slate-500 leading-relaxed font-bold italic">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Editorial Layout */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-12">
              <h2 className="text-6xl md:text-8xl font-display font-black leading-none italic mb-12 tracking-tighter text-center">Mobile Repair <br />As Simple As 1-5.</h2>
              <p className="text-2xl opacity-70 leading-relaxed font-medium mb-12 text-center max-w-3xl mx-auto">
                Moto Auto brings the tools, the tech, and the talent right to your door. Here is how our "Mechanic on Wheels" service works.
              </p>
            </div>
            <div className="lg:col-span-12 space-y-12 max-w-4xl mx-auto">
              {howItWorks.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-10 group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-4xl font-black shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-4xl font-display font-black mb-4 italic group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-2xl opacity-70 leading-relaxed font-bold italic">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-6 bg-blue-50 text-blue-800 rounded-3xl mb-12 shadow-soft">
              <Phone className="w-16 h-16 animate-bounce" />
            </div>
            <h2 className="text-7xl md:text-8xl font-display font-black mb-12 italic leading-tight tracking-tighter">Ready When <br />You are.</h2>
            <p className="text-2xl md:text-3xl text-slate-500 mb-20 italic leading-relaxed font-bold max-w-3xl mx-auto">
              Skip the stress, skip the jargon. One simple phone call is all it takes to get quality care for your car.
            </p>
            <div className="flex flex-col items-center gap-10">
              <a 
                href="tel:8185610957" 
                className="group inline-flex items-center gap-8 bg-blue-800 hover:bg-blue-900 text-white px-16 py-10 rounded-[3rem] font-black text-5xl shadow-2xl hover:shadow-blue-200/50 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-12 h-12 group-hover:rotate-12 transition-transform" />
                818-561-0957
              </a>
              <div className="flex items-center gap-4 text-2xl font-black text-slate-400 italic">
                <CheckCircle2 className="text-blue-800 w-8 h-8" />
                Your Safety Is Our Mission
              </div>
            </div>
          </motion.div>
        </div>
        {/* Background Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-100 rounded-full -z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-slate-50 rounded-full -z-0"></div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-800 p-2 rounded-lg">
                  <Wrench className="text-white w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-slate-900 tracking-tight italic">Moto Auto</span>
              </div>
              <p className="text-xl font-bold text-slate-400 italic max-w-sm">
                Dedicated auto care for our community by Steve.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <h5 className="text-lg font-black uppercase tracking-widest mb-8 text-slate-900 italic underline decoration-blue-800 decoration-4 underline-offset-8">Quick Links</h5>
                <ul className="space-y-4 text-xl font-bold italic text-slate-500">
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-800 transition-colors">Services</button></li>
                  <li><a href="tel:8185610957" className="hover:text-blue-800 transition-colors">Call Us</a></li>
                  <li><button className="hover:text-blue-800 transition-colors">Shop Info</button></li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-black uppercase tracking-widest mb-8 text-slate-900 italic underline decoration-blue-800 decoration-4 underline-offset-8">Support</h5>
                <ul className="space-y-4 text-xl font-bold italic text-slate-500">
                  <li><a href="#" className="hover:text-blue-800 transition-colors">Terms of Care</a></li>
                  <li><a href="#" className="hover:text-blue-800 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-800 transition-colors">Accessibility</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-black italic text-slate-400">
              © 2026 Moto Auto Care. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-800 transition-colors cursor-pointer shadow-sm">
                <SmilePlus />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-800 transition-colors cursor-pointer shadow-sm">
                <Clock />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

