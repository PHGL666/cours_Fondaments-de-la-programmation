# CHAINES DE CARACTERES


## CONCATENATION

le + est une addition mais aussi un concaténateur

## OBS

```
var uneValeur = "55"; // guillemets donc chaîne

var concertir = Number(uneValeur);

if (isNaN(uneValeur)) {
    alert("Ce n'est pas une valeur!");
}

//double négation
if (!isNaN(uneValeur)) {
    alert("C'est une valeur!");
}
```

## OBS1 - un peu de vocabulaire
OBJET(S)
en découle des 
>> PROPRIETE(S) - caractéristique d'un objet
>> METHODES - instruction qui permet d'agir sur l'objet

## Obtenir la taille d'une chaîne avec les propriétés
```
var phrase = "Cest une simple phrase.";
alert(phrase.length);
```

## Transformer le contenu d'une chaîne avec les méthodes
```
var phrase = "Cest une simple phrase.";
alert(phrase.toUpperCase());
```

> une fonction intégré à un objet est une méthode. 
unObjet.uneMethode()

> les propriétés sont des variables qui appartiennent à un objet
unObjet.unePropriété // appel à une propriété

## Comparer des chaînes de caractères entre elles
```
var uneChaine ="Bonjour";
var uneAutreChaine ="bonjour";

if(uneChaine != uneAutreChaine){
    alert("C'est different)"
}

if(uneChaine.toLowerCase() == uneAutreChaine.toLowerCase()){
    alert("C'est pareil");
}
```

## Recherche dans une chaîne // indexOf() lastIndexOf()

```
var phrase ="Les formations video2brain";
var position = phrase.indoexOf("formations");

alert(position);

//retourne -1 si aucune concordance
if(phrase.indexOf("informatique") == -1) {
    alert("Ce mot n'existe pas");
}

// existe aussi méthode lastIndexOf(), lit de droite vers la gauche
```

## Découper une chaîne // slice()

```
var phrase ="video2brain produit cette formation";

var segment = phrase.slice(6,11);
// le résultat sera le mot brain. Attention les 2 paramètres ne se décompte pas de la même manière. Le 1ier prend l'index donc à partir de 0, le 2ième commence à partir de 1.

// existe aussi .substring()  .substr()
```

JOUER AVEC LES CHAINES
```
var phase = "video2brain produit cette formation";

var positionEspaceGauche = phrase.indexOf(" ");

var aGauche = phrase.slice(0, positionEspaceGauche);

var positionEspaceDroit = phrase.lastIndexOf(" ");

var aDroite = phrase.slice(positionEspaceDroit, phrase.length);

alert(aGauche); // video2brain
alert(aDroite); // formation
```
