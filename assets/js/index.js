/*
class Producto{
    constructor(articulo, precio, talle, codigo, stock){
        this.articulo = articulo;
        this.precio = precio;
        this.talle = talle;
        this.codigo = codigo;
        this.stock = stock;

        this.mostrardatos = function (){
         return console.log("Articulo: " + this.articulo + ", precio: " + this.precio + ", talle: " + this.talle + ", codigo: " + this.codigo + ", stock: " + this.stock);
        }
    }   
}

function categoriasDeProductos(usercategoria){
    switch(usercategoria){
        case "remeras":
         let productoremeras = parseInt(prompt("Seleccionar productos con los numeros \n 1 - Remera nike blue \n 2 - Remera nike negra (el producto saldra por console.log) "));
         productos_remeras(productoremeras);
        break;
    
        case "pantalones":
         let productopantalones = parseInt(prompt("Seleccionar productos \n 1 - Pantalon corto \n 2 - Pantalon largo (el producto saldra por console.log)"));
         productos_pantalones(productopantalones);
        break;

        case "zapatillas":
         let productozapatillas = parseInt(prompt("Seleccionar productos \n 1 - Zapatilla air force \n 2 - Zapatilla air max (el producto saldra por console.log) "));
         productos_zapatillas(productozapatillas)
    }
}
   
function productos_remeras(item){
        if(item == "1"){     
         return PRODUCTOS.push(new Producto("Remera nike blue", "$1400", "M", "003248", "true"))
        }

        else{
         return PRODUCTOS.push(new Producto("Remera nike negra", "$2000", "S", "002348", "false"))
        }
}
    
function productos_pantalones(item){
    if(item == "1"){
     return PRODUCTOS.push(new Producto("Pantalon corto", "$800", "XL", "007482", "true"))            
    }

    else{
     return PRODUCTOS.push(new Producto("Pantalon largo", "$2000", "L", "007598", "false"))
    }
}

function productos_zapatillas(item){
    if(item == "1"){
     return PRODUCTOS.push(new Producto("Zapatilla air force", "$5000", "8", "003482", "true"))            
    }

    else{
     return PRODUCTOS.push(new Producto("Zapatilla air max", "$6000", "9.5", "004398", "false"))
    }
}


const PRODUCTOS = [];
let indice = 0;
let categoria = prompt("elige que quieres comprar \n remeras pantalones zapatillas");


categoriasDeProductos(categoria);

for(const Producto of PRODUCTOS){
Producto.mostrardatos(indice);
indice++;
}

*/

