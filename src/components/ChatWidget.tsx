import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { QRCodeSVG } from 'qrcode.react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
      setUnreadCount(1);
      playNotificationSound();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const playNotificationSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const whatsappNumber = '79850953131';
  const telegramUsername = '79850953131';
  const whatsappMessage = encodeURIComponent('Здравствуйте! Хочу узнать больше о платформе i-SDO');

  const sendToBitrix = async (action: string, channel: string) => {
    try {
      await fetch('https://functions.poehali.dev/d6d9e453-39e5-4646-91e2-f55187551450', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, channel, phone: '+79850953131' })
      });
    } catch (error) {
      console.error('Bitrix24 error:', error);
    }
  };

  const openWhatsApp = () => {
    sendToBitrix('whatsapp_click', 'WhatsApp');
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const openTelegram = () => {
    sendToBitrix('telegram_click', 'Telegram');
    window.open(`https://t.me/${telegramUsername}`, '_blank');
  };

  const saveContact = () => {
    sendToBitrix('save_contact', 'VCard Download');
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:i-SDO Поддержка
TEL;TYPE=CELL:+79850953131
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'isdo-contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showNotification && !isOpen && (
          <div className="animate-scale-in mb-2">
            <div className="bg-white rounded-lg shadow-xl p-3 max-w-xs border border-gray-200">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Онлайн-консультант</p>
                  <p className="text-xs text-gray-600">Готов ответить на ваши вопросы</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowNotification(false)}
                  className="h-5 w-5 p-0 ml-auto"
                >
                  <Icon name="X" size={14} />
                </Button>
              </div>
            </div>
          </div>
        )}

        {isOpen && (
          <Card className="p-4 shadow-2xl animate-scale-in w-72">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Написать нам</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <Icon name="X" size={18} />
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Выберите удобный способ связи. Отвечаем в течение 5 минут!
            </p>

            <div className="space-y-3">
              <Button
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center gap-2"
                size="lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </Button>

              <Button
                onClick={openTelegram}
                className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white flex items-center justify-center gap-2"
                size="lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </Button>

              <div className="text-center pt-2 border-t">
                <p className="text-xs text-gray-500 mb-2">или позвоните нам</p>
                <a 
                  href="tel:+79850953131" 
                  onClick={() => sendToBitrix('phone_click', 'Phone Call')}
                  className="text-sm font-semibold text-primary hover:underline block mb-3"
                >
                  +7 (985) 095-31-31
                </a>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      if (!showQR) sendToBitrix('qr_scan', 'QR Code');
                      setShowQR(!showQR);
                    }}
                    variant="outline"
                    size="sm"
                    className="flex-1 flex items-center justify-center gap-1"
                  >
                    <Icon name="QrCode" size={16} />
                    QR-код
                  </Button>
                  <Button
                    onClick={saveContact}
                    variant="outline"
                    size="sm"
                    className="flex-1 flex items-center justify-center gap-1"
                  >
                    <Icon name="Download" size={16} />
                    Сохранить
                  </Button>
                </div>

                {showQR && (
                  <div className="mt-4 p-3 bg-white rounded-lg border">
                    <p className="text-xs text-gray-600 mb-2">Отсканируйте для быстрой связи</p>
                    <div className="flex justify-center">
                      <QRCodeSVG 
                        value={`tel:+79850953131`}
                        size={120}
                        level="H"
                        includeMargin
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        )}

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary pulse-ring"></div>
          <div className="absolute inset-0 rounded-full bg-primary pulse-ring" style={{ animationDelay: '1s' }}></div>
          
          {unreadCount > 0 && !isOpen && (
            <div className="absolute -top-1 -right-1 z-10 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-bounce">
              {unreadCount}
            </div>
          )}
          
          <Button
            onClick={handleOpen}
            size="lg"
            className="relative h-16 w-16 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl hover:scale-110 transition-all float-animation"
          >
            {isOpen ? (
              <Icon name="X" size={28} />
            ) : (
              <Icon name="MessageCircle" size={28} />
            )}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ChatWidget;