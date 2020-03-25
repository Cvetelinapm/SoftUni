function solve(arr){
    while(arr.length > 1){
        let condesed = Array(arr.length - 1);

        for (let i = 0; i < arr.length - 1; i++) {
            condesed[i] = Number(arr[i]) + Number(arr[i +1]);
        }

        arr = condesed;
    }
    console.log(arr[0])
}
solve([2,10,3])