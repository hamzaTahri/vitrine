# Vitrine: Instagram kit

## Profile setup
- Photo: `out/profile/avatar.png`
- Name field: `Vitrine | Sites web Maroc` (handle suggestion: `vitrine.ma`, check availability)
- Bio:
  ```
  Sites & apps pour commerces marocains
  Réservation · Commande WhatsApp · FR/AR/Darija
  6 démos en ligne ↓
  ```
- Link: the published portfolio URL (see README at the project root once deployed). Second link: your WhatsApp `https://wa.me/<YOUR_NUMBER>`
- Contact button: WhatsApp
- Highlights (cover files in `out/profile/`): Démos `hl-demos`, Salon `hl-salon`, Resto `hl-resto`, Riad `hl-riad`, Offre `hl-offre`, Contact `hl-contact`. Fill each with the matching reel or post.

## Publishing order (grid reads best from the bottom)
| Day | Format | File | Caption |
|---|---|---|---|
| 1 | Post | `posts/welcome.png` | A |
| 1 | Reel | `reels/salon-jamila.mp4` | B |
| 2 | Carousel | `posts/fb1..fb5.png` | C |
| 3 | Reel | `reels/snack-lmoumen.mp4` | D |
| 4 | Post | `posts/demo-salon-jamila.png` | E |
| 5 | Reel | `reels/riad-nour.mp4` | F |
| 6 | Carousel | `posts/wa1..wa5.png` | G |
| 7 | Post | `posts/offer.png` | H |
| 8 | Reel | `reels/hammam-salam.mp4` | I |
| 9 | Post | `posts/demo-snack-lmoumen.png` | E |
| 10 | Reel | `reels/auto-ecole-najah.mp4` | J |
| 11 | Post | `posts/demo-riad-nour.png` | E |
| 12 | Reel | `reels/meilou.mp4` | K |
| 13 | Posts | `posts/demo-hammam-salam.png`, `demo-auto-ecole-najah.png`, `demo-meilou.png` | E |
| 14 | Story/post | repeat `posts/offer.png` | H |

Stories every day: polls ("Menu papier ou menu digital ?"), a screenshot of a demo with the link sticker, answers to DMs.

## Captions
**A (welcome)**
Votre commerce mérite mieux qu'une page Facebook.
Je crée des sites et apps pour les commerces marocains : réservation en ligne, commande WhatsApp, prix en dirhams, en français, darija, arabe et anglais.
6 démos en ligne, lien dans la bio.
Écrivez « SITE » en message privé.

**B (salon)**
Un salon qui prend ses rendez-vous tout seul.
Le client choisit son soin, son créneau, et la confirmation arrive sur WhatsApp.
Vous avez un salon ou un institut ? Écrivez « SITE » en message privé.

**C (Facebook vs site)**
Page Facebook ou vrai site ? Glissez pour comparer : visibilité sur Google, réservation, identité de marque.
Enregistrez ce post pour y revenir.

**D (snack)**
Un menu digital, un panier, et la commande arrive directement sur WhatsApp.
Restaurateurs, snacks, pâtisseries : écrivez « MENU » en message privé.

**E (showcase)**
Démo : <nom de l'app>. Lien dans la bio pour l'essayer en vrai sur votre téléphone.
Un projet similaire pour votre activité ? Écrivez « SITE ».

**F (riad)**
Un riad qui remplit son calendrier : chambres, disponibilités, nuitées et taxe calculées automatiquement, site en 4 langues.
Écrivez « RIAD » en message privé.

**G (WhatsApp d'abord)**
3 raisons de mettre WhatsApp au centre de votre site. Vos clients vous écrivent déjà là-bas.
Envoyez ce post à un commerçant que vous connaissez.

**H (audit)**
Audit gratuit de votre présence en ligne : page Facebook, avis, Google Maps.
Je vous dis ce qui vous fait perdre des clients. Écrivez « AUDIT » en message privé.

**I (hammam)**
Espaces femmes et hommes avec horaires séparés, 11 soins, forfaits et cartes cadeaux, le tout réservable en ligne.

**J (auto-école)**
Formules, réservation de séances de conduite, suivi de parcours et quiz du code, dans une seule app.

**K (Meilou)**
Une boutique d'amlou et de miels ouverte 24h/24 : 10 produits, panier, livraison offerte dès un seuil, commande WhatsApp.

## Hashtags (use 6 to 8 per post, mix)
- Always: `#maroc #développeurweb #siteweb`
- City, rotate: `#casablanca #marrakech #rabat #tanger #agadir`
- Niche by post: `#salondebeauté #restaurantmaroc #riadmarrakech #hammam #autoécole #artisanatmarocain`
- Business: `#entrepreneurmaroc #pme #digitalmaroc`

## Before you publish
- Demos are hosted separately: see the deployment status in the project README. Do not put the link in the bio until it works.
- Replace `<YOUR_NUMBER>` with your WhatsApp number.
- The reels have no sound: add a trending or royalty-free track in the Instagram editor, and use Instagram auto-captions in French.
- The demos show invented businesses and reviews. Say "démo" in captions (already done), never present them as real clients.

## Regenerating assets
Source files: `posts.html` (posts, avatar, highlights) and `reel.html` (reels). Edit the text in those files and re-render. Render scripts are in `tools/` (they need `puppeteer-core`, Chrome, and the built site served at `http://localhost:8765/developerMe/`; paths inside are specific to this machine).
