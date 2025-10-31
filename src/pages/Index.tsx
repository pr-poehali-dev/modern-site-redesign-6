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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all"></div>
              <div className="relative flex flex-col border-2 border-primary rounded-lg px-3 py-1 bg-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                <span className="text-2xl font-bold text-primary leading-none">i</span>
              </div>
            </div>
            <div className="flex flex-col text-sm leading-tight uppercase text-primary font-bold tracking-tight">
              <span>Интеллектуальная</span>
              <span>система</span>
              <span>подготовки</span>
            </div>
          </div>
          <nav className="hidden lg:flex gap-8 items-center">
            <a href="#about" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              О платформе
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </a>
            <a href="#features" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Возможности
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </a>
            <a href="#stats" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Результаты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </a>
            <a href="#pricing" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Тарифы
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" className="border-2 border-success text-success hover:bg-success hover:text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all">
              Контакты<br/>отдел продаж
            </Button>
            <Button className="bg-gradient-to-r from-success to-emerald-600 hover:from-emerald-600 hover:to-success text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 gradient-animate"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-success/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute top-6 right-6 z-10">
          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 text-base shadow-xl animate-pulse font-bold">
            🔥 90% успешно сдают экзамен с первой попытки
          </Badge>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-accent via-purple-600 to-primary bg-clip-text text-transparent">
                  Интеллектуальная
                </span>
                <br/>
                <span className="bg-gradient-to-r from-success via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  система подготовки
                </span>
                <br/>
                <span className="bg-gradient-to-r from-success to-teal-700 bg-clip-text text-transparent">
                  к экзаменам РТН
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-primary">i-SDO</strong> — эффективная платформа для подготовки к экзаменам Ростехнадзора для учебных центров, организаций, эксплуатирующих ОПО и гидротехнические сооружения, субъектов энергетики
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all group">
                  <div className="p-2 bg-gradient-to-br from-success to-emerald-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-success text-lg">Подготовка от 2 часов</p>
                    <p className="text-sm text-gray-600">за область аттестации</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all group">
                  <div className="p-2 bg-gradient-to-br from-primary to-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Icon name="CheckCircle" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg">100% соответствие экзамену</p>
                    <p className="text-sm text-gray-600">процедура идентична Ростехнадзору</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all group">
                  <div className="p-2 bg-gradient-to-br from-accent to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                    <Icon name="Brain" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-accent text-lg">Адаптивный тренинг</p>
                    <p className="text-sm text-gray-600">систематизирует знания</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button size="lg" className="bg-gradient-to-r from-accent via-purple-600 to-primary hover:from-primary hover:to-accent text-white text-lg px-10 py-7 shadow-2xl hover:shadow-accent/50 transition-all font-bold rounded-xl group">
                  Получить доступ
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary px-10 py-7 font-bold rounded-xl hover:bg-primary hover:text-white shadow-lg transition-all group">
                  Смотреть демо
                  <Icon name="Play" size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 hover:shadow-primary/20 transition-all">
                <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white mb-6 px-5 py-2 text-base font-bold shadow-lg">
                  ⏱️ 60 дней на подготовку
                </Badge>
                
                <div className="flex flex-col border-2 border-primary rounded-2xl px-8 py-6 mb-8 w-fit mx-auto bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg hover:shadow-xl transition-all">
                  <span className="text-5xl font-black text-primary leading-none mb-2">i</span>
                  <div className="text-xs leading-tight uppercase text-primary font-bold tracking-tight">
                    <div>Интеллектуальная</div>
                    <div>система</div>
                    <div>подготовки</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                      <Icon name="FileCheck" size={32} className="text-primary" />
                    </div>
                    <p className="text-xs font-semibold text-gray-700">Тестирование</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                      <Icon name="Brain" size={32} className="text-accent" />
                    </div>
                    <p className="text-xs font-semibold text-gray-700">Адаптация</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                      <Icon name="Award" size={32} className="text-success" />
                    </div>
                    <p className="text-xs font-semibold text-gray-700">Аттестация</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-accent via-purple-600 to-primary hover:from-primary hover:to-accent text-white py-7 text-lg rounded-2xl mb-3 shadow-xl hover:shadow-2xl transition-all font-bold">
                  НАЧАТЬ БЕСПЛАТНО
                </Button>
                <p className="text-xs text-center text-gray-500 font-medium">Без кредитной карты • Полный доступ • Отменить в любой момент</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 font-bold shadow-lg">📊 Результаты платформы</Badge>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Проверенная эффективность</h2>
            <p className="text-xl text-gray-600">Реальные цифры наших клиентов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-success to-emerald-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <Card className="relative border-2 border-success/20 hover:border-success/40 shadow-xl hover:shadow-2xl transition-all rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-success/10 to-transparent rounded-bl-full"></div>
                <CardHeader className="text-center p-10">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-success to-emerald-600 rounded-3xl flex items-center justify-center shadow-xl relative">
                    <Icon name="TrendingUp" className="text-white" size={48} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl">✓</span>
                    </div>
                  </div>
                  <CardTitle className="text-6xl font-black text-success mb-2">90%</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-700">
                    Успешно сдают экзамен<br/>с первой попытки
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <Card className="relative border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                <CardHeader className="text-center p-10">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-blue-600 rounded-3xl flex items-center justify-center shadow-xl relative">
                    <Icon name="Clock" className="text-white" size={48} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl">⚡</span>
                    </div>
                  </div>
                  <CardTitle className="text-6xl font-black text-primary mb-2">60</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-700">
                    Дней на полную<br/>подготовку
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <Card className="relative border-2 border-accent/20 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>
                <CardHeader className="text-center p-10">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent to-purple-600 rounded-3xl flex items-center justify-center shadow-xl relative">
                    <Icon name="CheckCircle" className="text-white" size={48} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl">🎯</span>
                    </div>
                  </div>
                  <CardTitle className="text-6xl font-black text-accent mb-2">100%</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-700">
                    Соответствие экзамену<br/>Ростехнадзора
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-accent to-purple-600 text-white px-6 py-3 font-bold shadow-lg">🎯 Для кого платформа</Badge>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Целевая аудитория</h2>
            <p className="text-xl text-gray-600">Платформа разработана для профессионалов отрасли</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all rounded-3xl group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              <CardHeader className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon name="GraduationCap" className="text-primary" size={40} />
                </div>
                <CardTitle className="text-2xl mb-4 text-center font-black">Учебные центры</CardTitle>
                <CardDescription className="text-base text-center leading-relaxed">
                  Комплексное решение для организации подготовки и аттестации специалистов по требованиям Ростехнадзора
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-success/40 shadow-xl hover:shadow-2xl transition-all rounded-3xl group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              <CardHeader className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon name="Factory" className="text-success" size={40} />
                </div>
                <CardTitle className="text-2xl mb-4 text-center font-black">Организации<br/>эксплуатирующие ОПО</CardTitle>
                <CardDescription className="text-base text-center leading-relaxed">
                  Эффективная подготовка персонала, работающего на опасных производственных объектах и гидротехнических сооружениях
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all rounded-3xl group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              <CardHeader className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon name="Zap" className="text-accent" size={40} />
                </div>
                <CardTitle className="text-2xl mb-4 text-center font-black">Субъекты<br/>энергетики</CardTitle>
                <CardDescription className="text-base text-center leading-relaxed">
                  Специализированная система подготовки для организаций энергетического сектора с учетом отраслевой специфики
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #9333ea 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 font-bold shadow-lg">⚡ Преимущества</Badge>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Возможности платформы</h2>
            <p className="text-xl text-gray-600">Всё необходимое для эффективной подготовки</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-success/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-success to-emerald-600 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Clock" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Экономит время</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Эффективная система подготовки сокращает время обучения без потери качества</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Server" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Без серверов</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Не требуется собственных серверов и ИТ специалистов для обслуживания</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-accent to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="UserCheck" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Персональный менеджер</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Индивидуальное сопровождение на всех этапах работы с платформой</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 hover:border-blue-400/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Headphones" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Техподдержка 24/7</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Круглосуточная техническая поддержка для решения любых вопросов</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 hover:border-emerald-400/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="CheckCircle" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Идентичен экзамену РТН</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Процедура экзамена полностью соответствует требованиям Ростехнадзора</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 hover:border-purple-400/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Brain" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Адаптивный тренинг</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Интеллектуальная система систематизирует и закрепляет знания</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 hover:border-rose-400/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-rose-500 to-rose-700 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Palette" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Брендирование</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Персонализация личного кабинета под стиль вашей организации</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 hover:border-cyan-400/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Globe" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Свой домен</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Размещение платформы на вашем собственном домене</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 hover:border-orange-400/40 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Zap" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">От 2 часов</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Подготовка от 2 часов за каждую область аттестации</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-success to-emerald-600 text-white px-6 py-3 font-bold shadow-lg">💰 Тарифы</Badge>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Выберите подходящий план</h2>
            <p className="text-xl text-gray-600">Гибкие условия для любого масштаба</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              <CardHeader className="relative p-8 border-b">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name="Rocket" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-3xl font-black mb-2">Базовый</CardTitle>
                  <CardDescription className="text-base">Для учебных центров</CardDescription>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-primary">По запросу</p>
                </div>
              </CardHeader>
              <CardContent className="relative p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Базовая база вопросов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">До 100 пользователей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Техподдержка email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Базовая статистика</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white py-6 rounded-xl shadow-xl font-bold">
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent shadow-2xl hover:shadow-accent/20 transition-all rounded-3xl overflow-hidden relative scale-105">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 font-bold shadow-xl">
                  🔥 Популярный
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent"></div>
              <CardHeader className="relative p-8 border-b">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name="Star" className="text-accent" size={32} />
                  </div>
                  <CardTitle className="text-3xl font-black mb-2">Профессиональный</CardTitle>
                  <CardDescription className="text-base">Для организаций ОПО</CardDescription>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-accent">По запросу</p>
                </div>
              </CardHeader>
              <CardContent className="relative p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm font-semibold">Полная база вопросов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm font-semibold">До 500 пользователей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm font-semibold">Техподдержка 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm font-semibold">Расширенная аналитика</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm font-semibold">Персональный менеджер</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm font-semibold">Брендирование</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-accent via-purple-600 to-primary hover:from-primary hover:to-accent text-white py-6 rounded-xl shadow-xl font-bold">
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-success/40 shadow-xl hover:shadow-2xl transition-all rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              <CardHeader className="relative p-8 border-b">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name="Building2" className="text-success" size={32} />
                  </div>
                  <CardTitle className="text-3xl font-black mb-2">Корпоративный</CardTitle>
                  <CardDescription className="text-base">Для субъектов энергетики</CardDescription>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-success">По запросу</p>
                </div>
              </CardHeader>
              <CardContent className="relative p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Всё из Профессионального</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Неограниченно пользователей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Свой домен</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">API интеграция</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Выделенная команда поддержки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">SLA 99.9%</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-success to-emerald-600 hover:from-emerald-600 hover:to-success text-white py-6 rounded-xl shadow-xl font-bold">
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 font-bold shadow-lg">❓ Частые вопросы</Badge>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">FAQ</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-2xl px-6 shadow-md hover:shadow-lg transition-all">
                <AccordionTrigger className="text-lg font-bold hover:text-primary">
                  Как начать работу с платформой?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Оставьте заявку через форму на сайте, и наш менеджер свяжется с вами для настройки доступа. Процесс запуска занимает от 1 до 3 рабочих дней.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-2xl px-6 shadow-md hover:shadow-lg transition-all">
                <AccordionTrigger className="text-lg font-bold hover:text-primary">
                  Сколько времени нужно на подготовку?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  В среднем на подготовку требуется 60 дней. Однако, благодаря адаптивному тренингу, вы можете подготовиться к одной области аттестации за 2 часа.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-2xl px-6 shadow-md hover:shadow-lg transition-all">
                <AccordionTrigger className="text-lg font-bold hover:text-primary">
                  Соответствует ли система требованиям Ростехнадзора?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Да, процедура экзамена на платформе на 100% идентична экзамену Ростехнадзора. Все вопросы актуализированы и соответствуют действующим нормативам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 rounded-2xl px-6 shadow-md hover:text-primary transition-all">
                <AccordionTrigger className="text-lg font-bold hover:text-primary">
                  Какая поддержка предоставляется?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Мы предоставляем круглосуточную техническую поддержку, персонального менеджера для корпоративных клиентов и регулярные обновления базы вопросов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 rounded-2xl px-6 shadow-md hover:shadow-lg transition-all">
                <AccordionTrigger className="text-lg font-bold hover:text-primary">
                  Можно ли использовать свой домен?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Да, в тарифе "Корпоративный" доступно размещение платформы на вашем собственном домене с полным брендированием интерфейса.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-blue-600 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '50px 50px'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4 text-white">Готовы начать?</h2>
              <p className="text-xl text-white/90">Оставьте заявку и получите консультацию специалиста</p>
            </div>

            <Card className="shadow-2xl rounded-3xl overflow-hidden border-0">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@company.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о ваших задачах..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-accent via-purple-600 to-primary hover:from-primary hover:to-accent text-white py-6 text-lg rounded-xl shadow-xl font-bold">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex flex-col border-2 border-white rounded-lg px-3 py-1 shadow-lg">
                  <span className="text-2xl font-bold text-white leading-none">i</span>
                </div>
                <div className="flex flex-col text-sm leading-tight uppercase text-white font-bold">
                  <span>Интеллектуальная</span>
                  <span>система</span>
                  <span>подготовки</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Эффективная подготовка к аттестации Ростехнадзора</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">О платформе</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Направления</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Промышленная безопасность</li>
                <li className="text-gray-400">Энергетическая безопасность</li>
                <li className="text-gray-400">Гидротехнические сооружения</li>
                <li className="text-gray-400">ОПО</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@i-sdo.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 text-center space-y-2">
            <p>Свидетельство ПО №2024661434 от 15.07.2024</p>
            <p>Правообладатель: ООО "Современные технологии обучения" (ИНН 9718135635)</p>
            <p className="mt-4">© 2024 i-SDO. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default Index;