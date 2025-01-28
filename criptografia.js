// Importando a biblioteca CryptoJS
const CryptoJS = require("crypto-js");

// Texto que será criptografado
const textoOriginal = "Este é um texto secreto";

// Chave secreta para criptografia
const chaveSecreta = "minha_chave_super_secreta";

// Criptografando o texto
const textoCriptografado = CryptoJS.AES.encrypt(textoOriginal, chaveSecreta).toString();
console.log("Texto Criptografado:", textoCriptografado);

// Descriptografando o texto
const bytes = CryptoJS.AES.decrypt(textoCriptografado, chaveSecreta);
const textoDescriptografado = bytes.toString(CryptoJS.enc.Utf8);
console.log("Texto Descriptografado:", textoDescriptografado);

// Exportando para teste
module.exports = { textoOriginal, textoCriptografado, textoDescriptografado };