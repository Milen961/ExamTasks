function solve(startNum, endNum){

    let sum = 0;
    let sequence = '';
    for (let i = startNum; i<= endNum; i++){
        sum += i;
        sequence += i + " ";

    }
    console.log(sequence);
    console.log(`Sum: ${sum}`);

}
solve(5,10);