import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "أحمد محمد", role: "مؤسس شركة تقنية", text: "عمل احترافي بكل معنى الكلمة. الموقع تجاوز توقعاتي من حيث التصميم والأداء. أنصح بالتعامل معه بشدة.", rating: 5 },
  { name: "سارة العلي", role: "رائدة أعمال", text: "تصميم رائع وتجربة مستخدم ممتازة. استجابة سريعة لكل التعديلات والملاحظات.", rating: 5 },
  { name: "خالد يوسف", role: "مدير تسويق", text: "المتجر الإلكتروني الذي بناه لنا ساهم في زيادة مبيعاتنا بنسبة 40%. محترف ويهتم بأدق التفاصيل.", rating: 5 },
  { name: "نورة حسن", role: "صاحبة مشروع", text: "أفضل مطور تعاملت معه. فهم متطلباتي بسرعة وقدم نتائج مبهرة في وقت قياسي.", rating: 5 },
  { name: "عمر البكري", role: "مدير منتج", text: "لوحة التحكم التي صممها كانت سهلة الاستخدام ومتكاملة. فريق العمل سعيد بها.", rating: 5 },
  { name: "ليلى عبدالله", role: "مصممة أزياء", text: "الموقع الذي صممه لعلامتي التجارية كان مذهلاً. العملاء يمدحون التصميم دائماً.", rating: 5 },
];

const TestimonialsPage = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="floating-orb w-64 h-64 -top-10 left-[10%]" style={{ animationDelay: "2s" }} />
      <div className="floating-orb-accent w-72 h-72 bottom-10 -right-20" style={{ animationDelay: "5s" }} />
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-4">
            آراء <span className="gradient-text">العملاء</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            ماذا يقول عملائي عن تجربتهم في العمل معي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-2xl hover-lift tilt-card animate-fade-in relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote size={32} className="text-primary/20 absolute top-6 left-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-bold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
