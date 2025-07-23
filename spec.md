# movie-app – spec.md

## Fonctionnalités principales

- Recherche en direct de films via une barre de recherche
- Affichage des résultats sous forme de cartes films (affiche, titre, note)
- Chargement dynamique des données via l’API TMDb
- Animation de chargement (spinner) pendant les requêtes API
- Interface responsive mobile-first
- Effets visuels au survol des cartes films
- Attribution TMDb en footer

## Composants UI

- Header avec titre centré
- Input de recherche avec placeholder
- Grille responsive pour les cartes films
- Cartes films avec image, titre, note
- Footer avec attribution TMDb
- Spinner de chargement

## APIs / Assets

- The Movie Database API (TMDb) pour récupérer les données films
- Images posters depuis TMDb via URL

## Fonctions JavaScript clés

- `fetchMovies(query)` : récupère les films correspondant à la recherche
- `displayMovies(movies)` : affiche dynamiquement les films dans la grille
- `showLoader()` / `hideLoader()` : affichage du spinner de chargement
- Gestion d’événement `input` sur la barre de recherche

## Améliorations prévues

- Ajout de tri par note ou genre
- Pagination des résultats
- Gestion des erreurs et messages utilisateurs
- Accessibilité améliorée (clavier, lecteur d’écran)