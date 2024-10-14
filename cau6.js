let arr = [
    {
        brand: 'Huyndai',
        model: 'Santafe'
    },
    {
        brand: 'Huyndai',
        model: 'Sonata'
    },
    {
        brand: 'Vinfast',
        model: 'Lux SA'
    },
    {
        brand: 'Toyota',
        model: 'Camry'
    },
    {
        brand: 'Vinfast',
        model: 'Lux A'
    },
    {
        brand: 'Toyota',
        model: 'Vios'
    }
]

// Sử dụng reduce để nhóm các phần tử theo brand
let nhomtheobrand = arr.reduce((result, currentCar) => {
    // Kiểm tra xem đã có mảng con cho brand này chưa
    let nhombrand = result.find(nhom => nhom[0].brand === currentCar.brand);

    if (nhombrand) {
        // Nếu có, thêm model mới vào nhóm đã tồn tại
        nhombrand.push(currentCar);
    } else {
        // Nếu chưa có, tạo nhóm mới với brand này
        result.push([currentCar]);
    }

    return result;
}, []);

console.log(nhomtheobrand);
