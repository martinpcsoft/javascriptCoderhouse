const pedido=[]
class Productos{
    constructor(id,nombre,precio,cantidad){ 
    this.id=id
    this.nombre=nombre
    this.precio=precio
    this.cantidad=cantidad
    }
}

const cereales = new Productos(1,'zucaritas',250,10)
const frutaSeca = new Productos(2,'durazno',150,20)
const legumbres = new Productos(3,'lentejas',50,40)
const semillas = new Productos(4,'girasol',180,15)


pedido.push(cereales);
pedido.push(frutaSeca);
pedido.push(legumbres);
pedido.push(semillas);

console.log(pedido)


