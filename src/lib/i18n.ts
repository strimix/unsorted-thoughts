export type Locale = 'en' | 'ru';

export const locales: Locale[] = ['en', 'ru'];
export const defaultLocale: Locale = 'en';

export function getLocaleFromId(id: string): Locale {
  return id.startsWith('ru/') ? 'ru' : 'en';
}

export function getSlugFromId(id: string): string {
  return id.replace(/^ru\//, '');
}

export function thoughtHref(locale: Locale, slug: string): string {
  return locale === 'en' ? `/${slug}/` : `/ru/${slug}/`;
}

export function homeHref(locale: Locale): string {
  return locale === 'en' ? '/' : '/ru/';
}

export function alternateHref(locale: Locale, slug?: string): string {
  const other: Locale = locale === 'en' ? 'ru' : 'en';
  return slug ? thoughtHref(other, slug) : homeHref(other);
}

const ui = {
  en: {
    siteTitle: 'Random thoughts — unsorted.club',
    siteDescription:
      'Random thoughts. Written when something refuses to stay unsorted.',
    heroTitle: 'Random thoughts.',
    heroDek: 'Written when something refuses to stay unsorted.',
    minRead: (n: number) => `~${n} MIN READ`,
    minShort: (n: number) => `~${n} MIN`,
    backToTop: 'BACK TO TOP ↑',
    langLabel: 'Language',
  },
  ru: {
    siteTitle: 'Случайные мысли — unsorted.club',
    siteDescription:
      'Случайные мысли. Когда что-то упорно не хочет оставаться неупорядоченным.',
    heroTitle: 'Случайные мысли.',
    heroDek: 'Когда что-то упорно не хочет оставаться неупорядоченным.',
    minRead: (n: number) => `~${n} МИН`,
    minShort: (n: number) => `~${n} МИН`,
    backToTop: 'НАВЕРХ ↑',
    langLabel: 'Язык',
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}

export function formatDate(date: Date, locale: Locale) {
  if (locale === 'ru') {
    const months = [
      'ЯНВ',
      'ФЕВ',
      'МАР',
      'АПР',
      'МАЙ',
      'ИЮН',
      'ИЮЛ',
      'АВГ',
      'СЕН',
      'ОКТ',
      'НОЯ',
      'ДЕК',
    ];
    const day = String(date.getDate()).padStart(2, '0');
    return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  return date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .toUpperCase();
}
