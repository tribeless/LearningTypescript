//boolean
let collapsable:boolean = true;

//number
let percent:number = 45;

//string
let color:string = "blue";

//array
let myPets:Array<string> = ["scooby","chichi"];

//tuple-an array with fixed number of elements with associated types
let myFavoriteTuple : [string,number,boolean];
myFavoriteTuple = ["true",33,true];

//enums-a way to associate names to a conatnt value which can be either a number or string
//Enums are useful when you want to have a set of distinct values that have a descriptive name associated with it.
enum Animals {
    Cats,
    Leopards,
    Cheetahs
}

console.log(Animals.Cats);

//interfaces
interface Animal {
    kind:string;
    percentage:number;
}

let dog : Animal;

dog = {
    kind:"Snake",
    percentage:12
}

//type alias
type Locations ={
    place:string;
}
type Kingdom = {
    kind:string;
    species:string;
    location:Locations;
}

let king :Kingdom;

king = {
    kind:"Dog",
    species:"Mammal",
    location:{
        place:"Voi"
    }
}