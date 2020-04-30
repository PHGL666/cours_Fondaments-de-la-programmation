# GERER LES ENTREES ET SORTIES DU PROGRAMME

* Accéder à des données externes :
    > permet de mieux interagir avec l'utilisateur
    > permet une mise à jour plus facile des données
    > permet des traitements plus souples

Ces données peuvent être des
    > fichiers texte
    > fichier XML
    > base de données

# EXEMPLE EN JAVASCRIPT
> chercher un fichier texte sur l'ordinateur

Les étapes
3. sur l'évènement "load" afficher le contenu du fichier texte 
2. charger le fichier (grâce à une fonction)
1. créer un bouton parcourir

> créer un bouton parcourir
```
<!Doctype html>
<html>
    <head>
        <title>lire un fichier externe</title>
    </head>

    <body>
        <input type="file" onchange='chargerTexte(this)'/>
        <!-- le this c'est le nom du fichier sur l'ordinateur -->
    </body>
</html>
```

> charger le fichier, créer section script
```
<!Doctype html>
<html>
    <head>
        <title>lire un fichier externe</title>
    </head>

    <body>
        <input type="file" onchange='chargerTexte(this)'/>
    </body>
    <script>
    // fonction qui lance le chargement du fichier
        function chargerTexte(nomfichierTexte){
            // s'il y a un fichier
            if(nomfichierTexte.files && nomfichierTexte.files[0]){
                // création d'un objet FileReader nommé lecteurTexte
                var lecteurTexte = new FileReader();
                // écouteur sur l'évènement chargement du fichier
                lecteurTexte.addEventListener("load",surChargement)
                // lance le chargement du fichier
                lecteurTexte.readAsText(nomfichierTexte.files[0]);
            }
        }
    </script>
</html>
```

> sur l'évènement "load" créer fonction pour afficher le contenu du fichier texte
```
<!Doctype html>
<html>
    <head>
        <title>lire un fichier externe</title>
    </head>

    <body>
        <input type="file" onchange='chargerTexte(this)'/>
    </body>
    <script>

    // fonction qui lance le chargement du fichier
        function chargerTexte(nomfichierTexte){
            // s'il y a un fichier
            if(nomfichierTexte.files && nomfichierTexte.files[0]){
                // création d'un objet FileReader nommé lecteurTexte
                var lecteurTexte = new FileReader();
                // écouteur sur l'évènement chargement du fichier
                lecteurTexte.addEventListener("load",surChargement)
                // lance le chargement du fichier
                lecteurTexte.readAsText(nomfichierTexte.files[0]);
            }
        }

    // fonction qui récupère le fichier après son chargement
        funtion surChargement(cible){
            var sortie=cible.target.result;
            //affiche les lignes du fichier texte qui commence par "@":
            sortie=sortie.split("\n").filter(/./.test, /\@/).join("\n");
            document.write(sortie);
        }
    </script>
</html>
```