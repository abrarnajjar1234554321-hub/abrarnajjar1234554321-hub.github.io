import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background grid-bg">
      <Navbar />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container text-center">
          <p className="gradient-text font-heading font-bold text-lg mb-2">DevAI</p>
          <p className="text-muted-foreground text-sm">
            © 2026 جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
