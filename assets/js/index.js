
class Producto{
    constructor(nombre, precio, talle, codigo, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.talle = talle;
        this.codigo = codigo;
        this.stock = stock;

        this.mostrardatos = function (){

            console.log("Nombre: " + this.nombre + ", precio: " + this.precio + ", talle: " + this.talle + ", codigo: " + this.codigo + ", stock " + this.stock);

        }

    }   
}

const productos = [];

productos.push(new Producto("Remera nike", "$3000", "M", "003248", "true"));
productos.push(new Producto("Zapatilla nike blanca", "$4000", "8", "003258", "true"));
productos.push(new Producto("Short black", "$1400", "s", "0012348", "False"));

let indice = 0;


for(const Producto of productos){
Producto.mostrardatos(indice);
indice++;
}



