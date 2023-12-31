const music=new Audio('audio/1.mp3');

const songs=[
    {
        id: "1",
        songName: `Naina Asqu na Ho <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit/1.jpg"
    },
    {
        id: "2",
        songName: `Khairiyat(Sad Version) <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit/2.jpg"
    },
    {
        id: "3",
        songName: `Desh mere <br> 
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/arjit/3.jpg"
    },
    {
        id: "4",
        songName: `Dhokha <br> 
        <div class="subtitle">Mortals</div>`,
        poster: "img/arjit/4.jpg"
    },
    {
        id: "5",
        songName: `Tera Yaar Hoon Main <br> 
        <div class="subtitle">Ertugrul</div>`,
        poster: "img/arjit/5.jpg"
    },
    {
        id: "6",
        songName: `Chunar <br> 
        <div class="subtitle">Electronic</div>`,
        poster: "img/arjit/6.jpg"
    },
    {
        id: "7",
        songName: `galti Se Mistake <br> 
        <div class="subtitle">Tamashaa</div>`,
        poster: "img/arjit/7.jpg"
    },
    {
        id: "8",
        songName: `hamari Adhuri Kahani <br> 
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "img/arjit/8.jpg"
    },
    {
        id: "9",
        songName: `Neki Ki Raha <br> 
        <div class="subtitle">Stayameva Jayate</div>`,
        poster: "img/arjit/9.jpg"
    },
    {
        id: "10",
        songName: `Humdard <br> 
        <div class="subtitle">Luka Chuppi</div>`,
        poster: "img/arjit/10.jpg"
    },
    {
        id: "11",
        songName: `Mera Yaarar <br> 
        <div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/arjit/11.jpg"
    },
    {
        id: "12",
        songName: `Nashe Si Chada Gaya <br> 
        <div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/arjit/12.jpg"
    },
    {
        id: "13",
        songName: `Ae Watan <br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/arjit/13.jpg"
    },
    {
        id: "14",
        songName: `Agar Tum Saath Ho <br> 
        <div class="subtitle">Dhvani Bhanusali</div>`,
        poster: "img/arjit/14.jpg"
    },
    {
        id: "15",
        songName: `Pachtaoge <br> 
        <div class="subtitle">Jubin Nautiwal</div>`,
        poster: "img/arjit/15.jpg"
    }

]

Array.from(document.getElementsByClassName('songitem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})



let masterplay=document.getElementById('masterplay');
let wave=document.getElementById('wave');
masterplay.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bx-play');
        masterplay.classList.remove('bx-pause');
    }
});


const makeallplay=()=>{
    Array.from(document.getElementsByClassName('PlayListPlay')).forEach((el)=>{
        el.classList.add('bx-play-circle');
        el.classList.remove('bx-pause-circle');
    })
}


const makeallbackground=()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background='rgba(105, 105, 105, .0)';
    })
}

let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('PlayListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        //console.log(abc);
        music.src=`audio/arjit/${index}.mp3`;
        poster_master_play.src = `img/arjit/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
        download_music.href=`audio/arjit/${index}.mp3`;

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });

        songtitle.forEach((elss)=>{
            let{songName}=elss;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeallplay();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
    });
})

let currentstart=document.getElementById('currentstart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentstart.innerText=`${min2}:${sec2}`;

    let progressbar=parseInt((music_curr/music_dur)*100);
    seek.value=progressbar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');
vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bx-volume-full');
        vol_icon.classList.remove('bx-volume-low');
        vol_icon.classList.add('bx-volume-mute');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bx-volume-full');
        vol_icon.classList.add('bx-volume-low');
        vol_icon.classList.remove('bx-volume-mute');
    }
    if(vol.value>50){
        vol_icon.classList.add('bx-volume-full');
        vol_icon.classList.remove('bx-volume-low');
        vol_icon.classList.remove('bx-volume-mute');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');
back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src=`audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bx-play');
    masterplay.classList.add('bx-pause');

    let songtitle=songs.filter((els)=>{
        return els.id==index;
    });

    songtitle.forEach((elss)=>{
        let{songName}=elss;
        title.innerHTML=songName;
    });
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
    makeallplay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
    wave.classList.add('active1');
})
next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songitem')).length){
        index=1;
    }
    music.src=`audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bx-play');
    masterplay.classList.add('bx-pause');

    let songtitle=songs.filter((els)=>{
        return els.id==index;
    });

    songtitle.forEach((elss)=>{
        let{songName}=elss;
        title.innerHTML=songName;
    });
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
    makeallplay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
    wave.classList.add('active1');
})

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
});

let pop_artist_left=document.getElementById('pop_artist_left');
let pop_artist_right=document.getElementById('pop_artist_right');
let Artist_bx=document.getElementsByClassName('Artist_bx')[0];

pop_artist_right.addEventListener('click',()=>{
    Artist_bx.scrollLeft+=330;
});

pop_artist_left.addEventListener('click',()=>{
    Artist_bx.scrollLeft-=330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
    case "Next":
        shuffle.classList.add('bx-repeat');
        shuffle.classList.remove('bx-music');
        shuffle.classList.remove('bx-shuffle');
        shuffle.innerHTML = 'repeat';
        break;
    case "repeat":
        shuffle.classList.remove('bx-repeat');
        shuffle.classList.remove('bx-music');
        shuffle.classList.add('bx-shuffle');
        shuffle.innerHTML = 'random';
        break;
    case "random":
        shuffle.classList.remove('bx-repeat');
        shuffle.classList.add('bx-music');
        shuffle.classList.remove('bx-shuffle');
        shuffle.innerHTML = 'Next';
        break;
    }
});



const next_music=()=>{
    //index++;
    if (index==songs.length) {
        index=1;
    }
    else{
        index++;
    }
        music.src=`audio/arjit/${index}.mp3`;
        poster_master_play.src = `img/arjit/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
        //download_music.href=`audio/${index}.mp3`;

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });

        songtitle.forEach((elss)=>{
            let{songName}=elss;
            title.innerHTML=songName;
            //download_music.setAttribute('download',songName);
        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeallplay();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
}

const repeat_music=()=>{
    //index++;
        index;
        music.src=`audio/arjit/${index}.mp3`;
        poster_master_play.src = `img/arjit/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
        //download_music.href=`audio/${index}.mp3`;

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });

        songtitle.forEach((elss)=>{
            let{songName}=elss;
            title.innerHTML=songName;
            //download_music.setAttribute('download',songName);
        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeallplay();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
}

const random_music=()=>{
    //index++;
    if (index==songs.length) {
        index=1;
    }
    else{
        index=Math.floor((Math.random() * songs.length)+1);
    }
        music.src=`audio/arjit/${index}.mp3`;
        poster_master_play.src = `img/arjit/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
        //download_music.href=`audio/${index}.mp3`;

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });

        songtitle.forEach((elss)=>{
            let{songName}=elss;
            title.innerHTML=songName;
            //download_music.setAttribute('download',songName);
        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeallplay();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
}

music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'Next':
            next_music();
            break;
        
        case 'random':
            random_music();
            break;
    
    }
})