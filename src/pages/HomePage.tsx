import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Bot, 
  Users, 
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

export function HomePage() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const strengthsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      icon: Code,
      title: t('strengths.programming.title'),
      description: t('strengths.programming.description'),
    },
    {
      icon: Palette,
      title: t('strengths.design.title'),
      description: t('strengths.design.description'),
    },
    {
      icon: TrendingUp,
      title: t('strengths.marketing.title'),
      description: t('strengths.marketing.description'),
    },
    {
      icon: Bot,
      title: t('strengths.ai.title'),
      description: t('strengths.ai.description'),
    },
    {
      icon: Users,
      title: t('strengths.hr.title'),
      description: t('strengths.hr.description'),
    },
  ];

  const projects = [
    {
      title: "AI Learning Platform",
      description: "Nền tảng học AI với hơn 10,000 học viên và tỷ lệ hoàn thành 85%",
      image: "/placeholder-project-1.jpg",
      tags: ["AI", "Education", "React", "Python"]
    },
    {
      title: "E-commerce Analytics",
      description: "Hệ thống phân tích hành vi khách hàng cho 500+ cửa hàng trực tuyến",
      image: "/placeholder-project-2.jpg", 
      tags: ["Analytics", "ML", "Dashboard", "API"]
    },
    {
      title: "Healthcare Management",
      description: "Ứng dụng quản lý bệnh viện được triển khai tại 50+ cơ sở y tế",
      image: "/placeholder-project-3.jpg",
      tags: ["Healthcare", "Management", "Mobile", "Cloud"]
    }
  ];

  const workStyleItems = t('workStyle.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 parallax-slow opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-parallax-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-parallax-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="animate-on-scroll opacity-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
              {t('hero.subtitle')}
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('hero.vision')}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 hover-lift shadow-elegant"
              >
                <NavLink to="/program/ninja-ai">
                  {t('hero.cta')}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 hover-lift"
              >
                <a href="#contact" className="flex items-center">
                  Liên hệ với tôi
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section 
        ref={strengthsRef}
        className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-subtle"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t('strengths.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <Card
                key={strength.title}
                className={cn(
                  "animate-on-scroll opacity-0 hover-lift card-gradient border-0 shadow-card",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <strength.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {strength.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t('projects.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('projects.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={cn(
                  "animate-on-scroll opacity-0 hover-lift overflow-hidden border-0 shadow-card",
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Style & Contact */}
      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Style */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t('workStyle.title')}
              </h2>
              <ul className="space-y-4 mb-8">
                {workStyleItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                {t('workStyle.inspiration')}
              </blockquote>
            </div>

            {/* Contact */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Liên hệ với tôi
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:kien@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kien@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}