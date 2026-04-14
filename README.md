# Портфолио — Frontend Developer

Сайт-визитка в стиле консоли/терминала с эффектом Matrix Rain.

## Стек

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS**
- **Canvas API** — Matrix Rain фон

## Фичи

- 🟢 Matrix Rain — бегущий зелёный двоичный код на Canvas
- 💻 Терминальный стиль — окна с заголовками в стиле macOS terminal
- ⌨️ Typewriter — эффект печатания текста с мигающим курсором
- 📱 Адаптивная вёрстка
- 🎯 IntersectionObserver — секции появляются при скролле

## Быстрый старт

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Настройка под себя

| Файл | Что менять |
|------|-----------|
| `components/About.tsx` | Имя, город, опыт, образование |
| `components/Skills.tsx` | Навыки и категории |
| `components/Contact.tsx` | Email, GitHub, Telegram, LinkedIn |
| `app/layout.tsx` | Title и description страницы |

## Деплой

[Vercel](https://vercel.com) — рекомендуемый способ:

```bash
vercel
```
