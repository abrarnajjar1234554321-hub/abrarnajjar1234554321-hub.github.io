import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import BackButton from "@/components/BackButton";

const servicesData: Record<string, {
  title: string;
  desc: string;
  steps: string[];
  deliverables: string[];
  timeline: string;
  price: string;
}> = {
  "web-development": {
    title: "تصميم مواقع",
    desc: "أصمم وأطور مواقع عصرية ومتجاوبة باستخدام أحدث التقنيات. كل موقع يتم تصميمه خصيصاً ليعكس هوية علامتك التجارية ويحقق أهدافك.",
    steps: ["تحليل المتطلبات والأهداف", "تصميم الواجهات في Figma", "تطوير الموقع بـ React/Next.js", "اختبار الأداء والتوافق", "النشر والتسليم"],
    deliverables: ["موقع متجاوب بالكامل", "كود نظيف وقابل للصيانة", "تحسين SEO", "سرعة تحميل عالية", "دعم فني لمدة شهر"],
    timeline: "2-4 أسابيع",
    price: "يبدأ من $500",
  },
  "saas-development": {
    title: "تطوير SaaS",
    desc: "أبني لك منصة SaaS متكاملة مع لوحة تحكم ونظام اشتراكات ومصادقة مستخدمين وكل ما تحتاجه لإطلاق منتجك البرمجي.",
    steps: ["دراسة المشروع وتحديد الميزات", "تصميم قاعدة البيانات", "تطوير الواجهة الأمامية", "بناء الـ Backend والـ API", "اختبار شامل والنشر"],
    deliverables: ["منصة SaaS كاملة", "لوحة تحكم إدارية", "نظام مدفوعات", "وثائق تقنية", "دعم فني لمدة 3 أشهر"],
    timeline: "4-8 أسابيع",
    price: "يبدأ من $2000",
  },
  "ui-ux-design": {
    title: "تصميم UI/UX",
    desc: "أصمم واجهات مستخدم جذابة ومدروسة تقدم تجربة استخدام سلسة وممتعة لعملائك.",
    steps: ["بحث المستخدم وتحليل المنافسين", "إنشاء Wireframes", "تصميم الواجهات في Figma", "إنشاء نماذج تفاعلية", "مراجعة وتعديل"],
    deliverables: ["ملفات Figma كاملة", "نماذج تفاعلية", "دليل التصميم", "أيقونات وعناصر بصرية"],
    timeline: "1-3 أسابيع",
    price: "يبدأ من $300",
  },
  "mobile-apps": {
    title: "تطبيقات موبايل",
    desc: "أطور تطبيقات ويب متقدمة (PWA) تعمل كتطبيقات أصلية على جميع الأجهزة.",
    steps: ["تحديد المتطلبات", "تصميم الواجهات", "التطوير والبرمجة", "الاختبار على مختلف الأجهزة", "النشر"],
    deliverables: ["تطبيق PWA متكامل", "أداء عالي", "عمل بدون إنترنت", "إشعارات"],
    timeline: "3-6 أسابيع",
    price: "يبدأ من $800",
  },
  "backend": {
    title: "تكامل Backend",
    desc: "أبني لك بنية تحتية قوية مع قواعد بيانات وAPIات آمنة ونظام مصادقة متقدم.",
    steps: ["تصميم قاعدة البيانات", "بناء API", "إعداد المصادقة", "اختبار الأمان", "النشر والتوثيق"],
    deliverables: ["API متكامل", "قاعدة بيانات محسّنة", "نظام مصادقة آمن", "وثائق API"],
    timeline: "2-4 أسابيع",
    price: "يبدأ من $400",
  },
  "ecommerce": {
    title: "متاجر إلكترونية",
    desc: "أبني لك متجراً إلكترونياً احترافياً مع نظام دفع وإدارة منتجات وتتبع طلبات.",
    steps: ["تحليل المتطلبات", "تصميم المتجر", "تطوير نظام الدفع", "إدارة المنتجات", "النشر والاختبار"],
    deliverables: ["متجر متكامل", "بوابة دفع آمنة", "لوحة إدارة", "نظام تتبع طلبات"],
    timeline: "4-6 أسابيع",
    price: "يبدأ من $1000",
  },
};

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div className="py-20 container text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">الخدمة غير موجودة</h1>
        <Link to="/services" className="text-primary hover:underline">العودة للخدمات</Link>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container max-w-3xl">
        {/* Back Button */}
        <BackButton to="/services" label="العودة للخدمات" />

        <div className="animate-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-4 gradient-text">{service.title}</h1>
          <p className="text-muted-foreground text-lg mb-10">{service.desc}</p>
        </div>

        {/* Steps */}
        <div className="glass-card p-8 rounded-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-xl font-heading font-bold mb-6">خطوات التنفيذ</h2>
          <div className="space-y-4">
            {service.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-secondary-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="glass-card p-8 rounded-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xl font-heading font-bold mb-6">ماذا ستحصل عليه</h2>
          <div className="space-y-3">
            {service.deliverables.map((d, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                <p className="text-secondary-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="glass-card p-6 rounded-xl text-center">
            <p className="text-muted-foreground text-sm mb-2">الوقت المتوقع</p>
            <p className="text-xl font-heading font-bold text-primary">{service.timeline}</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <p className="text-muted-foreground text-sm mb-2">السعر</p>
            <p className="text-xl font-heading font-bold text-primary">{service.price}</p>
          </div>
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/contact"
            className="inline-block gradient-primary px-10 py-3 rounded-lg font-bold text-primary-foreground hover:opacity-90 transition-opacity glow-border"
          >
            اطلب هذه الخدمة
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
