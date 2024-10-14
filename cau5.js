//goi module nhap va xuat bang teminal qua Nodejs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Xu li chuoi
function xulichuoi(chuoi) {
    const xuli = chuoi.replace(/[@#!{}[\]()]/g, '').trim().replace(/\s+/g, ' ');
    return xuli;
}

//yeu cau a
function yeucaua(chuoi) {
    const tachchuoi = chuoi.split(' ');
    const dinhdangchuoi = tachchuoi.map(a => {
        return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    });
    const daonguocchuoi = dinhdangchuoi.reverse();
    return daonguocchuoi;
}

//yeu cau b
function yeucaub(chuoi) {
    const tachchuoi = chuoi.split(' ');
    const locso = tachchuoi.filter(a => !isNaN(a)).map(Number);
    if (locso.length === 0) {
        return 0;
    }
    const tong = locso.reduce((a, b) => a + b, 0);
    const trungbinh = tong/locso.length;
    return trungbinh;
}

//Ket qua
readline.question('Nhap vao chuoi: ', chuoi => {
    if(chuoi.trim() == "") {
        console.log("mang sau khi xu li: ", []);
        console.log("Gia tri trung binh cac so xuat hien trong chuoi: ", 0);
    } else {
        const chuoidaxuli = xulichuoi(chuoi);
        console.log("mang sau khi xu li: ", yeucaua(chuoidaxuli));
        console.log("Gia tri trung binh cac so xuat hien trong chuoi: ", yeucaub(chuoidaxuli));
    }
    readline.close();
});