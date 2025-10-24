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
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col border-2 border-primary rounded px-3 py-1">
              <span className="text-2xl font-bold text-primary leading-none">i</span>
            </div>
            <div className="flex flex-col text-sm leading-tight uppercase text-primary font-semibold">
              <span>Интеллектуальная</span>
              <span>система</span>
              <span>подготовки</span>
            </div>
          </div>
          <nav className="hidden lg:flex gap-8 items-center">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О платформе</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Как работает платформа</a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Курсы платформы</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Часто задаваемые вопросы</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" className="border-success text-success hover:bg-success hover:text-white rounded-full">
              Контакты<br/>отдел продаж
            </Button>
            <Button className="bg-success hover:bg-success/90 text-white rounded-full">
              Личный кабинет ▼
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-white via-purple-50 to-teal-50 py-16 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl font-bold">
                <span className="text-accent">Онлайн платформа</span>
                <br/>
                <span className="text-success">дистанционного</span>
                <br/>
                <span className="text-success">обучения</span>
              </h1>
              <p className="text-lg text-gray-700">
                <strong>Интеллектуальная система подготовки</strong> – это цифровая платформа для организации обучения и тренингов
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="DollarSign" className="text-success mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-success">Снижение затрат</p>
                    <p className="text-sm text-gray-600">не нужны аудитории и печать материалов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="RefreshCw" className="text-success mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-success">Актуальные курсы</p>
                    <p className="text-sm text-gray-600">курсы регулярно обновляются</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-success mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-success">Масштабируемость</p>
                    <p className="text-sm text-gray-600">привлекайте клиентов из любого региона</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex flex-col border-2 border-primary rounded-lg px-6 py-4 mb-6 w-fit mx-auto">
                  <span className="text-4xl font-bold text-primary leading-none mb-1">i</span>
                  <div className="text-xs leading-tight uppercase text-primary font-semibold">
                    <div>Интеллектуальная</div>
                    <div>система</div>
                    <div>подготовки</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-2 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon name="Monitor" size={32} className="text-primary" />
                    </div>
                    <p className="text-xs text-gray-600">Онлайн обучение</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-2 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon name="ClipboardCheck" size={32} className="text-primary" />
                    </div>
                    <p className="text-xs text-gray-600">Тестирование</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-2 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon name="Presentation" size={32} className="text-primary" />
                    </div>
                    <p className="text-xs text-gray-600">Вебинары</p>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg rounded-xl">
                  ПОДКЛЮЧИТЬ СЕЙЧАС
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container">
          <div className="flex justify-center gap-12 mb-12">
            {[
              { icon: 'Grid3x3', label: 'О платформе' },
              { icon: 'CircuitBoard', label: 'Как работает\nплатформа' },
              { icon: 'BookOpen', label: 'Курсы\nплатформы' },
              { icon: 'HelpCircle', label: 'Часто задаваемые\nвопросы' },
            ].map((item, i) => (
              <a
                key={i}
                href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>
                <span className="text-xs text-center font-medium whitespace-pre-line">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">О платформе i-SDO</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              i-SDO — это современная система дистанционного обучения, которая помогает организациям и образовательным учреждениям 
              эффективно управлять процессом обучения. Платформа объединяет все необходимые инструменты для создания, проведения 
              и контроля образовательных программ.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Возможности платформы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'BookMarked', title: 'Конструктор курсов', desc: 'Создавайте интерактивные курсы с видео, текстом и заданиями' },
              { icon: 'Users', title: 'Управление группами', desc: 'Организуйте студентов по группам и назначайте курсы' },
              { icon: 'Video', title: 'Вебинары и трансляции', desc: 'Проводите онлайн-занятия в режиме реального времени' },
              { icon: 'ClipboardList', title: 'Тестирование', desc: 'Автоматическая проверка знаний с подробной статистикой' },
              { icon: 'BarChart3', title: 'Аналитика', desc: 'Отслеживайте прогресс и успеваемость учащихся' },
              { icon: 'Award', title: 'Сертификаты', desc: 'Автоматическое создание сертификатов о прохождении курсов' },
            ].map((feature, i) => (
              <Card key={i} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={feature.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Тарифные планы</h2>
          <p className="text-center text-gray-600 mb-12">Выберите оптимальный вариант для вашей организации</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'Стартовый', 
                price: '4 900', 
                period: '/ месяц',
                users: 'До 50 пользователей', 
                features: ['5 курсов', 'Базовая аналитика', 'Email поддержка', 'Мобильное приложение'],
                color: 'border-gray-200'
              },
              { 
                name: 'Бизнес', 
                price: '14 900', 
                period: '/ месяц',
                users: 'До 200 пользователей', 
                features: ['Безлимитные курсы', 'Расширенная аналитика', 'Приоритетная поддержка', 'Вебинары', 'API доступ'], 
                popular: true,
                color: 'border-primary'
              },
              { 
                name: 'Корпоративный', 
                price: 'Индивидуально', 
                period: '',
                users: 'Неограниченно', 
                features: ['Всё из тарифа Бизнес', 'Персональный менеджер', 'Индивидуальная настройка', 'SLA 99.9%', 'Интеграции'],
                color: 'border-gray-200'
              },
            ].map((plan, i) => (
              <Card key={i} className={`relative border-2 ${plan.color} ${plan.popular ? 'shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-sm text-gray-600 mb-4">{plan.users}</div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-success hover:bg-success/90'} text-white`}
                  >
                    {plan.price === 'Индивидуально' ? 'Связаться' : 'Подключить'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: 'Как быстро можно начать работу с платформой?', 
                a: 'Регистрация и настройка занимают не более 15 минут. После создания аккаунта вы сразу получите доступ ко всем функциям платформы и сможете загрузить первый курс.' 
              },
              { 
                q: 'Нужно ли устанавливать дополнительное ПО?', 
                a: 'Нет, платформа работает полностью в браузере. Для проведения вебинаров также не требуется установка программ — всё работает через веб-интерфейс.' 
              },
              { 
                q: 'Какие форматы учебных материалов поддерживаются?', 
                a: 'Платформа поддерживает видео (MP4, WebM), аудио, PDF документы, презентации PowerPoint, интерактивные H5P-модули, SCORM-пакеты и текстовые материалы с форматированием.' 
              },
              { 
                q: 'Можно ли интегрировать платформу с корпоративными системами?', 
                a: 'Да, доступны интеграции через API с популярными CRM, HR-системами, системами единого входа (SSO), сервисами аналитики. Для корпоративного тарифа возможна разработка индивидуальных интеграций.' 
              },
              { 
                q: 'Есть ли пробный период?', 
                a: 'Да, мы предоставляем 14-дневный бесплатный тестовый период с полным доступом ко всем функциям платформы. Кредитная карта для активации не требуется.' 
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-lg">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-gray-600">
              Заполните форму, и наш специалист свяжется с вами в течение часа
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold">Ваше имя *</label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">Email *</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@company.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">Сообщение</label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших задачах..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-base">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="text-center p-5 bg-gray-50 rounded-lg">
              <Icon name="Mail" size={28} className="mx-auto mb-3 text-primary" />
              <div className="font-semibold mb-1">Email</div>
              <div className="text-sm text-gray-600">info@i-sdo.ru</div>
            </div>
            <div className="text-center p-5 bg-gray-50 rounded-lg">
              <Icon name="Phone" size={28} className="mx-auto mb-3 text-primary" />
              <div className="font-semibold mb-1">Телефон</div>
              <div className="text-sm text-gray-600">+7 (495) 123-45-67</div>
            </div>
            <div className="text-center p-5 bg-gray-50 rounded-lg">
              <Icon name="Clock" size={28} className="mx-auto mb-3 text-primary" />
              <div className="font-semibold mb-1">Режим работы</div>
              <div className="text-sm text-gray-600">Пн-Пт: 9:00 - 18:00</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-10 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col border-2 border-primary rounded px-3 py-1">
                <span className="text-xl font-bold text-primary leading-none">i</span>
              </div>
              <div className="flex flex-col text-xs leading-tight uppercase text-primary font-semibold">
                <span>Интеллектуальная</span>
                <span>система подготовки</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 i-SDO. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Mail" size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Phone" size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="MessageSquare" size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
