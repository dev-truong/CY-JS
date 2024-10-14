//goi module nhap va xuat bang teminal qua Nodejs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkemail (email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Nhap email va xem ket qua
readline.question('Nhập vào một email bất kỳ: ', email => {
    if (checkemail(email)) {
        console.log(email + " la dia chi email hop le")
    } else {
        console.log(email + " khong phai dia chi email hop le")
    }
    readline.close();
});