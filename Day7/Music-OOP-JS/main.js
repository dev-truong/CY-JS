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

class Observe {
    constructor() {
        this.listener = {
            play: new Set(),
            pause: new Set()
        }
    }
    subcribe(event, listener) {
        listener[event].add(listener);
    }
}


class audioPlayer {
    constructor(listSong) {
        this.listSong = listSong;
        // this.indexCurrentSong = indexCurrentSong;
        // this.isPlay = false;
        // console.log(listSong, indexCurrentSong, isPlay);
    }
}

const player = new audioPlayer(arrSong);
console.log(player.listSong);