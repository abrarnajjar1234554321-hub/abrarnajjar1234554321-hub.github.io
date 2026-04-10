import { Link } from "react-router-dom";
import { Globe, Code, Palette, Smartphone, Database, Zap, ArrowLeft } from "lucide-react";
import BackButton from "@/components/BackButton";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "تصميم مواقع",
    desc: "مواقع عصرية ومتجاوبة بتصاميم فريدة تعكس هوية علامتك التجارية",
    features: ["تصميم متجاوب", "سرعة تحميل عالية", "SEO محسّن"],
    price: "يبدأ من $500",
  },
  {
    id: "saas-development",
    icon: Code,
    title: "تطوير SaaS",
    desc: "حلول برمجية متكاملة كخدمة مع لوحة تحكم ونظام اشتراكات",
    features: ["لوحة تحكم", "نظام مدفوعات", "إدارة مستخدمين"],
    price: "يبدأ من $2000",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "تصميم UI/UX",
    desc: "تصاميم واجهات مستخدم جذابة مع تجربة استخدام سلسة ومدروسة",
    features: ["بحث المستخدم", "تصميم Figma", "نماذج تفاعلية"],
    price: "يبدأ من $300",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "تطبيقات موبايل",
    desc: "تطبيقات متجاوبة تعمل على جميع الأجهزة بسلاسة",
    features: ["PWA", "أداء عالي", "إشعارات"],
    price: "يبدأ من $800",
  },
  {
    id: "backend",
    icon: Database,
    title: "تكامل Backend",
    desc: "بناء قواعد بيانات وAPIات مع نظام مصادقة وأمان متقدم",
    features: ["قواعد بيانات", "مصادقة آمنة", "API متقدم"],
    price: "يبدأ من $400",
  },
  {
    id: "ecommerce",
    icon: Zap,
    title: "متاجر إلكترونية",
    desc: "متاجر إلكترونية احترافية مع نظام دفع وإدارة منتجات",
    features: ["بوابة دفع", "إدارة منتجات", "تتبع الطلبات"],
    price: "يبدأ من $1000",
  },
];

const ServicesPage = () => {
  return (
    <div className="py-20">
      <div className="container">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto">
          <BackButton />
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-4">
            <span className="gradient-text">خدماتي</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            حلول رقمية متكاملة لتنمية أعمالك وتحقيق أهدافك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="glass-card p-8 rounded-2xl float-3d animate-fade-in group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <service.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{service.desc}</p>
              <div className="space-y-2 mb-5">
                {service.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{service.price}</span>
                <Link
                  to={`/services/${service.id}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  التفاصيل <ArrowLeft size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
