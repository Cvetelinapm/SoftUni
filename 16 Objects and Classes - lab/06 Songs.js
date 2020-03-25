function solve(array){
    class Song{
        constructor(typeList, name, time){
            this.type = typeList,
            this.name = name,
            this.time = time
        }
    }
let songs = [];
let numberSongs = Number(array.shift());
for (let i = 0; i < numberSongs; i++) {
    let [typeList, name, time] = array.shift().split('_');
    let song = new Song(typeList, name, time);
    songs.push(song);

};
let type = array.shift();
for (let play of songs) {
    if(play.type === type || type === "all"){
        console.log(play.name)
    }
}
}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )