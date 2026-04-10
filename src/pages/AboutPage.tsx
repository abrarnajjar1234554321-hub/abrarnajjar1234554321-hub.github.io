import { Code, Figma, Database, Globe, Cpu, Users } from "lucide-react";
import BackButton from "@/components/BackButton";

const skills = [
  { icon: Code, name: "React / Next.js" },
  { icon: Globe, name: "TypeScript" },
  { icon: Figma, name: "Figma / UI Design" },
  { icon: Database, name: "Supabase / Firebase" },
  { icon: Cpu, name: "AI Integration" },
  { icon: Users, name: "UX Research" },
];

const reasons = [
  "تصاميم عصرية تواكب أحدث التوجهات",
  "سرعة في التنفيذ والتسليم",
  "دعم فني بعد التسليم",
  "كود نظيف وقابل للتطوير",
  "أسعار تنافسية ومرنة",
  "تجربة مستخدم ممتازة",
];

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="container max-w-3xl">
        {/* Back Button */}
        <BackButton />

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-4">
            من <span className="gradient-text">أنا</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            مطور ويب شغوف بالتكنولوجيا والتصميم، أساعد الشركات وأصحاب المشاريع في بناء حضورهم الرقمي
          </p>
        </div>

        {/* Story */}
        <div className="glass-card p-8 rounded-2xl mb-12 float-3d animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">قصتي المهنية</h2>
          <p className="text-secondary-foreground leading-relaxed mb-4">
            بدأت رحلتي في عالم البرمجة منذ أكثر من 5 سنوات، حيث تعلمت تطوير المواقع والتطبيقات بتقنيات حديثة. عملت مع عشرات العملاء من مختلف المجالات وساعدتهم في تحقيق أهدافهم الرقمية.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            أؤمن بأن التصميم الجيد ليس مجرد شكل جميل، بل هو تجربة متكاملة تجمع بين الجمالية والأداء والسرعة. أستخدم أحدث التقنيات لأقدم لعملائي حلولاً رقمية متميزة.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">
            الأدوات و<span className="gradient-text">المهارات</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="glass-card p-4 rounded-xl text-center float-3d">
                <skill.icon size={28} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">
            لماذا <span className="gradient-text">يختارني</span> العملاء
          </h2>
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full gradient-primary flex-shrink-0" />
                  <p className="text-sm text-secondary-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
