let cards = document.getElementsByClassName("box-card")[0];
let playlist = document.getElementsByClassName("main-left-bottom2")[0];
let prebtn = document.querySelector(".player").children[0];
let playbtn = document.querySelector(".player").children[1];
let nextbtn = document.querySelector(".player").children[2];
let songtitle = document.getElementsByClassName("songtitle")[0];
let songtime = document.getElementsByClassName("songtime")[0];
let seekbar = document.getElementsByClassName("slider-bar")[0];
let circle = document.getElementsByClassName("circle")[0];
let sounbar = document.getElementsByClassName("sound")[0].getElementsByTagName("input")[0];
let soundicon = document.getElementsByClassName("sound")[0].getElementsByTagName("i")[0];
let hamburg = document.getElementsByClassName("hamburg")[0];
let left_cont = document.getElementsByClassName("left-container")[0];
let close_btn = document.getElementsByClassName("close-btn")[0];
let sound = document.getElementsByClassName("sound")[0].lastElementChild;
let boxes = document.getElementsByClassName("box-1");


let newsongs = [];
let audio = new Audio();

let carddata  = [{src: "https://c.saavncdn.com/700/Main-Tera-Hero-2014-500x500.jpg",title: "Main Tera Hero", body: "Palat"},
{src: "https://i.ytimg.com/vi/RKioDWlajvo/hqdefault.jpg",title: "Satyameva Jayate 2 ", body: "Lehanga"},
{src: "https://i.ytimg.com/vi/r2ZDVNw1S0s/hqdefault.jpg", title: "Main Khiladi Tu Anar", body: "Chura Ke Dil Mera"},
{src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeILcwVL1xPrCpEYfq_RLEPBdjgab2SShvPB5ASU0aGIYgYqi6eNl_ILK6u8JtbKLKox4&usqp=CAU",title: "Student Of The Year",body: "Mashup Of The Year"},
{src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeILcwVL1xPrCpEYfq_RLEPBdjgab2SShvPB5ASU0aGIYgYqi6eNl_ILK6u8JtbKLKox4&usqp=CAU", title: "Student Of The Year", body: "The Disco Song"},
{src: "https://c.saavncdn.com/208/Pal-From-Jalebi--Hindi-2018-20180912085100-500x500.jpg", title: "Jalebi", body: "Pal"},
{src: "https://haryanviimage.com/wp-content/uploads/2017/10/pallo-latke-shaadi-mein-zaroor-a.jpg", title: "Shaadi Mein Zaroor Aana", body: "Pallo Latke - Shaadi Mein Zaroor Aana.mp3"},
{src: "https://i.ytimg.com/vi/9bDYGM9AcEw/maxresdefault.jpg", title: "Zara Hatke Zara Bachke", body: "Phir Aur Kya Chahiye"},
{src: "https://c.saavncdn.com/490/Raanjhana-Ve-Hindi-2021-20211203014335-500x500.jpg", title: "Raanjhana Ve", body: "Raanjhana Ve"},
{src: "https://images.hungama.com/c/1/5b5/0dd/97951676/97951676_300x300.jpg", title: "Mission Majnu", body: "Rabba Janda"},
{src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeILcwVL1xPrCpEYfq_RLEPBdjgab2SShvPB5ASU0aGIYgYqi6eNl_ILK6u8JtbKLKox4&usqp=CAU", title: "Student Of The Year", body: "Radha"},
{src: "https://c.saavncdn.com/402/Ram-Aayenge-Hindi-2023-20231009220810-500x500.jpg", title: "Bal Naren", body: "Ram Aayenge"},
{src: "https://c.saavncdn.com/152/Ranjithame-From-Varisu-Tamil-2022-20221105151002-500x500.jpg", title: "Varisu", body: "Ranjithame "},
{src: "https://c.saavncdn.com/231/Dishoom-Hindi-2016-500x500.jpg", title: "Dishoom", body: "Sau Tarah Ke"},
{src: "https://c.saavncdn.com/929/Shayad-From-Love-Aaj-Kal--Hindi-2020-20200122112631-500x500.jpg", title: "Love Aaj Kal", body: "Shayad "},
{src: "https://i.ytimg.com/vi/_1BbDhiiV6A/maxresdefault.jpg", title: "Pushpa Part-1", body: "Srivalli"},
{src: "https://images.hungama.com/c/1/48a/ea3/41738080/41738080_300x300.jpg", title: "Kedarnath", body: "Sweetheart"},
{src: "https://c.saavncdn.com/440/Raksha-Bandhan-Hindi-2022-20230212112927-500x500.jpg", title: "Raksha Bandhan", body: "Tere Saath Hoon Main"},
{src: "https://c.saavncdn.com/959/Thoda-Thoda-Pyaar-Hindi-2021-20210212084501-500x500.jpg", title: "Thoda Thoda Pyaar Hua Tumse", body: "Thoda Thoda Pyaar Hua Tumse"},
{src: "https://c.saavncdn.com/530/Mickey-Virus-2013-500x500.jpg", title: "Mickey Virus ", body: "Tose Naina "},
{src: "https://c.saavncdn.com/801/Kick-Hindi-2014-500x500.jpg", title: "Kick", body: "Tu Hi Tu"},
{src: "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg", title: "Tu Maan Meri Jaan", body: "Tu Maan Meri Jaan"},
{src: "https://c.saavncdn.com/836/Tumse-Milne-Ko-Dil-Lofi-Mix-Hindi-2023-20230609152632-500x500.jpg", title: "Phool Aur Kaante", body: "Tumse Milne Ko Dil"},
{src: "https://c.saavncdn.com/636/Ganpati-Bappa-Morya-Marathi-2022-20220824130618-500x500.jpg", title: "Ventilator", body: "Ya Re Ya Sare Ya Puneri Dhol Dj"},
];

 carddata.forEach((e)=>{
    cards.innerHTML += `
    <div class="box-1">
    <div class="box-1-main">
    <div>
      <div>
        <img class="img-cards" src="${e.src}" alt="">
      </div>
    </div>
        <div class="title-txt">${e.title}</div>
        <div class="body-txt">${e.body}</div>
  </div>  
  <div class="btn-div"> <img class="card-btn" src="playbtn.svg" alt=""> </div>
  </div>
  `
 })

let getsongs = async() =>{
    let songsdata = await fetch("/songs/");
    let song = await songsdata.text();
    let div = document.createElement("div");
    div.innerHTML = song;
    let as = Array.from(div.getElementsByTagName("a"));
    as.forEach((e)=>{
        if(e.href.endsWith(".mp3"))
           {
              newsongs.push(e.href);
           }
    });
    return newsongs;
}

//Second convter function
function secondsToTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // Add leading zeros if needed
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}


//Play the song

let Playsong = (s,defsong = false) =>{
  songtitle.innerHTML = `${decodeURI(s)}`;
  audio.src = "/songs/" + s;
  playbtn.removeAttribute("class");
  playbtn.className = "fa-solid fa-circle-play";
  if(!defsong)
  {
    playbtn.className = "fa-solid fa-pause";
    audio.play();
  }

  let sendsrc = audio.src.replaceAll("%20"," ").split("/songs/")[1];

  checkPlayVisible(sendsrc);

}

async function main(){

  let allsongs = await getsongs();

  Playsong(allsongs[0].replaceAll("%20"," ").split("/songs/")[1],true);

  allsongs.forEach((e)=>{
      if(e != "")
      {
        playlist.innerHTML += `<div class="left-sub-3">
      <i class="fa-solid fa-music playicon" height="35px" width="35px" style="display: flex"></i>
      <p class="lib-text2">${e.replaceAll("%20"," ").split("/songs/")[1]}</p>
      <i class="fa-regular fa-circle-play playicon" style="display: flex"></i>
 </div>`
      }

})

//event listener on each song list
Array.from(document.querySelector(".main-left-bottom2").children).forEach((e)=>{
  e.addEventListener("click",() => Playsong(e.children[1].innerHTML));
})

songtitle.innerHTML = `${newsongs[0].replaceAll("%20"," ").split("/songs/")[1]}`;

  //Setting timeupdate evnt listener
  audio.addEventListener("timeupdate",(e)=>{
    songtime.innerHTML = `${secondsToTime(audio.currentTime)} / ${secondsToTime(audio.duration)}`;
      circle.style.left = (audio.currentTime / audio.duration) * 100 + "%";
    })

    //seekbar event for changing songtime
seekbar.addEventListener("click",(e)=>{
  const audperc = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
  circle.style.left = audperc + "%";
  const seekTime = (audio.duration) * audperc / 100;
  audio.currentTime = seekTime;
})

}

//Event on prev btn
prebtn.addEventListener("click",(e)=>{
  const PreSongIndex = newsongs.indexOf(encodeURI("/songs/" + songtitle.innerHTML));
  if(PreSongIndex - 1 >= 0)
  {
    circle.style.left = "0%";
    Playsong(newsongs[PreSongIndex - 1].replace("/songs/",""));
  }
})

//Event on next btn
nextbtn.addEventListener("click",(e)=>{
  const NextSongIndex = newsongs.indexOf(encodeURI("/songs/" + songtitle.innerHTML));
  if(NextSongIndex + 1 < newsongs.length)
  {
    circle.style.left = "0%";
    Playsong(newsongs[NextSongIndex  + 1].replace("/songs/",""));
  }
})

//Event listener on carddata
Array.from(boxes).forEach((e,ind)=>{
  e.addEventListener("click",(elem)=>{


    Playsong(newsongs[ind].replaceAll("%20"," ").split("/songs/")[1]);
  })
})

//Play and pause btn event
playbtn.addEventListener("click",(e)=>{
  if(audio.paused)
  {
    playbtn.removeAttribute("class");
    playbtn.className = "fa-solid fa-pause";
    audio.play();
    checkPlayVisible(audio.src.replaceAll("%20"," ").split("/songs/")[1]);
  }
  else{
    audio.pause();
    playbtn.removeAttribute("class");
    playbtn.className = "fa-solid fa-circle-play";
    checkPlayVisible(audio.src.replaceAll("%20"," ").split("/songs/")[1],true);
  }
})


//soundbar event listener
sounbar.addEventListener("change",(e)=>{
  let SoundValue = Number.parseInt(e.target.value);
  if(SoundValue > 0 && SoundValue < 50)
  {
     soundicon.removeAttribute("class");
     soundicon.className = "fa-solid fa-volume-low";
    }
    else if(SoundValue === 0)
    {
    soundicon.removeAttribute("class");
    soundicon.className = "fa-solid fa-volume-xmark";
  }
  else{
    soundicon.removeAttribute("class");
    soundicon.className = "fa-solid fa-volume-high";
  }
  audio.volume = SoundValue / 100;
})

sound.addEventListener("click",(e)=>{
  if(e.target.getAttribute("class") == "fa-solid fa-volume-high"){
    e.target.className = "fa-solid fa-volume-xmark";
    sounbar.value = 0;
    audio.volume =  0;
  }
  else{
    e.target.className = "fa-solid fa-volume-high";
    sounbar.value = 50;
    audio.volume =  50 / 100;
  }
})

//  hamburger event listener
hamburg.addEventListener("click",()=>{
  left_cont.style.left = 0;
})

// close_btn event listener
close_btn.addEventListener("click",()=>{
  left_cont.style.left = "-110%";
})

// For Changing the icon from song list
 let checkPlayVisible = (src,defpplay = false) =>{
    Array.from(document.getElementsByClassName("left-sub-3")).forEach((e)=>{
      if(src == e.children[1].innerText){
          defpplay ? e.lastElementChild.className = "fa-regular fa-circle-play playicon":  e.lastElementChild.className = "fa-regular fa-circle-pause pauseicon playicon";
      }
      else{
        e.lastElementChild.className = "fa-regular fa-circle-play playicon";
      }
    })
 }

main();