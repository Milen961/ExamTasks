function login(input){

    let userName = input.shift();
    let copy = userName;
    input.unshift(copy);
    let count = 0;
    for (let i = 1; i < input.length ; i++){
        if (count > 3 ){
            console.log(`User ${userName} blocked`)
            break;

        }
        let reversString = input[i];
        reversString = reversString.split('');
        reversString = reversString.reverse();
        reversString = reversString.join('');
        if (reversString !== userName){
            console.log("Incorrect password. Try again.");

        }else {
            console.log(`User ${userName} logged in.`);

        }

        count++;
    }

}
login(['Acer','login','go','let me in','recA']);