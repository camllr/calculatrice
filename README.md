# Calculatrice JavaScript (HTML/CSS/JS)

Calculatrice responsive réalisée en **HTML, CSS et JavaScript vanilla** (sans frameworks).

**Objectif** : Maîtriser le DOM, la gestion d'état et le responsive design.

**Démonstration** : [https://camllr.github.io/calculatrice/](https://camllr.github.io/calculatrice/)

---

## Ce que fait le projet

- Calculatrice fonctionnelle dans le navigateur
- Opérations : **+ - × ÷** + nombres décimaux
- **Affichage de l'expression complète** (`1 + 2`) 
- Gestion d'erreurs : **division par zéro**
- **Interface 100% responsive** (mobile/desktop)

---

## Structure du projet

js-calculator/  
├── index.html # Structure (écran + boutons)  
├── styles.css # Layout Grid/Flexbox + responsive  
└── script.js # Logique JS (sans eval())

---

## Évolutions prévues

- Support clavier (chiffres + Entrée)
- Historique des calculs
- Boutons % et +/-
- Tests unitaires (Jest)

---

## Compétences techniques

**JavaScript** :
- Manipulation DOM (`querySelectorAll`, `addEventListener`)
- Gestion d'état (`currentValue`, `previousValue`, `currentOperator`)
- Calculs avec `parseFloat()` + `switch`

**CSS** :
- **Flexbox** pour centrer
- **CSS Grid** pour les boutons
- Responsive avec `max-width`

**Architecture** :
- 3 fichiers séparés
- Code modulaire et documenté
- Déployé sur **GitHub Pages**

---

## Installation

```bash
git clone https://github.com/camllr/calculatrice.git
cd calculatrice
# Ouvrir index.html ou utiliser Live Server

