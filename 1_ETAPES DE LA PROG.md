# ANALYSER & FORMULER
    > analyser un problème
    > formuler le problème grâce aux tables de décisions sous formes schématique = donne les outils

# MACONNER = PROGRAMMATION
    > les bases
        - c'est quoi un langage
        - c'est quoi une constante, une variable
        - c'est quoi une conditions
        - c'est quoi un opérateurs arithmétique
    > l'organisation du code
        - structurer le code
        - commenter son code
        - POO
    > les interactions
        - interactions de l'utilisateur (formulaires, traiter etc.)
        - gérer tous les évènements
    > les erreurs
        - erreurs de syntaxes
        - erreurs de logiques


--------------------------------------------

# CACHIER DES CHARGES

1. l'utilisateur exprime sur le papier ce qu'il souhaite
2. ensuite l'analyste décompose le CDC en processus et chaque processus en opérations élémentaires
3. le programmeur transforme chaque élément de l'analyse en série d'instruciton que doit exécuter la machine

 ## OUTIL DE L'ANALYSTE

 > ORGANIGRAMME (représente les opérations d'une procesus simple)

 > TABLES DE DECISIONS (processus complexe, permet de visualiser toutes les actions possibles face à un nombre de conditions)

### TABLES DE DECISION
* VOIR 3_TABLES DE CONDITIONS.xlsx

CONDITIONS / ACTIONS / REGLES 

### ORGANIGRAMMES
opération obligatoire !!

> les symboles vitaux de l'organigramme:
* rectangle : indique un traitement (ACTION)

* rectangle : avec 2 barres aux extrémités = fonction

* rectlange bisauté : indique une Entrée - Sortie d'information = à cet endroit précis on doit mettre à disposition de l'utilisateur ex : un formulaire / une zone de texte / etc etc pour que l'user saisisse des données

* losange = conditions !! : Lorsqu'il y a un choix à effectuer. On dessine le losange avec 2 sorties, OUI et NON. en fonction de la condition exprimé indique quel traitement utiliser. 

> les symboles auxiliaires de l'organigramme:
* rectangle au bord arrondie : indique un début, une fin ou l'interruption.

* cerle : indique un renvoi. Dans le cercle on écrit le numéro de page qui nous renverra au document ou voir la suite de notre organigramme.

* un crochet : indique un commentaire

* 2 barres parallèles : indiques que l'ordinateur doit effectuer plusieurs opérations en même temps. 


>> MOINS IL Y A DE CASES DANS NOTRE ORGANIGRAMME MOINS IL Y A DE LIGNE DE CODE.

## PSEUDO CODE
> permet de clarifier par écrit le processus. 

TABLE DE DECISION >>> ORGANIGRAMME >>> PSEUDO CODE :

si rayon <= 20 kms donc 
    si total HT > 800 € donc
        (Action) affiche franco de port      R1
    sinon   
        affiche forfait de 30 €     R2
sinon 
    si total HT > 800 € donc 
        affiche forfait 30 €        R2
    sinon
        affiche forfait 50 €        R4


