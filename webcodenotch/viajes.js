let miarray=[]
function add()
{
   nombre = document.getElementById("name").value.toUpperCase();
   origen=  document.getElementById("origin").value.toUpperCase();
   destino = document.getElementById("destiny").value.toUpperCase();
   pasajero= document.getElementById("pasenger").value;
   fecha = document.getElementById("date").value;
   let mijson ={
       "nombre":nombre,
       "origen":origen,
       "destino":destino,
       "pasajero":pasajero,
        "fecha":fecha
    }
    miarray.push(mijson);
    console.log(miarray);
}
function filtrar()
{
    for (let i=0;i<miarray.length;i++)
    {
        if(miarray[i].destino=="CANARIAS"|| miarray[i].destino== "GALICIA"|| miarray[i].destino=="MALLORCA")
        {
            console.log(miarray[i]);
          let midiv =document.createElement("p");
          let minombre=document.createTextNode(miarray[i].nombre);
          let miorigen=document.createTextNode(miarray[i].origen);
          let midestino=document.createTextNode(miarray[i].destino);
          let mipasajeros=document.createTextNode(miarray[i].pasajero);
          let mifecha=document.createTextNode(miarray[i].fecha);
          let añadir =document.querySelector(".nuevo");
          añadir.appendChild(midiv);
          midiv.appendChild(minombre);
          añadir.appendChild(midiv);
          midiv.appendChild(miorigen);
          añadir.appendChild(midiv);
          midiv.appendChild(midestino);
          añadir.appendChild(midiv);
          midiv.appendChild(mipasajeros);
          añadir.appendChild(midiv);
          midiv.appendChild(mifecha);

         
        }
    }
}



console.log(miarray);