//Sap xep tang dan
function tangdan(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let a = array[j];
                array[j] = array[j + 1];
                array[j + 1] = a;
            }
        }
    }
    return array;
}

//Sap xep giam dan
function giamdan(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (array[j] < array[j + 1]) {
                let a = array[j];
                array[j] = array[j + 1];
                array[j + 1] = a;
            }
        }
    }
    return array;
}

//Mang dau vao
const arr = [10, 2, 3, 2, 5];

//Ket qua
console.log(tangdan(arr));
console.log(giamdan(arr));