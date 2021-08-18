//creo boton firmar

var btn = document.createElement("BUTTON");
  btn.innerHTML = "Firma";
  document.body.appendChild(btn);


//creo el boton llamar (aunque no lo uso en esta extension)
/*
var callBtn = document.createElement("button");
  callBtn.innerHTML = "Llamar";
  callBtn.type = "llamar";
  callBtn.name = "formBtn";
  document.body.appendChild(callBtn);
*/


//asigno el alt+z al boton firmar


document.querySelector("body > button").setAttribute("accesskey","z");


//tarea a realizar cuando presiono firmar

btn.addEventListener("click", () => {
console.log("Boton Clickeado");

//pulso edit
document.querySelector("#example_wrapper > div.dt-buttons.btn-group.flex-wrap > button.btn.btn-secondary.buttons-selected").click();


//creo la firma
let cosa= new Date();
 

let firma= cosa.getDate()+"/"+(cosa.getMonth()+1)+" "+cosa.getHours()+":"+ (cosa.getMinutes()<10?'0':'') + cosa.getMinutes() +" Pablo";

 
//pongo status en rellamar
document.querySelector("#status").value= 1;

//escribo la firma
document.querySelector("#vt_order").value= firma ;

//clico en ok 

document.querySelector("#editRowBtn").click();
//document.querySelector("#altEditor-edit-form-0717312941249407 > div > div.modal-footer > //button.btn.btn-default").click() ;


});
