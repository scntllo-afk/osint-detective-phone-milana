export default function BrokenScreen() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[200]">
      <svg
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="crack" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
          </linearGradient>
        </defs>

        {/* Главный удар сверху-слева */}
        <g stroke="url(#crack)" strokeWidth="1.2" fill="none" opacity="0.85">
          <path d="M 20 30 L 120 180 L 180 220 L 240 290 L 300 340" />
          <path d="M 120 180 L 90 260 L 130 340" />
          <path d="M 180 220 L 220 200 L 280 240" />
          <path d="M 240 290 L 260 400 L 320 500" />
          <path d="M 130 340 L 80 420 L 60 520" />
          <path d="M 60 520 L 40 620 L 90 720" />
          <path d="M 320 500 L 300 600 L 340 700" />
        </g>

        {/* Мелкие ответвления */}
        <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" fill="none">
          <path d="M 140 200 L 160 150 L 200 100" />
          <path d="M 200 260 L 240 320 L 300 380" />
          <path d="M 100 300 L 60 340 L 30 400" />
          <path d="M 280 420 L 340 440 L 380 500" />
          <path d="M 70 600 L 120 640 L 180 680" />
        </g>

        {/* Точечные сколы */}
        <g fill="rgba(255,255,255,0.6)">
          <circle cx="130" cy="200" r="1.5" />
          <circle cx="190" cy="230" r="1" />
          <circle cx="250" cy="300" r="1.8" />
          <circle cx="90" cy="430" r="1.2" />
          <circle cx="310" cy="510" r="1.5" />
          <circle cx="140" cy="640" r="1" />
        </g>
      </svg>

      {/* Мёртвая зона — тёмное пятно поверх части контента */}
      <div
        className="absolute rounded-full"
        style={{
          top: '18%',
          right: '-30px',
          width: '140px',
          height: '140px',
          background:
            'radial-gradient(circle at 30% 30%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 75%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Второе пятно — снизу-слева, закрывает часть строк в списках */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '22%',
          left: '-40px',
          width: '110px',
          height: '110px',
          background:
            'radial-gradient(circle at 70% 50%, rgba(10,10,15,0.9) 0%, rgba(0,0,0,0) 75%)',
        }}
      />
    </div>
  );
}