const dropArea = document.querySelector('.drop-area');
const fileInput = document.getElementById('input');

fileInput.addEventListener('change', (e) => {
    document.querySelector('.drop-text').style.display = 'none';
    const files = e.target.files;
    for(let file of files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', (e) => {
            const url = e.target.result;
            const img = document.createElement('img');
            const div = document.createElement('div');
            img.src = url;
            img.style.height = '80px';
            img.style.width = '80px';
            dropArea.appendChild(img);
        })
    }
})

// dropArea.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const files = event.dataTransfer.files;
//     console.log(files)
//     handleFiles(files);
// });
//
// function handleFiles(files) {
//     if (files.length > 0) {
//         const file = files[0];
//         reader.readAsDataURL(file);
//         reader.addEventListener("load", (event) => {
//             const url = event.target.result;
//             const img = document.createElement('img');
//             img.src = url;
//             dropArea.appendChild(img);
//         });
//     }
// }