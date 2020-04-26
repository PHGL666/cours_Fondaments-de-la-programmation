# CONDITIONS

la condition c'est toujours la réunion de 3 éléments :

    1                   2                   3
VARIABLE    Opérateurs de comparaison   VALEUR
CONSTANTE   == === < > <= >= !=         FORMUTE
FORMULE                                 VARIABLE
                                        CONSTANTE


## SI ... DONC
> SI CONDITION DONC ACTION

## SI ... DONC ... SINON
> SI CONDITION DONC ACTION SINON ACTION

## LA NON CONDITION (la condition que l'on souhaite inversée)
>  SI NON CONDITION DONC ACTION

s'exprime avec " ! "

## LES CONDITIONS IMBRIQUEES
> SI CONDITION DONC *ACTION SINON ACTION
                    *=> SI CONDITION DONC ACTION SINON ACTION

* JAVASCRIPT
if ( genre == "femme") {
    if (nbEnfant >= 2 ) {
        alert("prime 150€");
    } else {
        alert("pas de prime");
    }
} else{
    alert("pas de prime");
}

## CONDITION ET CONDITION : &&
> SI CONDITION ET CONDITION DONC ACTION SINON ACTION

## CONDITION OU CONDITION : ||
> SI CONDITION OU CONDITION DONC ACTION SINON ACTION

## CONDITION SWITCH CASE
test la valeur :

SWITCH (VARIABLE)
    CASE VALEUR
        ACTION
        BREAK
    CASE VALEUR
        ACTION
        BREAK
    DEFAULT
        ACTION

    
