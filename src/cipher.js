window.cipher = {
  function encode(offset, string) {
    for(let i = 0 ; i < string.length ; i++){
      console.log(codificado)
      codificado=codificado + String.fromCharCode (( string.charCodeAt(i) - 65 + offset ) % 26 + 65)
    }

  }
  // ...
};

module.exports = window.cipher;
