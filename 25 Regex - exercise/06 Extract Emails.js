function solve(text){
    
text.forEach(element => {
    let pattern = /(^|(?<=\s))[A-Za-z0-9]+[-_\.]?[A-Za-z0-9]+@[A-Za-z0-9]+[\-]?[A-Za-z0-9]+(\.[A-Za-z]+)+(\b|(?=\s))/gm;

    let email = element.match(pattern);
    if(email){
        console.log(email.join('\n'))
    }

});
}
solve([ 'Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.' ])