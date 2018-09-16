# 🚀 RN-Infinity 🚀

**0.1.0**

Ce repository contient le code de RN-infinity, un boilerplate pour applications utilisant React et NodeJS. Dans un premier temps, RN-Infinity vous permettra de vous lancer dans un nouveau projet avec la majorité de la configuration effectuée pour vous. Néanmoins j'aimerais que cela devienne plus qu'un simple boilerplate et puisse rajouter diverses couches d'abstraction afin d'accelerer la productivité des développeurs et de leur éviter les tâches les plus pénibles.

## Fonctionalités :

| 📘  | Includes                  |
| :-: | :------------------------ |
|  ⚙  | Babel 7                   |
| 📦  | Webpack 4                 |
|  ⚛  | React 16.4                |
| 💼  | React contextual          |
|  🕸  | CSS Modules               |
| 🎨  | Sass                      |
| 🤖  | Express Server            |
| 💾  | MySQL with Bookshelf ORM  |
| 🔥  | Hot Module Replacement    |
| 🌐  | Internationalization      |
| 📥  | Websockets avec socket.io |
|  🛎  | Server Side Rendering     |
| 🔧  | File Generators           |

## Prérequis

Vous aurez besoin pour utiliser RN-Infinity d'avoir installé au préalable [nodeJS >=9.0](https://nodejs.org/en/) ainsi que [mySQL](https://www.mysql.com).

## Installation

Afin de mettre en place votre environnement de travail, suivez les étapes suivantes:

1.  Depuis le dossier du projet, rendez vous dans `./config`, dupliquez le fichier `.env-sample` et renommez le en `.env`. Remplissez ensuite ce fichier avec vos données de connexion MySQL. Ne modifiez pas le port pour le moment.
2.  Depuis le dossier du projet, rentrez la commande suivante dans un terminal

```shell
npm run setup
```

Cela installera les dépendances du projet, créera la base de données, jouera toutes les migrations (mais vous n'en avez pas pour le moment), construira l'application React et lancera le serveur au port indiqué dans le dossier .env.

3.  Attendez de voir s'afficher "server started on port 8000" dans la conseole, puis ouvrez votre navigateur à l'adresse `http://localhost:8000`, vous devriez voir s'afficher une page 404 contenant le texte "404 Not Found" ainsi que le logo RN-Infinity.

## Scripts NPM

-   `npm start` : lancer le serveur en mode production

-   `npm run dev`: construis l'application en mode development et lance le serveur avec le Rechargement à chaud (HMR). Toute modification de code front-end (dans `./src/client`)entrainera un rebuild de l'appli et uen mise à jour immédiate dans votre navigateur, sans rechargement de page. Toute modification de code back-end ((dans `./src/client`) provoquera un restart du server.

-   `npm run build:prod`: construis l'application front end en mode production. Une fois effectué, ouvrira un onglet dans votre navigateur avec un Bundle Analyzer permettant d'observer la taille des differents fichiers de votre application.

-   `npm run build:dev`: construis l'application front end en mode développement

-   `npm run build:db` : construis la base données, joue toutes les migrations et le seed de la base de données si disponible.

-   `npm run lint` : verifie que votre code adhère aux standards féfinis dans le fichier .eslintrc.json

-   `npm run test` : effectue npm run lint puis, si valdé, joue les tests. Il n'y a pas de test fourni avec RN-Infinity pour le moment.

-   😍 `npm run deploy -- <commit message>` : effectue npm run test, puis effectue successivement git add . , git commit -m"<commit message>" puis git push origin master. ATTENTION: n'oubliez pas de supprimer le dossier .git de ce projet et de connecter votre propre dépot git au préalable.

-   😍 `npm run setup`: effectue successivement npm install, npm run build:db puis npm run dev. Tout en un !

## Générateurs

Vous avez à votre disposition divers générateurs afin d'accélerer votre développement sans avoir à vous occuper de tâches laborieuses comme scaffolder vos fichiers et tout connecter. Les générateurs disponibles sont pour le moment :

### Générateur de CRUD

```shell
npm run generate:crud -- --name=<CRUD name>
```

Le Générateur de CRUD s'occupera de :

-   créer le fichier Controller
-   créer le fichier Model
-   créer les fichiers des routes
-   connectera les routes au routeur principal de l'API

exemple : `npm run generate:crud -- --name=user` génerera UserController.js,
UserModel.js et userRoutes.js.

Par défaut, les modèles sont fournis avec diverses methodes permettant d'effectuer rapidement des opperations simples. Ces operations sont
`findAll(filter, options)`,
`findById(id, options)`,
`findOne(query, options)`,
`create(data, options)`,
`destroy(id, options)`,
`update(data, options)`,

Veuillez vous réferer au fichier `./src/server/models/index.js` pour savoir comment marchent ces méthodes, ainsi qu'à la [documentation de Bookshelf](http://bookshelfjs.org/) pour connaitre les informations disponibles.

Le controlleur généré permettra d'opérer sur toutes ces methodes, et une route pour chaque méthode sera générée.

### Générateur de Page

```shell
npm run generate:page -- --name=<page name>`
```

Le Générateur de Page s'occupera de

-   créer le composant réact de votre page
-   mettre à jour le fichier déclarant vos routes(pages)

exemple: `npm run generate:page -- --name=home` créera le component Home et sera accessible à l'adresse localhost:<port>/home

Il vous est possible d'ajouter le flag root=true à la commande pour que le chemin d'accès à votre page soit simplement "/".

## Fichiers importants

_TODO_

## Remarques

⚠️ : A cause de contraintes avec le rechargement à chaud, l'affichage de la page 404 ne sera pas possible en environnement de développement une fois que vous aurez ajouté des pages à votre application. Elle sera néanmoins bel et bien visible en production.

## RoadMap

Voici les ajouts que j'aimerais apporter prochainement à RN-Infinity:

-   ⚠️ajout de tests
-   ⚠️documentation du code
-   améliorer la gestion des erreurs serveur side
-   code splitting
-   d'autres générateurs (authentification, générateur de crud pour toutes les tables de la base de données)
-   étoffer le boilerplate socket.io
-   ajout de support Font Awesome
-   création d'une application de démonstration
-   une fois tout cela fait, déployer sur npm avec une CLI pour créer un nouveau projet.

## LICENCE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the Software.
