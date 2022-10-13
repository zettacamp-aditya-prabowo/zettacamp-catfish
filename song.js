var songlist =[{
    artist:"Peterpan",
    song_title:"Bintang di surga",
    year:"2004",
    genre: "Pop",
    duration: 120 
},{
    artist:"Sheila On 7",
    song_title:"Dan",
    year:"199",
    genre:"Pop",
    duration: 180 
},{
    artist:"Fatin Shidqia",
    song_title:"Lantas",
    year:"2020",
    genre:"Pop",
    duration: 120
},{
    artist:"Fatin Shidqia",
    song_title:"Pelangi dan Hujan",
    year:"2020",
    genre:"Pop",
    duration: 180
},{ 
    artist:"Rizky Febian, Ziva Magnolya",
    song_title:"Tentang",
    year:"2022",
    genre:"Pop",
    duration: 240
},{
    artist:"Dewa 19",
    song_title:"Tentang",
    year:"1992",
    genre:"Rock",
    duration: 240
},{
    artist:"Roxx",
    song_title:"Rock Bergema",
    year:"2017",
    genre:"Rock",
    duration: 240
},{
    artist:"Koil",
    song_title:"Mendekati Surga",
    year:"2018",
    genre:"Rock",
    duration: 240
},{
    artist:"Nidji",
    song_title:"Hapus Aku",
    year:"2005",
    genre:"Rock",
    duration: 240
},{
    artist:"Scott Grooves",
    song_title:"Mothership Connection (REMIX)",
    year:"2005",
    genre:"Rock",
    duration: 3620
}

]



function groupBy_artist(array){
    let obj_artist=[];
    array.forEach(c=>{
        var makekey= c.artist
        if(!obj_artist[makekey]){
            obj_artist [makekey]=[]
        }
        obj_artist[makekey].push({
            artist: c.artist,
            song_title: c.song_title,
            year: c.year,
            genre: c.genre,
            duration: c.duration
        })
    })
    console.log("Grouping By Artist=",obj_artist)
}

groupBy_artist(songlist)

function groupBy_genre(array){
    let obj_genre=[];
    array.forEach(c=>{
        var makekey= c.genre
        if(!obj_genre[makekey]){
            obj_genre [makekey]=[]
        }
        obj_genre[makekey].push({
            artist: c.artist,
            song_title: c.song_title,
            year: c.year,
            genre: c.genre,
            duration: c.duration
        })
    })
    console.log("Grouping By Genre=",obj_genre)
}

groupBy_genre(songlist)


var long_duration=3600
const groupDuration = (songlist, long_duration) => {
    let obj_duration = []
    for (const iterator of songlist) {
        let key=iterator.duration
        if (iterator.duration < long_duration) {
            obj_duration.push(iterator)
        }
    }
    
    console.log("Grouping By Duration Less Than 1 Hours=",obj_duration)
}

groupDuration(songlist,long_duration)

const more=songlist.filter((song) =>{
    return song.duration<long_duration
})

console.log(more)


// Function Search
// function search_artist(text,songlist){
//     if(undefined===text||text==="") return songlist;
//     return songlist.filter(name=>{
//         let obj1;
//         for(let prop in name){
//             obj1=false;
//             obj1=name[prop].toString().indexOf(text)>-1;
//             if(obj1)break
//         }
//         return obj1
//     })

    
// }

// var artist='Rizky'

// console.log (search_artist(artist,songlist))


