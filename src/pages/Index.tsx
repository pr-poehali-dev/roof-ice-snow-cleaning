import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Snowflake',
      title: 'Очистка кровли от снега',
      description: 'Профессиональное удаление снежных масс с крыш любой сложности. Используем специализированное оборудование и соблюдаем все нормы безопасности.',
      price: 'от 150 ₽/м²'
    },
    {
      icon: 'AlertTriangle',
      title: 'Удаление наледи и сосулек',
      description: 'Оперативная ликвидация опасных ледяных образований. Работаем с применением промышленного альпинизма на высоте до 100 метров.',
      price: 'от 200 ₽/м²'
    },
    {
      icon: 'Shield',
      title: 'Профилактическое обслуживание',
      description: 'Регулярный осмотр и своевременная очистка кровли. Предотвращаем образование наледи и снижаем риски для жильцов.',
      price: 'от 120 ₽/м²'
    }
  ];

  const team = [
    {
      name: 'Александр Петров',
      position: 'Руководитель бригады',
      experience: '12 лет опыта'
    },
    {
      name: 'Елена Соколова',
      position: 'Инженер по безопасности',
      experience: '8 лет опыта'
    },
    {
      name: 'Дмитрий Волков',
      position: 'Промышленный альпинист',
      experience: '10 лет опыта'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/logoza.ru.png" 
                alt="AlpClean - Зеленоград" 
                className="h-16 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Персонал</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (499) 735-48-92
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/logoza.ru.png" 
              alt="AlpClean - Зеленоград" 
              className="h-24 w-auto mx-auto mb-6 animate-fade-in"
            />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              AlpClean - Зеленоград
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональная уборка снега и льда с крыш многоэтажных зданий. 
              Работаем быстро, качественно и с гарантией.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать бригаду
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс работ по очистке кровли от снега и льда
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <div className="mt-auto">
                    <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    <Button className="w-full" variant="outline">
                      <Icon name="Calculator" size={18} className="mr-2" />
                      Узнать стоимость
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Лицензии и допуски СРО</h3>
                    <p className="text-muted-foreground">Все разрешительные документы и страховка</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Опытные специалисты</h3>
                    <p className="text-muted-foreground">Квалифицированные промышленные альпинисты</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Работаем круглосуточно</h3>
                    <p className="text-muted-foreground">Оперативный выезд в любое время суток</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Официальный договор и акт выполненных работ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold mb-4">500+</div>
                  <div className="text-xl mb-8">зданий обслужено</div>
                  <div className="text-6xl font-bold mb-4">24/7</div>
                  <div className="text-xl mb-8">режим работы</div>
                  <div className="text-6xl font-bold mb-4">15</div>
                  <div className="text-xl">лет на рынке</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с многолетним опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (499) 735-48-92</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@alpclean-zelenograd.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">Зеленоград, Центральный проспект, 1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A64b1d8f6b03b0f5c64f6c68a5e2c8b4d9e5f9e4f5c5d5e5f5e5f5e5f5e5f5e5f&amp;source=constructor" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Карта"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/logoza.ru.png" 
                alt="AlpClean - Зеленоград" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-gray-400">
                Профессиональная уборка снега и льда с крыш в Зеленограде
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Очистка от снега</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Удаление наледи</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Профилактика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#team" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (499) 735-48-92</li>
                <li>info@alpclean-zelenograd.ru</li>
                <li>Зеленоград, Центральный проспект, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 AlpClean - Зеленоград. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;