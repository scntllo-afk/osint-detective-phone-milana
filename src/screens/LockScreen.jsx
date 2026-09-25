import { useState, useEffect } from 'react';
import { Signal } from 'lucide-react';

export default function LockScreen({ onUnlock }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  const timeStr = time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  const dateStr = `${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]}`;

  return (
    <div className="relative w-full h-full bg-zinc-950 text-white font-sans flex flex-col justify-between p-4 overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 pointer-events-none"></div>

      {/* Статус-бар */}
      <div className="relative z-10 flex justify-between text-xs font-medium px-2 mb-4 text-zinc-400">
        <span>{timeStr}</span>
        <div className="flex gap-1.5 items-center">
          <Signal size={14} />
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Центральный контент */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        {/* Большие часы */}
        <div className="text-9xl font-light leading-none mb-2 text-white" style={{ letterSpacing: '-2px' }}>
          {timeStr}
        </div>
        
        {/* Дата */}
        <div className="text-base text-zinc-400 mt-2 font-normal">
          {dateStr}
        </div>

        {/* Погода */}
        <div className="flex items-center gap-2 mt-4 text-sm text-zinc-400">
          <span className="text-2xl">🌥️</span>
          <span>+7°  Москва</span>
        </div>
      </div>

      {/* Карточка уведомления */}
      <div className="relative z-10 flex items-center gap-3 bg-zinc-900 rounded-2xl p-3 mb-6 border border-zinc-800">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-lg flex-shrink-0">
          💬
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-white">Сообщения</div>
          <div className="text-xs text-zinc-400">1 новое сообщение</div>
        </div>
      </div>

      {/* Кнопка разблокировки */}
      <button
        onClick={onUnlock}
        className="relative z-10 py-4 px-4 bg-transparent text-zinc-500 text-sm font-normal hover:text-zinc-400 transition-colors active:opacity-70"
      >
        ▲  Смахните, чтобы разблокировать
      </button>
    </div>
  );
}
