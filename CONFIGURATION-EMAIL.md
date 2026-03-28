# Configuration EmailJS - Formulaire de Contact

## 📧 Étapes pour activer l'envoi d'emails

### 1. Créer un compte EmailJS (gratuit)
- Allez sur : https://www.emailjs.com/
- Créez un compte gratuit
- Vous aurez droit à 200 emails/mois gratuitement

### 2. Configuration Gmail
1. **Connecter votre Gmail** (kavegeamelie@gmail.com)
2. **Créer un Service** :
   - Choisir "Gmail" comme service
   - Connecter avec votre compte Gmail
   - Noter le **Service ID** (ex: "service_abc123")

### 3. Créer un Template Email
1. **Aller dans Templates**
2. **Create New Template**
3. **Copier ce contenu** :

```
Subject: {{subject}} - Contact Portfolio

Bonjour Amélie,

Vous avez reçu un nouveau message de votre portfolio :

De: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. **Noter le Template ID** (ex: "template_xyz789")

### 4. Obtenir la Public Key
1. **Account → API Keys**
2. **Noter votre Public Key** (ex: "user_abc123456789")

### 5. Configuration du Code
Dans `app/contact/page.tsx`, remplacez :
- `YOUR_SERVICE_ID` → votre Service ID
- `YOUR_TEMPLATE_ID` → votre Template ID  
- `YOUR_PUBLIC_KEY` → votre Public Key

### 6. Installation (quand espace disque libre)
```bash
npm install @emailjs/browser
```

### 7. Test
- Redémarrez votre serveur : `npm run dev`
- Testez le formulaire
- Vous devriez recevoir l'email sur kavegeamelie@gmail.com

## ⚙️ Configuration Alternative (si problème)

### Formspree (plus simple)
1. Allez sur : https://formspree.io/
2. Créez un compte
3. Créez un formulaire avec votre email

Dans le formulaire HTML, changez juste l'action :
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🔒 Sécurité
- Vos clés EmailJS sont publiques (normal pour frontend)
- EmailJS protège contre le spam automatiquement
- Limite de 200 emails/mois en gratuit

## ❓ Support
Si problème : amelie -> documentation EmailJS ou contactez-moi !