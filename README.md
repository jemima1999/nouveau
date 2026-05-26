# AWU TCHE — Frontend

Page Home reproduite fidèlement depuis la maquette Figma.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icônes)

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Déployer sur Vercel (gratuit)

### Option 1 — Via GitHub (recommandée)

1. Pusher ce projet sur GitHub
2. Aller sur [vercel.com](https://vercel.com) → **New Project**
3. Importer le repo GitHub
4. Vercel détecte automatiquement Next.js
5. Cliquer **Deploy** → c'est tout !

### Option 2 — Via CLI

```bash
npm install -g vercel
vercel
```

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx       # Layout global
│   ├── page.tsx         # Page Home (assemble tous les composants)
│   └── globals.css      # Styles globaux + Google Fonts
└── components/
    ├── Navbar.tsx           # Barre de navigation
    ├── Hero.tsx             # Section hero (photos)
    ├── EvenementSpecial.tsx # Section événement
    ├── Tendances.tsx        # Grille produits + filtres
    ├── ExplorerParTissu.tsx # Tags tissus
    ├── Testimonials.tsx     # Témoignages
    ├── PourquoiChoisir.tsx  # Raisons de choisir AWU TCHE
    ├── CouturierCTA.tsx     # Call-to-action couturiers
    └── Footer.tsx           # Pied de page
```

## Prochaines étapes

- [ ] Ajouter l'auth (Supabase)
- [ ] Connecter la base de données (CRUD)
- [ ] Backend FastAPI (Python)
- [ ] Emails (Resend)
