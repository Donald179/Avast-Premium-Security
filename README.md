# Digital Support Tech — Landing Page Avast Premium Security

Landing page professionnelle de vente pour le service d'**installation et d'activation d'Avast Premium Security** commercialisé par **Digital Support Tech**.

**Prix :** 5 000 FCFA  
**Appareils :** PC Windows & Android  
**Prestation :** 100 % en ligne

---

## Structure du projet

```text
digital-support-avast/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   └── og-cover.svg
│   └── icons/
│       └── favicon.svg
└── README.md
```

---

## Technologies

- HTML5 sémantique
- CSS3 (design system custom)
- JavaScript Vanilla
- Bootstrap 5 (CDN)
- Bootstrap Icons (CDN)

Aucun framework JS lourd, aucun backend, aucune base de données. Compatible **GitHub Pages**.

---

## Déploiement sur GitHub Pages

### 1. Créer un repository GitHub

1. Connectez-vous à [GitHub](https://github.com).
2. Cliquez sur **New repository**.
3. Nommez-le par exemple : `digital-support-avast`.
4. Laissez-le **public** (requis pour GitHub Pages gratuit).
5. Ne cochez pas « Add a README » si vous allez pousser ces fichiers.

### 2. Ajouter les fichiers

**Option A — via l'interface GitHub**

1. Ouvrez le repository.
2. Cliquez sur **Add file → Upload files**.
3. Glissez-déposez tout le contenu du dossier `digital-support-avast/` (index.html, css/, js/, assets/, README.md).
4. Validez l'upload.

**Option B — via Git en local**

```bash
cd digital-support-avast
git init
git add .
git commit -m "Initial commit — landing Avast Premium Security"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/digital-support-avast.git
git push -u origin main
```

### 3. Activer GitHub Pages

1. Allez dans **Settings → Pages**.
2. Sous **Build and deployment → Source**, sélectionnez **Deploy from a branch**.
3. Branche : **main** (ou `master`).
4. Dossier : **/ (root)**.
5. Cliquez sur **Save**.

### 4. Récupérer l'URL publique

Après quelques minutes, votre site sera accessible à :

```text
https://VOTRE_USERNAME.github.io/digital-support-avast/
```

### 5. Mettre à jour le lien canonique (SEO)

Dans `index.html`, remplacez l'URL canonique et les balises Open Graph par votre URL GitHub Pages réelle :

```html
<link rel="canonical" href="https://VOTRE_USERNAME.github.io/digital-support-avast/">
```

---

## Personnalisation des liens commerciaux

Tous les CTA sont centralisés dans `js/script.js` :

```javascript
const PAYMENT_URL = "https://dejnsyvg.mychariow.shop/prd_t233wmka";

const WHATSAPP_URL =
  "https://wa.me/22655757299?text=Bonjour%20Digital%20Support%20Tech%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20Avast%20Premium%20Security%20%C3%A0%205%20000%20FCFA.";

const EMAIL = "lamiendonaldo179@gmail.com";
```

### Modifier le lien Chariow

1. Ouvrez `js/script.js`.
2. Changez la valeur de `PAYMENT_URL`.
3. Committez et poussez vers GitHub.

### Modifier le numéro WhatsApp

1. Ouvrez `js/script.js`.
2. Mettez à jour `WHATSAPP_URL` (format : `https://wa.me/226XXXXXXXX?text=...`).
3. Mettez aussi à jour les numéros affichés dans `index.html` (section contact + footer).

### Modifier l'email

1. Changez `EMAIL` dans `js/script.js`.
2. Mettez à jour l'affichage dans `index.html`.

---

## Fonctionnalités de la page

- Hero section conversion-oriented (prix, badges, double CTA)
- Barre de confiance
- Section problème / enjeux données
- Mini cours cybersécurité (5 menaces)
- Fonctionnalités Avast Premium Security
- Preuve indépendante AV-Comparatives (avec disclaimer)
- Carte d'offre complète
- Processus en 4 étapes
- Pourquoi Digital Support Tech
- Moyens de paiement
- Contact WhatsApp + Email
- FAQ accordéon Bootstrap
- CTA final fort
- Footer légal
- CTA sticky mobile
- Bouton WhatsApp flottant (desktop)
- SEO (title, meta, OG, Twitter, Schema.org, canonical)
- Accessibilité (skip-link, focus, ARIA, reduced-motion)
- Design responsive mobile-first

---

## Test local

Ouvrez simplement `index.html` dans un navigateur, ou servez le dossier :

```bash
# Python
python -m http.server 8080

# Node (si npx disponible)
npx serve .
```

Puis visitez `http://localhost:8080`.

---

## Crédibilité & conformité

Cette landing page respecte une communication **professionnelle et transparente** :

- Pas de fausse garantie de protection à 100 %
- Pas de faux témoignages ni faux compteurs
- Pas de fausses certifications
- Disclaimer sur les tests indépendants
- Offre clairement limitée à **Windows & Android**
- Mentions légales sur les marques Avast

---

## Contact

**Digital Support Tech**

- WhatsApp : [+226 55 75 72 99](https://wa.me/22655757299)
- Email : [lamiendonaldo179@gmail.com](mailto:lamiendonaldo179@gmail.com)

---

© Digital Support Tech — Prestataire indépendant d'assistance informatique à distance.
