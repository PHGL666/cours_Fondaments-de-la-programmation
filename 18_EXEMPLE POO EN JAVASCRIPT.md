 # OBJET DATE EN JAVASCRIPT

```
var dteActuelle = new Date(); // dteActuelle = objet.  Date() = la classe
var uneDate = new Date(2014,0,1);
var uneDate = new Date(2014,0,1,0,0,0); // année mois jour heure minute seconde

dteActuelle.getMonth();     // retourne 0-11, ici 0 donc janvier
dteActuelle.getFullYear();  // AAAA
dteActuelle.getDate();      // 1-31 jours du mois
dteActuelle.getDay();       // 0-6 jour de la semaine. 0 pour dimanche.
```

```
var dteActuelle = new Date();

dteActuelle.setMonth(5);
dteActuelle.setFullYear(2012);
dteActuelle.setDay(0);
```

# OBJET MATH EN JAVASCRIPT

```
var x = 200.6; // primitive

// utilisation de la primitive dans l'objet math
var y = Math.round(x);      // 201

var a = 200, b = 1000, c = 4;
var plusGrand = Math.max(a,b,c);
var plusPetit = Math.min(a,b,c);

Math.PI     Math.random()       .sqrt()      .log()
```

# CLASSES ET OBJETS EN JAVASCRIPT

Array
RegExp
Date
Math
etc. 
