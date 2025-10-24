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
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
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
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-500 text-white px-4 py-2 text-base animate-pulse">
            🔥 Спецпредложение до конца месяца: -30% на первый год
          </Badge>
        </div>
        
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-white px-4 py-2 w-fit">
                ⚡ Более 10 000 компаний уже используют
              </Badge>
              <h1 className="text-5xl font-bold">
                <span className="text-accent">Онлайн платформа</span>
                <br/>
                <span className="text-success">дистанционного</span>
                <br/>
                <span className="text-success">обучения</span>
              </h1>
              <p className="text-xl text-gray-700">
                <strong>Окупаемость за 3 месяца.</strong> Сократите затраты на обучение на 67% и увеличьте вовлечённость сотрудников на 85%
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="DollarSign" className="text-success mt-1" size={24} />
                  <div>
                    <p className="font-bold text-success text-lg">Экономия до 4 млн ₽/год</p>
                    <p className="text-sm text-gray-600">не нужны аудитории, командировки и печать материалов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-success mt-1" size={24} />
                  <div>
                    <p className="font-bold text-success text-lg">Запуск за 24 часа</p>
                    <p className="text-sm text-gray-600">быстрая интеграция и миграция курсов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" className="text-success mt-1" size={24} />
                  <div>
                    <p className="font-bold text-success text-lg">+85% вовлечённость</p>
                    <p className="text-sm text-gray-600">геймификация и интерактивные курсы</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                  Получить демо бесплатно
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary px-8 py-6">
                  Смотреть видео
                  <Icon name="Play" size={20} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary/20">
                <Badge className="bg-red-500 text-white mb-4">🎁 Бесплатный тест-драйв 14 дней</Badge>
                
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

                <Button className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg rounded-xl mb-3">
                  НАЧАТЬ БЕСПЛАТНО
                </Button>
                <p className="text-xs text-center text-gray-500">Без кредитной карты • Полный доступ • Отменить в любой момент</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y">
        <div className="container">
          <p className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wide">Нам доверяют лидеры рынка</p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            <div className="text-2xl font-bold text-gray-400">Сбербанк</div>
            <div className="text-2xl font-bold text-gray-400">РЖД</div>
            <div className="text-2xl font-bold text-gray-400">Газпром</div>
            <div className="text-2xl font-bold text-gray-400">Ростелеком</div>
            <div className="text-2xl font-bold text-gray-400">МТС</div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">📊 Реальные результаты</Badge>
            <h2 className="text-4xl font-bold mb-4">Кейсы наших клиентов</h2>
            <p className="text-xl text-gray-600">Конкретные цифры эффективности</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="Building2" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Производственная компания</CardTitle>
                    <p className="text-sm text-gray-500">2500 сотрудников</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Экономия на обучении</span>
                    <span className="font-bold text-success text-lg">-67%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Время адаптации новичков</span>
                    <span className="font-bold text-success text-lg">-45%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Окупаемость</span>
                    <span className="font-bold text-success text-lg">3 мес</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 italic">"Перевели 2500 сотрудников на дистанционное обучение. Сэкономили 3.8 млн рублей в первый год только на командировках."</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="GraduationCap" className="text-accent" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Образовательный центр</CardTitle>
                    <p className="text-sm text-gray-500">5000 студентов</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm">Рост студентов</span>
                    <span className="font-bold text-accent text-lg">+320%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm">Завершаемость курсов</span>
                    <span className="font-bold text-accent text-lg">89%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm">Прибыль</span>
                    <span className="font-bold text-accent text-lg">+280%</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 italic">"Масштабировали бизнес с 1500 до 5000 студентов без найма дополнительных преподавателей."</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Store" className="text-success" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ритейл сеть</CardTitle>
                    <p className="text-sm text-gray-500">8000 сотрудников</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Скорость обучения</span>
                    <span className="font-bold text-success text-lg">-60%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Средний чек продаж</span>
                    <span className="font-bold text-success text-lg">+28%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">ROI за год</span>
                    <span className="font-bold text-success text-lg">450%</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 italic">"Обучили 8000 продавцов новым техникам продаж за 2 недели. Средний чек вырос на 28%."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">⭐ Отзывы клиентов</Badge>
            <h2 className="text-4xl font-bold">Что говорят о нас</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Елена Сергеева',
                role: 'Директор по персоналу',
                company: 'ТехноПром',
                image: '👩‍💼',
                text: 'Платформа окупилась за 4 месяца! Больше не тратим миллионы на командировки преподавателей. Все курсы онлайн, сотрудники довольны.',
                rating: 5
              },
              {
                name: 'Дмитрий Волков',
                role: 'Руководитель учебного центра',
                company: 'Энергосбыт',
                image: '👨‍💼',
                text: 'Внедрили за 2 дня. Техподдержка на высоте — отвечают в течение часа. Особенно нравится система аналитики, видим прогресс каждого сотрудника.',
                rating: 5
              },
              {
                name: 'Ольга Кузнецова',
                role: 'Основатель онлайн-школы',
                company: 'SmartEdu',
                image: '👩‍🏫',
                text: 'Масштабировали с 300 до 2000 студентов благодаря автоматизации. Платформа полностью заменила 5 разных сервисов. Экономия времени и денег.',
                rating: 5
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{testimonial.image}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white text-accent px-4 py-2">⏰ Ограниченное предложение</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Получите 3 месяца бесплатно при оплате годового тарифа</h2>
            <p className="text-xl opacity-90">+ Бесплатная миграция всех курсов + Персональный онбординг + Приоритетная поддержка</p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                Забронировать скидку
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6">
                Узнать подробнее
              </Button>
            </div>
            <p className="text-sm opacity-75">⏳ Предложение действует до конца месяца • Осталось 7 дней</p>
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">🎥 Демо платформы</Badge>
              <h2 className="text-4xl font-bold mb-4">Посмотрите, как это работает</h2>
              <p className="text-xl text-gray-600">2-минутное видео о возможностях платформы</p>
            </div>

            <div className="relative aspect-video bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/30 transition-all"></div>
              <Button size="lg" className="relative bg-white text-primary hover:bg-gray-100 rounded-full w-20 h-20 p-0">
                <Icon name="Play" size={40} />
              </Button>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-semibold mb-1">Обзор платформы i-SDO</p>
                <p className="text-xs opacity-75">2:15 мин • 10К просмотров</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: 'Layout', text: 'Интуитивный интерфейс' },
                { icon: 'Zap', text: 'Быстрая загрузка курсов' },
                { icon: 'BarChart', text: 'Детальная аналитика' },
                { icon: 'Smartphone', text: 'Мобильное приложение' },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-lg border-2">
                  <Icon name={item.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">⚙️ Возможности</Badge>
            <h2 className="text-4xl font-bold mb-4">Всё необходимое в одной платформе</h2>
            <p className="text-xl text-gray-600">Замените 7+ сервисов одним решением</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'BookMarked', title: 'Конструктор курсов', desc: 'Создавайте интерактивные курсы за 10 минут без программирования', badge: '🔥 Популярно' },
              { icon: 'Users', title: 'Управление группами', desc: 'Автоматическое распределение по группам и назначение курсов' },
              { icon: 'Video', title: 'Вебинары HD', desc: 'Встроенная система видеоконференций до 1000 участников' },
              { icon: 'ClipboardList', title: 'Умное тестирование', desc: 'AI-проверка эссе и автоматическая генерация вопросов', badge: '✨ AI' },
              { icon: 'BarChart3', title: 'Аналитика в реальном времени', desc: 'Дашборды, отчёты, прогнозирование результатов' },
              { icon: 'Award', title: 'Геймификация', desc: 'Рейтинги, бейджи, достижения — увеличение вовлечённости на 85%', badge: '🎮 Новое' },
            ].map((feature, i) => (
              <Card key={i} className="border-2 hover:border-primary transition-all hover:shadow-lg group">
                <CardHeader>
                  {feature.badge && (
                    <Badge className="w-fit mb-2 bg-accent text-white">{feature.badge}</Badge>
                  )}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-all">
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

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">💰 Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены без скрытых платежей</h2>
            <p className="text-xl text-gray-600">Выберите тариф и начните экономить уже сегодня</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: 'Стартовый', 
                price: '4 900', 
                oldPrice: '7 000',
                period: '/ месяц',
                users: 'До 50 пользователей', 
                features: [
                  { text: '5 курсов', included: true },
                  { text: 'Базовая аналитика', included: true },
                  { text: 'Email поддержка', included: true },
                  { text: 'Мобильное приложение', included: true },
                  { text: 'Вебинары', included: false },
                  { text: 'AI-функции', included: false }
                ],
                cta: 'Попробовать 14 дней',
                color: 'border-gray-200'
              },
              { 
                name: 'Бизнес', 
                price: '14 900', 
                oldPrice: '21 000',
                period: '/ месяц',
                users: 'До 200 пользователей', 
                features: [
                  { text: 'Безлимитные курсы', included: true },
                  { text: 'Расширенная аналитика', included: true },
                  { text: 'Приоритетная поддержка 24/7', included: true },
                  { text: 'Вебинары до 100 человек', included: true },
                  { text: 'AI-ассистент', included: true },
                  { text: 'API доступ', included: true }
                ],
                popular: true,
                cta: 'Начать сейчас',
                color: 'border-primary',
                badge: '🔥 Хит продаж'
              },
              { 
                name: 'Корпоративный', 
                price: 'От 39 900', 
                period: '/ месяц',
                users: 'Неограниченно', 
                features: [
                  { text: 'Всё из тарифа Бизнес', included: true },
                  { text: 'Персональный менеджер', included: true },
                  { text: 'Индивидуальная настройка', included: true },
                  { text: 'SLA 99.9%', included: true },
                  { text: 'Интеграции (1C, SAP)', included: true },
                  { text: 'On-premise решение', included: true }
                ],
                cta: 'Связаться с нами',
                color: 'border-gray-200'
              },
            ].map((plan, i) => (
              <Card key={i} className={`relative border-2 ${plan.color} ${plan.popular ? 'shadow-2xl scale-105' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-red-500 text-white px-4 py-2 text-sm">{plan.badge}</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-sm text-gray-600 mb-4">{plan.users}</div>
                  <div className="mb-4">
                    {plan.oldPrice && (
                      <div className="text-lg text-gray-400 line-through">{plan.oldPrice} ₽</div>
                    )}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    </div>
                  </div>
                  {plan.oldPrice && (
                    <Badge className="bg-green-100 text-success mx-auto">💰 Экономия 30%</Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Icon 
                          name={feature.included ? 'Check' : 'X'} 
                          size={18} 
                          className={`${feature.included ? 'text-success' : 'text-gray-300'} flex-shrink-0`} 
                        />
                        <span className={`text-sm ${!feature.included && 'text-gray-400'}`}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-success hover:bg-success/90'} text-white`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                  <p className="text-xs text-center text-gray-500">Без обязательств • Отменить в любой момент</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Нужно больше пользователей?</p>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary">
              Рассчитать индивидуальный тариф
              <Icon name="Calculator" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">❓ FAQ</Badge>
            <h2 className="text-4xl font-bold">Часто задаваемые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: 'Как быстро можно начать работу с платформой?', 
                a: 'Регистрация занимает 2 минуты. Сразу после регистрации вы получаете доступ к платформе и можете загрузить первый курс. Мы также предоставляем бесплатную помощь в миграции ваших курсов — это занимает 1-2 дня.' 
              },
              { 
                q: 'Нужно ли устанавливать дополнительное ПО?', 
                a: 'Нет, всё работает в браузере. Платформа облачная, не требует установки и настройки серверов. Мобильные приложения для iOS и Android доступны для скачивания из App Store и Google Play.' 
              },
              { 
                q: 'Можно ли перенести курсы из другой LMS?', 
                a: 'Да, мы бесплатно поможем перенести курсы из любой системы. Поддерживаем импорт SCORM, xAPI, PDF, видео и других форматов. Миграция обычно занимает 1-3 дня.' 
              },
              { 
                q: 'Какая техподдержка включена в тариф?', 
                a: 'Стартовый тариф — email поддержка (ответ в течение 24 часов). Бизнес и Корпоративный — приоритетная поддержка 24/7 через чат, email и телефон (ответ в течение 1 часа). Корпоративный тариф включает персонального менеджера.' 
              },
              { 
                q: 'Безопасны ли данные в облаке?', 
                a: 'Да. Мы используем шифрование данных по стандарту AES-256, регулярное резервное копирование, защиту от DDoS. Наши серверы находятся в сертифицированных дата-центрах уровня Tier III. Соответствуем требованиям 152-ФЗ о персональных данных.' 
              },
              { 
                q: 'Можно ли отменить подписку в любой момент?', 
                a: 'Да, вы можете отменить подписку в любой момент из личного кабинета. Возврат средств за неиспользованный период осуществляется в течение 5 рабочих дней. Никаких штрафов за досрочное расторжение нет.' 
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-lg">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-blue-50 rounded-xl border-2 border-primary/20">
            <h3 className="text-xl font-bold mb-2">Не нашли ответ на свой вопрос?</h3>
            <p className="text-gray-600 mb-4">Свяжитесь с нами, и мы ответим в течение 15 минут</p>
            <div className="flex gap-3 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в чат
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white text-primary px-4 py-2 mb-6">🚀 Начните сегодня</Badge>
              <h2 className="text-4xl font-bold mb-6">Готовы трансформировать обучение в вашей компании?</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg">Бесплатный тест-драйв 14 дней</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg">Персональная демонстрация</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg">Помощь с миграцией курсов</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg">Расчёт ROI для вашей компании</span>
                </li>
              </ul>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Получить демо бесплатно</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Ваше имя *</label>
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
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Рабочий Email *</label>
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
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Сколько сотрудников планируете обучать?</label>
                    <Textarea
                      id="message"
                      placeholder="Например: 500 сотрудников, нужны курсы по продажам и охране труда"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-white text-base">
                    Получить демо за 15 минут
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                  <p className="text-xs text-center text-gray-500">Без спама • Ответим в течение 15 минут • Никаких обязательств</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex flex-col border-2 border-primary rounded px-3 py-1">
                  <span className="text-xl font-bold text-primary leading-none">i</span>
                </div>
                <div className="flex flex-col text-xs leading-tight uppercase text-primary font-semibold">
                  <span>Интеллектуальная</span>
                  <span>система подготовки</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Современная LMS-платформа для эффективного корпоративного и онлайн-обучения</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#features" className="hover:text-primary">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary">Тарифы</a></li>
                <li><a href="#cases" className="hover:text-primary">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary">Интеграции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-primary">О нас</a></li>
                <li><a href="#" className="hover:text-primary">Блог</a></li>
                <li><a href="#" className="hover:text-primary">Карьера</a></li>
                <li><a href="#contact" className="hover:text-primary">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
                <li><a href="#" className="hover:text-primary">База знаний</a></li>
                <li><a href="#" className="hover:text-primary">+7 (495) 123-45-67</a></li>
                <li><a href="#" className="hover:text-primary">info@i-sdo.ru</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t">
            <div className="text-sm text-gray-600">
              © 2024 i-SDO. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary">Условия использования</a>
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
