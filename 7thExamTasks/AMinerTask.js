function solve(input){
  
    let MineResource = new Map();
    for (const line of input) {
        let tokens = line.split(' -> ')
        let resource = tokens[0];
        let quantity = Number(tokens[1])
        if(!MineResource.has(resource)){
            MineResource.set(resource, quantity)
        }else{
          let currQuantity = MineResource.get(resource)
          let newQuantity = currQuantity += quantity
          MineResource.set(resource,newQuantity)
          
        }
        
    }
    for (let kvp of MineResource){
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])