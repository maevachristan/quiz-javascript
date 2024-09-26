// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE: C'est une ligne de code javascript contenant une valeur, étant elle-même attribuée à une balise html, pouvant être changée autant de fois que voulu à plusieurs endroits en même temps et de façons différentes.

// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const name = "Maëva";
// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 19;
age = 20;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: <div> & <input>
// - Classe(s): "card" & "card-input"
// - Attribut(s): type, name, placeholder, id & class

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: Une class sert à identifier un éléments en particulier dans le code en lui donnant un nom pour le styliser en css, tandis qu'un id sert à faire la même chose mais pour du javascript. 

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: Elle sert à retourner le premier élément correspondant à un selecteur spécifié dans le code. Elle peut être utilisée partout dans le document. Dans le document, elle sert à rechercher dans tout le document.

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
const cardContent = document.querySelector( '.card-content' );
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.


// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
cardContent.classList.add('highlight');
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.

// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).
const input = document.querySelector('input');
input.getAttribute('placeholder');

// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE: Aucune idée.

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
const button = document.querySelector('button');
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
