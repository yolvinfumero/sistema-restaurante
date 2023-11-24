//selecionamos todos os botones 
const carrito = document.querySelector('.cont-dos');

const botonesAgregar = document.querySelectorAll('.agregar');

const iconoCarrito = document.querySelector('.icono-carrito');

//procesamos a cadaa uno de los botones
botonesAgregar.forEach(Elem => {
    
    //aqui le damos un evento a cada uno de ellos

    Elem.addEventListener('click', (e) => {
        const elemento = e.currentTarget.parentNode;

        //selecionamos la informacion de la tarjeta
        let imagen = elemento.querySelector('img').src
        let descripcion = elemento.querySelector('.descripcion').innerText;
        let precio = elemento.querySelector('.precio').innerText;

        //creaamos el elemto y lo adjuntamos al carrito

        let itemCarrito = document.createElement('div');
        itemCarrito.classList.add('contenedor-compra');
        itemCarrito.innerHTML = `<div class="compra">
        <img src="${imagen}" alt="" class="imagen-carrito">
    </div>

    <div class="descripcion">
        <h3>${descripcion} ${precio}</h3>
    </div>

    <div class="papelera">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    </div>`;

    carrito.appendChild(itemCarrito);

    const papelera = itemCarrito.querySelector('.papelera');
    papelera.addEventListener('click', () => {
        papelera.parentNode.remove();
    });

    alert('PRODUCTO AGREGADO CON ÉXITO!!!!!!!')

     });
});

iconoCarrito.addEventListener('click', () => {
    const contenedorCarrito = document.querySelector('.cont-dos');
    contenedorCarrito.classList.toggle('activo');
})

function enviar(){
    document.querySelectorAll('contenedor-carrito').forEach(comida =>{
        comida.remove();

    });
    alert("Compra Realizada con Exito!");
}

document.querySelector('.x').addEventListener('click', () => {
    const contenedorCarrito = document.querySelector('.cont-dos');
    contenedorCarrito.classList.remove('activo');
});
//../maracay/pizza-compressed.jpg
//Pizza 8$