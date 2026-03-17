# Opération Black Box

> Rétro-ingénierie de JS minifié avec l'IA comme partenaire de terrain

Une présentation [Reveal.js](https://revealjs.com/) illustrant comment utiliser l'IA (LLM) comme accélérateur pour analyser, comprendre et réécrire du code JavaScript minifié et obfusqué — sans librairies tierces.

---

## Objectifs

- Montrer une **méthode concrète en 3 étapes** (Paste → Ask → Rewrite) pour démystifier du code minifié.
- Démontrer sur un **cas réel** comment l'IA permet de :
  - Identifier un algorithme de chiffrement (AES-CBC) dans du code opaque.
  - Extraire et comprendre la structure d'un blob binaire (en-tête MsgPack + zone chiffrée + payload).
  - Réécrire une dépendance legacy (`asmcrypto.js`, 300 KB) en quelques lignes natives (`crypto.subtle` / WebCrypto).
- Mettre en lumière les **limites** : l'IA propose, l'humain dispose — remplacer une lib éprouvée par du code généré non maîtrisé, c'est échanger une dépendance contre un bug.
- Partager les **bonnes pratiques** tirées de la session :
  - Connaître le domaine pour poser les bonnes questions.
  - Préférer la conversation itérative au prompt unique.
  - Savoir quand ignorer une suggestion de l'IA.

---

## Contenu des slides

| # | Titre | Description |
|---|-------|-------------|
| 01 | Black Box | Titre & contexte |
| 02 | La Mission | Analyser un fichier JS minifié qui fait « quelque chose avec du chiffrement » |
| 03 | La Méthode | PASTE → ASK → REWRITE |
| 04 | Exemple Réel — Couche 1 | Déchiffrement de la clé AES depuis une chaîne binaire |
| 05 | Zéro Dépendance — Natif | asmCrypto → `crypto.subtle` (WebCrypto) |
| 06 | Exemple Réel — Couche 2 | Structure du blob : MsgPack / bloc chiffré / payload |
| 07 | Alternative MsgPack | Quand suivre l'IA… ou pas |
| 08 | Points Forts de l'IA en RE | Reconnaissance, traçage de valeurs, lib→natif, limites |
| 09 | Ce qu'on retient | 5 leçons clés |
| 10 | Bilan de Session | 6 fonctions rétro-ingénierées · −1 dépendance · ~2h vs 1 jour |
| 11 | Dossier Fermé | Questions |

---

## Stack technique

| Outil | Rôle |
|-------|------|
| [Reveal.js](https://revealjs.com/) v6 | Moteur de présentation |
| [Vite](https://vitejs.dev/) v8 | Bundler & serveur de dev |
| TypeScript | Glue code |
| Sass (sass-embedded) | Styles de la présentation |
| Bun | Runtime & gestionnaire de paquets |

---

## Démarrage

```bash
# Installer les dépendances
bun install

# Lancer en mode développement (hot-reload)
bun run dev

# Compiler pour la production
bun run build

# Prévisualiser le build de production
bun run preview
```

La présentation est accessible sur `http://localhost:5173` en mode développement.

