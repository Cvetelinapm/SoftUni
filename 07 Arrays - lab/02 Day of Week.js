function solve(day){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = '';
    if(1 <= day && day <= 7){
        result = days[day - 1]
    } else{
        result = 'Invalid day!'
    }
    console.log(result)
}
solve([3])