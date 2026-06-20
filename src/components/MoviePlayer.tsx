import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export interface Movie {
  title: string;
  poster: string;
  level: string;
  lang: string;
  genre: string;
  episodes: number;
}

const SUBTITLES = [
  {
    original: ['I', 'never', 'thought', 'we', 'would', 'see', 'each', 'other', 'again.'],
    translation: 'Я никогда не думал, что мы снова увидимся.',
  },
  {
    original: ['This', 'city', 'never', 'sleeps', 'at', 'night.'],
    translation: 'Этот город никогда не спит ночью.',
  },
  {
    original: ['We', 'have', 'to', 'find', 'the', 'truth', 'together.'],
    translation: 'Мы должны найти правду вместе.',
  },
];

const DICTIONARY: Record<string, string> = {
  never: 'никогда',
  thought: 'думал',
  again: 'снова',
  see: 'видеть',
  city: 'город',
  sleeps: 'спит',
  night: 'ночь',
  find: 'найти',
  truth: 'правда',
  together: 'вместе',
  have: 'иметь',
};

interface Props {
  movie: Movie;
  onClose: () => void;
}

const MoviePlayer = ({ movie, onClose }: Props) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [line, setLine] = useState(0);
  const [episode, setEpisode] = useState(1);
  const [learned, setLearned] = useState<string[]>([]);
  const [playing, setPlaying] = useState(false);

  const subtitle = SUBTITLES[line % SUBTITLES.length];

  const handleWord = (clean: string) => {
    if (!DICTIONARY[clean]) return;
    setActiveWord(activeWord === clean ? null : clean);
    if (!learned.includes(clean)) setLearned([...learned, clean]);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div className="container py-5">
        {/* top bar */}
        <div className="flex items-center justify-between mb-5">
          <button onClick={onClose} className="flex items-center gap-2 glass px-4 py-2 rounded-full font-medium text-sm hover:bg-white/10 transition">
            <Icon name="ArrowLeft" size={18} /> Назад в каталог
          </button>
          <div className="flex items-center gap-2 bg-accent/15 border border-accent/30 px-4 py-2 rounded-full">
            <Icon name="Zap" size={16} className="text-accent" />
            <span className="font-bold text-accent text-sm">+{learned.length * 5} XP за серию</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-6 max-w-6xl mx-auto">
          {/* PLAYER */}
          <div>
            <div className="rounded-[2rem] glass p-3 md:p-4 glow-primary">
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-gradient-to-br from-[#1a0b3d] to-[#3d0b2e]">
                <img src={movie.poster} alt={movie.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                <button
                  onClick={() => setPlaying(!playing)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition glow-accent"
                >
                  <Icon name={playing ? 'Pause' : 'Play'} size={34} className="text-primary ml-0.5" fill="currentColor" />
                </button>

                {activeWord && (
                  <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-2xl font-bold animate-pop shadow-xl flex items-center gap-2 z-10">
                    <Icon name="Sparkles" size={16} />
                    {activeWord} → {DICTIONARY[activeWord]}
                    <span className="bg-accent-foreground/15 text-xs px-2 py-0.5 rounded-full">+5 XP</span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-xl md:text-2xl font-bold mb-2 flex flex-wrap gap-x-2 gap-y-1 justify-center">
                    {subtitle.original.map((w, i) => {
                      const clean = w.replace(/[.,!?]/g, '').toLowerCase();
                      const known = DICTIONARY[clean];
                      return (
                        <span
                          key={i}
                          onClick={() => handleWord(clean)}
                          className={`transition ${known ? 'cursor-pointer text-accent underline decoration-dotted decoration-2 underline-offset-4 hover:scale-110 inline-block' : 'text-white'}`}
                        >
                          {w}
                        </span>
                      );
                    })}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground font-medium">{subtitle.translation}</p>
                </div>
              </div>

              {/* controls */}
              <div className="flex items-center justify-between px-2 pt-4 pb-1 gap-3">
                <Button onClick={() => setLine(Math.max(0, line - 1))} disabled={line === 0} variant="outline" className="rounded-full border-white/20 bg-white/5 hover:bg-white/10">
                  <Icon name="SkipBack" size={16} className="mr-1" /> Назад
                </Button>
                <div className="flex-1 text-center text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                  <Icon name="MousePointerClick" size={15} className="text-accent" /> Кликай по словам
                </div>
                <Button onClick={() => setLine(line + 1)} className="rounded-full font-bold bg-gradient-to-r from-primary to-secondary glow-primary hover:opacity-90">
                  Дальше <Icon name="SkipForward" size={16} className="ml-1" />
                </Button>
              </div>
            </div>

            {/* movie info */}
            <div className="flex items-center gap-3 mt-5 px-2">
              <span className="text-3xl">{movie.lang}</span>
              <div className="flex-1">
                <h1 className="font-display text-2xl font-extrabold leading-tight">{movie.title}</h1>
                <p className="text-sm text-muted-foreground">{movie.genre} · Серия {episode} из {movie.episodes}</p>
              </div>
              <span className="bg-accent text-accent-foreground text-sm font-bold px-3 py-1.5 rounded-full">{movie.level}</span>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-5">
            {/* learned words */}
            <div className="rounded-3xl glass p-5">
              <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-xl">📖</span> Новые слова
              </h3>
              {learned.length === 0 ? (
                <p className="text-sm text-muted-foreground">Кликай по подсвеченным словам в субтитрах — они появятся здесь.</p>
              ) : (
                <div className="space-y-2">
                  {learned.map((w) => (
                    <div key={w} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2 animate-pop">
                      <span className="font-bold text-accent">{w}</span>
                      <span className="text-sm text-muted-foreground">{DICTIONARY[w]}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* episodes */}
            <div className="rounded-3xl glass p-5">
              <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-xl">🎞️</span> Серии
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: movie.episodes }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setEpisode(i + 1); setLine(0); }}
                    className={`aspect-square rounded-xl font-bold text-sm transition ${episode === i + 1 ? 'bg-gradient-to-br from-primary to-secondary text-white glow-primary' : 'bg-white/5 text-muted-foreground hover:bg-white/10'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;
