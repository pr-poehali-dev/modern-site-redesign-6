import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Icon name="GraduationCap" size={24} />
            </div>
            <span className="text-xl font-bold">i-SDO</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Войти</Button>
        </div>
      </header>

      <section className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <Badge className="w-fit" variant="outline">
              Образовательная платформа нового поколения
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Инновационная система дистанционного обучения
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Создавайте, управляйте и масштабируйте образовательные процессы с помощью современных технологий и AI
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base">
                Начать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Демо-версия
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Активных пользователей</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">98%</div>
                <div className="text-sm text-muted-foreground">Удовлетворённость</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/20 to-success/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card border rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon name="BookOpen" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Курсы и программы</div>
                    <div className="text-sm text-muted-foreground">Безграничные возможности</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-success/10 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success text-success-foreground">
                    <Icon name="Users" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Управление группами</div>
                    <div className="text-sm text-muted-foreground">Эффективная организация</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon name="BarChart3" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Аналитика и отчёты</div>
                    <div className="text-sm text-muted-foreground">Данные в реальном времени</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container py-24 bg-secondary/50">
        <div className="text-center space-y-4 mb-16">
          <Badge className="w-fit mx-auto" variant="outline">Возможности платформы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">Всё необходимое для дистанционного обучения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный набор инструментов для создания современной образовательной среды
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: 'Sparkles', title: 'AI-ассистент', desc: 'Умный помощник для преподавателей и студентов', color: 'primary' },
            { icon: 'Video', title: 'Вебинары и трансляции', desc: 'Встроенная система видеоконференций', color: 'success' },
            { icon: 'FileText', title: 'Конструктор курсов', desc: 'Интуитивное создание учебных материалов', color: 'accent' },
            { icon: 'CheckCircle', title: 'Тестирование', desc: 'Автоматическая проверка знаний', color: 'primary' },
            { icon: 'Trophy', title: 'Геймификация', desc: 'Мотивация через достижения и рейтинги', color: 'success' },
            { icon: 'Shield', title: 'Безопасность', desc: 'Надёжная защита данных и контента', color: 'accent' },
          ].map((feature, i) => (
            <Card key={i} className="hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardHeader>
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${feature.color}/10 text-${feature.color} mb-4`}>
                  <Icon name={feature.icon as any} size={24} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="container py-24">
        <div className="text-center space-y-4 mb-16">
          <Badge className="w-fit mx-auto" variant="outline">Тарифы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">Выберите подходящий план</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Гибкие тарифы для любых задач — от небольших команд до крупных организаций
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Базовый', price: '990', users: 'До 50 пользователей', features: ['5 курсов', 'Базовая аналитика', 'Email поддержка', 'Мобильное приложение'] },
            { name: 'Профессиональный', price: '2990', users: 'До 200 пользователей', features: ['Безлимитные курсы', 'Расширенная аналитика', 'Приоритетная поддержка', 'AI-ассистент', 'Вебинары'], popular: true },
            { name: 'Корпоративный', price: 'По запросу', users: 'Неограниченно', features: ['Всё из Профессионального', 'Персональный менеджер', 'Индивидуальная настройка', 'SLA 99.9%', 'Интеграции'] },
          ].map((plan, i) => (
            <Card key={i} className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.users}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'По запросу' && <span className="text-muted-foreground"> ₽/мес</span>}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.price === 'По запросу' ? 'Связаться с нами' : 'Начать'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="container py-24 bg-secondary/50">
        <div className="text-center space-y-4 mb-16">
          <Badge className="w-fit mx-auto" variant="outline">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">Часто задаваемые вопросы</h2>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {[
            { q: 'Как быстро можно начать работу?', a: 'Регистрация занимает 2 минуты. После подтверждения email вы сразу получите доступ к платформе и сможете создать свой первый курс.' },
            { q: 'Есть ли мобильное приложение?', a: 'Да, у нас есть приложения для iOS и Android. Студенты могут учиться с любого устройства, а преподаватели — управлять курсами в любое время.' },
            { q: 'Какие форматы контента поддерживаются?', a: 'Платформа поддерживает видео, аудио, PDF, презентации, интерактивные задания, тесты, SCORM-пакеты и многое другое.' },
            { q: 'Можно ли интегрировать с другими системами?', a: 'Да, мы предоставляем API и готовые интеграции с популярными системами: CRM, HR-платформы, системы аналитики и другие.' },
            { q: 'Как организована техподдержка?', a: 'Базовый тариф — email поддержка (ответ в течение 24 часов). Профессиональный и Корпоративный — приоритетная поддержка с персональным менеджером.' },
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="contact" className="container py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="w-fit mx-auto" variant="outline">Свяжитесь с нами</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Остались вопросы?</h2>
            <p className="text-xl text-muted-foreground">
              Напишите нам, и мы ответим в ближайшее время
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Имя</label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <Icon name="Mail" size={24} className="mx-auto mb-3 text-primary" />
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">info@i-sdo.ru</div>
            </div>
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <Icon name="Phone" size={24} className="mx-auto mb-3 text-primary" />
              <div className="font-semibold">Телефон</div>
              <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
            </div>
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <Icon name="MapPin" size={24} className="mx-auto mb-3 text-primary" />
              <div className="font-semibold">Адрес</div>
              <div className="text-sm text-muted-foreground">Москва, Россия</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon name="GraduationCap" size={18} />
              </div>
              <span className="font-bold">i-SDO</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 i-SDO. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
