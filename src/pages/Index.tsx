import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const POSTERS = {
  crime: 'https://cdn.poehali.dev/projects/de8a4c23-b5b6-4569-a158-cefbd190ca5d/files/84b3fa4b-4088-445b-bbac-f81314049cfd.jpg',
  rom: 'https://cdn.poehali.dev/projects/de8a4c23-b5b6-4569-a158-cefbd190ca5d/files/a93c10f5-9008-4356-a395-29c944b86bf3.jpg',
  scifi: 'https://cdn.poehali.dev/projects/de8a4c23-b5b6-4569-a158-cefbd190ca5d/files/507cf750-0718-4c1c-863b-d2e7e666817d.jpg',
};

const SUBTITLE = {
  original: ['I', 'never', 'thought', 'we', 'would', 'see', 'each', 'other', 'again.'],
  translation: 'Я никогда не думал, что мы снова увидимся.',
  words: {
    never: 'никогда',
    thought: 'думал',
    again: 'снова',
    see: 'видеть',
  } as Record<string, string>,
};

const ACHIEVEMENTS = [
  { icon: 'Flame', title: 'Огонёк', desc: '7 дней подряд', color: 'from-orange-400 to-red-500', unlocked: true },
  { icon: 'BookOpen', title: 'Книголюб', desc: '500 новых слов', color: 'from-pink-400 to-fuchsia-500', unlocked: true },
  { icon: 'Trophy', title: 'Чемпион', desc: 'Топ-100 рейтинга', color: 'from-yellow-300 to-amber-500', unlocked: true },
  { icon: 'Rocket', title: 'Космонавт', desc: '10 фильмов', color: 'from-cyan-400 to-blue-500', unlocked: false },
];

const CATALOG = [
  { title: 'Ночной город', poster: POSTERS.crime, level: 'B1', lang: '🇬🇧', genre: 'Криминал', episodes: 12 },
  { title: 'Тёплый закат', poster: POSTERS.rom, level: 'A2', lang: '🇬🇧', genre: 'Комедия', episodes: 8 },
  { title: 'За пределами', poster: POSTERS.scifi, level: 'B2', lang: '🇬🇧', genre: 'Фантастика', episodes: 16 },
];

const LEADERBOARD = [
  { name: 'Алекс', xp: 14820, emoji: '🦊', rank: 1 },
  { name: 'Мария', xp: 13050, emoji: '🐱', rank: 2 },
  { name: 'Ты', xp: 11240, emoji: '🚀', rank: 3, me: true },
  { name: 'Дима', xp: 9870, emoji: '🐻', rank: 4 },
  { name: 'Соня', xp: 8640, emoji: '🦄', rank: 5 },
];

const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];

const Index = () => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [filter, setFilter] = useState('Все');
  const xp = 1240;
  const xpMax = 2000;

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 glass">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary animate-float">
              <Icon name="Clapperboard" size={22} className="text-white" />
            </div>
            <span className="font-display text-2xl font-extrabold text-gradient">LinguaPlay</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {['Уроки', 'Каталог', 'Рейтинг', 'Достижения'].map((i) => (
              <a key={i} href={`#${i}`} className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition">{i}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 bg-accent/15 border border-accent/30 px-3 py-1.5 rounded-full">
              <Icon name="Flame" size={16} className="text-accent" />
              <span className="font-bold text-accent text-sm">7</span>
            </div>
            <Button className="rounded-full font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary">Войти</Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container pt-14 pb-10 text-center relative">
        <div className="absolute top-10 left-8 text-5xl animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>🎬</div>
        <div className="absolute top-24 right-12 text-4xl animate-float hidden lg:block" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-pop">
          <span className="text-lg">🎮</span>
          <span className="text-sm font-medium text-muted-foreground">Учи языки как в игре</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] mb-5 animate-pop" style={{ animationDelay: '0.1s' }}>
          Смотри кино — <br /><span className="text-gradient">прокачивай язык</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-8 animate-pop" style={{ animationDelay: '0.2s' }}>
          Двойные субтитры, клик по любому слову, очки опыта за каждый эпизод. Превращаем сериалы в увлекательную игру.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 animate-pop" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="rounded-full font-bold text-base h-14 px-8 bg-gradient-to-r from-secondary to-primary glow-primary hover:opacity-90">
            Начать бесплатно <Icon name="ArrowRight" size={20} className="ml-1 animate-bounce-x" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full font-bold text-base h-14 px-8 border-white/20 bg-white/5 hover:bg-white/10">
            <Icon name="Play" size={18} className="mr-1" /> Как это работает
          </Button>
        </div>
      </section>

      {/* PLAYER */}
      <section id="Уроки" className="container py-10">
        <div className="rounded-[2rem] glass p-3 md:p-5 max-w-4xl mx-auto glow-primary">
          <div className="relative rounded-3xl overflow-hidden aspect-video bg-gradient-to-br from-[#1a0b3d] to-[#3d0b2e]">
            <img src={POSTERS.crime} alt="кадр" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* play button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition glow-accent">
              <Icon name="Play" size={34} className="text-primary ml-1" fill="currentColor" />
            </button>

            {/* tooltip */}
            {activeWord && (
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-2xl font-bold animate-pop shadow-xl flex items-center gap-2 z-10">
                <Icon name="Sparkles" size={16} />
                {activeWord} → {SUBTITLE.words[activeWord]}
                <span className="bg-accent-foreground/15 text-xs px-2 py-0.5 rounded-full">+5 XP</span>
              </div>
            )}

            {/* dual subtitles */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="text-xl md:text-2xl font-bold mb-2 flex flex-wrap gap-x-2 gap-y-1 justify-center">
                {SUBTITLE.original.map((w, i) => {
                  const clean = w.replace(/[.,!?]/g, '').toLowerCase();
                  const known = SUBTITLE.words[clean];
                  return (
                    <span
                      key={i}
                      onClick={() => known && setActiveWord(activeWord === clean ? null : clean)}
                      className={`transition ${known ? 'cursor-pointer text-accent underline decoration-dotted decoration-2 underline-offset-4 hover:scale-110 inline-block' : 'text-white'}`}
                    >
                      {w}
                    </span>
                  );
                })}
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-medium">{SUBTITLE.translation}</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-2 pt-4 pb-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Icon name="MousePointerClick" size={15} className="text-accent" /> Кликни по подсвеченному слову</span>
            <span className="flex items-center gap-1.5 font-bold text-accent"><Icon name="Zap" size={15} /> +5 XP за слово</span>
          </div>
        </div>
      </section>

      {/* PROGRESS / LEVELS */}
      <section className="container py-10">
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div className="md:col-span-2 rounded-3xl glass p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-display font-extrabold glow-primary">5</div>
                <div>
                  <p className="font-display font-bold text-lg leading-tight">Уровень 5 · Знаток</p>
                  <p className="text-sm text-muted-foreground">До следующего уровня {xpMax - xp} XP</p>
                </div>
              </div>
              <span className="font-bold text-accent">{xp}/{xpMax}</span>
            </div>
            <div className="h-4 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-accent via-secondary to-primary transition-all" style={{ width: `${(xp / xpMax) * 100}%` }} />
            </div>
            <div className="flex justify-between mt-4">
              {levels.map((l, i) => (
                <div key={l} className="flex flex-col items-center gap-1.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${i < 3 ? 'bg-gradient-to-br from-accent to-secondary text-accent-foreground' : 'bg-muted text-muted-foreground'}`}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl glass p-6 flex flex-col justify-center items-center text-center glow-accent">
            <div className="text-5xl mb-2 animate-float">🔥</div>
            <p className="font-display text-4xl font-extrabold text-accent">7 дней</p>
            <p className="text-sm text-muted-foreground">Не пропусти ни дня, чтобы держать ударный режим!</p>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="Каталог" className="container py-12">
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl font-extrabold mb-2">Каталог <span className="text-gradient">фильмов и сериалов</span></h2>
          <p className="text-muted-foreground">Выбери что-нибудь по своему уровню и жанру</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['Все', 'Криминал', 'Комедия', 'Фантастика'].map((g) => (
            <button key={g} onClick={() => setFilter(g)} className={`px-5 py-2 rounded-full font-medium text-sm transition ${filter === g ? 'bg-gradient-to-r from-primary to-secondary text-white glow-primary' : 'glass text-muted-foreground hover:text-foreground'}`}>{g}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CATALOG.filter((c) => filter === 'Все' || c.genre === filter).map((m, i) => (
            <div key={m.title} className="group rounded-3xl glass overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:glow-primary animate-pop" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={m.poster} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">{m.level}</span>
                <span className="absolute top-3 right-3 text-2xl">{m.lang}</span>
                <button className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">
                  <Icon name="Play" size={20} className="text-primary ml-0.5" fill="currentColor" />
                </button>
              </div>
              <div className="p-4">
                <p className="font-display font-bold text-lg leading-tight">{m.title}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <span>{m.genre}</span>·<span className="flex items-center gap-1"><Icon name="Film" size={14} />{m.episodes} эп.</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS + LEADERBOARD */}
      <section className="container py-12 grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* achievements */}
        <div id="Достижения">
          <h2 className="font-display text-3xl font-extrabold mb-5 flex items-center gap-2"><span className="text-2xl">🏅</span> Достижения</h2>
          <div className="grid grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a.title} className={`rounded-3xl glass p-5 text-center transition hover:-translate-y-1 animate-pop ${!a.unlocked && 'opacity-50'}`} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center mb-3 ${a.unlocked && 'glow-accent'}`}>
                  <Icon name={a.unlocked ? a.icon : 'Lock'} size={26} className="text-white" />
                </div>
                <p className="font-display font-bold">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* leaderboard */}
        <div id="Рейтинг">
          <h2 className="font-display text-3xl font-extrabold mb-5 flex items-center gap-2"><span className="text-2xl">👑</span> Рейтинг недели</h2>
          <div className="rounded-3xl glass p-3 space-y-1">
            {LEADERBOARD.map((p) => (
              <div key={p.name} className={`flex items-center gap-3 p-3 rounded-2xl transition ${p.me ? 'bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/40' : 'hover:bg-white/5'}`}>
                <span className={`w-7 text-center font-display font-extrabold ${p.rank <= 3 ? 'text-accent' : 'text-muted-foreground'}`}>{p.rank}</span>
                <span className="text-2xl">{p.emoji}</span>
                <span className={`flex-1 font-bold ${p.me && 'text-accent'}`}>{p.name}</span>
                <span className="flex items-center gap-1 font-bold text-sm"><Icon name="Zap" size={14} className="text-accent" />{p.xp.toLocaleString('ru')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent p-1 max-w-4xl mx-auto glow-primary">
          <div className="rounded-[2.3rem] bg-background/80 backdrop-blur-xl px-8 py-14 text-center">
            <div className="text-5xl mb-4 animate-float">🚀</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">Готов прокачать язык играя?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Присоединяйся к 50 000 игроков, которые учат языки по любимым фильмам.</p>
            <Button size="lg" className="rounded-full font-bold text-base h-14 px-10 bg-gradient-to-r from-secondary to-primary glow-primary hover:opacity-90">
              Начать бесплатно <Icon name="Sparkles" size={20} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container py-10 border-t border-border/50 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Icon name="Clapperboard" size={16} className="text-white" />
          </div>
          <span className="font-display font-extrabold text-gradient text-lg">LinguaPlay</span>
        </div>
        © 2026 LinguaPlay · Учись с удовольствием
      </footer>
    </div>
  );
};

export default Index;
