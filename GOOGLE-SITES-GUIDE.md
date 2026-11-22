# Building the site in Google Sites

Google Sites has no import or API, so the site is built by hand in the editor. This guide and the files in this folder cover every step. Open `index.html` in a browser first to see what you're aiming for.

## What's in this folder

| File | Use |
|---|---|
| `index.html` | How the finished homepage should look (open in a browser) |
| `logo.png` | Site logo (the MK circle, transparent corners) |
| `favicon.png` | Browser-tab icon |
| `backgrounds/*.png` | Solid section backgrounds in the presentation's colors |
| `tiles/*.png` | Number tiles for the cards |
| `images/*` | Images from the presentation (АЯ symbol, palette, typography, process). `brand-logo-full.png` and `brand-wordmark.png` still have the old name "Аурия" written in them, so don't use them |

## Colors (from the presentation)

| Role | Hex |
|---|---|
| Main / accent (buttons, links) | `#C45C26` (terracotta) |
| Headings | `#1A1A1A` |
| Body text | `#4A4A4A` |
| Page background | `#F7F4EF` (cream) |
| Borders / footer | `#E8E4DF` |
| Dark section (CTA) | `#2D2D2D` |
| АЯ brand palette | `#FFDC74`, `#A67D2D` |

Fonts in the deck: **Arial Bold** for headings and **Arial** regular for text. Plain Arial isn't in the Google Sites font list (Arial Narrow, Black and Rounded don't match the deck), so use **Arimo**, a Google font made to look like Arial: **Bold (700)** for headings, **Regular (400)** for text. If Arimo isn't listed, use **Roboto** the same way.

---

## 1. Create the site and set the theme
1. Go to **sites.google.com**, then **+ Blank site**. Name it `Визуална идентичност`.
2. In the right panel, open **Themes**.
   - If you see **Custom → Build**: create a theme with primary color `#C45C26`, background `#F7F4EF`, text `#1A1A1A`, heading font Arimo Bold and body font Arimo Regular (or Roboto for both).
   - Otherwise pick the **Simple** theme, click the **+** color swatch and enter `#C45C26`. Under *Font style*, pick the option with bold sans-serif headings (not the serif one).

## 2. Logo, favicon and navigation
1. Click the **⚙ Settings** gear, then **Brand images**. Upload `logo.png` as **Logo** and `favicon.png` as **Favicon**.
2. In **Settings → Navigation**, set *Mode* to **Top** and *Color* to **White**.
3. In the right panel, under **Pages**, add pages: `Елементи`, `Процес`, `Бранд АЯ`, `Въпроси`. These become the nav-bar links.
4. Add the nav **Контакт** button: Insert → **Button**, label `Контакт`, linked to the footer email or a contact page. (Google Sites can't put a button inside the nav bar, so place it at the top right of the hero.)

## 3. Homepage, section by section
To set a section's background, hover the section, click the **palette icon** on its left, choose **Image** and upload a file from `backgrounds/`.

### Hero (background: `cream.png`)
Insert a **two-column** layout (Insert → Layouts).
- **Left column, small text box:** `Курсова работа · Дизайн и печатни комуникации`
- **Title (Heading):** `Създаване на цялостна визуална идентичност за бранд`
- **Text:** `Лого · Цветова палитра · Типография: как един бранд става разпознаваем, последователен и запомнящ се.`
- **Two buttons:** `Разгледай процеса` (link to Процес page) and `Виж бранда АЯ` (link to Бранд АЯ page)
- **Right column, image:** `images/aya-symbol.png`

### Tools strip (background: `cream.png`)
- **Small centered text:** `Инструменти, използвани в процеса`
- **Centered text, larger and grey:** `Illustrator     Figma     Photoshop     InDesign     Google Fonts     Coolors`

### Elements (background: `white.png`)
- **Small text, terracotta:** `02 · Основни елементи`
- **Heading:** `Какво изгражда визуалната идентичност`
- **Text:** `Система от визуални елементи, които правят един бранд разпознаваем във всички точки на контакт.`

Insert a **two-column layout twice** (a 2×2 grid). Each card is an image from `tiles/element-0N.png` with a title and text under it:

1. **Лого**: Централният символ на бранда. Може да бъде символ, дума или комбинация.
2. **Цветова палитра**: Основни и допълнителни цветове, които носят емоция и разпознаваемост.
3. **Типография**: Система от шрифтове за заглавия, текст и акцент.
4. **Графични елементи**: Икони, патерни, илюстрации, фотографски стил. Събрани в Brand Guidelines.

### Why it matters (background: `cream.png`)
- **Small text:** `01 · Значение`
- **Heading:** `Защо визуалната идентичност е важна?`

Insert a **four-column layout** with images `tiles/why-1..4.png`:

1. **Първо впечатление**: Хората формират мнение за бранда за секунди. Визуалният език говори преди думите.
2. **Емоционална връзка**: Цветовете и формите предизвикват емоции и асоциации, които изграждат лоялност.
3. **Последователност**: Еднаквият визуален език във всички канали създава стабилност и професионализъм.
4. **Конкурентно предимство**: Силната идентичност прави бранда лесно разпознаваем и труден за копиране.

### Process (replaces "Reviews", background: `white.png`)
- **Small text:** `03 · Процес`
- **Heading:** `От стратегия до guidelines`

Insert a **four-column layout** with images `tiles/step-01..04.png`:

1. **Изследване**: Бранд стратегия, целева аудитория и конкурентен анализ.
2. **Концепция**: Moodboard, ключови думи и визуална посока.
3. **Дизайн**: Лого, цветове и типография като единна система.
4. **Приложение**: Mockups, система от приложения и Brand Guidelines.

Optional: below it, add `images/branding-process.jpg` full width.

### FAQ (background: `cream.png`)
Insert a **two-column layout**. The left column holds the heading `Често задавани въпроси` and the text `Кратки отговори на най-важните въпроси от курсовата работа.` In the right column, add **Insert → Collapsible group** four times:

- **Какво е визуална идентичност?** Система от визуални елементи (лого, цветове, типография, графични елементи), която прави бранда разпознаваем, последователен и запомнящ се.
- **Какви видове лого има?** Wordmark, Lettermark, Pictorial, Abstract, Mascot и Combination. Комбинацията от символ и текст е най-често използваният тип.
- **Колко шрифта да използвам?** Обикновено 2 шрифта са достатъчни: един за заглавия и един за текст. Максимум 3.
- **Какво включват Brand Guidelines?** Употреба на логото, цветове (RGB, CMYK), типография, иконография, фотография и примери за правилни и неправилни приложения.

### CTA: brand АЯ (background: `dark.png`, which makes the text white automatically)
Use a **two-column layout**:
- **Left column, small text:** `04 · Практически пример`
- **Heading:** `АЯ: измислен бранд за козметика`
- **Text:** `Чистота, светлина и ежедневен ритуал. Минимализъм, топли неутрални тонове и тиха елегантност.`
- **Button:** `Разгледай бранда`, linked to the Бранд АЯ page
- **Right column, image:** `images/aya-palette.png`

### Footer
Hover the bottom of the page and click **Add footer**. Text: `Курсова работа на Мартина Петрова Киркова, 21а група · Дизайн и печатни комуникации · © 2026`. To match the wireframe, also add the logo via Insert → Image.

## 4. Inner pages (optional, using the rest of the slides)
- **Елементи**: slides 5–11: types of logo, logo principles, color psychology, building a palette, typography (`images/serif.jpg`, `images/sans-serif.png`).
- **Процес**: slides 12–14: research, moodboard.
- **Бранд АЯ**: slides 15–22: strategy, visual direction, logo, palette, typography, applications (`images/aya-palette.png`).
- **Въпроси / Ресурси**: slides 23–29: common mistakes, tools, free resources, conclusion.

## 5. Publish
Click **Preview** (the eye icon) to check desktop and mobile views, then **Publish** and choose a web address.
