import cipher from './cipher.js';

const cipherBtn = document.getElementById("cipher");
cipherBtn.addEventListener("click",()=>{
    const text = document.getElementById("text").value;
    const offSet = document.getElementById("offSet").value;
    document.getElementById("cipherText").innerHTML = cipher.encode(offSet,text);
});

const decipherBtn = document.getElementById("decipher");
decipherBtn.addEventListener("click",()=>{
    const text = document.getElementById("text").value;
    const offSet = document.getElementById("offSet").value;
    document.getElementById("decipherText").innerHTML = cipher.decode(offSet,text);
});