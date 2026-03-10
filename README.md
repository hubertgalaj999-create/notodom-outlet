# notoDOM Outlet — Strona outletu meblowego

## Jak uruchomić

### 1. Zainstaluj Node.js
Pobierz i zainstaluj z https://nodejs.org (wersja 18+).

### 2. Zainstaluj zależności
Otwórz terminal w folderze projektu i wpisz:
```bash
npm install
```

### 3. Uruchom lokalnie
```bash
npm run dev
```
Strona będzie dostępna pod http://localhost:3000

---

## Jak wrzucić na internet (Vercel)

### Krok 1 — Załóż konto na GitHub
1. Wejdź na https://github.com
2. Zarejestruj się (darmowe)
3. Stwórz nowe repozytorium: kliknij "New" → nazwa: `notodom-outlet` → Create

### Krok 2 — Wrzuć kod na GitHub
W terminalu w folderze projektu:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJ-LOGIN/notodom-outlet.git
git push -u origin main
```

### Krok 3 — Podepnij do Vercel
1. Wejdź na https://vercel.com
2. Kliknij "Sign Up" → zaloguj się przez GitHub
3. Kliknij "New Project" → wybierz repozytorium `notodom-outlet`
4. Kliknij "Deploy" — Vercel automatycznie zbuduje i opublikuje stronę
5. Dostaniesz URL typu `notodom-outlet.vercel.app`

### Krok 4 — Podepnij subdomenę outlet.notodom.pl
1. W panelu Vercel → Settings → Domains → dodaj `outlet.notodom.pl`
2. Vercel poda Ci rekord DNS (CNAME) do dodania
3. Wejdź w panel DNS swojej domeny notodom.pl (u rejestratora lub na hostingu)
4. Dodaj rekord CNAME:
   - Nazwa: `outlet`
   - Wartość: `cname.vercel-dns.com`
5. Poczekaj 5-30 minut na propagację DNS
6. Gotowe! Strona będzie dostępna pod https://outlet.notodom.pl

---

## Jak aktualizować treść

Edytuj plik `src/app/page.tsx`:
- **Produkty** — tablica `products` w komponencie `Products`
- **Zdjęcia** — zamień URL-e Unsplash na własne
- **Opinie** — tablica `reviews` w komponencie `Reviews`
- **Kategorie** — tablica `cats` w komponencie `Categories`

Po zmianach:
```bash
git add .
git commit -m "Aktualizacja produktów"
git push
```
Vercel automatycznie wdroży zmiany w ciągu ~60 sekund.

---

## Struktura projektu

```
notodom-outlet/
├── src/
│   └── app/
│       ├── layout.tsx      ← meta tagi, fonty, SEO
│       ├── page.tsx        ← cała strona (komponenty)
│       └── globals.css     ← wszystkie style
├── public/                 ← zdjęcia (wrzuć tu własne)
├── package.json
├── next.config.js
└── tsconfig.json
```
