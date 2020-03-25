function solve(array){
let movies = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i].split(' ');

    if(element.includes('addMovie')){
        let movieName = element.slice(1).join(' ');
        movies.push({name: movieName});
    }else if(element.includes('directedBy')){
        let index = element.indexOf('directedBy');
        let movieName = element.slice(0, index).join(' ');
        let director = element.slice(index + 1).join(' ');
        for (const movie of movies) {
            if(movie.name === movieName){
                movie.director = director;
            }
        }
    }else if(element.includes('onDate')){
        let index = element.indexOf('onDate');
        let movieName = element.slice(0, index).join(' ');
        let date = element.slice(index + 1).join(' ');
        for (const movie of movies) {
            if(movie.name === movieName){
                movie.date = date;
            }
        }
    }
    
}
for (const movie of movies) {
    if(Object.keys(movie).includes('director') &&
    Object.keys(movie).includes('date') &&
    Object.keys(movie).includes('name') ){
        console.log(JSON.stringify(movie))
    }
}
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ])