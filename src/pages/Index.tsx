import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import ChatWidget from '@/components/ChatWidget';

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
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#stats" className="text-sm font-medium hover:text-primary transition-colors">Результаты</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" className="border-success text-success hover:bg-success hover:text-white rounded-full">
              Контакты<br/>отдел продаж
            </Button>
            <Button className="bg-success hover:bg-success/90 text-white rounded-full">
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-white via-purple-50 to-teal-50 py-16 relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-500 text-white px-4 py-2 text-base animate-pulse">
            90% успешно сдают экзамен с первой попытки
          </Badge>
        </div>
        
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-white px-4 py-2 w-fit">
                Подготовка к аттестации Ростехнадзора
              </Badge>
              <h1 className="text-5xl font-bold">
                <span className="text-accent">Интеллектуальная</span>
                <br/>
                <span className="text-success">система подготовки</span>
                <br/>
                <span className="text-success">к экзаменам РТН</span>
              </h1>
              <p className="text-xl text-gray-700">
                <strong>i-SDO</strong> - эффективная платформа для подготовки к экзаменам Ростехнадзора для учебных центров, организаций эксплуатирующих ОПО и гидротехнические сооружения, субъектов энергетики
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-success mt-1" size={24} />
                  <div>
                    <p className="font-bold text-success text-lg">Подготовка от 2 часов</p>
                    <p className="text-sm text-gray-600">за область аттестации</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-success mt-1" size={24} />
                  <div>
                    <p className="font-bold text-success text-lg">100% соответствие экзамену</p>
                    <p className="text-sm text-gray-600">процедура идентична Ростехнадзору</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Brain" className="text-success mt-1" size={24} />
                  <div>
                    <p className="font-bold text-success text-lg">Адаптивный тренинг</p>
                    <p className="text-sm text-gray-600">систематизирует знания</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                  Получить доступ
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary px-8 py-6">
                  Смотреть демо
                  <Icon name="Play" size={20} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary/20">
                <Badge className="bg-red-500 text-white mb-4">60 дней на подготовку</Badge>
                
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
                      <Icon name="FileCheck" size={32} className="text-primary" />
                    </div>
                    <p className="text-xs text-gray-600">Тестирование</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-2 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon name="Brain" size={32} className="text-primary" />
                    </div>
                    <p className="text-xs text-gray-600">Адаптивный тренинг</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-2 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <p className="text-xs text-gray-600">Аттестация</p>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg rounded-xl mb-3">
                  НАЧАТЬ ПОДГОТОВКУ
                </Button>
                <p className="text-xs text-center text-gray-500">90% успешно сдают с первой попытки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-12 bg-white border-y">
        <div className="container">
          <p className="text-center text-gray-600 mb-8 text-sm uppercase tracking-wide">Результаты наших клиентов</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200">
              <div className="text-5xl font-bold text-success mb-2">90%</div>
              <p className="text-gray-700 font-semibold">Успешно проходят аттестацию</p>
              <p className="text-sm text-gray-600 mt-1">с первой попытки</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200">
              <div className="text-5xl font-bold text-primary mb-2">60</div>
              <p className="text-gray-700 font-semibold">Дней на подготовку</p>
              <p className="text-sm text-gray-600 mt-1">полный доступ к системе</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Соответствие экзамену</p>
              <p className="text-sm text-gray-600 mt-1">Ростехнадзора</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">О платформе</Badge>
            <h2 className="text-4xl font-bold mb-4">Для кого наша платформа</h2>
            <p className="text-xl text-gray-600">Эффективная подготовка к аттестации Ростехнадзора</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="GraduationCap" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Учебные центры</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Комплексное решение для подготовки специалистов к экзаменам Ростехнадзора с полным контролем процесса обучения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="Factory" className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-lg">Организации эксплуатирующие ОПО</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Подготовка сотрудников к аттестации по промышленной безопасности и эксплуатации опасных производственных объектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Zap" className="text-success" size={24} />
                  </div>
                  <CardTitle className="text-lg">Субъекты энергетики</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Специализированная подготовка к аттестации в области энергетики и гидротехнических сооружений
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Преимущества</Badge>
            <h2 className="text-4xl font-bold mb-4">Почему выбирают i-SDO</h2>
            <p className="text-xl text-gray-600">Ключевые преимущества платформы</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: 'Clock', 
                title: 'Экономит время', 
                desc: 'Эффективная система подготовки - от 2 часов за область аттестации',
                badge: 'Быстро'
              },
              { 
                icon: 'Server', 
                title: 'Не требуется серверов', 
                desc: 'Облачное решение - не нужны ИТ специалисты и дорогостоящая инфраструктура'
              },
              { 
                icon: 'UserCheck', 
                title: 'Персональный менеджер', 
                desc: 'Индивидуальное сопровождение на всех этапах использования платформы'
              },
              { 
                icon: 'Headphones', 
                title: 'Круглосуточная техподдержка', 
                desc: 'Поддержка 24/7 - всегда готовы помочь в решении любых вопросов',
                badge: '24/7'
              },
              { 
                icon: 'CheckCircle', 
                title: 'Процедура экзамена идентична РТН', 
                desc: '100% соответствие формату и содержанию экзаменов Ростехнадзора'
              },
              { 
                icon: 'Brain', 
                title: 'Адаптивный тренинг', 
                desc: 'Интеллектуальная система систематизирует знания и выявляет слабые места',
                badge: 'AI'
              },
              { 
                icon: 'Palette', 
                title: 'Брендирование личного кабинета', 
                desc: 'Настройка интерфейса под ваш корпоративный стиль и логотип'
              },
              { 
                icon: 'Globe', 
                title: 'Размещение на вашем домене', 
                desc: 'Возможность развертывания платформы на собственном домене организации'
              },
              { 
                icon: 'Target', 
                title: 'Подготовка от 2 часов', 
                desc: 'Минимальное время подготовки за область аттестации при максимальной эффективности'
              },
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

      <section className="py-16 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white text-accent px-4 py-2">Результаты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">90% успешно проходят аттестацию с первой попытки</h2>
            <p className="text-xl opacity-90">60 дней полного доступа к системе подготовки + 100% соответствие экзамену Ростехнадзора</p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                Начать подготовку
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите подходящий тариф</h2>
            <p className="text-xl text-gray-600">Гибкие условия для организаций любого масштаба</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: 'Базовый', 
                price: 'По запросу', 
                period: '',
                users: 'Для учебных центров', 
                features: [
                  { text: 'Доступ к базе вопросов РТН', included: true },
                  { text: 'Адаптивный тренинг', included: true },
                  { text: 'Техподдержка 24/7', included: true },
                  { text: 'Мобильная версия', included: true },
                  { text: 'Персональный менеджер', included: false },
                  { text: 'Брендирование', included: false }
                ],
                cta: 'Оставить заявку',
                color: 'border-gray-200'
              },
              { 
                name: 'Профессиональный', 
                price: 'По запросу',
                period: '',
                users: 'Для организаций эксплуатирующих ОПО', 
                features: [
                  { text: 'Все из тарифа Базовый', included: true },
                  { text: 'Персональный менеджер', included: true },
                  { text: 'Приоритетная поддержка', included: true },
                  { text: 'Детальная аналитика', included: true },
                  { text: 'Брендирование кабинета', included: true },
                  { text: 'API интеграция', included: true }
                ],
                popular: true,
                cta: 'Оставить заявку',
                color: 'border-primary',
                badge: 'Популярный'
              },
              { 
                name: 'Корпоративный', 
                price: 'По запросу', 
                period: '',
                users: 'Для субъектов энергетики', 
                features: [
                  { text: 'Все из тарифа Профессиональный', included: true },
                  { text: 'Размещение на вашем домене', included: true },
                  { text: 'Индивидуальная настройка', included: true },
                  { text: 'SLA 99.9%', included: true },
                  { text: 'Обучение администраторов', included: true },
                  { text: 'Выделенный сервер', included: true }
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
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
                    </div>
                  </div>
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
                  <p className="text-xs text-center text-gray-500">Персональная консультация по тарифам</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Нужно индивидуальное решение?</p>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary">
              Получить индивидуальное предложение
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold">Часто задаваемые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: 'Как долго длится подготовка?', 
                a: 'Минимальная подготовка занимает от 2 часов за область аттестации. Полный доступ к системе предоставляется на 60 дней, что позволяет качественно подготовиться к экзамену.' 
              },
              { 
                q: 'Соответствует ли система реальному экзамену Ростехнадзора?', 
                a: 'Да, процедура экзамена в i-SDO на 100% идентична экзамену Ростехнадзора. Используются актуальные вопросы и формат тестирования полностью соответствует требованиям РТН.' 
              },
              { 
                q: 'Нужны ли серверы и ИТ-специалисты?', 
                a: 'Нет, платформа полностью облачная. Не требуется закупка и обслуживание серверов, не нужны ИТ-специалисты. Всё работает через браузер.' 
              },
              { 
                q: 'Какая поддержка предоставляется?', 
                a: 'Круглосуточная техподдержка 24/7 доступна для всех клиентов. Дополнительно предоставляется персональный менеджер для сопровождения на всех этапах использования платформы.' 
              },
              { 
                q: 'Можно ли настроить систему под наш бренд?', 
                a: 'Да, доступно брендирование личного кабинета под ваш корпоративный стиль и логотип. Также возможно размещение платформы на вашем собственном домене.' 
              },
              { 
                q: 'Какой процент успешной сдачи экзамена?', 
                a: '90% пользователей i-SDO успешно проходят аттестацию Ростехнадзора с первой попытки благодаря эффективной системе подготовки и адаптивному тренингу.' 
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
            <h3 className="text-xl font-bold mb-2">Остались вопросы?</h3>
            <p className="text-gray-600 mb-4">Свяжитесь с нами, и мы ответим на все ваши вопросы</p>
            <div className="flex gap-3 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в чат
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white text-primary px-4 py-2 mb-6">Начните подготовку</Badge>
              <h2 className="text-4xl font-bold mb-6">Готовы начать подготовку к аттестации?</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg">60 дней полного доступа</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg">90% успешно сдают с первой попытки</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg">Персональный менеджер</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg">Техподдержка 24/7</span>
                </li>
              </ul>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Оставить заявку</h3>
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
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email или телефон *</label>
                    <Input
                      id="email"
                      placeholder="ivan@company.ru или +7 (999) 123-45-67"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Область аттестации</label>
                    <Textarea
                      id="message"
                      placeholder="Укажите область аттестации или оставьте комментарий"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-white text-base">
                    Получить консультацию
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                  <p className="text-xs text-center text-gray-500">Ответим в течение 15 минут</p>
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
              <p className="text-sm text-gray-600 mb-3">Эффективная подготовка к аттестации Ростехнадзора</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Свидетельство ПО №2024661434</p>
                <p>от 15.07.2024</p>
                <p className="pt-2">Правообладатель:</p>
                <p>ООО Современные технологии обучения</p>
                <p>ИНН 9718135635</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-primary">О платформе</a></li>
                <li><a href="#features" className="hover:text-primary">Возможности</a></li>
                <li><a href="#stats" className="hover:text-primary">Результаты</a></li>
                <li><a href="#pricing" className="hover:text-primary">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Аттестация</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">ОПО</a></li>
                <li><a href="#" className="hover:text-primary">Гидротехнические сооружения</a></li>
                <li><a href="#" className="hover:text-primary">Энергетика</a></li>
                <li><a href="#" className="hover:text-primary">Промышленная безопасность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
                <li><a href="#" className="hover:text-primary">База знаний</a></li>
                <li><a href="#contact" className="hover:text-primary">Контакты</a></li>
                <li className="pt-2 font-semibold text-primary">Техподдержка 24/7</li>
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

      <ChatWidget />
    </div>
  );
};

export default Index;
