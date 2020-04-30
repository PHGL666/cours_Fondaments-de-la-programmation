    function debut() {
        premiereFonction();
        //alert("coucou");
    };
    
    function premiereFonction() {
        secondeFonction();
    }
    function secondeFonction() {
        troisiemeFonction();
    }
    function troisiemeFonction(){
        quatriemeneFonction()
    }
    function quatriemeneFonction(){
        titrePage.innerHTML = "Clic sur le titre !";
    }
    
    // récupère le titre
    var titrePage = document.getElementById("titre");
    // ajout d'un ecouteur sur le clic
    titrePage.addEventListener("click", debut);