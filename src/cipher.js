window.cipher = {
  encode: (offset, string) => {

    let codificado="";
    for(let i = 0 ; i < string.length ; i++){

      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <=122) {
        codificado=codificado + String.fromCharCode (( string.charCodeAt(i) - 97 + parseInt(offset) ) % 26 + 97);
      }
      else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <=90) {
          codificado=codificado + String.fromCharCode (( string.charCodeAt(i) - 65 + parseInt(offset) ) % 26 + 65);
      }
      else {
        codificado=codificado+string[i];
      }
    }
    return codificado;
  },

  decode: (offset, string) => {

    let decodificado="";
    for(let i = 0 ; i < string.length ; i++){

      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <=122) {
        decodificado=decodificado + String.fromCharCode (( string.charCodeAt(i) - 122 - parseInt(offset) ) % 26 + 122);
      }
      else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <=90) {
          decodificado=decodificado + String.fromCharCode (( string.charCodeAt(i) + 65 - parseInt(offset) ) % 26 + 65);
      }
      else {
        decodificado=decodificado+string[i];
      }

    }
    return decodificado;
  },


  // ...
};
