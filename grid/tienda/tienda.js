let total=0;
let stock=[]
class Prenda{
    constructor(prenda,talla,precio){
           this.prenda=prenda;
           this.talla=talla;
           this.precio=precio;
    }
   
   
}
let prenda1= new Prenda("Hoodie","M",72.95);
let prenda2=new Prenda("Camisa","L",45.95);
let prenda3=new Prenda("Camiseta","L",45.95);
let prenda4=new Prenda("camisetanegra","xl",45.95);

$("#capucha").click(function(){
   total+=prenda1.precio;
   $("#textomodal").html(total);
   
})
$("#bapho").click(function(){
    total+=prenda2.precio;
    $("#textomodal").html(total);
})
$("#camisanegra").click(function(){
    total+=prenda3.precio;
    $("#textomodal").html(total);
})
$("#shirt").click(function(){
    total+=prenda4.precio;
    $("#textomodal").html(total);
})

