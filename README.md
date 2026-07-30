# Portfolio - KAVEGE Akou Amélie

Portfolio personnel moderne et animé présentant mes compétences en développement web et mobile.

## 🚀 Technologies utilisées

- **Framework**: Next.js 16 (React 19, Turbopack)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Langage**: TypeScript 6
- **Déploiement**: Vercel
- **Icônes**: Lucide React (+ icônes de marques SVG dans `components/ui/BrandIcons.tsx`)
- **Formulaire**: EmailJS

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation intuitive
- ✅ Pages dédiées : Accueil, À propos, Compétences, Projets, Parcours, Contact
- ✅ Formulaire de contact
- ✅ Timeline animée
- ✅ Cartes de projets interactives
- ✅ Performance optimale (images WebP compressées)
- ✅ SEO friendly (sitemap, robots.txt, Open Graph, JSON-LD)
- ✅ Accessible (labels ARIA, navigation clavier, prefers-reduced-motion)

## 📦 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/KAVEGEAmelie/mon_portfolio.git
cd mon_portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
cp .env.local.example .env.local
# puis remplir les clés EmailJS et l'URL du site (voir CONFIGURATION-EMAIL.md)
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

5. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🏗️ Structure du projet

```
portfolio-amelie/
├── app/
│   ├── about/          # Page À propos
│   ├── contact/        # Page Contact
│   ├── journey/        # Page Parcours
│   ├── projects/       # Page Projets
│   ├── skills/         # Page Compétences
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/
│   ├── sections/       # Composants de sections
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/            # Composants UI réutilisables
├── public/
│   ├── images/        # Images
│   └── icons/         # Icônes
├── tailwind.config.ts # Configuration Tailwind
├── next.config.js     # Configuration Next.js
└── package.json       # Dépendances
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.ts`:
- Violet primaire: `#a855f7` (primary-500)
- Nuances personnalisées de violet disponibles (primary-50 à primary-950)

### Polices
- **Titres**: Space Grotesk / Sora
- **Texte**: Outfit
- **Signature**: Dancing Script

## 📱 Pages

1. **Accueil** - Hero section avec présentation et statistiques
2. **À propos** - Présentation détaillée et valeurs
3. **Compétences** - Technologies et soft skills avec barres de progression
4. **Projets** - Portfolio de projets avec détails et liens
5. **Parcours** - Timeline interactive du parcours académique et professionnel
6. **Contact** - Formulaire de contact et informations

## 🚀 Déploiement sur Vercel

1. **Push sur GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Déployer sur Vercel**
- Se connecter sur [vercel.com](https://vercel.com)
- Importer le repository GitHub
- Vercel détectera automatiquement Next.js
- Cliquer sur "Deploy"

## 🔧 Scripts disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Build de production
npm run start    # Lancer le build de production
npm run lint     # Vérifier le code
```

## 📈 Améliorations futures

- [ ] Intégration EmailJS pour le formulaire de contact
- [ ] Mode sombre
- [ ] Multilingue (FR/EN)
- [ ] Blog personnel
- [ ] Google Analytics
- [ ] Tests automatisés

## 📄 Licence

© 2024 KAVEGE Akou Amélie - Tous droits réservés

## 📞 Contact

- **Email**: contact@amelie.dev
- **GitHub**: [@amelie](https://github.com/amelie)
- **LinkedIn**: [Amélie KAVEGE](https://linkedin.com/in/amelie)

---

Fait avec ❤️ par Amélie KAVEGE
"# mon_portfolio" 
