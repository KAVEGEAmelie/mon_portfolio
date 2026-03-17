# Guide de Démarrage Rapide 🚀

## Pour commencer immédiatement

### 1. Installation rapide
```bash
npm install
npm run dev
```

Votre portfolio sera accessible sur `http://localhost:3000`

### 2. Personnalisation rapide

#### A. Informations personnelles
Remplacez dans les fichiers suivants :
- `app/layout.tsx` : Metadata (titre, description)
- `components/sections/Footer.tsx` : Liens sociaux
- `app/contact/page.tsx` : Email, téléphone, localisation

#### B. Projets
Modifiez le tableau `projects` dans `app/projects/page.tsx` avec vos vrais projets.

#### C. Parcours
Adaptez `timelineData` dans `app/journey/page.tsx` avec votre parcours.

#### D. Compétences
Personnalisez `skillsData` dans `app/skills/page.tsx` avec vos compétences.

### 3. Déploiement rapide sur Vercel

```bash
# 1. Push sur GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin VOTRE_REPO_GITHUB
git push -u origin main

# 2. Sur vercel.com
# - Connectez votre compte GitHub
# - Importez le repository
# - Cliquez sur "Deploy"
```

C'est tout ! Votre portfolio sera en ligne en quelques minutes.

## Personnalisations avancées

### Couleurs
Modifiez `tailwind.config.ts` pour changer le thème de couleurs.

### Polices
Changez les polices dans `app/layout.tsx` (Google Fonts).

### Animations
Ajustez les animations dans chaque page avec Framer Motion.

## Support

Pour toute question, consultez le README.md principal ou contactez-moi !
