import { Link } from "react-router-dom";
import { Code, Smartphone, Palette, Star, ArrowLeft, Zap, Globe, Database } from "lucide-react";

const services = [
  { icon: Globe, title: "تصميم مواقع", desc: "مواقع عصرية وسريعة" },
  { icon: Code, title: "تطوير SaaS", desc: "حلول برمجية متكاملة" },
  { icon: Palette, title: "تصميم UI/UX", desc: "تجربة مستخدم مذهلة" },
  { icon: Smartphone, title: "تطبيقات موبايل", desc: "تطبيقات متجاوبة" },
  { icon: Database, title: "تكامل Backend", desc: "قواعد بيانات وAPIات" },
  { icon: Zap, title: "متاجر إلكترونية", desc: "متاجر احترافية" },
];

const testimonials = [
  { name: "أحمد محمد", role: "صاحب شركة", text: "عمل احترافي وسرعة في التنفيذ، أنصح بالتعامل معه بشدة.", rating: 5 },
  { name: "سارة علي", role: "رائدة أعمال", text: "تصميم رائع وتجربة مستخدم ممتازة، تجاوز توقعاتي.", rating: 5 },
  { name: "خالد يوسف", role: "مدير تسويق", text: "محترف في عمله ويهتم بأدق التفاصيل.", rating: 5 },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Particle dots */}
        <div className="particle-dot w-2 h-2 top-20 right-[10%]" style={{ animationDelay: "0s" }} />
        <div className="particle-dot w-3 h-3 top-40 left-[20%]" style={{ animationDelay: "2s" }} />
        <div className="particle-dot w-1.5 h-1.5 bottom-32 right-[30%]" style={{ animationDelay: "4s" }} />
        <div className="particle-dot w-2 h-2 top-60 left-[60%]" style={{ animationDelay: "1s" }} />
        <div className="particle-dot w-1 h-1 top-32 left-[40%]" style={{ animationDelay: "3s" }} />
        <div className="particle-dot w-2.5 h-2.5 bottom-48 left-[10%]" style={{ animationDelay: "5s" }} />

        {/* 3D Floating geometric shapes */}
        <div className="floating-cube absolute top-24 left-[8%] w-12 h-12 opacity-20" style={{ animationDelay: "0s" }} />
        <div className="floating-cube absolute bottom-40 right-[5%] w-8 h-8 opacity-15" style={{ animationDelay: "2s" }} />
        <div className="floating-ring absolute top-36 right-[15%] w-20 h-20 opacity-10" style={{ animationDelay: "1s" }} />
        <div className="floating-ring absolute bottom-24 left-[25%] w-14 h-14 opacity-15" style={{ animationDelay: "3s" }} />
        <div className="floating-diamond absolute top-48 left-[75%] w-10 h-10 opacity-15" style={{ animationDelay: "1.5s" }} />
        <div className="floating-diamond absolute bottom-60 right-[40%] w-6 h-6 opacity-20" style={{ animationDelay: "4s" }} />

        {/* Glowing orbs */}
        <div className="glow-orb absolute top-16 left-[50%] w-32 h-32" />
        <div className="glow-orb-accent absolute bottom-20 right-[20%] w-24 h-24" />

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block glass-card px-4 py-1.5 text-xs text-primary mb-6 animate-fade-in">
              🚀 مطور ويب بأسلوب الذكاء الاصطناعي
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              أحول <span className="gradient-text">أفكارك</span> إلى
              <br />
              واقع رقمي
            </h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              أبني لك مواقع ومتاجر وتطبيقات بتقنيات حديثة وتصاميم مذهلة تجذب عملاءك وتنمي أعمالك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/contact"
                className="gradient-primary px-8 py-3 rounded-lg font-bold text-primary-foreground hover:opacity-90 transition-opacity glow-border"
              >
                اطلب خدمتك الآن
              </Link>
              <Link
                to="/portfolio"
                className="glass-card px-8 py-3 rounded-lg font-semibold text-foreground hover:border-primary/50 transition-colors flex items-center justify-center gap-2"
              >
                شاهد أعمالي
                <ArrowLeft size={16} />
              </Link>
            </div>
          </div>

          {/* 3D Card */}
          <div className="mt-16 max-w-md mx-auto float-3d animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <div className="space-y-2 font-mono text-sm" dir="ltr">
                <p className="text-muted-foreground">
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary">project</span> = {"{"}
                </p>
                <p className="text-muted-foreground pr-4">
                  design: <span className="text-primary">"amazing"</span>,
                </p>
                <p className="text-muted-foreground pr-4">
                  speed: <span className="text-primary">"blazing"</span>,
                </p>
                <p className="text-muted-foreground pr-4">
                  quality: <span className="text-primary">"premium"</span>
                </p>
                <p className="text-muted-foreground">{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "+50", label: "مشروع منجز" },
              { num: "+30", label: "عميل سعيد" },
              { num: "+3", label: "سنوات خبرة" },
              { num: "24/7", label: "دعم فني" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-xl text-center float-3d animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl font-heading font-bold gradient-text mb-1">{stat.num}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="floating-ring absolute top-10 right-[5%] w-16 h-16 opacity-10" style={{ animationDelay: "0s" }} />
        <div className="floating-diamond absolute bottom-10 left-[8%] w-8 h-8 opacity-10" style={{ animationDelay: "2s" }} />
        <div className="container relative z-10">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">
            <span className="gradient-text">خدماتي</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            أقدم مجموعة متكاملة من الخدمات الرقمية لتحويل رؤيتك إلى واقع
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-xl float-3d animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="text-primary hover:underline text-sm font-semibold">
              عرض جميع الخدمات ←
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            ماذا يقول <span className="gradient-text">عملائي</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="floating-cube absolute top-8 left-[10%] w-10 h-10 opacity-10" style={{ animationDelay: "1s" }} />
        <div className="floating-cube absolute bottom-8 right-[10%] w-6 h-6 opacity-10" style={{ animationDelay: "3s" }} />
        <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-50" />
        <div className="container relative z-10">
          <div className="glass-card rounded-2xl p-10 text-center glow-border">
            <h2 className="text-3xl font-heading font-bold mb-4">
              جاهز لبناء مشروعك <span className="gradient-text">الرقمي</span>؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              تواصل معي الآن ودعنا نحول فكرتك إلى مشروع ناجح
            </p>
            <Link
              to="/contact"
              className="inline-block gradient-primary px-10 py-3 rounded-lg font-bold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              تواصل معي
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
