# TABLEAUX

plusieurs valeurs dans 1 variable tableau


## OBS : C'EST QUOI UN OBJET 
bloc de code pré écrit intégré au langage qu'on emploie.
il contient des propriétés et des méthodes qui interagissent avec l'objet.

> propriété(s)
> méthode(s)

## PROPRIETES DES TABLEAUX

var uneChaine = "Une phrase simple.";
alert(uneChaine.length);
> résultat qui s'affiche est 18

var unTableau = [10, 20, "test", vrai, 99];
aler(unTableau.length);
> résultat qui s'affiche est 5
> OBS, on peut mettre différents types de valeurs dans un tableau.

Une propriété s'applique à un objet et donne l'information propre à l'objet.

Une propriété sont donc des variables qui appartiennent à un objet.

> unObjet.unePropriété // appel à une propriété
uneChaine.length;

## METHODES DES TABLEAUX

Les méthodes sont des fonctions qui appartiennent à un objet. 

> unObjet.uneMethode() // appel à une méthode
uneChaine.toUpperCase();

Quelques méthodes pour les tableaux en Javascript :
unTableau.reverse(); // inversé les index, les derniers deviennent les premiers
unTableau.sort(); // permet de trier les différentes valeurs
unTableau.join(); // permet de joindre 2 tableaux
unTableau.push(123); // rajouter la valeur 123 au tableau
var dernierItem = unTableau.pop(); // le dernier index du tableau est retiré de ce dernier et va se stocker dans le dernierItem. 


var unTableauLine = document.getElementByTagName("a");
> a permet de faire les liens dans HTML. Permet ainsi de récupérer tous les liens de la page dans unTableauLine

## PARCOURIR UN TABLEAU

```
unTableau = [10, 20, "test", VRAI, 99];
var i = 0;
while (i< unTableau.length) {
    alert("la valeur est :" + un tableau[i]);
    i++;
}
```

## TABLEAUX MULTI DIMENSIONNELS

```
var noms = new Array("Dupont", "Truel", "Marconi");
var prenoms = new Array("jean", "pierre", "paolo");
var monTableau = new Array(nom, prenoms);

alert(monTableau[0,2]);
```

## DONNEES AUTORISEES DANS UN TABLEAU

ici en Javascript on peut mélanger le types de valeurs. Ce n'est pas le cas dans tous les langages. Il faudra dès lors typer le tableau.

## TAILLE FIXE / MODIFIER LA TAILLE DES TABLEAUX
> taille variable => souple à l'utilisation
> taille fixe => manipuler bcp plus rapidement par l'ordinateur mais moins souple

# TABLEAU ASSOCIATIFS

les index sont automatiquement 0 1 2 3 4 5 mais on peut dans certains langages déterminer grâce au tableau associatifs l'index que l'on souhaite, exemple : a b c d e, ou AL AK AZ AR etc pour indiquer des pays par ex. 

