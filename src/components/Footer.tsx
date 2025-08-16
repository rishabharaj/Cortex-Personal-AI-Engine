import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// Replace placeholder href values with your real profile URLs
const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/rishabharaj', icon: <Github size={18} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishabharaj-sharma-57a7a8256', icon: <Linkedin size={18} /> },
  { label: 'Discord', href: 'https://discord.com/users/rishabharaj', icon: <MessageCircle size={18} /> },
];

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-border/40 bg-background/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-3 text-primary">Cortex</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your visual, private, AI-augmented second brain. Capture, connect, and create with clarity.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 tracking-wide text-foreground/80">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/how" className="hover:text-primary transition-colors">How it works</Link></li>
              <li><Link to="/why" className="hover:text-primary transition-colors">Why Cortex</Link></li>
              <li><Link to="/manage" className="hover:text-primary transition-colors">Manage</Link></li>
              <li><Link to="/search" className="hover:text-primary transition-colors">Search</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 tracking-wide text-foreground/80">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 tracking-wide text-foreground/80">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cortex. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
