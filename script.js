/* let variable = 10 //kezdőértéket adunk a változónak
variable = 20 //felülírhatjuk az értékét

const variable2 = 50 
variable2 = 100 //így nem lehet felülírni a const változó értékét - hibára fog futni

let array = [1, 2, 3]

array = [4, 5, 6]
array.push(10)
array22[0] = 11

const array2 = [10, 20, 30]
array2 = [40, 50, 60] //így nem lehet megváltoztatni a const array értékét
array2.push(100) //ez működni fog, metódusokat le tudom futtatni, csak az = - lel való új értékadás nem fog menni, ha const -tal definiáljuk az arrayt eredetileg

console.log(array) */

const arr = ["kiss béla", "nagy józsi", "tóth jános"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//ha forEachet használunk, nincs szükség indexelésre - szemben a for loop-pal

let lettersLength = 0
arr.forEach((element, index) => {
    console.log("at index: ", index, "is: ", element)
    console.log(`at index: ${index + 1} is: ${element}`)
    lettersLength += element.length
})
console.log(lettersLength)
//ha kimentem egy változóba - akkor a forEach függvénynek nem kell elkérni a visszatérési értékét, mert nincs

let mapResult = arr.map((element, index) => {
    console.log(`at index: ${index + 1} is: ${element}`)
    return element.length
})
console.log(mapResult)
//ha ezt mentem ki egy változóba, akkor ő elvégzi a callback függvényt ugyanúgy, mint a forEach, de ő minden esetben vár egy visszatérési értéket

for (const element of arr) {
    console.log(`forof: ${element}`)
}
//ez egy olyan for loop, amiben nincsenek indexek
 
for (let i = 0; i < arr[0].length; i++) {
    console.log(arr[0][i])
}