
# LES EXPRESSIONS REGULIERES
permet de contrôler ce que fait un utilisateur ou de formater des choses. 
contrôler la véracité d'un email, la réponse d'un user, qu'un numéro a bien été saisi etc.

> existe dans de nombreux langages
> sont difficiles mais très puissante
> s'applique de la même manière dans tous les langages qui les utilisent

Utiliser les expressions régulière c'est 2 étapes à effectuer :
    1. Définir l'expression
    2. Appliquer l'expression

## CREATION D'UNE EXPRESSION REGULIERE en Javascript

exemple
```
var uneER = /bonjour/;   
// ou
var uneER = new RegExp("bonjour");

var uneChaine = "Est-ce que cette phrase contient le mot bonjour ?";
if (uneER.test(uneChaine)) {
    alert("oui");
}
```

## CREATION DE MOTIFS

```
var uneER = /^bonjour/;
// ^ au début
var uneER = /bonjour$/;
// $ à la fin
var uneER = /bonj+o/;
// + un ou plus
var uneER = /bonj*o/;
// * zero ou plus
var uneER = /bonj?o/;
// ? zero ou un
var uneER = /bonjour|au revoir/;
// | soit ou
var uneER = /bo..o/;
// .. un unique caractère quelconque 
var uneER = /\wponjour/;
// \w caractères alphabétiques minuscules et majuscules, les chiffres et le souligné. Pas de lettre accentuée.
var uneER = /\bbonjour/;
// \b espace, ponctuaction, le début ou la fin d'un mot
var uneER = /brnld]njour/;
// [...] certains caractères.
```
etc

## EXEMPLES COMPLEXES

Contrôle si code postal français avec la corse
```
/^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$/
```

Contrôle si bien téléphone français
```
^0[1-9]([-. ]?[0-9]{2}){4}$/
```