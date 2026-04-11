import { ExternalLink } from "lucide-react";
import BackButton from "@/components/BackButton";
import educationImage from "@/assets/portfolio/education-saas.jpg";
import ecommerceImage from "@/assets/portfolio/ecommerce-store.jpg";
import taskImage from "@/assets/portfolio/task-app.jpg";
import consultingImage from "@/assets/portfolio/consulting-website.jpg";
import analyticsImage from "@/assets/portfolio/analytics-dashboard.jpg";
import photographerImage from "@/assets/portfolio/photographer-portfolio.jpg";

const projects = [
  {
    title: "منصة SaaS للتعليم",
    desc: "منصة تعليمية متكاملة مع نظام اشتراكات ولوحة تحكم للمعلمين والطلاب",
    tech: ["React", "Supabase", "Stripe"],
    image: educationImage,
    link: "#",
  },
  {
    title: "متجر إلكتروني",
    desc: "متجر متكامل لبيع المنتجات الرقمية مع بوابة دفع ونظام تتبع طلبات",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    image: ecommerceImage,
    link: "#",
  },
  {
    title: "تطبيق إدارة المهام",
    desc: "تطبيق ويب لإدارة المهام والمشاريع مع تعاون فريق العمل",
    tech: ["React", "Firebase", "TypeScript"],
    image: taskImage,
    link: "#",
  },
  {
    title: "موقع شركة استشارات",
    desc: "موقع احترافي لشركة استشارات مع نظام حجز مواعيد ومدونة",
    tech: ["Lovable", "Supabase", "Framer Motion"],
    image: consultingImage,
    link: "#",
  },
  {
    title: "لوحة تحكم تحليلات",
    desc: "داشبورد متقدم لعرض البيانات والتحليلات مع رسوم بيانية تفاعلية",
    tech: ["React", "Recharts", "REST API"],
    image: analyticsImage,
    link: "#",
  },
  {
    title: "موقع بورتفوليو مصور",
    desc: "موقع معرض أعمال لمصور فوتوغرافي مع معرض صور تفاعلي",
    tech: ["React", "CSS Animations", "Cloudinary"],
    image: photographerImage,
    link: "#",
  },
];

const PortfolioPage = () => {
  return (
    <div className="py-20">
      <div className="container">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
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
              className="neon-card rounded-2xl overflow-hidden animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
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
                  className="text-primary text-sm hover:underline flex items-center gap-1 transition-colors duration-300"
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
