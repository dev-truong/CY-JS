const arrSong = [
    {
        name: "song-1",
        src: './assets/music1.mp3'
    },
    {
        name: "song-2",
        src: './assets/music2.mp3'
    },
    {
        name: "song-3",
        src: './assets/music3.mp3'
    },
    {
        name: "song-4",
        src: './assets/music4.mp3'
    }
]
//
// audio = new Audio();
// audio.src = './assets/music1.mp3';

const myPlay = document.querySelector('.music-input');
document.querySelector('.play-button').addEventListener('click', (e) => {
    playBtn.isPlay = true;
    document.querySelector('.play-button img').src = "./assets/icon-pause.png";
})
document.querySelector('.pause-button').addEventListener('click', (e) => {
    playBtn.isPlay = false;
})
let currentIndex = 0;
document.querySelector('.next-button').addEventListener('click', (e) => {
    currentIndex = (currentIndex + 1) % arrSong.length;
    nextBtn.value = (arrSong[currentIndex]);
    listTitleSong(currentIndex);
})
document.querySelector('.pre-button').addEventListener('click', (e) => {
    currentIndex = (currentIndex - 1 + arrSong.length) % arrSong.length;
    preBtn.value = (arrSong[currentIndex]);
})

const playBtn = new Proxy({
    isPlay: false,
},{
    set(target, key, value) {
        target[key] = value;
        if (value === true) {
            myPlay.pause();
        } else {
            myPlay.play();
        }
    }
})

const nextBtn = new Proxy({
    value: [],
}, {
    set(target, key, value) {
        target[key] = value;
        myPlay.src = value.src;
    }
})
const preBtn = new Proxy({
    value: [],
}, {
    set(target, key, value) {
        target[key] = value;
        myPlay.src = value.src;
    }
})

function listTitleSong(songIndex) {
    const currentSong = document.querySelector('.song-title');
    currentSong.innerHTML = arrSong[songIndex].name;
}


