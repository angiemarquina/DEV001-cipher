const cipher = {
  encode: (offSet, text) => {
    let encodedText = "";
    const originalText = text.toUpperCase(); //mayúsculas
    //console.log(originalText)
    for (let i = 0; i < originalText.length; i++) { //tamaño de string
      if (originalText.charCodeAt(i) >= 65 && originalText.charCodeAt(i) <= 90) { // formula ascii
        encodedText += String.fromCharCode(((originalText.charCodeAt(i) - 65 + parseInt(offSet)) % 26) + 65); // de ascii a letra + formula cifrado césar
        //console.log(encodedText)
      }
      else if (originalText.charCodeAt(i) === 32){
        encodedText += " "; //+=    encodedText = encodedText + " "
      }
    }
  return encodedText;
  },

  decode: (offSet,text) => {
    let decodedText = "";
    //offSet = Math.abs(offSet) * -1
    const originalText = text.toUpperCase();
    //console.log("Estamos aquí")
    for (let i = 0; i < originalText.length; i++) {
      if(originalText.charCodeAt(i) >= 65 && originalText.charCodeAt(i) <= 90) {
        decodedText += String.fromCharCode(((originalText.charCodeAt(i) + 65 - parseInt(offSet) % 26) + 26) % 26 + 65); // de cifrado césar a texto original
      }
      else if (originalText.charCodeAt(i) === 32){
        encodedText += " ";
      }
    }
    //console.log(decodedText)
    return decodedText; 
  }
}

export default cipher;