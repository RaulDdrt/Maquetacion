jQuery(() =>{

    let total = 0
    let prenda1 = 20
    let prenda2 = 18
    let prenda3 = 22
    let prenda4 = 12

    $("#b1").on("click", ()=>{

        total += prenda3
        $("#añadir").append("<p>Prenda: Cardigan Rayas 22€</p>")
    
    } );

    $("#b2").on("click", ()=>{

        total += prenda4
        $("#añadir").append("<p>Prenda: Minifalda 12€</p>")
    
    } );

    $("#b3").on("click", ()=>{

        total += prenda4
        $("#añadir").append("<p>Prenda: Falda Print 12€</p>")
    
    } );

    $("#b4").on("click", ()=>{

        total += prenda2
        $("#añadir").append("<p>Prenda: Mono 18€</p>")
    
    } );

    $("#b5").on("click", ()=>{

        total += prenda1
        $("#añadir").append("<p>Prenda: Pantalon ancho 20€</p>")
    
    } );

    $("#b6").on("click", ()=>{

        total += prenda3
        $("#añadir").append("<p>Prenda: Pantallon alto 22€</p>")
    
    } );

    $("#b7").on("click", ()=>{

        total += prenda1
        $("#añadir").append("<p>Prenda: Vestido Jersey 20€</p>")
    
    } );

    $("#b8").on("click", ()=>{

        total += prenda1
        $("#añadir").append("<p>Prenda: Vestido tunico 20€</p>")
    
    } );

    $("#carrito").on("click", ()=>{

        
        $("#total").append(total)
    
    } );

}


)