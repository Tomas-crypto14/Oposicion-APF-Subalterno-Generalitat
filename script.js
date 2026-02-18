console.log("Hola");

const seleccion = document.getElementById("selector-equipos");
const seleccion2 = document.getElementById("selector-equipos2");

function tema(event){
    const selectTema=event.target.value;
    if(selectTema){
        window.location.href = selectTema
    }
}

seleccion.addEventListener("change", tema);
seleccion2.addEventListener("change", tema);