//map is like an array with two list one as key and the other as value
//map syntax new Map([[keys,values]])
const names = new Map([
    ["iyanuoluwa", 23],["Temitope",25],["Felicia",16]
])
console.log(names);
//another method to create a map is using the set method

const fruits = new Map();
fruits.set("Apple",300);
fruits.set("Banana",500);
fruits.set("Pineapple",600);
fruits.set("Orange",200);
console.log(fruits);

//some other map method

console.log(fruits.get("Banana"))//get method
fruits.delete("Banana")
console.log(fruits);
console.log(names.has("caleb"));
console.log(names.has("felicia"));
//for ecah map method
const name = new Map([['jesufemi',10],
['jesufemi',1006],
['yhungLampty',985],
['Olamide',950],
['iT',944],
['Update',932],
['flash',870]])
name.forEach(function(value,key){
    console.log(`key = ${key}, value = ${value}`)
        
    }
)