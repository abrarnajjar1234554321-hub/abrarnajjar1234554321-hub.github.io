import { ExternalLink } from "lucide-react";
import BackButton from "@/components/BackButton";

const projects = [
  {
    title: "منصة SaaS للتعليم",
    desc: "منصة تعليمية متكاملة مع نظام اشتراكات ولوحة تحكم للمعلمين والطلاب",
    tech: ["React", "Supabase", "Stripe"],
    image: "📚",
    link: "#",
  },
  {
    title: "متجر إلكتروني",
    desc: "متجر متكامل لبيع المنتجات الرقمية مع بوابة دفع ونظام تتبع طلبات",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "🛒",
    link: "#",
  },
  {
    title: "تطبيق إدارة المهام",
    desc: "تطبيق ويب لإدارة المهام والمشاريع مع تعاون فريق العمل",
    tech: ["React", "Firebase", "TypeScript"],
    image: "✅",
    link: "#",
  },
  {
    title: "موقع شركة استشارات",
    desc: "موقع احترافي لشركة استشارات مع نظام حجز مواعيد ومدونة",
    tech: ["Lovable", "Supabase", "Framer Motion"],
    image: "🏢",
    link: "#",
  },
  {
    title: "لوحة تحكم تحليلات",
    desc: "داشبورد متقدم لعرض البيانات والتحليلات مع رسوم بيانية تفاعلية",
    tech: ["React", "Recharts", "REST API"],
    image: "📊",
    link: "#",
  },
  {
    title: "موقع بورتفوليو مصور",
    desc: "موقع معرض أعمال لمصور فوتوغرافي مع معرض صور تفاعلي",
    tech: ["React", "CSS Animations", "Cloudinary"],
    image: "📷",
    link: "#",
  },
];

const PortfolioPage = () => {
  return (
    <div className="py-20">
      <div className="container">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto">
          <BackButton />
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-4">
            <span className="gradient-text">أعمالي</span> السابقة
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            مشاريع نفذتها لعملاء من مختلف المجالات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden float-3d animate-fade-in group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-40 gradient-primary flex items-center justify-center text-6xl opacity-80">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary text-sm hover:underline flex items-center gap-1"
                >
                  زيارة المشروع <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
