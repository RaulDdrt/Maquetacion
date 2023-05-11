let arrvac = []

function datos() {

    let nombre = document.getElementById("nombre")
    let origen = document.getElementById("origen")
    let destino = document.getElementById("destino")
    let personas = document.getElementById("personas")
    let fecha = document.getElementById("date")

    let informacion = {

        fullname : nombre.value,
        origin : origen.value,
        destiny : destino.value,
        persons : personas.value,
        date : date.value,
    }

    arrvac.push(informacion)
    console.log(informacion)

}

console.log(arrvac)

function hacerTabla(){

    let tabla = document.getElementById("tabla")

    tabla.innerHTML = ""

    let fila1 = document.createElement("tr")
    let colum1 = document.createElement("th")
    let colum2 = document.createElement("th")
    let colum3 = document.createElement("th")
    let colum4 = document.createElement("th")
    let colum5 = document.createElement("th")


    colum1.textContent = "Nombre"
    colum2.textContent = "Lugar de origen"
    colum3.textContent = "Lugar de destino"
    colum4.textContent = "Número de personas"
    colum5.textContent = "Fecha"

    fila1.appendChild(colum1)
    fila1.appendChild(colum2)
    fila1.appendChild(colum3)
    fila1.appendChild(colum4)
    fila1.appendChild(colum5)

    tabla.appendChild(fila1)

    fila1.classList.add("tabla")



    for(let i = 0; i < arrvac.length; i++)
    {
        if(arrvac[i].destiny.toLowerCase() == "canarias" || arrvac[i].destiny.toLowerCase() == "galicia" || arrvac[i].destiny.toLowerCase() == "mallorca"){
        
        
        let nuevafila = document.createElement("tr")

        let newcol1 = document.createElement("th")
        let newcol2 = document.createElement("th")
        let newcol3 = document.createElement("th")
        let newcol4 = document.createElement("th")
        let newcol5 = document.createElement("th")


        newcol1.textContent = arrvac[i].fullname
        newcol2.textContent = arrvac[i].origin
        newcol3.textContent = arrvac[i].destiny
        newcol4.textContent = arrvac[i].persons
        newcol5.textContent = arrvac[i].date


        nuevafila.appendChild(newcol1)
        nuevafila.appendChild(newcol2)
        nuevafila.appendChild(newcol3)
        nuevafila.appendChild(newcol4)
        nuevafila.appendChild(newcol5)


        tabla.appendChild(nuevafila);
        nuevafila.classList.add("tabla")

        }

    }
    
}