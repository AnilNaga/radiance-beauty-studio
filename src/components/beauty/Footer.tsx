import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="bg-pink-900 text-pink-200 py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-pink-300" />
            <span className="text-xl font-semibold text-primary-foreground">Radiance</span>
          </div>
          <p className="text-sm text-pink-300/70 leading-relaxed">
            Premium beauty parlour offering bridal makeup, skincare, hair services, and complete beauty transformations.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "Gallery", to: "/gallery" },
              { label: "Membership", to: "/membership" },
              { label: "Gift Vouchers", to: "/gift-vouchers" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-primary-foreground transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Bridal Makeup", "Skin Care", "Hair Styling", "Nail Art"].map((s) => (
              <li key={s} className="text-pink-300/70">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-pink-300/70">
            <li>📍 Kochi, Kerala</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 info@radiancebeauty.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pink-700/30 mt-12 pt-8 text-center text-sm text-pink-300/50">
        <p>© 2026 Radiance Beauty Parlour. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
