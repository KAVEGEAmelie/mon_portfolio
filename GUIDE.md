# 📘 Guide de Personnalisation & Déploiement

## 🎨 Personnalisation du Design

### Changer les couleurs

**Fichier** : `tailwind.config.ts`

#### Mode Clair
```typescript
light: {
  primary: "#A78BFA",      // Votre violet principal
  secondary: "#C4B5FD",    // Votre violet secondaire
  accent: "#DDD6FE",       // Accent
  gold: "#F59E0B",         // Couleur accent (or/jaune)
  // ...
}
```

#### Mode Sombre
```typescript
dark: {
  primary: "#8B5CF6",      // Votre violet vibrant
  secondary: "#7C3AED",    // Votre violet profond
  accent: "#A855F7",       // Accent
  neon: "#C084FC",         // Néon
  // ...
}
```

### Changer les polices

**Fichier** : `app/globals.css`

Remplacez les polices Google Fonts :
```css
@import url('https://fonts.googleapis.com/css2?family=VotrePoliceTitre&family=VotrePoliceTexte&display=swap');
```

Puis dans `tailwind.config.ts` :
```typescript
fontFamily: {
  'display-light': ['"VotrePoliceTitre"', 'serif'],
  'body-light': ['"VotrePoliceTexte"', 'sans-serif'],
  // ...
}
```

## ✏️ Modifier le Contenu

### Informations Personnelles

#### Page d'accueil (`app/page.tsx`)
```typescript
// Ligne ~84
<h1>Bonjour, je suis <span>VOTRE NOM</span></h1>

// Ligne ~95
<p>Développeuse Web & Mobile</p>

// Ligne ~112
<p>Votre description personnelle...</p>
```

#### Page À propos (`app/about/page.tsx`)
```typescript
// Ligne ~75
<p>Votre histoire personnelle...</p>

// Ligne ~28-42 - Vos passions
const passions = [
  {
    icon: Code2,
    title: 'Votre Passion 1',
    description: 'Description...',
  },
  // ...
];
```

### Compétences (`app/skills/page.tsx`)

```typescript
// Ligne ~7-45
const skillsData = {
  'Catégorie 1': [
    { name: 'Compétence 1', level: 90 },
    { name: 'Compétence 2', level: 85 },
  ],
  // Ajoutez vos catégories et compétences
};
```

### Projets (`app/projects/page.tsx`)

```typescript
// Ligne ~8-68
const projects = [
  {
    id: 1,
    title: 'Nom du Projet',
    category: 'Catégorie',
    description: 'Description du projet',
    tech: ['Tech1', 'Tech2'],
    github: 'https://github.com/username/repo',
    demo: 'https://demo-url.com',
    featured: true, // Projet en vedette
  },
  // Ajoutez vos projets
];
```

### Parcours (`app/journey/page.tsx`)

```typescript
// Ligne ~7-51
const journeyData = [
  {
    year: '2024',
    type: 'education', // ou 'experience' ou 'project'
    title: 'Votre Diplôme/Poste',
    institution: 'Institution',
    description: 'Description...',
    icon: GraduationCap, // ou Briefcase, Award
  },
  // Ajoutez votre parcours
];
```

### Contact (`app/contact/page.tsx`)

```typescript
// Ligne ~36-50
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'votre.email@example.com',
    href: 'mailto:votre.email@example.com',
  },
  // Modifiez vos informations
];
```

## 🖼️ Ajouter des Images

### Images de profil

1. **Créer le dossier**
```bash
mkdir -p public/images
```

2. **Ajouter vos images**
- `public/images/profile.jpg` - Photo de profil
- `public/images/hero-bg.jpg` - Image d'arrière-plan
- `public/images/projects/` - Images de projets

3. **Utiliser dans le code**
```typescript
import Image from 'next/image';

<Image 
  src="/images/profile.jpg" 
  alt="Amélie KAVEGE"
  width={500}
  height={500}
/>
```

### Optimisation des images

Next.js optimise automatiquement les images. Formats recommandés :
- JPG pour les photos
- PNG pour les logos/icônes
- WebP pour une meilleure compression

## 🌐 Réseaux Sociaux

### Footer (`components/ui/Footer.tsx`)

```typescript
// Ligne ~9-14
const socialLinks = [
  { icon: Github, href: 'https://github.com/VOTRE_USERNAME', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/VOTRE_PROFIL', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:VOTRE_EMAIL', label: 'Email' },
  { icon: Camera, href: 'LIEN_PORTFOLIO_PHOTO', label: 'Photographie' },
];
```

## 🚀 Déploiement Vercel - Guide Détaillé

### Étape 1 : Préparer le Projet

```bash
# 1. Vérifier que tout fonctionne localement
npm run dev

# 2. Tester le build
npm run build

# 3. Tester le build en local
npm start
```

### Étape 2 : GitHub

```bash
# 1. Créer un nouveau repository sur GitHub
# 2. Initialiser Git localement
git init
git add .
git commit -m "Initial commit - Portfolio Amélie KAVEGE"

# 3. Lier au repository GitHub
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

#### Option A : Via le site web (Recommandé)

1. **Se connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Créer un compte ou se connecter avec GitHub

2. **Importer le projet**
   - Cliquer sur "New Project"
   - Sélectionner "Import Git Repository"
   - Choisir votre repository GitHub

3. **Configuration**
   - Framework Preset : Next.js (détecté automatiquement)
   - Build Command : `next build` (défaut)
   - Output Directory : `.next` (défaut)
   - Cliquer sur "Deploy"

4. **Attendre le déploiement**
   - Vercel va build et déployer automatiquement
   - Vous recevrez une URL : `votre-projet.vercel.app`

#### Option B : Via CLI

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
vercel

# Suivre les instructions :
# - Set up and deploy? Yes
# - Which scope? Votre compte
# - Link to existing project? No
# - Project name? portfolio-amelie
# - Directory? ./
```

### Étape 4 : Domaine Personnalisé (Optionnel)

1. **Acheter un domaine** (sur Namecheap, Google Domains, etc.)

2. **Dans Vercel**
   - Aller dans Project Settings
   - Section "Domains"
   - Cliquer "Add Domain"
   - Entrer votre domaine : `amelie-kavege.com`

3. **Configurer le DNS**
   - Vercel vous donnera des instructions
   - Ajouter les enregistrements DNS chez votre registrar

## 📧 Configurer EmailJS

### Étape 1 : Créer un compte

1. Aller sur [EmailJS](https://www.emailjs.com/)
2. Créer un compte gratuit

### Étape 2 : Configurer le service

1. **Ajouter un service email**
   - Connecter Gmail, Outlook, etc.
   - Copier le "Service ID"

2. **Créer un template**
   - Aller dans "Email Templates"
   - Créer un nouveau template
   - Utiliser ces variables :
     ```
     Nom: {{name}}
     Email: {{email}}
     Sujet: {{subject}}
     Message: {{message}}
     ```
   - Copier le "Template ID"

3. **Obtenir la Public Key**
   - Aller dans "Account" > "API Keys"
   - Copier la "Public Key"

### Étape 3 : Intégrer dans le projet

1. **Installer EmailJS**
```bash
npm install @emailjs/browser
```

2. **Créer un fichier `.env.local`**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

3. **Modifier `app/contact/page.tsx`**
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )
  .then(() => {
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', subject: '', message: '' });
  })
  .catch((error) => {
    console.error('Erreur:', error);
    alert('Erreur lors de l\'envoi du message');
  });
};
```

4. **Ajouter les variables d'environnement sur Vercel**
   - Aller dans Project Settings
   - Section "Environment Variables"
   - Ajouter vos 3 variables

## 🎯 SEO & Analytics

### Google Analytics

1. **Créer un compte GA4**
2. **Installer le script**

```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Métadonnées SEO

Déjà configuré dans `app/layout.tsx` - personnalisez :
```typescript
export const metadata: Metadata = {
  title: "Votre Nom - Votre Titre",
  description: "Votre description",
  // ...
};
```

## 🔧 Maintenance

### Mises à jour

```bash
# Mettre à jour les dépendances
npm update

# Vérifier les vulnérabilités
npm audit

# Corriger les vulnérabilités
npm audit fix
```

### Sauvegarde

```bash
# Faire des commits réguliers
git add .
git commit -m "Description des modifications"
git push
```

## 💡 Conseils

1. **Testez localement** avant de déployer
2. **Commitez souvent** pour avoir un historique
3. **Utilisez des branches** pour tester de nouvelles fonctionnalités
4. **Optimisez les images** avant de les ajouter
5. **Testez sur mobile** pour vérifier la responsivité

---

Besoin d'aide ? Consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
