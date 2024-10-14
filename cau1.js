//goi module nhap va xuat bang teminal qua Nodejs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Kiem tra so nguyen to
function kiemtrasonguyento(snt) {
    if (snt < 2) {
        return false;
    }
    for (let i = 2; i < snt; i++) {
        if (snt % i === 0)
            return false;
        return true;
    }
}

//Kiem tra so hoan hao
function kiemtrasohoanhao(shh) {
    let tongUoc = 0;
    for (let i = 1; i < shh; i++) {
        if (shh % i === 0) {
            tongUoc = tongUoc + i;
        }
    }
    return tongUoc===shh;
}

// Nhap so bat ki va xem ket qua
readline.question('Nhập vào một số bất kỳ: ', so => {
    let num = parseInt(so);
    //ket qua so nguyen to
    if (kiemtrasonguyento(num)) {
        console.log(num + " la so nguyen to")
    } else {
        console.log(num + " khong phai so nguyen to")
    }
    //ket qua so hoan hao
    if (kiemtrasohoanhao(num)) {
        console.log(num + " la so hoan hao")
    } else {
        console.log(num + " khong phai so hoan hao")
    }

    readline.close();
});


