import propiedadesVenta from "./propiedades_venta.js"
const mostrarPropiedadesVenta = () => {
    const container = document.getElementById("soloPropiedadesVenta")
    propiedadesVenta.forEach((propiedad)=> {
        const card = document.createElement("div")
        card.className= "col-mb-a mb-4"
        card.innerHTML = `
        <div class ="card">
        <img
        src ="${propiedad.src}"
        class= "card-img-top"
        alt ="Imagen de la propiedad"
        />
        <div class ="card-body">
        <h5 class= "card-title">${propiedad.nombre}</h5>
       <p class= "card-text">${propiedad.descripcion}</p> 
       <p>
       <i class = "fas fa-bed"></i> ${propiedad.habitaciones}
       <i class = "fas fa-bath"></i> ${propiedad.baños} <br> 
       <i class = "fas fa-dollar-sign"></i> ${propiedad.costo} <br>
      
       <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
 
             ${propiedad.smoke ? 
                     `<p class="text-success"><i class="fas fa-smoking"></i> Se permite fumar</p>` : 
                     `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                 ${propiedad.pets ? 
                     `<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>` : 
                     `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
        </div>
        </div> 
        `;
        container.appendChild(card)
    })
};
mostrarPropiedadesVenta()