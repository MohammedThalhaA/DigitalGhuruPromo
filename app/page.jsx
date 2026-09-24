'use client';

import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const Arrow = () => <span className="arrow">↗</span>;
const Spark = () => <span className="spark">✦</span>;

const RocketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5 10.5C32 5 21 8 16 13L10 19C9 20 9 22 10.5 23.5L24.5 37.5C26 39 28 39 29 38L35 32C40 27 43 16 37.5 10.5Z" fill="url(#rocketBodyGrad)" />
    <path d="M37.5 10.5C35 8 28 8.5 22 12L36 26C39.5 20 40 13 37.5 10.5Z" fill="#FF3B30" />
    <circle cx="27" cy="21" r="5" fill="#E8F4FD" stroke="#007AFF" strokeWidth="2" />
    <circle cx="28" cy="20" r="2" fill="#5AC8FA" />
    <path d="M16 25L8 28C6 29 6 32 8 33L15 32L16 25Z" fill="#0056D2" />
    <path d="M23 32L26 40C27 42 30 42 31 40L30 33L23 32Z" fill="#0056D2" />
    <path d="M12 36C10 39 12 44 16 43C16 39 15 36 12 36Z" fill="#FF9500" />
    <path d="M13 38C12 40 13 42 15 41C15 39 14 38 13 38Z" fill="#FFCC00" />
    <defs>
      <linearGradient id="rocketBodyGrad" x1="15" y1="15" x2="35" y2="35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.6" stopColor="#F0F4F8" />
        <stop offset="1" stopColor="#D9E2EC" />
      </linearGradient>
    </defs>
  </svg>
);

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" fill="url(#globeGrad)" />
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.85" />
    <ellipse cx="24" cy="24" rx="8" ry="18" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.85" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.85" />
    <line x1="24" y1="6" x2="24" y2="42" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.85" />
    <circle cx="16" cy="18" r="2.5" fill="#FFFFFF" />
    <circle cx="32" cy="28" r="2.5" fill="#FFFFFF" />
    <circle cx="24" cy="12" r="2" fill="#38E8FF" />
    <circle cx="24" cy="36" r="2" fill="#38E8FF" />
    <defs>
      <radialGradient id="globeGrad" cx="30%" cy="30%" r="70%">
        <stop stopColor="#2E66F6" />
        <stop offset="0.7" stopColor="#0E38B1" />
        <stop offset="1" stopColor="#081E68" />
      </radialGradient>
    </defs>
  </svg>
);

const UserProfileIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const QuestionCircleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
  </svg>
);

const DocumentIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LaptopIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const ClockIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MonitorIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    // Set target to Oct 2, 2026, 10:00 AM
    const targetDate = new Date('2026-10-02T10:00:00+05:30').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <strong>{String(timeLeft.days).padStart(2, '0')}</strong>
        <span>Days</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <strong>{String(timeLeft.hours).padStart(2, '0')}</strong>
        <span>Hours</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <strong>{String(timeLeft.minutes).padStart(2, '0')}</strong>
        <span>Mins</span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item">
        <strong>{String(timeLeft.seconds).padStart(2, '0')}</strong>
        <span>Secs</span>
      </div>
    </div>
  );
};

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [open, setOpen] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', status: '', interest: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [registeredId, setRegisteredId] = useState(null);
  const [city, setCity] = useState('chennai'); // defaults to chennai

  useEffect(() => {
    setTicketId(Math.random().toString(36).substr(2, 6).toUpperCase());
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('hyderabad')) {
        setCity('hyderabad');
      }
      
      // Track page view
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pathname: window.location.pathname })
      }).catch(e => console.error("Could not track page view:", e));
    }
  }, []);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = { ...formData, ticketId };
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        if (data.id) setRegisteredId(data.id);
        setStep(2);
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    


    // RAZORPAY CODE
    try {
      // 1. Load Razorpay script if not loaded
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
      }

      // 2. Fetch order ID from backend
      const res = await fetch('/api/razorpay/create-order', { method: 'POST' });
      const order = await res.json();
      
      if (!order.id) {
        throw new Error('Failed to create order');
      }

      // 3. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: order.amount, 
        currency: order.currency,
        name: "Digital Ghuru",
        description: "AI Workshop Registration",
        image: "/assets/favicon-cropped.png",
        order_id: order.id, 
        handler: async function (response) {
          // Send automated email via backend
          try {
            await fetch('/api/payment-success', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                user: formData,
                ticketId: ticketId
              })
            });
          } catch(e) { console.error("Email trigger failed:", e) }

          // Success!
          setIsSubmitting(false);
          setStep(3); 
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#006fff"
        },
        modal: {
          ondismiss: function() {
            setIsSubmitting(false);
          }
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response){
        alert("Payment Failed. Reason: " + response.error.description);
        setIsSubmitting(false);
      });
      rzp1.open();
    } catch (err) {
      console.error(err);
      alert('Error initiating payment. Please try again.');
      setIsSubmitting(false);
    }

  };

  const handleDownloadTicket = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const ticketElement = document.getElementById('ticket-download-area');
      if (!ticketElement) return;
      
      const canvas = await html2canvas(ticketElement, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true
      });
      
      const link = document.createElement('a');
      link.download = `Workshop-Ticket-${formData.name ? formData.name.replace(/\s+/g, '-') : 'DigitalGhuru'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      if (registeredId) {
        fetch('/api/ticket-download', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: registeredId })
        }).catch(e => console.error("Could not track ticket download:", e));
      }
    } catch (err) {
      console.error('Failed to download ticket', err);
      alert('Failed to download ticket. Please try again.');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const faqs = [
    ['Who can attend?', 'Students from every department can join - including arts, science, commerce, management, media and engineering. No prior marketing or technical knowledge is needed.', UserProfileIcon],
    ['Will students get a certificate?', 'Yes. Every participant receives a Workshop Participation Certificate after completing the program.', GraduationCapIcon],
    ['Is this a theory-only session?', 'No. The workshop is built around live demonstrations, real-time examples, hands-on exercises and practical AI workflows.', QuestionCircleIcon],
    ['Can colleges host this for their students?', 'Absolutely. This workshop is specially designed for colleges and educational institutions that want to build future-ready skills on campus.', DocumentIcon],
    ['Do students need to bring their own laptops?', 'While not mandatory, we highly recommend bringing a laptop to fully participate in the hands-on AI tool demonstrations and exercises.', LaptopIcon],
    ['How long is the workshop session?', 'The workshop typically runs for an immersive 4-hour session, divided into foundational concepts and practical, hands-on application segments.', ClockIcon],
    ['Is there any software prerequisite?', 'No special software installation is required. All AI marketing tools demonstrated are web-based and accessible via any standard modern browser.', MonitorIcon]
  ];
  return <main>
    <nav className="nav"><a className="brand" href="#top"><img src="/assets/logo-final dG.webp" alt="Digital Ghuru Logo" className="brand-logo-img" /></a><div className="navlinks"><a href="#agenda">Agenda</a><a href="#outcomes">Outcomes</a><a href="#trainer">Why us</a></div><a className="button" href="#register">Register now <Arrow/></a></nav>

    <section id="top" className="hero grid-bg">
      <Reveal className="hero-copy"><p className="eyebrow"><Spark/> for colleges & future builders</p><h1>Make your<br/>students <em>AI-ready.</em></h1><p className="lede">The hands-on Digital Marketing AI Tools Workshop that turns curiosity into career-ready digital confidence.</p><div className="hero-actions"><a className="button" href="#register">Reserve your seat <Arrow/></a><a className="text-link" href="#agenda">Explore the workshop ↓</a></div><div className="trusted"><span className="avatars">✦ &nbsp; ● &nbsp; ✿</span><span>Built for the next generation<br/><b>of digital leaders</b></span></div></Reveal>
      <Reveal className="hero-visual modern-photo"><div className="photo-orbit"></div><img src="/assets/hero_banner_image.png" alt="Student exploring the future of AI"/><div className="photo-caption"><Spark/> Career-ready digital skills<br/><b>Start with curiosity.</b></div><div className="photo-stamp">AI<br/><small>READY</small></div></Reveal>
    </section>

    <section className="marquee">
      <div className="marquee-content">
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            <span>CREATE SMARTER</span><i>✦</i><span>MARKET FASTER</span><i>✦</i><span>GROW WITH AI</span><i>✦</i>
          </React.Fragment>
        ))}
      </div>
    </section>

    <section className="section problem"><Reveal><p className="eyebrow orange">the gap is real</p><h2>Degrees open doors.<br/><em>Digital fluency</em> opens futures.</h2></Reveal><Reveal className="problem-visual"><div className="problem-art"><img src="/assets/problem-section_image.png" alt="Problem illustration" /></div><div className="problem-side"><p>Today’s students need more than academic knowledge. They need the confidence to use the tools already reshaping how brands, startups and creators work.</p><div className="problem-points"><span>Industry-aware</span><span>Practical</span><span>Career-first</span></div></div></Reveal></section>

    <section className="section promise"><Reveal><div className="label-block">THE WORKSHOP<br/>PROMISE <Spark/></div></Reveal><Reveal><h2>Not another lecture.<br/><em>A launchpad.</em></h2><p className="lede">A beginner-friendly, high-energy experience where students see AI in action, make things themselves and discover where their skills can take them. From first prompt to finished marketing creative, every session gives learners a clear sense of what modern work feels like.</p></Reveal><Reveal className="promise-art"><img src="/assets/workshop_promises_image.png" alt="Digital marketing AI workshop visual"/><span className="image-note">Ideas become<br/><b>work people see.</b></span></Reveal></section>

    <section className="section audience"><Reveal className="audience-photo"><img src="/assets/whos_for_it_image.png" alt="AI workshop programme"/></Reveal><Reveal className="chips"><span>BBA / MBA</span><span>Engineering</span><span>Arts & Science</span><span>Media & Comms</span><span>Commerce</span><span>Entrepreneurs</span><span>Any curious student</span><p>No experience required - just an appetite for what’s next.</p></Reveal><Reveal className="audience-title-block"><p className="eyebrow">made for everyone</p><h2>One room.<br/><em>Every discipline.</em></h2><p className="audience-intro">Students from science, commerce, arts, management and technology bring different perspectives. AI gives them a shared creative language.</p></Reveal></section>

    <section id="agenda" className="section agenda"><Reveal><p className="eyebrow orange">your learning arc</p><h2>Two days. Seven<br/><em>future-forward</em> sessions.</h2></Reveal><div className="days"><div className="day blue"><Reveal className="day-num from-left">01</Reveal><Reveal className="from-bottom"><p className="day-kicker">DAY ONE · FOUNDATIONS</p><h3>Understand the new marketing playbook.</h3><ul><li>Digital Marketing essentials</li><li>AI in modern marketing</li><li>AI content creation tools</li><li>AI design tools & creative workflows</li></ul></Reveal><div className="day-image"><Reveal className="from-right"><img src="/assets/day_1_image.png" alt="Day 1 image"/></Reveal></div></div><div className="day gold"><div></div><Reveal className="from-top"><p className="day-kicker">DAY TWO · MOMENTUM</p><h3>Create, share and see where it can lead.</h3><ul><li>AI video tools demo</li><li>Social media marketing with AI</li><li>Careers, freelancing & entrepreneurship</li></ul></Reveal><Reveal className="day-num from-right" style={{textAlign: 'right'}}>02</Reveal><div className="day-image"><Reveal className="from-left"><img src="/assets/day_2_image.png" alt="Day 2 image"/></Reveal></div></div></div></section>

    <section className="method"><Reveal className="method-copy-overlay"><div className="method-copy"><p className="eyebrow">learn by doing</p><h2>Watch it.<br/>Try it.<br/><em>Own it.</em></h2></div></Reveal><div className="method-text-column"><div className="method-cards"><Reveal className="from-left" style={{height: '100%'}}><article><span>01</span><h3>Live tool demos</h3><p>See the workflows behind content, design, video and social in real time.</p></article></Reveal><Reveal className="from-top" style={{height: '100%'}}><article><span>02</span><h3>Guided making</h3><p>Turn prompts and ideas into tangible marketing creative.</p></article></Reveal><Reveal className="from-right" style={{height: '100%'}}><article><span>03</span><h3>Career context</h3><p>Connect new skills with the opportunities shaping the world of work.</p></article></Reveal></div></div><Reveal className="method-image-column from-bottom" style={{height: '100%'}}><div className="method-image"><img src="/assets/hands_on_method_image.png" alt="Hands on method"/></div></Reveal></section>

    <section id="outcomes" className="section outcomes">
      {/* Original Outcomes */}
      <Reveal>
        <p className="eyebrow orange">what leaves with them</p>
        <h2>More than notes.<br/><em>Real momentum.</em></h2>
      </Reveal>
      <div className="outcome-grid">
        <Reveal>
          <div className="outcome">
            <span>01</span>
            <h3>AI tool awareness</h3>
            <p>Know the tools transforming marketing teams today.</p>
            <b>✦</b>
          </div>
        </Reveal>
        <Reveal>
          <div className="outcome">
            <span>02</span>
            <h3>Basic marketing knowledge</h3>
            <p>Practical exposure students can build on.</p>
            <b>✦</b>
          </div>
        </Reveal>
        <Reveal>
          <div className="outcome">
            <span>03</span>
            <h3>Creative confidence</h3>
            <p>Practical exposure students can build on.</p>
            <b>✦</b>
          </div>
        </Reveal>
        <Reveal>
          <div className="outcome">
            <span>04</span>
            <h3>Career guidance</h3>
            <p>Practical exposure students can build on.</p>
            <b>✦</b>
          </div>
        </Reveal>
        <Reveal>
          <div className="outcome">
            <span>05</span>
            <h3>Future-ready digital skills</h3>
            <p>Practical exposure students can build on.</p>
            <b>✦</b>
          </div>
        </Reveal>
        <Reveal>
          <div className="outcome">
            <span>06</span>
            <h3>Participation certificate</h3>
            <p>Practical exposure students can build on.</p>
            <b>✦</b>
          </div>
        </Reveal>
      </div>

      {/* Extra Student Learning Outcomes in Bento Layout */}
      <div style={{ marginTop: '80px' }}>
        <Reveal>
          <div className="bento-header-badge">
            <span className="bento-header-dot"></span>
            CURRICULUM ARCHITECTURE
          </div>
          <h2 className="bento-section-title">
            STUDENT LEARNING <em>OUTCOMES</em>
          </h2>
          <p className="lede" style={{ marginTop: '14px', marginBottom: '38px', maxWidth: '680px' }}>
            By the end of this workshop, students will be able to master industry-standard AI workflows and digital marketing systems:
          </p>
        </Reveal>

        <div className="bento-grid">
          {/* Card 01: Understand digital marketing fundamentals (Wide split card with Side PNG slot) */}
          <Reveal className="bento-card blue col-2 bento-split">
            <div className="bento-card-content">
              <div className="bento-card-header">
                <span className="bento-card-num">01</span>
                <span className="bento-badge-pill">CORE FOUNDATION</span>
              </div>
              <div className="bento-card-text">
                <h3>Understand digital marketing fundamentals</h3>
                <p className="bento-desc">Master conversion funnels, SEO search intent, customer journey mapping, and performance growth metrics.</p>
              </div>
              <div className="bento-card-tags">
                <span className="bento-brand-tag">Conversion Funnels</span>
                <span className="bento-brand-tag">SEO Intent</span>
                <span className="bento-brand-tag">Growth ROI</span>
              </div>
            </div>
            {/* Side PNG slot: Card 1 Image */}
            <div className="bento-side-png-slot" title="Digital Marketing Fundamentals PNG Slot">
              <img 
                src="/assets/card_1_image_transparent.png" 
                alt="Understand digital marketing fundamentals" 
                className="bento-png-img" 
              />
            </div>
          </Reveal>

          {/* Card 02: Learn the role of AI in marketing (Card PNG slot) */}
          <Reveal className="bento-card orange">
            <div className="bento-card-header">
              <span className="bento-card-num">02</span>
              <span className="bento-badge-pill">AI STRATEGY</span>
            </div>
            <div className="bento-card-text">
              <h3>Learn the role of AI in marketing</h3>
              <p className="bento-desc">Deploy LLM prompt architecture to craft, test, and refine high-converting campaign hooks.</p>
            </div>
            {/* Card PNG slot: Card 2 Image */}
            <div className="bento-card-png-slot" title="Role of AI in Marketing PNG Slot">
              <img 
                src="/assets/card_2_transparent.png" 
                alt="Learn the role of AI in marketing" 
                className="bento-png-img" 
              />
            </div>
          </Reveal>

          {/* Card 03: Use AI tools for content creation (Card PNG slot) */}
          <Reveal className="bento-card gold">
            <div className="bento-card-header">
              <span className="bento-card-num">03</span>
              <span className="bento-badge-pill">TOOLKIT STACK</span>
            </div>
            <div className="bento-card-text">
              <h3>Use AI tools for content creation</h3>
              <p className="bento-desc">Hands-on fluency with production-grade AI platforms used across modern creative teams.</p>
            </div>
            {/* Card PNG slot: Card 3 Image */}
            <div className="bento-card-png-slot" title="AI Tools for Content Creation PNG Slot">
              <img 
                src="/assets/card_3_transparent.png" 
                alt="Use AI tools for content creation" 
                className="bento-png-img" 
              />
            </div>
          </Reveal>

          {/* Card 04: Create basic marketing creatives (Tall Vertical card with Vertical PNG slot) */}
          <Reveal className="bento-card white row-2">
            <div className="bento-card-header">
              <span className="bento-card-num">04</span>
              <span className="bento-badge-pill">CREATIVE STUDIO</span>
            </div>
            <div className="bento-card-text">
              <h3>Create basic marketing creatives</h3>
              <p className="bento-desc">Produce thumb-stopping static graphics, carousel decks, and visual ad assets that convert.</p>
            </div>
            {/* Vertical PNG slot: Card 4 Image */}
            <div className="bento-vertical-png-slot" title="Marketing Creatives Vertical PNG Slot">
              <img 
                src="/assets/card_4_transparent.png" 
                alt="Create basic marketing creatives" 
                className="bento-png-img" 
              />
            </div>
          </Reveal>

          {/* Card 05: Understand AI-based video creation (Wide split card with Side PNG slot) */}
          <Reveal className="bento-card blue col-2 bento-split">
            <div className="bento-card-content">
              <div className="bento-card-header">
                <span className="bento-card-num">05</span>
                <span className="bento-badge-pill">MOTION &amp; VIDEO</span>
              </div>
              <div className="bento-card-text">
                <h3>Understand AI-based video creation</h3>
                <p className="bento-desc">Script, voiceover, generate smart b-roll, and auto-caption short-form viral videos.</p>
              </div>
              <div className="bento-card-tags">
                <span className="bento-brand-tag">Scripting</span>
                <span className="bento-brand-tag">AI Voice</span>
                <span className="bento-brand-tag">Auto-Captions</span>
              </div>
            </div>
            {/* Side PNG slot: Card 5 Image */}
            <div className="bento-side-png-slot" title="AI Video Creation PNG Slot">
              <img 
                src="/assets/card_5_transparent.png" 
                alt="Understand AI-based video creation" 
                className="bento-png-img" 
              />
            </div>
          </Reveal>

          {/* Card 06: Learn social media marketing basics (Card PNG slot) */}
          <Reveal className="bento-card orange">
            <div className="bento-card-header">
              <span className="bento-card-num">06</span>
              <span className="bento-badge-pill">SOCIAL REACH</span>
            </div>
            <div className="bento-card-text">
              <h3>Learn social media marketing basics</h3>
              <p className="bento-desc">Master organic distribution algorithms across Instagram, LinkedIn, and YouTube Shorts.</p>
            </div>
            {/* Card PNG slot: Card 6 Image */}
            <div className="bento-card-png-slot" title="Social Media Marketing PNG Slot">
              <img 
                src="/assets/card_6_transparent.png" 
                alt="Learn social media marketing basics" 
                className="bento-png-img" 
              />
            </div>
          </Reveal>

          {/* Card 07: Explore career opportunities in digital marketing (Wide split card with Side PNG slot) */}
          <Reveal className="bento-card gold col-2 bento-split">
            <div className="bento-card-content">
              <div className="bento-card-header">
                <span className="bento-card-num">07</span>
                <span className="bento-badge-pill">CAREER ROADMAP</span>
              </div>
              <div className="bento-card-text">
                <h3>Explore career opportunities in digital marketing</h3>
                <p className="bento-desc">Position your profile for high-paying remote roles, agency careers, or freelance contracts.</p>
              </div>
              <div className="bento-card-tags">
                <span className="bento-brand-tag gold-tag">Growth Lead</span>
                <span className="bento-brand-tag gold-tag">Content Architect</span>
                <span className="bento-brand-tag gold-tag">Media Buyer</span>
              </div>
            </div>
            {/* Side PNG slot: Card 7 Image */}
            <div className="bento-side-png-slot" title="Career Opportunities PNG Slot">
              <img 
                src="/assets/card_7_transparent.png" 
                alt="Explore career opportunities in digital marketing" 
                className="bento-png-img" 
              />
            </div>
          </Reveal>

          {/* Card 08: Build awareness of AI-powered workflows (Card PNG slot) */}
          <Reveal className="bento-card white">
            <div className="bento-card-header">
              <span className="bento-card-num">08</span>
              <span className="bento-badge-pill">AUTOMATION FLOW</span>
            </div>
            <div className="bento-card-text">
              <h3>Build awareness of AI-powered workflows</h3>
              <p className="bento-desc">Chain multiple generative AI agents into continuous, autonomous production pipelines.</p>
            </div>
            {/* Card PNG slot: Card 8 Image */}
            <div className="bento-card-png-slot" title="AI Workflows Automation PNG Slot">
              <img 
                src="/assets/card_8_transparent.png" 
                alt="Build awareness of AI-powered workflows" 
                className="bento-png-img" 
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section id="trainer" className="why-choose-section">
      <div className="why-choose-container">
        {/* Left Column: Heading + Description + 2x2 Feature Grid */}
        <Reveal className="why-choose-left">
          <p className="why-eyebrow">
            WHY DIGITAL GHURU?
          </p>
          <h2 className="why-title">
            From Learning to<br />
            <span className="why-highlight">Career Transformation</span>
          </h2>
          <p className="why-main-desc">
            Digital Ghuru focuses on practical, industry-oriented digital and AI skills designed to help learners understand how technology can be applied to real-world careers and businesses.
          </p>
          <p className="why-approach-heading">
            Our learning approach combines:
          </p>

          <div className="why-features-grid">
            {/* Feature 1: AI */}
            <div className="why-feature-item">
              <div className="why-check-box check-orange">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <defs>
                    <linearGradient id="checkOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffb800" />
                      <stop offset="100%" stopColor="#ff5c00" />
                    </linearGradient>
                  </defs>
                  <path d="M4 10.5L8 14.5L16 6" stroke="url(#checkOrangeGrad)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-feature-title">AI</h3>
              <p className="why-feature-desc">
                Hands-on generative AI workflows, prompt architecture, and automated creative tools.
              </p>
            </div>

            {/* Feature 2: Digital Skills */}
            <div className="why-feature-item">
              <div className="why-check-box check-blue">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10.5L8 14.5L16 6" stroke="#006fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-feature-title">Digital Skills</h3>
              <p className="why-feature-desc">
                Core campaign strategies, conversion funnels, search intent, and viral distribution.
              </p>
            </div>

            {/* Feature 3: Practical Projects */}
            <div className="why-feature-item">
              <div className="why-check-box check-navy">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10.5L8 14.5L16 6" stroke="#09245c" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-feature-title">Practical Projects</h3>
              <p className="why-feature-desc">
                Real-world project execution, live digital asset creation, and verifiable portfolio pieces.
              </p>
            </div>

            {/* Feature 4: Career Guidance */}
            <div className="why-feature-item">
              <div className="why-check-box check-gold">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10.5L8 14.5L16 6" stroke="#d4a200" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-feature-title">Career Guidance</h3>
              <p className="why-feature-desc">
                Industry-focused mentorship, role readiness mapping, and interview-winning confidence.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Multi-layered Photo Collage with Placeholders */}
        <Reveal className="why-choose-right">
          <div className="why-collage-wrapper">
            {/* Background decorative circle */}
            <div className="why-bg-circle" aria-hidden="true"></div>

            {/* Background dot matrix grid */}
            <svg className="why-dot-matrix" width="80" height="120" viewBox="0 0 80 120" fill="none" aria-hidden="true">
              <defs>
                <pattern id="whyDotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="2" fill="#94a3b8" />
                </pattern>
              </defs>
              <rect width="80" height="120" fill="url(#whyDotPattern)" />
            </svg>

          <div className="why-collage-wrapper">
            <div className="why-bg-circle"></div>
            <svg className="why-dot-matrix" viewBox="0 0 80 120">
              <defs>
                <pattern id="whyDotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#09245c" />
                </pattern>
              </defs>
              <rect width="80" height="120" fill="url(#whyDotPattern)" />
            </svg>

            {/* Bala Sir - Top Left */}
            <div className="why-photo-card photo-student-1" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="teacher-photo-wrap" style={{ flex: 1, overflow: 'hidden' }}>
                <img 
                  src="/assets/Bala Sir.jpeg" 
                  alt="Bala Sir" 
                  className="why-img"
                />
              </div>
              <div className="teacher-badge-bar" style={{ background: 'var(--blue)' }}>
                <h4 className="teacher-name" style={{ color: 'var(--gold)' }}>Bala Sir</h4>
                <span className="teacher-role" style={{ color: 'var(--gold)', fontWeight: '800', fontSize: '14px' }}>Digital Marketing Trainer</span>
              </div>
            </div>

            {/* Prakash Sir - Center Floating */}
            <div className="why-teacher-card">
              <div className="teacher-call-pill">
                <span className="call-icon-dot dot-video">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#6366f1"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                </span>
                <span className="call-icon-dot dot-phone">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#10b981"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
                </span>
              </div>
              <div className="teacher-photo-wrap">
                <img 
                  src="/assets/Prakash Sir.jpeg" 
                  alt="Prakash Sir" 
                  className="why-img"
                />
              </div>
              <div className="teacher-badge-bar" style={{ background: 'var(--gold)' }}>
                <h4 className="teacher-name" style={{ color: 'var(--ink)' }}>Prakash Sir</h4>
                <span className="teacher-role" style={{ color: 'var(--ink)', fontWeight: '800', fontSize: '14px' }}>Digital Marketing Trainer</span>
              </div>
            </div>

            {/* Soorya Sir - Bottom Right */}
            <div className="why-photo-card photo-student-2" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="teacher-photo-wrap" style={{ flex: 1, overflow: 'hidden' }}>
                <img 
                  src="/assets/Soorya Sir.jpeg" 
                  alt="Soorya Sir" 
                  className="why-img"
                />
              </div>
              <div className="teacher-badge-bar" style={{ background: 'var(--orange)' }}>
                <h4 className="teacher-name">Soorya Sir</h4>
                <span className="teacher-role" style={{ fontWeight: '800', fontSize: '14px' }}>Graphic Designer &amp; Video Editing Trainer</span>
              </div>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section date">
      <div className="date-bg-graphics" aria-hidden="true">
        <svg className="bg-icon bg-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <svg className="bg-icon bg-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <svg className="bg-icon bg-ticket" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
      </div>
      <Reveal>
        <p className="eyebrow orange">save the dates</p>
        <h2>Give your students<br/>a head start on <em>tomorrow.</em></h2>
      </Reveal>
      <Reveal className="date-card">
        <span>WORKSHOP DATE</span>
        <strong className="date-gradient-text">02 <i>&</i> 03</strong>
        <b className="date-gradient-text">OCTOBER 2026</b>
        <div style={{ marginTop: '20px' }}>
          <span>STARTS IN</span>
          <CountdownTimer />
        </div>
        <hr/>
        <div className="date-card-details">
          <div className="date-card-detail">
            <i>
              <img src="/assets/icon-time.svg" alt="Time" style={{ width: '16px', height: '16px' }} />
            </i> 10 AM to 6 PM
          </div>
          <div className="premium-price-box">
            <div className="price-box-left">
              <svg className="price-icon" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5v2"></path>
                <path d="M15 11v2"></path>
                <path d="M15 17v2"></path>
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2Z"></path>
              </svg>
              <span className="price-label">Registration</span>
            </div>
            <div className="price-divider"></div>
            <div className="price-box-right">
              <span className="price-strike">₹299</span>
              <span className="price-final">₹199 <small>only</small></span>
            </div>
          </div>
        </div>
        <p style={{ marginTop: '18px' }}>College workshop · AI-powered digital skills</p>
        <a className="button" href="#register">Enquire for your college <Arrow/></a>
      </Reveal>
    </section>

    <section id="register" className="register">
      {/* Background isometric 3D wireframe graphics */}
      <svg className="register-bg-patterns" viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* Upper-center isometric cube with 'AI' */}
        <g transform="translate(560, 45)" stroke="rgba(235, 110, 0, 0.28)" strokeWidth="1.6">
          <path d="M70 0 L140 40 L70 80 L0 40 Z" fill="rgba(255, 255, 255, 0.08)" />
          <path d="M0 40 L70 80 L70 160 L0 120 Z" fill="rgba(255, 255, 255, 0.04)" />
          <path d="M70 80 L140 40 L140 120 L70 160 Z" fill="rgba(255, 255, 255, 0.06)" />
          <line x1="0" y1="40" x2="70" y2="80" strokeDasharray="3 3" opacity="0.6" />
          <line x1="140" y1="40" x2="70" y2="80" strokeDasharray="3 3" opacity="0.6" />
          <line x1="70" y1="80" x2="70" y2="160" />
          <text x="64" y="125" fill="rgba(235, 110, 0, 0.35)" fontSize="26" fontWeight="800" fontFamily="Space Grotesk, sans-serif" transform="skewY(-15)">AI</text>
        </g>
        {/* Bottom-left isometric cube behind classroom card */}
        <g transform="translate(20, 360)" stroke="rgba(235, 110, 0, 0.22)" strokeWidth="1.5">
          <path d="M80 0 L160 45 L80 90 L0 45 Z" fill="rgba(255, 255, 255, 0.05)" />
          <path d="M0 45 L80 90 L80 180 L0 135 Z" fill="rgba(255, 255, 255, 0.02)" />
          <path d="M80 90 L160 45 L160 135 L80 180 Z" fill="rgba(255, 255, 255, 0.04)" />
          <line x1="80" y1="90" x2="80" y2="180" />
          <path d="M40 22.5 L120 67.5" opacity="0.4" />
          <path d="M120 22.5 L40 67.5" opacity="0.4" />
        </g>
        {/* Subtle decorative sparkle elements */}
        <path d="M1380 500 Q1380 540 1340 540 Q1380 540 1380 580 Q1380 540 1420 540 Q1380 540 1380 500 Z" fill="rgba(255, 255, 255, 0.4)" />
        <path d="M1320 200 Q1320 220 1300 220 Q1320 220 1320 240 Q1320 220 1340 220 Q1320 220 1320 200 Z" fill="rgba(255, 255, 255, 0.3)" />
      </svg>

      <div className="register-inner">
        {/* Left Column: Copy + Classroom Photo Card */}
        <div className="register-left">
          <Reveal>
            <div className="register-copy">
              <p className="eyebrow">BRING IT TO YOUR CAMPUS</p>
              <h2>Let's build<br/><em>future–ready</em><br/>students.</h2>
              <p className="register-desc">Tell us about your institution and our team will help you plan the right workshop experience.</p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="classroom-card">
              <img src="/assets/classroom_workshop.jpg" alt="Students in AI classroom workshop" />
            </div>
          </Reveal>
        </div>

        {/* Center Column: Student with Floating Glass Panels */}
        <div className="register-center">
          <div className="student-stage">
            <img src="/assets/date_registration_image.png?v=3" alt="Student learning with AI" className="student-img" />

            {/* Floating Glass Panel: AI Modules */}
            <div className="glass-card glass-ai-modules">
              <div className="glass-header">AI modules</div>
              <div className="glass-list">
                <span className="glass-pill active">Machine Learning 101</span>
                <span className="glass-pill">Ethics in AI</span>
                <span className="glass-pill">Neural Networks</span>
                <span className="glass-pill">AI Ethics in AI</span>
                <span className="glass-pill">Learning AI</span>
              </div>
            </div>

            {/* Floating 3D Badges: Rocket & Globe */}
            <div className="glass-badges">
              <div className="glass-badge-pill" title="Rocketing AI Growth">
                <RocketIcon />
              </div>
              <div className="glass-badge-pill" title="Global Digital Reach">
                <GlobeIcon />
              </div>
            </div>

            {/* Floating Glass Panel: Campus-to-Career Timeline */}
            <div className="glass-card glass-timeline">
              <div className="glass-header-small">campus-to-career</div>
              <div className="timeline-stepper">
                <div className="timeline-line"></div>
                <div className="timeline-step">
                  <span className="step-dot orange"></span>
                  <span className="step-text">Foundations</span>
                </div>
                <div className="timeline-step">
                  <span className="step-dot orange"></span>
                  <span className="step-text">Ethics in AI</span>
                </div>
                <div className="timeline-step">
                  <span className="step-dot navy"></span>
                  <span className="step-text">Campus to Career</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Registration Form with Offset Dual-Stroke Frame */}
        <div className="register-right">
          <Reveal>
            <div className="register-form-wrapper">
              {/* Dual-stroke border frames */}
              <div className="frame-stroke frame-orange" aria-hidden="true"></div>
              <div className="frame-stroke frame-navy" aria-hidden="true"></div>

              <div className="register-card">
                <div className="register-slider-container">
                  <div className={`register-slider-track step-${step}`}>
                    
                    {/* Step 1: Details */}
                    <div className="register-step">
                      <form className="register-form" onSubmit={handleRegisterSubmit}>
                        <label>
                          <span>YOUR NAME</span>
                          <input placeholder="Your full name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </label>
                        <label>
                          <span>WHATSAPP / MOBILE</span>
                          <input placeholder="Your phone number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                        </label>
                        <label>
                          <span>EMAIL ADDRESS</span>
                          <input placeholder="you@example.com" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </label>
                        <label>
                          <span>CURRENT STATUS</span>
                          <div className="select-wrapper">
                            <select required value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                              <option value="" disabled>Select your status</option>
                              <option value="student">Student</option>
                              <option value="faculty">Faculty / Staff</option>
                              <option value="professional">Working Professional</option>
                              <option value="administrator">College Administrator</option>
                              <option value="other">Other</option>
                            </select>
                            <span className="select-chevron">▾</span>
                          </div>
                        </label>
                        <label>
                          <span>AI CAREER INTEREST</span>
                          <div className="select-wrapper">
                            <select required value={formData.interest} onChange={(e) => setFormData({...formData, interest: e.target.value})}>
                              <option value="" disabled>What are you looking to learn?</option>
                              <option value="marketing">AI in Marketing & Social Media</option>
                              <option value="design">AI for Design & Creativity</option>
                              <option value="tech">Technical / Development</option>
                              <option value="general">General Productivity</option>
                            </select>
                            <span className="select-chevron">▾</span>
                          </div>
                        </label>

                        <button className="button w-full" style={{ justifyContent: 'space-between', marginTop: '10px' }} type="submit" disabled={isSubmitting}>
                          <span>{isSubmitting ? 'Processing...' : 'Register'}</span>
                          <Arrow />
                        </button>

                        <small className="register-contact">
                          Or WhatsApp us at <b>88259 48859</b>
                        </small>
                      </form>
                    </div>

                    {/* Step 2: Payment */}
                    <div className="register-step payment-step">
                      <button type="button" className="register-back-btn" onClick={() => setStep(1)}>
                        ← Back to Details
                      </button>
                      
                      <h3>Complete Payment</h3>
                      <p>You're almost there, <strong>{formData.name}</strong>!</p>
                      
                      <div className="payment-amount-box">
                        <span className="payment-label">Ticket Amount</span>
                        <span className="payment-price">₹199</span>
                      </div>

                      <button className="button w-full" onClick={handlePayment} disabled={isSubmitting}>
                        <span>{isSubmitting ? 'Processing Payment...' : 'Pay ₹199 Now'}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      </button>
                    </div>

                    {/* Step 3: Ticket / QR Code */}
                    <div className="register-step ticket-step">
                      <button type="button" className="register-back-btn" onClick={() => {
                        setFormData({ name: '', phone: '', email: '', status: '', interest: '' });
                        setStep(1);
                      }}>
                        ← Register Another
                      </button>

                      <div className="ticket-success">
                        <CheckmarkIcon /> Payment Complete
                      </div>
                      
                      <div className="ticket-ui" id="ticket-download-area">
                        <img src="/assets/logo-final dG.webp" alt="Digital Ghuru" className="ticket-watermark" />
                        
                        <div className="ticket-header">
                          <h4>AI Tools Workshop</h4>
                          <span className="ticket-date">Oct 02-03, 2026</span>
                        </div>
                        
                        <div className="ticket-qr-container">
                          <QRCodeCanvas 
                            value={`digitalghuru:ticket:${formData.name}:${formData.phone}`} 
                            size={140} 
                            bgColor={"#ffffff"}
                            fgColor={"#09245c"}
                            level={"H"}
                            includeMargin={false}
                          />
                        </div>

                        <div className="ticket-details">
                          <div className="ticket-detail">
                            <small>NAME</small>
                            <strong>{formData.name || 'Student'}</strong>
                          </div>
                          <div className="ticket-detail">
                            <small>MOBILE</small>
                            <strong>{formData.phone || '+91 00000 00000'}</strong>
                          </div>
                        </div>
                        
                        <div className="ticket-footer">
                          <span>Admit One</span>
                          <span>ID: {ticketId}</span>
                        </div>
                      </div>
                      
                      <button className="button-outline w-full" onClick={handleDownloadTicket}>
                        Download Ticket
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Redesigned Target FAQ Section */}
    <section className="faq-target-section">
      {/* Background Shapes & Scribbles for the entire section */}
      <div className="faq-global-bg">
         <svg className="faq-global-scribble faq-scribble-top" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M 0 200 Q 100 0 200 200 T 400 200" stroke="rgba(255, 92, 0, 0.15)" strokeWidth="4" strokeLinecap="round" strokeDasharray="10,15" />
           <path d="M 50 100 C 150 200 250 50 350 150" stroke="rgba(0, 111, 255, 0.1)" strokeWidth="2" strokeLinecap="round" />
         </svg>
         <div className="faq-global-shape faq-shape-orange"></div>
         <div className="faq-global-shape faq-shape-blue"></div>
      </div>

      <div className="faq-target-grid">
        <Reveal className="faq-left-col">
          <div className="faq-title-wrap">
            <p className="faq-target-eyebrow">GOOD QUESTIONS <span className="line"></span></p>
            <h2 className="faq-serif-heading">
              Before <span className="faq-ask-gradient">you</span><br /><span className="faq-ask-gradient">ask.</span>
            </h2>
          </div>
          
          <div className="faq-art-wrap">
            <div className="faq-art-bg-circle"></div>
            <img src="/assets/faq_student_cutout_transparent.png" alt="Student thinking" className="faq-student-img" />
            
            <div className="faq-floating-card top-right">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12"/><path d="M16 11v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2"/><circle cx="8" cy="18" r="4"/><path d="M6 22l1.5-1.5L9 22"/></svg>
              </div>
              <b>Get Certified</b>
              <span>Showcase your skills with industry-recognised certificates.</span>
            </div>

            <div className="faq-floating-card bottom-left">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <b>Join a Community</b>
              <span>Learn, network and grow together with like-minded peers.</span>
            </div>

            <div className="faq-floating-card bottom-right">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <b>Hands-on Workshops</b>
              <span>Build real projects with industry experts.</span>
            </div>
          </div>
        </Reveal>

        <div className="faq-cards-container">
          {faqs.map(([q, a, IconComponent], i) => (
            <Reveal key={q}>
              <div className={`faq-card-item ${open === i ? 'open' : ''}`}>
                <button
                  className="faq-card-btn"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <div className="faq-card-left">
                    <div className="faq-type-badge">
                      <IconComponent />
                    </div>
                    <span className="faq-card-q">{q}</span>
                  </div>
                  <div className="faq-card-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points={open === i ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                    </svg>
                  </div>
                </button>
                {open === i && (
                  <div className="faq-card-answer">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Grand Finale Banner Section */}
    <section className="grand-finale-section">
      <div className="grand-banner-container">
        <div className="grand-banner-wrapper">
          
          {/* Background Decorative Shapes */}
          <div className="banner-decor-shapes">
            <div className="banner-shape circle-1"></div>
            <div className="banner-shape circle-2"></div>
            
            {/* Tech/Marketing Diagrams */}
            <svg className="banner-shape diagram-grid" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="5" cy="5" r="2" fill="rgba(255, 255, 255, 0.2)"/>
              <circle cx="20" cy="5" r="2" fill="rgba(255, 255, 255, 0.2)"/>
              <circle cx="35" cy="5" r="2" fill="rgba(255, 255, 255, 0.2)"/>
              <circle cx="5" cy="20" r="2" fill="rgba(255, 255, 255, 0.2)"/>
              <circle cx="20" cy="20" r="2" fill="rgba(255, 255, 255, 0.2)"/>
              <circle cx="35" cy="20" r="2" fill="rgba(255, 255, 255, 0.2)"/>
              <circle cx="5" cy="35" r="2" fill="rgba(255, 255, 255, 0.2)"/>
              <circle cx="20" cy="35" r="2" fill="rgba(255, 255, 255, 0.2)"/>
              <circle cx="35" cy="35" r="2" fill="rgba(255, 255, 255, 0.2)"/>
            </svg>

            <svg className="banner-shape diagram-nodes" width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5">
              <circle cx="20" cy="20" r="4" />
              <circle cx="60" cy="30" r="6" />
              <circle cx="40" cy="60" r="5" />
              <circle cx="10" cy="50" r="3" />
              <path d="M20 20 L60 30 L40 60 L20 20 L10 50 L40 60" />
            </svg>

            <svg className="banner-shape diagram-target" width="70" height="70" viewBox="0 0 70 70" fill="none" stroke="rgba(254, 220, 50, 0.2)" strokeWidth="1.5">
              <circle cx="35" cy="35" r="10" />
              <circle cx="35" cy="35" r="20" strokeDasharray="4 4" />
              <circle cx="35" cy="35" r="30" />
              <line x1="35" y1="0" x2="35" y2="70" strokeDasharray="2 4" />
              <line x1="0" y1="35" x2="70" y2="35" strokeDasharray="2 4" />
            </svg>

            <svg className="banner-shape diagram-growth" width="90" height="50" viewBox="0 0 90 50" fill="none" stroke="rgba(255, 92, 0, 0.3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="5 45 30 25 50 35 85 5" />
              <polyline points="70 5 85 5 85 20" />
            </svg>

            <div className="banner-shape spark-1">✦</div>
            <div className="banner-shape spark-2">✦</div>
          </div>

          <div className="banner-content-layout">
            <div className="banner-side banner-left">
              {city === 'hyderabad' ? (
                <div className="banner-address-box">
                  <strong>Hyderabad Campus</strong>
                  <p>F8, First Floor, Kallu Compound Rd, Pratap Nagar, Nagarjuna Nagar colony, Yella Reddy Guda, Ameerpet, Hyderabad, Telangana 500073</p>
                </div>
              ) : (
                <div className="banner-address-box">
                  <strong>Chennai Campus</strong>
                  <p>Anna Nagar, Chennai,<br/>Tamil Nadu 600040</p>
                  <a href="https://www.google.com/maps/place/13%C2%B005'01.3%22N+80%C2%B013'05.1%22E/@13.0837012,80.2155025,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0837012!4d80.2180774?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    Open in Maps ↗
                  </a>
                </div>
              )}
            </div>

            <div className="banner-text-center">
              <p className="banner-eyebrow">THE FUTURE IS NOT WAITING.</p>
              <h2 className="banner-heading">Neither should<br />your students.</h2>
              <button className="button banner-btn" onClick={() => { document.getElementById('register').scrollIntoView({ behavior: 'smooth' }); }}>
                Book Now <span className="arrow">↗</span>
              </button>
            </div>

            <div className="banner-side banner-right">
              {city === 'hyderabad' ? (
                <iframe 
                  src="https://maps.google.com/maps?q=F8,+First+Floor,+Kallu+Compound+Rd,+Ameerpet,+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" height="160" style={{border:0, borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} 
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              ) : (
                <iframe 
                  src="https://maps.google.com/maps?q=13.0837012,80.2180774&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" height="160" style={{border:0, borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} 
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Target Redesign Footer */}
    <footer className="target-footer">
      <div className="target-footer-inner">
        <a className="footer-brand" href="#top">
          <img src="/assets/logo-final dG.webp" alt="Digital Ghuru Logo" className="footer-logo-img" />
        </a>

        <span className="footer-academy">AI Career Transformation Academy</span>
        <a
          href="https://www.digitalghuru.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-web"
        >
          www.digitalghuru.com
        </a>
        <a href="tel:8825948859" className="footer-phone">
          88259 48859
        </a>

        <a href="#register" className="sticky-cta-btn button">
          Register now <Arrow />
        </a>
      </div>
    </footer>
  </main>;
}
