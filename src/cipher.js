window.cipher = {
  encode: (offset, string) => {
    string=string.toUpperCase();


    let codificado="";
    for(let i = 0 ; i < string.length ; i++){
      codificado=codificado + String.fromCharCode (( string.charCodeAt(i) - 65 + parseInt(offset) ) % 26 + 65);
    }
    return codificado;
  },

  decode: (offset, string) => {
    string=string.toUpperCase();

    let decodificado="";
    for(let i = 0 ; i < string.length ; i++){
      decodificado=decodificado + String.fromCharCode (( string.charCodeAt(i) + 65 - parseInt(offset) ) % 26 + 65);
    }
    return decodificado;
  },


  // ...
};
