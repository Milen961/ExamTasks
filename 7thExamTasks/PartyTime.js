function solve(input){
 
    let vipInvites = new Set();
    let regulatInvites = new Set();

    while(input[0] != 'PARTY'){
    let guest = input.shift();
    if (Number.isNaN(Number(guest[0]))){
        regulatInvites.add(guest)
    }else{
        vipInvites.add(guest);
    }
    }
    for (let guest of input){
      
        vipInvites.delete(guest)
        regulatInvites.delete(guest)
    }
     console.log(vipInvites.size + regulatInvites.size);
     for(let guest of vipInvites){
         console.log(guest)
     }
     for (const guest of regulatInvites) {
         console.log(guest)
     }
}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])