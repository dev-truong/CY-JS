//Chuoi dau vao
let rawStr = "Hello CY VietNam";

//Ham dao nguoc chuoi
function daonguoc(str) {
    return str.split("").reverse().join("");
}

//Ket qua
console.log(daonguoc(rawStr));