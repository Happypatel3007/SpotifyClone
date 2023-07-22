console.log("Welcome To Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Darkside.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Darkside", filePath: "Darkside.mp3", coverPath: "darkside.jpeg" },
    { songName: "Bulleya Ae Dil Hai Mushkil", filePath: "Bulleya Ae Dil Hai Mushkil.mp3", coverPath: "Bulleya Ae Dil Hai Mushkil.jpg" },
    { songName: "Kahani Suno 2.0", filePath: "Kahani Suno 2.mp3", coverPath: "Kahani-Suno-2.jpg" },
    { songName: "Dejalo - Champagne Talk", filePath: "Dejalo.mp3", coverPath: "king.jpeg" },
    { songName: "Deva Deva", filePath: "Deva Deva.mp3", coverPath: "brahmastra.jpg" },
    { songName: "Raataan Lambiyan", filePath: "Raatan Lambiyan.mp3", coverPath: "Raataan-Lambiyan.jpg" },
    { songName: "Kesariya", filePath: "Kesariya.mp3", coverPath: "brahmastra.jpg" },
    { songName: "Is It Love", filePath: "Is It Love.mp3", coverPath: "is it love.jpg" },
    { songName: "Maan Meri Jaan", filePath: "Maan Meri Jaan.mp3", coverPath: "king.jpeg" },
    { songName: "Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein", filePath: "Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein .mp3", coverPath: "Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein.jpg" },
]

// for changing the songItems like songname img etc
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play(); 

// handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); // converting into percentage simply 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

//making a function for make all to play
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

// for playing songs by clicking songItemPlay button
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex + 1}.mp3`;  //for change the song after click 
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 9;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;  //for change the song after click 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;  //for change the song after click 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
