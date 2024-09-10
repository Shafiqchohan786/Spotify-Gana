console.log("Welcome to spotify");
let songindex=1;
let audioElement=new Audio('song6.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let mastersongname=document.getElementById('mastersongname');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'))
let songs=[
    {songname:"Mera mehboob",filepath:"song1.mp3",coverpath:"cover1.jfif"},
    {songname:"Ishare tera song",filepath:"song2.mp3",coverpath:"cover2.jfif"},
    {songname:"viral song",filepath:"song3.mp3",coverpath:"cover1.jfif"},
    {songname:"Bapu tera kar ",filepath:"song4.mp3",coverpath:"cover1.jfif"},
    {songname:"Duniyadari deki",filepath:"song5.mp3",coverpath:"cover1.jfif"},
    // {songname:"Bapu Tera kar ka",filepath:"songs/song3.mp4",coverpath:"covers/cover1.jfif"},

]
songitems.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;

})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        // gif.style.opacity=1;
        gif.style.display = 'block';
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        // gif.style.opacity=0;
        gif.style.display = 'none';
    }
})

// audioElement.play();
audioElement.addEventListener('timeupdate',()=>{
    console.log("time update");
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        // Ensure we're working with the element itself
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

// Adding event listeners to elements
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songindex=parseInt(e.target.id)
        // Access the clicked element using `e.currentTarget` for better context
        e.currentTarget.classList.remove('fa-circle-play');
        e.currentTarget.classList.add('fa-circle-pause');
        audioElement.src = `songs/song${songindex + 1}.mp3`; // Use correct file pat
        // mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    });
});
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=songs.length - 1){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src = `songs/song${songindex + 1}.mp3`; // Use correct file pat
        audioElement.currentTime=0;
        // mastersongname.innerText=songs[songindex].songname;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=songs.length-1
    }
    else{
        songindex-=1;
    }
    audioElement.src = `songs/song${songindex + 1}.mp4`; // Use correct file pat
        audioElement.currentTime=0;
        mastersongname.innerText=songs[songindex].songname;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})
window.addEventListener('load', () => {
    gif.style.display = 'none';
  });