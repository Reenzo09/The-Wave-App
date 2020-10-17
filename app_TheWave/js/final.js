var c = console.log, d = document;

//Armamos el objeto de productos
var Productos = {
	Mochilas: [
		{
			Nombre: 'Mochila Kolombo',
			Precio: 3500,
			Imagen: {
				src: 'img/mochila1.jpg',
				alt: 'Imagen representativa de una mochila gris',
			},
			Descripción: 'Mochila Original - Diseño Clásico - Amplio compartimiento central - Dos Bolsillos laterales con boton - Bolsillo frontal - Tiras acolchadas - Medidas 45 x 31 x 16 cm',
		},
		{
			Nombre: 'Mochila Mawi',
			Precio: 4200,
			Imagen: {
				src: 'img/mochila2.png',
				alt: 'Imagen representativa de una mochila negra',
			},
			Descripción: 'Mochila Original - Diseño Clásico - Amplio compartimiento central - Dos Bolsillos laterales con boton - Bolsillo frontal - Tiras acolchadas - Medidas 45 x 31 x 16 cm',
		},
		{
			Nombre: 'Mochila New York',
			Precio: 4400,
			Imagen: {
				src: 'img/mochila3.jpg',
				alt: 'Imagen representativa de una mochila floreada',
			},
			Descripción: 'Mochila Original - Diseño Clásico - Amplio compartimiento central - Dos Bolsillos laterales con boton - Bolsillo frontal - Tiras acolchadas - Medidas 45 x 31 x 16 cm',
		},
		{
			Nombre: 'Mochila Vans Black',
			Precio: 5000,
			Imagen: {
				src: 'img/mochila4.jpg',
				alt: 'Imagen representativa de una mochila negra',
			},
			Descripción: 'Mochila Original - Diseño Clásico - Amplio compartimiento central - Dos Bolsillos laterales con boton - Bolsillo frontal - Tiras acolchadas - Medidas 45 x 31 x 16 cm',
		}
	],
	Riñoneras: [
		{
			Nombre: 'Riñonera Supreme',
			Precio: 1100,
			Imagen: {
				src: 'img/rinonera1.png',
				alt: 'Imagen representativa de una riñonera color naranja',
			},
			Descripción: 'Cierre 23 cm - Cintura entre 55 cm y 80 cm - Salida de cable de auriculares - Ideal para correr, andar en bicicleta, para cualquier actividad al aire libre y para viajar',
		},
		{
			Nombre: 'Riñonera Blue',
			Precio: 800,
			Imagen: {
				src: 'img/rinonera2.png',
				alt: 'Imagen representativa de una riñonera color azul marino',
			},
			'Descripción': 'Cierre 23 cm - Cintura entre 55 cm y 80 cm - Salida de cable de auriculares - Ideal para correr, andar en bicicleta, para cualquier actividad al aire libre y para viajar',
		},
		{
			Nombre: 'Riñonera Vulkun',
			Precio: 1500,
			Imagen: {
				src: 'img/rinonera3.jpg',
				alt: 'Imagen representativa de una riñonera color naranja',
			},
			Descripción: 'Cierre 23 cm - Cintura entre 55 cm y 80 cm - Salida de cable de auriculares - Ideal para correr, andar en bicicleta, para cualquier actividad al aire libre y para viajar',
		},
		{
			Nombre: 'Riñonera Ripcurl',
			Precio: 2000,
			Imagen: {
				src: 'img/rinonera4.jpg',
				alt: 'Imagen representativa de una riñonera color naranja',
			},
			Descripción: 'Cierre 23 cm - Cintura entre 55 cm y 80 cm - Salida de cable de auriculares - Ideal para correr, andar en bicicleta, para cualquier actividad al aire libre y para viajar',
		},
	],
	Gorras: [
		{
			Nombre: 'Gorra Coyotes',
			Precio: 2500,
			Imagen: {
				src: 'img/gorra1.jpg',
				alt: 'Imagen representativa de una gorra roja marca Jordan',
			},
			Descripción: 'UNISEX - 50 cm de circunferencia regulable a 64 cm - 11 cm de alto - Alta durabilidad - Frente amplio - Muy buena calidad de tela y confección - Talle único regulable',
		},
		{
			Nombre: 'Gorra Gorin Bross',
			Precio: 1500,
			Imagen: {
				src: 'img/gorra2.jpg',
				alt: 'Imagen representativa de una gorra Gorin Bross',
			},
			Descripción: 'UNISEX - 50 cm de circunferencia regulable a 64 cm - 11 cm de alto - Alta durabilidad - Frente amplio - Muy buena calidad de tela y confección - Talle único regulable',
		},
		{
			Nombre: 'Gorra American',
			Precio: 2299,
			Imagen: {
				src: 'img/gorra3.jpg',
				alt: 'Imagen representativa de una gorra roja marca Jordan',
			},
			Descripción: 'UNISEX - 50 cm de circunferencia regulable a 64 cm - 11 cm de alto - Alta durabilidad - Frente amplio - Muy buena calidad de tela y confección - Talle único regulable',
		},
		{
			Nombre: 'Gorra Bugs Bunny',
			Precio: 2100,
			Imagen: {
				src: 'img/gorra4.jpg',
				alt: 'Imagen representativa de una gorra roja marca Jordan',
			},
			Descripción: 'UNISEX - 50 cm de circunferencia regulable a 64 cm - 11 cm de alto - Alta durabilidad - Frente amplio - Muy buena calidad de tela y confección - Talle único regulable',
		},
	],
}

//Array de los prod Destacados
var ProdDestacados = [
	{
		Nombre: 'Gorra Coyote',
		Precio: 2500,
		Imagen: {
			src: 'img/gorra1.jpg',
			alt: 'Imagen representativa de una gorra roja marca Jordan',
		},
		Descripción: 'Un saco sin mangas... o sea...'
	},
	{
		Nombre: 'Mochila Kolombo',
		Precio: 3500,
		Imagen: {
			src: 'img/mochila1.jpg',
			alt: 'Imagen representativa de una mochila gris',
		},
		Descripción: 'Un saco sin mangas... o sea...'
	},
	{
		Nombre: 'Riñonera Supreme',
		Precio: 1100,
		Imagen: {
			src: 'img/rinonera1.png',
			alt: 'Imagen representativa de una riñonera color naranja',
		},
		Descripción: 'Un saco sin mangas... o sea...'
	},
	{
		Nombre: 'Mochila Mawi',
		Precio: 4200,
		Imagen: {
			src: 'img/mochila2.png',
			alt: 'Imagen representativa de una mochila negra',
		},
		Descripción: 'Un saco sin mangas... o sea...'
	},
	{
		Nombre: 'Riñonera Blue',
		Precio: 800,
		Imagen: {
			src: 'img/rinonera2.png',
			alt: 'Imagen representativa de una riñonera color azul marino',
		},
		'Descripción': 'Un saco sin mangas... o sea...'
	}
]

//Seleccionamos secciones del body
var pantallaProductos = d.querySelector('#dos');
var form = d.querySelector('aside');

//d.body.removeChild(pantallaProductos);
//d.body.removeChild(form);

/*
* ----------- PAGINA UNO -----------
*/

//hacemos clickeable el logo
var logo = d.querySelector('#logo');
//c(logo);

logo.onclick = function () {
	let m = d.querySelector('#dos');
	if(m != null) {
		d.body.removeChild(pantallaProductos);
	}

	let n = d.querySelector('#uno');
	if(n == null) {
		d.body.insertBefore(pantallaInicio, scripts[0]);
	}

	modalProducto();

}

//Creamos imgs y asignamos el src a cada producto y su alt

var figureImgs = d.querySelectorAll('.prodDestacado');
var nombresProd = d.querySelectorAll('.nombreProd');
var imgProd, i = 0;

while (i < figureImgs.length) {
	for (var productito in ProdDestacados) {
		imgProd = d.createElement('img');

		imgProd.src = ProdDestacados[productito].Imagen.src;
		imgProd.alt = ProdDestacados[productito].Imagen.alt;
		imgProd.className = 'figure-img img-fluid';
		figureImgs[i].insertBefore(imgProd, nombresProd[i]);
		i++;
	}
}

//Asignamos nombre a cada producto en la primera section
//c(nombresProd);

var nombreGorra1 = nombresProd[0];
//c(nombreGorra1);
nombreGorra1.innerHTML = Productos.Gorras[0].Nombre;

var nombreMochila1 = nombresProd[1];
//c(nombreMochila1);
nombreMochila1.innerHTML = Productos.Mochilas[0].Nombre;

var nombreRiñonera1 = nombresProd[2];
//c(nombreRiñonera1);
nombreRiñonera1.innerHTML = Productos.Riñoneras[0].Nombre;

var nombreMochila2 = nombresProd[3];
//c(nombreMochila2);
nombreMochila2.innerHTML = Productos.Mochilas[1].Nombre;

var nombreRiñonera2 = nombresProd[4];
//c(nombreRiñonera2);
nombreRiñonera2.innerHTML = Productos.Riñoneras[1].Nombre;

//Asignamos precio a cada producto en la primera section
var preciosProd = d.querySelectorAll('.precioProd');

var precioGorra1 = preciosProd[0];
//c(precioGorra1);
//c(Productos.Gorras[0].Precio)
precioGorra1.innerHTML = Productos.Gorras[0].Precio;

var precioMochila1 = preciosProd[1];
//c(precioMochila1);
precioMochila1.innerHTML = Productos.Mochilas[0].Precio;

var precioRinonera1 = preciosProd[2];
//c(precioRinonera1);
precioRinonera1.innerHTML = Productos.Riñoneras[0].Precio;

var precioMochila2 = preciosProd[3];
//c(precioMochila2);
precioMochila2.innerHTML = Productos.Mochilas[1].Precio;

var precioRinonera2 = preciosProd[4];
//c(precioRinonera2);
precioRinonera2.innerHTML = Productos.Riñoneras[1].Precio;

//Al hacer click en la categoria se lleva a su determinada seccion
var categoria = d.querySelectorAll('.categoria');

categoria[0].children[0].onclick = function () {
	let m = d.querySelector('#uno');
	if(m != null) {
		d.body.removeChild(pantallaInicio);
	}

	let n = d.querySelector('#dos');
	if(n == null) {
		d.body.insertBefore(pantallaProductos, scripts[0]);
	}
	sel.value = sel.children[0].value;

	let imagBorrados = d.querySelectorAll('#dos figure img');

	titulo.innerHTML = 'Mochilas';

	for (let e = 0; e < imagBorrados.length; e++) {
		imagBorrados[e].parentNode.removeChild(imagBorrados[e]);
		nombresProdDos[e].innerHTML = '';
	}

	let h = 0;
	for (var productote in Productos.Mochilas) {
		imgProdDos = d.createElement('img');
		imgProdDos.src = Productos.Mochilas[productote].Imagen.src;
		imgProdDos.alt = Productos.Mochilas[productote].Imagen.alt;
		imgProdDos.className = 'figure-img img-fluid';
		figureImgsDos[h].insertBefore(imgProdDos, nombresProdDos[h]);
		h++;
	}

	for (var mercaderia in Productos.Mochilas) {
		nombresProdDos[mercaderia].innerHTML = Productos.Mochilas[mercaderia].Nombre;
		precioMochi[mercaderia].innerHTML = Productos.Mochilas[mercaderia].Precio;
	}

	modalProducto();

}

categoria[1].children[0].onclick = function () {
	let m = d.querySelector('#uno');
	if(m != null) {
		d.body.removeChild(pantallaInicio);
	}

	let n = d.querySelector('#dos');
	if(n == null) {
		d.body.insertBefore(pantallaProductos, scripts[0]);
	}
	sel.value = sel.children[2].value;

	let imgsBorrados = d.querySelectorAll('#dos figure img');

	titulo.innerHTML = 'Gorras';

	for (let e = 0; e < imgsBorrados.length; e++) {
		imgsBorrados[e].parentNode.removeChild(imgsBorrados[e]);
		nombresProdDos[e].innerHTML = '';
	}

	let g = 0;
	for (var productote in Productos.Gorras) {
		imgProdDos = d.createElement('img');
		imgProdDos.src = Productos.Gorras[productote].Imagen.src;
		imgProdDos.alt = Productos.Gorras[productote].Imagen.alt;
		imgProdDos.className = 'figure-img img-fluid';
		figureImgsDos[g].insertBefore(imgProdDos, nombresProdDos[g]);
		g++;
	}

	for (var mercaderia in Productos.Gorras) {
		nombresProdDos[mercaderia].innerHTML = Productos.Gorras[mercaderia].Nombre;
		precioMochi[mercaderia].innerHTML = Productos.Gorras[mercaderia].Precio;
	}

	modalProducto();

}

categoria[2].children[0].onclick = function () {
	let m = d.querySelector('#uno');
	if(m != null) {
		d.body.removeChild(pantallaInicio);
	}

	let n = d.querySelector('#dos');
	if(n == null) {
		d.body.insertBefore(pantallaProductos, scripts[0]);
	}
	sel.value = sel.children[1].value;

	let imgBorrados = d.querySelectorAll('#dos figure img');

	titulo.innerHTML = 'Riñoneras';

	for (let e = 0; e < imgBorrados.length; e++) {
		imgBorrados[e].parentNode.removeChild(imgBorrados[e]);
		nombresProdDos[e].innerHTML = '';
	}

	let f = 0;
	for (var productote in Productos.Riñoneras) {
		imgProdDos = d.createElement('img');
		imgProdDos.src = Productos.Riñoneras[productote].Imagen.src;
		imgProdDos.alt = Productos.Riñoneras[productote].Imagen.alt;
		imgProdDos.className = 'figure-img img-fluid';
		figureImgsDos[f].insertBefore(imgProdDos, nombresProdDos[f]);
		f++;
	}

	for (var mercaderia in Productos.Riñoneras) {
		nombresProdDos[mercaderia].innerHTML = Productos.Riñoneras[mercaderia].Nombre;
		precioMochi[mercaderia].innerHTML = Productos.Riñoneras[mercaderia].Precio;
	}

	modalProducto();

}


/*
* ----------- PAGINA DOS -----------
*/

//Le asigno la modal al los productos del index
modalProducto();

//Al hacer click en la barra de navegación dirigir a su pantalla correspondiente
var aInicio = d.querySelector('header li > a');
var aMochilas = d.querySelector('header li:nth-of-type(2) a');
var aRiñoneras = d.querySelector('header li:nth-of-type(3) a');
var aGorras = d.querySelector('header li:nth-of-type(4) a');
var pantallaInicio = d.querySelector('#uno');
var scripts = d.querySelectorAll('script');

aInicio.onclick = function () {
	let m = d.querySelector('#dos');
	if(m != null) {
		d.body.removeChild(pantallaProductos);
	}

	let n = d.querySelector('#uno');
	if(n == null) {
		d.body.insertBefore(pantallaInicio, scripts[0]);
	}

	modalProducto();

}

aMochilas.onclick = function () {
	let m = d.querySelector('#uno');
	if(m != null) {
		d.body.removeChild(pantallaInicio);
	}

	let n = d.querySelector('#dos');
	if(n == null) {
		d.body.insertBefore(pantallaProductos, scripts[0]);
	}
	sel.value = sel.children[0].value;

	let imagBorrados = d.querySelectorAll('#dos figure img');

	titulo.innerHTML = 'Mochilas';

	for (let e = 0; e < imagBorrados.length; e++) {
		imagBorrados[e].parentNode.removeChild(imagBorrados[e]);
		nombresProdDos[e].innerHTML = '';
	}

	let h = 0;
	for (var productote in Productos.Mochilas) {
		imgProdDos = d.createElement('img');
		imgProdDos.src = Productos.Mochilas[productote].Imagen.src;
		imgProdDos.alt = Productos.Mochilas[productote].Imagen.alt;
		imgProdDos.className = 'figure-img img-fluid';
		figureImgsDos[h].insertBefore(imgProdDos, nombresProdDos[h]);
		h++;
	}

	for (var mercaderia in Productos.Mochilas) {
		nombresProdDos[mercaderia].innerHTML = Productos.Mochilas[mercaderia].Nombre;
		precioMochi[mercaderia].innerHTML = Productos.Mochilas[mercaderia].Precio;
	}

	modalProducto();

}

aRiñoneras.onclick = function () {
	let m = d.querySelector('#uno');
	if(m != null) {
		d.body.removeChild(pantallaInicio);
	}

	let n = d.querySelector('#dos');
	if(n == null) {
		d.body.insertBefore(pantallaProductos, scripts[0]);
	}
	sel.value = sel.children[1].value;

	let imgBorrados = d.querySelectorAll('#dos figure img');

	titulo.innerHTML = 'Riñoneras';

	for (let e = 0; e < imgBorrados.length; e++) {
		imgBorrados[e].parentNode.removeChild(imgBorrados[e]);
		nombresProdDos[e].innerHTML = '';
	}

	let f = 0;
	for (var productote in Productos.Riñoneras) {
		imgProdDos = d.createElement('img');
		imgProdDos.src = Productos.Riñoneras[productote].Imagen.src;
		imgProdDos.alt = Productos.Riñoneras[productote].Imagen.alt;
		imgProdDos.className = 'figure-img img-fluid';
		figureImgsDos[f].insertBefore(imgProdDos, nombresProdDos[f]);
		f++;
	}

	for (var mercaderia in Productos.Riñoneras) {
		nombresProdDos[mercaderia].innerHTML = Productos.Riñoneras[mercaderia].Nombre;
		precioMochi[mercaderia].innerHTML = Productos.Riñoneras[mercaderia].Precio;
	}

	modalProducto();

}

aGorras.onclick = function () {
	let m = d.querySelector('#uno');
	if(m != null) {
		d.body.removeChild(pantallaInicio);
	}

	let n = d.querySelector('#dos');
	if(n == null) {
		d.body.insertBefore(pantallaProductos, scripts[0]);
	}
	sel.value = sel.children[2].value;

	let imgsBorrados = d.querySelectorAll('#dos figure img');

	titulo.innerHTML = 'Gorras';

	for (let e = 0; e < imgsBorrados.length; e++) {
		imgsBorrados[e].parentNode.removeChild(imgsBorrados[e]);
		nombresProdDos[e].innerHTML = '';
	}

	let g = 0;
	for (var productote in Productos.Gorras) {
		imgProdDos = d.createElement('img');
		imgProdDos.src = Productos.Gorras[productote].Imagen.src;
		imgProdDos.alt = Productos.Gorras[productote].Imagen.alt;
		imgProdDos.className = 'figure-img img-fluid';
		figureImgsDos[g].insertBefore(imgProdDos, nombresProdDos[g]);
		g++;
	}

	for (var mercaderia in Productos.Gorras) {
		nombresProdDos[mercaderia].innerHTML = Productos.Gorras[mercaderia].Nombre;
		precioMochi[mercaderia].innerHTML = Productos.Gorras[mercaderia].Precio;
	}

	modalProducto();

}


//Busco el select
var sel = d.querySelector('#dos form select');
//c(sel);
var o;

for (let producto in Productos) {
	o = d.createElement('option');
	o.value = producto;
	o.innerHTML = producto;
	sel.appendChild(o);
}

//Creamos imgs y asignamos el src a cada producto y su alt
var figureImgsDos = d.querySelectorAll('#dos figure');
var nombresProdDos = d.querySelectorAll('#dos figure figcaption');
var imgProdDos, j = 0;

for (var productote in Productos.Mochilas) {
	imgProdDos = d.createElement('img');
	imgProdDos.src = Productos.Mochilas[productote].Imagen.src;
	imgProdDos.alt = Productos.Mochilas[productote].Imagen.alt;
	imgProdDos.className = 'figure-img img-fluid';
	figureImgsDos[j].insertBefore(imgProdDos, nombresProdDos[j]);
	j++
}

//Asignamos nombre y precio a cada producto en la segunda section
var precioMochi = d.getElementsByClassName('precioMochi');

for (var mochilas in Productos.Mochilas) {
	nombresProdDos[mochilas].innerHTML = Productos.Mochilas[mochilas].Nombre;
	precioMochi[mochilas].innerHTML = Productos.Mochilas[mochilas].Precio;
}

//Programamos el select para que cuando cambie de producto, se cambien las imgs con sus nombres y precios
var titulo = d.querySelector('#dos h4');

sel.onchange = function () {
	//c(this.value);
	switch (this.value) {
		case 'Riñoneras':

			let imgBorrados = d.querySelectorAll('#dos figure img');

			titulo.innerHTML = this.value;

			for (let e = 0; e < imgBorrados.length; e++) {
				imgBorrados[e].parentNode.removeChild(imgBorrados[e]);
				nombresProdDos[e].innerHTML = '';
			}

			let f = 0;
			for (var productote in Productos.Riñoneras) {
				imgProdDos = d.createElement('img');
				imgProdDos.src = Productos.Riñoneras[productote].Imagen.src;
				imgProdDos.alt = Productos.Riñoneras[productote].Imagen.alt;
				imgProdDos.className = 'figure-img img-fluid';
				figureImgsDos[f].insertBefore(imgProdDos, nombresProdDos[f]);
				f++;
			}

			for (var mercaderia in Productos.Riñoneras) {
				nombresProdDos[mercaderia].innerHTML = Productos.Riñoneras[mercaderia].Nombre;
				precioMochi[mercaderia].innerHTML = Productos.Riñoneras[mercaderia].Precio;
			}

			modalProducto();

			d.body.appendChild(divFondoBanner);

			interaccion();

			break;
		case 'Gorras':

			let imgsBorrados = d.querySelectorAll('#dos figure img');

			titulo.innerHTML = this.value;

			for (let e = 0; e < imgsBorrados.length; e++) {
				imgsBorrados[e].parentNode.removeChild(imgsBorrados[e]);
				nombresProdDos[e].innerHTML = '';
			}

			let g = 0;
			for (var productote in Productos.Gorras) {
				imgProdDos = d.createElement('img');
				imgProdDos.src = Productos.Gorras[productote].Imagen.src;
				imgProdDos.alt = Productos.Gorras[productote].Imagen.alt;
				imgProdDos.className = 'figure-img img-fluid';
				figureImgsDos[g].insertBefore(imgProdDos, nombresProdDos[g]);
				g++;
			}

			for (var mercaderia in Productos.Gorras) {
				nombresProdDos[mercaderia].innerHTML = Productos.Gorras[mercaderia].Nombre;
				precioMochi[mercaderia].innerHTML = Productos.Gorras[mercaderia].Precio;
			}

			modalProducto();
			
			d.body.appendChild(divFondoBanner);

			interaccion();

			break;
		case 'Mochilas':

			let imagBorrados = d.querySelectorAll('#dos figure img');

			titulo.innerHTML = this.value;

			for (let e = 0; e < imagBorrados.length; e++) {
				imagBorrados[e].parentNode.removeChild(imagBorrados[e]);
				nombresProdDos[e].innerHTML = '';
			}

			let h = 0;
			for (var productote in Productos.Mochilas) {
				imgProdDos = d.createElement('img');
				imgProdDos.src = Productos.Mochilas[productote].Imagen.src;
				imgProdDos.alt = Productos.Mochilas[productote].Imagen.alt;
				imgProdDos.className = 'figure-img img-fluid';
				figureImgsDos[h].insertBefore(imgProdDos, nombresProdDos[h]);
				h++;
			}

			for (var mercaderia in Productos.Mochilas) {
				nombresProdDos[mercaderia].innerHTML = Productos.Mochilas[mercaderia].Nombre;
				precioMochi[mercaderia].innerHTML = Productos.Mochilas[mercaderia].Precio;
			}

			modalProducto();

			d.body.appendChild(divFondoBanner);

			interaccion();

			break;
	}
}

//Creamos el modal CARRITO
var modCarrito = d.createElement('div');
var pVacio = d.createElement('p');
var aCarrito = d.createElement('a');
var divCarrito = d.createElement('div');
var divContenido = d.createElement('div');
var ulCarrito = d.createElement('ul');
var divSubtotal = d.createElement('div');
var spanSubtotal = d.createElement('span');
var spanPrecioSubtotal = d.createElement('span');
var divItems = d.createElement('div');
var spanItems = d.createElement('span');
var spanNumItems = d.createElement('span');
var divTotal = d.createElement('div');
var spanTotal = d.createElement('span');
var spanPrecioTotal = d.createElement('span');
var btnCarrito = d.createElement('p');
var btnCompra = d.createElement('button');

modCarrito.className = 'modal';
modCarrito.id = 'modalCarrito';
aCarrito.href = 'javascript:void(0)';
aCarrito.innerHTML = 'X';
pVacio.innerHTML = 'EL CARRITO DE COMPRAS ESTÁ VACÍO';
pVacio.style.display = 'none';
divCarrito.className = 'carrito'
divSubtotal.className = 'subtotal';
spanSubtotal.innerHTML = 'Subtotal: ';
spanPrecioSubtotal.innerHTML = 0;
spanItems.innerHTML = 'items: ';
spanNumItems.innerHTML = 0;
spanTotal.innerHTML = 'Total: ';
spanPrecioTotal.innerHTML = 0;

btnCompra.innerHTML = 'Iniciar compra';
btnCompra.onclick = function () {
	d.body.appendChild(form);
	d.body.removeChild(modCarrito);
}

btnCarrito.innerHTML = 'Vaciar Carrito';
btnCarrito.onclick = function () {
	let hijosLi = d.querySelectorAll('#modalCarrito ul li');

	for (let conta = 0; conta < hijosLi.length; conta++) {
		ulCarrito.removeChild(hijosLi[conta]);
	}
	cont = 0;
	cantItems.innerHTML = 0;
	precioItems = 0;
	spanPrecioSubtotal.innerHTML = '$' + precioItems;
	spanNumItems.innerHTML = cont;
	spanPrecioTotal.innerHTML = '$' + precioItems;
}

divTotal.appendChild(spanTotal);
divTotal.appendChild(spanPrecioTotal);
divItems.appendChild(spanItems);
divItems.appendChild(spanNumItems);
divSubtotal.appendChild(spanSubtotal);
divSubtotal.appendChild(spanPrecioSubtotal);
divCarrito.appendChild(pVacio);
divContenido.appendChild(ulCarrito);
divContenido.appendChild(divSubtotal);
divContenido.appendChild(divItems);
divContenido.appendChild(divTotal);
divContenido.appendChild(btnCarrito);
divContenido.appendChild(btnCompra);
divCarrito.appendChild(divContenido);
modCarrito.appendChild(aCarrito);
modCarrito.appendChild(divCarrito);

aCarrito.onclick = function () {
	d.body.removeChild(modCarrito);
}

//Programamos el carrito para que se active
var vaciarCarrito = false;
var shop = d.querySelector('#carrito');
shop.onclick = function () {
	d.body.appendChild(modCarrito);

	var vacio = d.querySelector('#modalCarrito ul li') 
	//c(vacio);
	if(vacio == null){
		pVacio.style.display = 'block';
		divContenido.style.display = 'none';

	} else {
		pVacio.style.display = 'none';
		divContenido.style.display = 'block';
	}

	if(vaciarCarrito) {
		let hijosLi = d.querySelectorAll('#modalCarrito ul li');
		for (let conta = 0; conta < hijosLi.length; conta++) {
			ulCarrito.removeChild(hijosLi[conta]);
		}
		vaciarCarrito = false;
	}
	//c(vaciarCarrito);
}


//Programamos el btn de los productos para agregar al carrito

var btn = d.querySelectorAll('.card button');
//c(btn);
var cantItems = d.querySelector('#carrito span');
//c(cantItems);
var cont = 0;
var precioItems = 0;


for (let p = 0; p < btn.length; p++) {
	btn[p].onclick = function () {
		let liCarrito = d.createElement('li'), divContainer = d.createElement('div'), divRow = d.createElement('div'), divNombre = d.createElement('div'),
		pNombre = d.createElement('p'), divPrecio = d.createElement('div'), pLi = d.createElement('p'), precioLi = d.createElement('span'), aLi = d.createElement('a');

		divContainer.className = 'container-fluid';
		divRow.className = 'row text-left';
		divNombre.className = 'col-12';
		divPrecio.className = 'col-12';
		aLi.href = 'javascript:void(0)';
		aLi.innerHTML = 'Quitar';
		pLi.className = 'precioCarro';

		//Para que se pueda quitar de a uno
		aLi.onclick = function () {
			this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode);
			cont--;
			cantItems.innerHTML = cont;
			precioItems -= parseFloat(this.previousElementSibling.innerHTML);
			//c(precioItems = precioItems - parseFloat(this.previousElementSibling.innerHTML));
			spanPrecioSubtotal.innerHTML = '$' + precioItems;
			spanNumItems.innerHTML = cont;
			spanPrecioTotal.innerHTML = '$' + precioItems;
		}

		cont++;
		cantItems.innerHTML = cont;
		pNombre.innerHTML = this.previousElementSibling.previousElementSibling.children[1].innerHTML;
		pLi.innerHTML = '$';
		precioLi.innerHTML = this.previousElementSibling.children[0].innerHTML;
		precioItems += parseFloat(this.previousElementSibling.children[0].innerHTML);
		//c(precioItems);
		spanPrecioSubtotal.innerHTML = '$' + precioItems;
		spanNumItems.innerHTML = cont;
		spanPrecioTotal.innerHTML = '$' + precioItems;

		pLi.appendChild(precioLi);
		pLi.appendChild(aLi);
		divPrecio.appendChild(pLi);
		divNombre.appendChild(pNombre);
		divRow.appendChild(divNombre);
		divRow.appendChild(divPrecio);
		divContainer.appendChild(divRow);
		liCarrito.appendChild(divContainer);
		ulCarrito.appendChild(liCarrito);
	}
}

// Creacion modal del Producto
var divModal = d.createElement('div');
var aModal = d.createElement('a');
var divMed = d.createElement('div');
var imgModal = d.createElement('img');
var divInfo = d.createElement('div');
var h5Info = d.createElement('h5');
var pModal = d.createElement('p');
var spanModal = d.createElement('span');
var pDesc = d.createElement('p');
var btnModal = d.createElement('button');

divModal.className = 'modal';
divModal.id = 'modalProducto';
aModal.href = 'javascript:void(0)';
aModal.innerHTML = 'X';
pModal.innerHTML = '$';
btnModal.innerHTML = 'Agregar al carrito';

aModal.onclick = function () {
	d.body.removeChild(divModal);
}

btnModal.onclick = function () {
	//let liCarrito = d.createElement('li'), pLi = d.createElement('p'), precioLi = d.createElement('span'), aLi = d.createElement('a');
	let liCarrito = d.createElement('li'), divContainer = d.createElement('div'), divRow = d.createElement('div'), divNombre = d.createElement('div'),
	pNombre = d.createElement('p'), divPrecio = d.createElement('div'), pLi = d.createElement('p'), precioLi = d.createElement('span'), aLi = d.createElement('a');



	divContainer.className = 'container-fluid';
	divRow.className = 'row text-left';
	divNombre.className = 'col-12';
	divPrecio.className = 'col-12';
	aLi.href = 'javascript:void(0)';
	aLi.innerHTML = 'Quitar';
	pLi.className = 'precioCarro';

	//Para que se pueda quitar de a uno
	aLi.onclick = function () {

		this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode);
		cont--;
		cantItems.innerHTML = cont;
		precioItems -= parseFloat(this.previousElementSibling.innerHTML);
		//c(precioItems = precioItems - parseFloat(this.previousElementSibling.innerHTML));
		spanPrecioSubtotal.innerHTML = '$' + precioItems;
		spanNumItems.innerHTML = cont;
		spanPrecioTotal.innerHTML = '$' + precioItems;
	}

	cont++;
	cantItems.innerHTML = cont;
	pNombre.innerHTML = this.previousElementSibling.children[0].innerHTML;
	//c(pNombre);
	pLi.innerHTML = '$';
	precioLi.innerHTML = this.previousElementSibling.children[1].children[0].innerHTML;
	precioItems += parseFloat(this.previousElementSibling.children[1].children[0].innerHTML);
	//c(precioItems);
	spanPrecioSubtotal.innerHTML = '$' + precioItems;
	spanNumItems.innerHTML = cont;
	spanPrecioTotal.innerHTML = '$' + precioItems;


	pLi.appendChild(precioLi);
	pLi.appendChild(aLi);
	divPrecio.appendChild(pLi);
	divNombre.appendChild(pNombre);
	divRow.appendChild(divNombre);
	divRow.appendChild(divPrecio);
	divContainer.appendChild(divRow);
	liCarrito.appendChild(divContainer);
	ulCarrito.appendChild(liCarrito);
}

divInfo.appendChild(h5Info);
pModal.appendChild(spanModal);
divInfo.appendChild(pModal);
divInfo.appendChild(pDesc);
divMed.appendChild(imgModal);
divMed.appendChild(divInfo);
divMed.appendChild(btnModal);
divModal.appendChild(aModal);
divModal.appendChild(divMed);
//d.body.appendChild(divModal);


function modalProducto() {
	//Busco las imgs y los recorro para asignarles el modal
	var cardsProd = d.querySelectorAll('.figure-img');
	//c(cardsProd);
	
	for (let k = 0; k < cardsProd.length; k++) {
		//c(cardsProd[k]);
		cardsProd[k].onclick = function () {
			for (let material in Productos) {
				//c(Productos[material]);
				for (let material2 in Productos[material]) {
					//c(this.nextElementSibling.innerHTML);
	
					if (this.nextElementSibling.innerHTML == Productos[material][material2].Nombre) {
						imgModal.src = Productos[material][material2].Imagen.src;
						imgModal.className = 'img-fluid';
						h5Info.innerHTML = Productos[material][material2].Nombre;
						spanModal.innerHTML = Productos[material][material2].Precio;
						pDesc.innerHTML = 'Descripción: ' + Productos[material][material2].Descripción;
	
						//divModal.style.display = 'block';
						d.body.appendChild(divModal);
					}
	
				}
			}
		}
	}
}

//Removemos del html la pantalla de productos
d.body.removeChild(pantallaProductos);

//Proceso de compra
form.children[0].children[0].onclick = function () {
	d.body.removeChild(form);
}

var cancelar = d.querySelector('#compra .subrayado');
var comprar = d.querySelector('#compra .comprar');
//c(comprar);

cancelar.onclick = function () {
	d.body.removeChild(form);
	d.body.appendChild(modCarrito);
}

comprar.onclick = function () {
	d.body.appendChild(divFondoMantenimiento);
	d.body.removeChild(form);
}

//Removemos del html
d.body.removeChild(form);

//Modal de mantenimiento - comprar
var divFondoMantenimiento = d.createElement('div');
var aMantenimiento = d.createElement('a');
var divMantenimiento = d.createElement('div');
var imgMantenimiento = d.createElement('img');

divFondoMantenimiento.className = 'modal';
divFondoMantenimiento.id = 'modalMantenimiento';
aMantenimiento.href = 'javascript:void(0)';
aMantenimiento.innerHTML = 'X';
divMantenimiento.className = 'row justify-content-center';
imgMantenimiento.className = 'img-fluid'
imgMantenimiento.src = 'img/compra.jpg';
imgMantenimiento.alt = 'Sitio web en mantenimiento';

aMantenimiento.onclick = function () {
	vaciarCarrito = true;
	//c(vaciarCarrito);
	d.body.removeChild(divFondoMantenimiento);
	cont= 0;
	cantItems.innerHTML = cont;
	precioItems = parseFloat(0);
	spanPrecioSubtotal.innerHTML = '$' + precioItems;
	spanNumItems.innerHTML = cont;
	spanPrecioTotal.innerHTML = '$' + precioItems;

}

divMantenimiento.appendChild(imgMantenimiento);
divFondoMantenimiento.appendChild(aMantenimiento);
divFondoMantenimiento.appendChild(divMantenimiento);

//Banner
var divFondoBanner = d.createElement('div');
var aBanner = d.createElement('a');
var imgBanner = d.createElement('img');

divFondoBanner.className = 'modal';
divFondoBanner.id = 'modalBanner';
aBanner.href = 'javascript:void(0)';
aBanner.innerHTML = 'X';
imgBanner.className = 'img-fluid'
imgBanner.src = 'img/banner.jpg';
imgBanner.alt = 'Públicidad mochila';

aBanner.onclick = function () {
	d.body.removeChild(divFondoBanner);
}

divFondoBanner.appendChild(aBanner);
divFondoBanner.appendChild(imgBanner);

//Interaccion banner
function interaccion () {
	let banner = d.querySelector('#modalBanner img');
			banner.onclick = function () {
				let liCarrito = d.createElement('li'), divContainer = d.createElement('div'), divRow = d.createElement('div'), divNombre = d.createElement('div'),
				pNombre = d.createElement('p'), divPrecio = d.createElement('div'), pLi = d.createElement('p'), precioLi = d.createElement('span'), aLi = d.createElement('a');
		
				divContainer.className = 'container-fluid';
				divRow.className = 'row text-left';
				divNombre.className = 'col-12';
				divPrecio.className = 'col-12';
				aLi.href = 'javascript:void(0)';
				aLi.innerHTML = 'Quitar';
				pLi.className = 'precioCarro';
		
				//Para que se pueda quitar de a uno
				aLi.onclick = function () {
					this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode);
					cont--;
					cantItems.innerHTML = cont;
					precioItems -= parseFloat(this.previousElementSibling.innerHTML);
					spanPrecioSubtotal.innerHTML = '$' + precioItems;
					spanNumItems.innerHTML = cont;
					spanPrecioTotal.innerHTML = '$' + precioItems;
				}
		
				cont++;
				cantItems.innerHTML = cont;
				pNombre.innerHTML = 'Mochila New York';
				pLi.innerHTML = '$';
				precioLi.innerHTML = 4400;
				precioItems += parseFloat(4400);
				spanPrecioSubtotal.innerHTML = '$' + precioItems;
				spanNumItems.innerHTML = cont;
				spanPrecioTotal.innerHTML = '$' + precioItems;
		
				pLi.appendChild(precioLi);
				pLi.appendChild(aLi);
				divPrecio.appendChild(pLi);
				divNombre.appendChild(pNombre);
				divRow.appendChild(divNombre);
				divRow.appendChild(divPrecio);
				divContainer.appendChild(divRow);
				liCarrito.appendChild(divContainer);
				ulCarrito.appendChild(liCarrito);

				d.body.removeChild(divFondoBanner);
			}

			setTimeout(function () {
				let bannersito = d.querySelector('#modalBanner');
				if(bannersito) {
					d.body.removeChild(divFondoBanner);
				}
			}, 10000);
}

//Deteccion de tecla
	window.onkeydown = function(e) {
		if(e.keyCode == 27) {
			let modal = d.querySelector('.modal');
			if(modal != null && modal.id != 'modalMantenimiento') {
				d.body.removeChild(modal);
			}
		}
	}

//Boton Info
var btnInfor = d.querySelector('.info');
c(btnInfor);
var informacion = [
	'Diseño y Programación web',
	'IDM - Omar Toyos',
	'DWTM3A',
	'2020',
	'Final - Renzo Kuktosky'
];

var divFondoInfor = d.createElement('div');
var aInfor = d.createElement('a');
var divInfor = d.createElement('div');
var imgInfor = d.createElement('img');
var ulInfor = d.createElement('ul');
var liInfor;

divFondoInfor.className = 'modal';
divFondoInfor.id = 'modalInfo';
aInfor.href = 'javascript:void(0)';
aInfor.innerHTML = 'X';
divInfor.className = '';
imgInfor.className = 'img-fluid'
imgInfor.src = 'img/img-personal.jpg';
imgInfor.alt = 'Foto personal Renzo Kuktosky';
ulInfor.className = 'ulInfor';

aInfor.onclick = function () {
	d.body.removeChild(divFondoInfor);
}

for(let i = 0; i<informacion.length; i++) {
	liInfor = d.createElement('li');
	liInfor.innerHTML = informacion[i];
	ulInfor.appendChild(liInfor);
}

divInfor.appendChild(imgInfor);
divInfor.appendChild(ulInfor);
divFondoInfor.appendChild(aInfor);
divFondoInfor.appendChild(divInfor);

btnInfor.onclick = function () {
	d.body.appendChild(divFondoInfor);
}