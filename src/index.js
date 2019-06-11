/*
let btnInicio=document.getElementById('btnInicio');
*/
let btnCod=document.getElementById('btnCod');
let btnDecod=document.getElementById('btnDecod');
let resuelto=document.getElementById('resuelto');

/*
btnInicio.style.display='none';
*/
resuelto.style.display='none';



btnCod.addEventListener('click',() =>  {
  let desplazamiento=document.getElementById('nDesplazamientos').value;
  let texto=document.getElementById('texto').value;
let codificado=window.cipher.encode(desplazamiento,texto);
console.log(codificado);
document.getElementById('resuelto').innerHTML=codificado;
/*
btnInicio.style.display='block';
*/
resuelto.style.display='block';

});

btnDecod.addEventListener('click',() => {
  let desplazamiento=document.getElementById('nDesplazamientos').value;
  let texto=document.getElementById('texto').value;
let decodificado=window.cipher.decode(desplazamiento,texto);
console.log(decodificado);
document.getElementById('resuelto').innerHTML=decodificado;
/*
btnInicio.style.display='block';
*/
resuelto.style.display='block';

});

/*
  let eraser = document.getElementById('clearbutton');
  eraser.addEventListener('click', () => {

    input.value = '';
  });
/*
  function inicio (){
  location.reload();
  }
*/
