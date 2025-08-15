import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Target,
  BookOpen,
  Calendar,
  Star,
  Users,
  Award,
  FileText,
  ChevronRight,
  CheckCircle,
  Clock,
  DollarSign,
  Briefcase
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function NinjaAIProgram() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Đơn ứng tuyển đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn trong 24h.');
    setFormData({ name: '', email: '', phone: '', motivation: '' });
    setIsSubmitting(false);
  };

  const methods = t('program.method.items', { returnObjects: true }) as string[];
  const highlights = t('program.highlights.items', { returnObjects: true }) as string[];
  const targets = t('program.target.items', { returnObjects: true }) as string[];
  const outcomes = t('program.outcome.items', { returnObjects: true }) as string[];

  const roadmapItems = [
    { month: 1, title: t('program.roadmap.month1'), color: 'bg-red-500' },
    { month: 2, title: t('program.roadmap.month2'), color: 'bg-orange-500' },
    { month: 3, title: t('program.roadmap.month3'), color: 'bg-yellow-500' },
    { month: 4, title: t('program.roadmap.month4'), color: 'bg-green-500' },
    { month: 5, title: t('program.roadmap.month5'), color: 'bg-blue-500' },
    { month: 6, title: t('program.roadmap.month6'), color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 parallax-slow opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-parallax-float"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="animate-on-scroll opacity-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {t('program.title')}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
              {t('program.subtitle')}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 hover-lift shadow-elegant"
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ứng tuyển ngay
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 hover-lift"
                onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Tìm hiểu chi tiết
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Goal */}
      <section id="details" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl">
          <Card className="animate-on-scroll opacity-0 border-0 shadow-card card-gradient">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold">
                {t('program.goal.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                {t('program.goal.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Method & Highlights */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Method */}
            <Card className="animate-on-scroll opacity-0 border-0 shadow-card hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">
                    {t('program.method.title')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {methods.map((method, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{method}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="animate-on-scroll opacity-0 border-0 shadow-card hover-lift" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">
                    {t('program.highlights.title')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              {t('program.roadmap.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapItems.map((item, index) => (
              <Card
                key={item.month}
                className={cn(
                  "animate-on-scroll opacity-0 border-0 shadow-card hover-lift overflow-hidden",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={cn("h-2", item.color)}></div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold", item.color)}>
                      {item.month}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Tháng {item.month}
                    </span>
                  </div>
                  <h3 className="font-semibold text-card-foreground text-lg">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target & Outcome */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Target */}
            <Card className="animate-on-scroll opacity-0 border-0 shadow-card hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">
                    {t('program.target.title')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {targets.map((target, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{target}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Outcome */}
            <Card className="animate-on-scroll opacity-0 border-0 shadow-card hover-lift" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">
                    {t('program.outcome.title')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="mx-auto max-w-4xl">
          <Card className="animate-on-scroll opacity-0 border-0 shadow-card">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold">
                {t('program.apply.title')}
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                {t('program.apply.description')}
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {t('program.apply.form.name')} *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t('program.apply.form.email')} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {t('program.apply.form.phone')} *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="motivation">
                    Thư động lực *
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                    placeholder="Chia sẻ về động lực, kinh nghiệm và mục tiêu của bạn khi tham gia chương trình..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg py-6 hover-lift shadow-elegant"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 h-5 w-5 animate-spin" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      {t('program.apply.form.submit')}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}