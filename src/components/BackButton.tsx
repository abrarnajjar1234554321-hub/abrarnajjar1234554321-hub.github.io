import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  to?: string;
  label?: string;
}

const BackButton = ({ to = "/", label = "العودة" }: BackButtonProps) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group mb-6"
    >
      <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        <ArrowRight size={18} className="group-hover:-translate-x-0.5 transition-transform" />
      </span>
      <span>{label}</span>
    </Link>
  );
};

export default BackButton;
