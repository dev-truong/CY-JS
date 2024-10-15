function clone(obj) {
//neu khong phai object
    if(typeof obj !== 'object') {
        return obj;
    }
//neu la mang
    if(Array.isArray(obj)) {
        let newArr = [];
        for( let i = 0; i < obj.length; i++) {
            newArr[i] = clone(obj[i]);
        }
        return(newArr);
    }
//neu khong phai mang thi sao chep
    let newObj = {};
    for(let key in obj) {
        newObj[key] = clone(obj[key]);
    }
    return newObj;
}
//kiem tra ket qua
const example = {
    name: "John",
    arr: [1, 2, 3, 4, 5],
    address: { city: "New York" }
};
const result = clone(example);
result.address.city = "San Francisco";
console.log(result);
