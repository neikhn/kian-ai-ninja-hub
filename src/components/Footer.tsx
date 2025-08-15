import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Heart
} from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg text-foreground">
                Hoàng Kiên
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t('footer.aboutMe')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/program/ninja-ai" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t('footer.ninjaProgram')}
                </NavLink>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/privacy-policy" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t('footer.privacyPolicy')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/terms-of-use" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t('footer.termsOfUse')}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.connect')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="mailto:kien@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  kien@example.com
                </a>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              {t('footer.copyright')}
            </p>
            
            <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-4 md:mt-0">
              <span>{t('footer.madeWith')}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>{t('footer.inVietnam')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}