function solve(input){
     let listOfEmployees = {}
     for (let employees of input) {
         listOfEmployees.name = employees;
         listOfEmployees.personalNumber = employees.length
         console.log (`Name: ${listOfEmployees.name}} -- Personal Number: ${listOfEmployees.personalNumber}`);
         
     }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])