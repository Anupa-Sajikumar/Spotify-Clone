console.log("Welcome to Spotify")
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Taylor Swift - Look What You Made Me Do (Lyric Video).mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: 'What you made me do',filepath: "songs/Taylor Swift - Look What You Made Me Do (Lyric Video).mp3", coverPath: "Images/index.jpeg"},
    {songName: "Ready For It?",filepath: "songs/Taylor Swift - ...Ready For It_ (Audio).mp3", coverPath: "Images/index1.jpeg"},
    {songName: "Wildest Dreams",filepath: "songs/Taylor Swift - Wildest Dreams (Taylor’s Version) (Official Audio).mp3", coverPath: "Images/index2.jpeg"},
    {songName: "Delicate",filepath: "songs/Taylor Swift - Delicate (Lyrics).mp3", coverPath: "Images/index3.jpeg"},
    {songName: "Enchanted",filepath: "songs/Taylor Swift - Enchanted (Lyrics).mp3", coverPath: "Images/index4.jpeg"},
    {songName: "Begin Again",filepath: "songs/Taylor Swift - Begin Again (Lyrics).mp3", coverPath: "Images/index5.jpg"},
    {songName: "Calm Down",filepath: "songs/Taylor Swift - You Need To Calm Down (Lyrics).mp3", coverPath: "Images/index6.jpeg"},
    {songName: "Blank Space",filepath: "songs/Blank Space - Taylor Swift (Lyrics) 🎵.mp3", coverPath: "Images/index7.jpeg"},
    {songName: "Carolina Street",filepath: "songs/Taylor Swift - Carolina lyrics.mp3", coverPath: "Images/index8.jpeg"},
    {songName: "Anti-Hero",filepath: "songs/Taylor Swift - Anti-Hero (Lyrics).mp3", coverPath: "Images/index9.jpeg"}
]

songItems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName").innerText= songs.songItems;
    console.log(element)
})
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

//LIsten to Events
audioElement.addEventListener('timeupdate', () => {
    // Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =() =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.currentTarget.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText =songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-palay');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-palay');
    masterPlay.classList.add('fa-pause');
})