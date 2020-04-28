# GESTION DES EVENEMENTS

l'utilisateur fait ce qu'il veut

nos écouteurs écoute ce que fait l'utilisateur

en fonction de ce qu'il fait les écouteurs exécutent le code en fonction des évènement déclenchés par l'utilisateur. 

> POSER DES ECOUTEURS
> LIER LES ECOUTEURS A DES OBJETS SUR LECRAN (la plupart du temps)
> LIER LES ECOUTEURS A DES FONCTIONS

UN ECOUTEUR EST LIE A UN OBJET ET UNE FONCTION

UN ECOUTEUR NE SAIT ECOUTER QUUN SEUL ET UNIQUE EVENEMENT

# IL EXISTE 3 FACONS EN JAVASCRIPT POUR ECOUTER

>
élément.onClick = fonction
pas mettre les parentheses sur la fonction. seulement le nom de la fonction.

>
élement.onclick = fonction() {
    action
    action
    action
}

> LA BONNE MANIERE DE FAIRE C'EST
élément.addEventListener(type, nom d'une fonction)
function nomd'unefonction() {
    action
    action
    action
}

# EXEMPLE CONCRET
    
                    LE PRINCIPE
3 Fonction pour afficher un messge lors de la frappe d'une touche
2 Fonction pour mettre un écouteur clavier lié à la page
1 Lancement du système lorsque la page est chargée

```
// 1 Lancement du système lorsque la page est chargée
window.onload = ecouteurClavier;

// 2 Fonction pour mettre un écouteur clavier lié à la page
function ecouteurClavier(){
    document.addEventListener("keypress", messageSurToucheActive);
}

// 3 Fonction pour afficher un messge lors de la frappe d'une touche
function messageSurToucheActive(){
    alert("Clavier actif");
}

```