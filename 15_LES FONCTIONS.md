# LES FONCTIONS
> bloc de code réutilisable
> identifié par son nom
> peut contenir des paramètres (des variables)

            function nom()      function nom(param)     function nom(param)
FONCTION    code                code                    code
            code                code                    code
            code                code                    return var

APPEL       nom()               nom(param)              var = nom(param)


return permet de récupérer la valeur dans la variable définie à la fin, var =



# FONCTIONS AVEC PARAMETRES
```
function    uneFonction (x, y) {
    var uneVariable = x*y;
    alert(uneVariable);

}

uneFonction(5,10);
```

# FONCTIONS AVEC PARAMETRES ET RETOUR
```
function    uneFonction (x, y) {
    var uneVariable = x*y;
    alert(uneVariable);
    // il est possible de retourner des valeurs
    return uneVariable
}

var resultat = uneFonction(5,10);
alert(resultat); // égal 30
```

# SUIVRE L'ORDRE DES PARAMETRES
```
function calculPret(montant,mois,interet,nom){

}
calculPret(10000,60,7,"Pierre Leroux"); // c'est bon
calculPret(10000,60,7,"Pierre Leroux","Et en plus"); // et en plus est ignoré
calculPret(10000,60); // les parametres manquants vont etre remplacé par "undefined" en javascript
```

# LA PORTEE DES VARIABLES

> portée locale = déclarée dans une fonction

> portée globale = déclarée en dehors d'une fonction, accessible dans tout le code
