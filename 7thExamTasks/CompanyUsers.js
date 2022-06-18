function solve(input) {
    let companies = {};
    for (const line of input) {
        let [company, id] = line.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }
    let sorted = Object.entries(companies)
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for(let element of sorted){
        console.log(element[0]);
        let set = new Set(element[1])
        for(let number of set ){
            console.log(`-- ${number}`);
        }
    }
    
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])