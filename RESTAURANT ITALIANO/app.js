const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPastas = document.querySelector('.pasta');
const btnPizzas = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');


document.addEventListener(`DOMContentLoaded`,()=>{
    eventos();
    platillos();
});

const eventos = ()=>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar'); //-->Esto es para cuando el hace click remueva el hamburguesa y muestre el menu
    botonCerrar()//--> aca llamo la funcion cerrar, cuando se ejecute la funcion
}

//----------boton para cerrar --------
const botonCerrar = ()=>{
//console.log('cerrar menu') para comprobar
const btnCerrar = document.createElement('p');
const overlay = document.createElement('div')//--> overley lo que hace es polarizar la pantalla principal
overlay.classList.add('pantalla-completa')//--> clase del overley
const body = document.querySelector('body')//--> al seleccionar el body estamos polarizando la pantalla completa
if(document.querySelectorAll('.pantalla-completa').length>0) return;//--> esto es para que el usuario no pueda generar mas de un overley al hacer click
body.appendChild(overlay)//--> aca le anexamos al body el overlay
btnCerrar.textContent = 'X'
btnCerrar.classList.add('btn-cerrar')
console.log(navegacion.children)//--> este console.log, es porque al apretar el boton x se nose repite siempre, entonces
                             //-->aca buscamos en que posicion se encuentra el error en este caso es el 5 y hacemos un bucle while para que no se repita
                               //while(navegacion.children[5]){
                                //   navegacion.removeChild(navegacion.children[5])
                               //}--> esta es una manera de que no se generen muchos botones cerrar al momento de clickear
navegacion.appendChild(btnCerrar)
cerrarMenu(btnCerrar,overlay);
}
//----------------imagenes cards-----------------------------
const observer = new IntersectionObserver((entries,observer)=>{
entries.forEach(entry=>{
    if(entry.isIntersecting){
        const imagen = entry.target;
        imagen.src = imagen.dataset.src;
        observer.unobserve(imagen);
    }
})
});


//----------------imagenes-----------------------------
imagenes.forEach(imagen => {
    observer.observe(imagen);
})
//----------------boton cerrar menu-----------------------------
const cerrarMenu =(boton, overlay)=>{
boton.addEventListener('click',() =>{
//console.log('click cerrar') comprobar si esta funcionando
navegacion.classList.add('ocultar');// --> cuando hacemos click en la x oculta el menu
overlay.remove();
boton.remove();//--> Esta es la mejor manera para que no se generen botones, es la alternativa del bucle while
});
//--------------------------------------------
overlay.onclick = function(){// -->Esta funcion del overley es para cuando hacemos click se remueva
 overlay.remove();// -->clickeamos en la pantalla y se elimina el overley
navegacion.classList.add('ocultar'); //--> al hacer click en el overleey tambien se borra la barra de navegacion sin necesidad de apretar en la x
boton.remove(); //--> Esta es la mejor manera para que no se generen botones, es la alternativa del bucle while
}

}
//---------platillos-----------------------------------
const platillos =()=>{
    let platilloArreglo = [];
    const platillos = document.querySelectorAll('.platillo');+
  platillos.forEach(platillo=> platilloArreglo = [...platilloArreglo,platillo])

 const ensaladas = platilloArreglo.filter(ensalada=>ensalada.getAttribute('data-platillo')==='ensalada')//esta funcion busca atraves de data-platillo filtra ensaladas y me devuelve todas las ensaladas
//console.log(ensaladas)
const pastas = platilloArreglo.filter(pasta=>pasta.getAttribute('data-platillo')==='pasta')//esta funcion busca atraves de data-platillo filtra ensaladas y me devuelve todas las ensaladas
//console.log(pastas )
const pizzas = platilloArreglo.filter(pizza=>pizza.getAttribute('data-platillo')==='pizza')//esta funcion busca atraves de data-platillo filtra ensaladas y me devuelve todas las ensaladas
//console.log(pizzas )
const postres = platilloArreglo.filter(postre=>postre.getAttribute('data-platillo')==='postre')//esta funcion busca atraves de data-platillo filtra ensaladas y me devuelve todas las ensaladas
//console.log(postres )

mostrarPlatillos(ensaladas,pastas,pizzas,postres,platilloArreglo)
}
//---------mostrar platillos botones-----------------------------------
// ENSALADAS---------------
const mostrarPlatillos =(ensaladas,pastas,pizzas,Postres,todos) =>{
    btnEnsaladas.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);//ACA LLAMAMOS LA FUNCION QUE CREAMOS PARA LIMPIAR EL HTML
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada))
    });
// PASTAS---------------
    btnPastas.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);//ACA LLAMAMOS LA FUNCION QUE CREAMOS PARA LIMPIAR EL HTML
       pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta))
    });
// Pizzas---------------
    btnPizzas.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);//ACA LLAMAMOS LA FUNCION QUE CREAMOS PARA LIMPIAR EL HTML
       pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza))
    });
 // Postres---------------
    btnPostres.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);//ACA LLAMAMOS LA FUNCION QUE CREAMOS PARA LIMPIAR EL HTML
        Postres.forEach(postre=> contenedorPlatillos.appendChild(postre))
    });
//---TODOS---------------
     btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);//ACA LLAMAMOS LA FUNCION QUE CREAMOS PARA LIMPIAR EL HTML
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo))
    });
    
}
const limpiarHtml = (contenedor)=>{//Esta funcion es para limpiar el html asi cuando hacemos click en ensalada,pasta,pizza,postes,todos no se repita el codigo
    while(contenedor.firstChild){
contenedor.removeChild(contenedor.firstChild);
    }
}