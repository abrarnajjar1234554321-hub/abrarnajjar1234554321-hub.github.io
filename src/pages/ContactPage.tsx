import { useState } from "react";
import { Phone, Instagram, Facebook, Linkedin, Send, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with backend
    alert("تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-20">
      <div className="container max-w-3xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-heading font-bold mb-4">
            <span className="gradient-text">تواصل</span> معي
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            جاهز لمناقشة مشروعك؟ تواصل معي وسأرد عليك خلال 24 ساعة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Form */}
          <div className="md:col-span-3 glass-card p-8 rounded-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-semibold mb-2 block">الاسم</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="اسمك الكامل"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">البريد الإلكتروني</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="email@example.com"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block">الرسالة</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="اكتب تفاصيل مشروعك هنا..."
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-primary px-6 py-3 rounded-lg font-bold text-primary-foreground hover:opacity-90 transition-opacity glow-border flex items-center justify-center gap-2"
              >
                <Send size={18} />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a href="tel:0985715537" className="glass-card p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors">
              <Phone size={20} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">الهاتف</p>
                <p className="text-sm font-semibold" dir="ltr">0985715537</p>
              </div>
            </a>
            <a href="https://wa.me/0985715537" target="_blank" rel="noreferrer" className="glass-card p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors">
              <Phone size={20} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">واتساب</p>
                <p className="text-sm font-semibold" dir="ltr">0985715537</p>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="glass-card p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors">
              <Instagram size={20} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">انستغرام</p>
                <p className="text-sm font-semibold">الملف الشخصي</p>
              </div>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="glass-card p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors">
              <Facebook size={20} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">فيسبوك</p>
                <p className="text-sm font-semibold">الصفحة الرسمية</p>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="glass-card p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors">
              <Linkedin size={20} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">لينكدإن</p>
                <p className="text-sm font-semibold">الملف الشخصي</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
