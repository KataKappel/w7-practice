const data = [
    {
        name: "Nagy Vali",
        age: 20,
        pets: ["Bori", "Dodó", "Erik"],
        mostRecentPurchase: {
            price: 10000,
            color: "black"
        }
    },
    {
        name: "Kovács Józsi",
        age: 30,
        pets: ["Domino", "Fürge", "Guba"],
        mostRecentPurchase: {
            price: 40000,
            color: "green"
        }
    },
    {
        name: "Pásztor Anett",
        age: 10,
        pets: ["Hercegnő", "Jerry", "Jackie"],
        mostRecentPurchase: {
            price: 500,
            color: "brown"
        }
    },
    {
        name: "Ács Gábor",
        age: 42,
        pets: ["Hugó", "Lili", "Mimi"],
        mostRecentPurchase: {
            price: 1000,
            color: "white"
        }
    },
    {
        name: "Kelemen Livia",
        age: 35,
        pets: ["Menta", "Mazsola", "Nudli"],
        mostRecentPurchase: {
            price: 20000,
            color: "pink"
        }
    },
    {
        name: "Horváth Orsi",
        age: 17,
        pets: ["Mancs", "Morzsi", "Ottó"],
        mostRecentPurchase: {
            price: 60000,
            color: "grey"
        }
    },
    {
        name: "Csató Anita",
        age: 45,
        pets: ["Suhanc", "Tami", "Totya"],
        mostRecentPurchase: {
            price: 2000,
            color: "blue"
        }
    },
    {
        name: "Németh Marci",
        age: 25,
        pets: ["Totó", "Ubul", "Villám"],
        mostRecentPurchase: {
            price: 100000,
            color: "beige"
        }
    },
    {
        name: "Farkas Györgyi",
        age: 50,
        pets: ["Zsivány", "Zsozsó", "Peti"],
        mostRecentPurchase: {
            price: 300000,
            color: "red"
        }
    },
    {
        name: "Kiss Éva",
        age: 60,
        pets: ["Vanilla", "Viola", "Maya"],
        mostRecentPurchase: {
            price: 7000,
            color: "yellow"
        }
    }
]

/* for (let i = 0; i < data.length; i++){
    if (data[i].age >= 50 && data[i].mostRecentPurchase.price >= 20000) {
    console.log(data[i])
    }
} */

//legtöbbször nem egy globális térben szeretnénk ezt csinálni, hanem belefoglalva egy függvénybe

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    console.log(result)
    //console log nem tér vissza semmivel - fontos, hogy legyen visszatérési érték - ehhez return kell
    return result
    //nem a resultot adja vissza, csak a result értékét!
}

addTwoNumbers(1, 2)

//ez a resultot adja vissza: 
const addTwoNumbersResult = addTwoNumbers(1, 2)
console.log("addTwoNumbers: ", addTwoNumbersResult)

function concatenateArray(array) {
    let result = ""
    array.forEach((string) => {
        result += string
    })

    return result
}

const arrayOfStrings = ["kismacska", "codecool", "vizsga", "szerda"]

console.log(concatenateArray(arrayOfStrings))

const concatArrayResult = concatenateArray(arrayOfStrings)
console.log("concatArray: ", concatArrayResult)


function concatenateArray(array) {
    let result = array.join("-")
    return result
}


//mappel:
function getOldPeople(arrayOfPeople, minimumAge) {
    let result = []
    arrayOfPeople.map((person) => {
        if (person.age >= minimumAge) {
            result.push(person)
            //létrehoz egy arrayt, amibe bepusholja az összes persont, akikre teljesül a feltétel
        }
    })
    return result
}

getOldPeople(data, 50)

const oldPeople = getOldPeople(data, 50)
console.log(oldPeople)


//filterrel:
function getRichPeople(arrayOfPeople, minimumPriceValue) {
    let result = arrayOfPeople.filter((person) => person.mostRecentPurchase.price > minimumPriceValue)
    return result //itt nem kell pusholni
}

const richPeople = getRichPeople(data, 20000)
console.log(richPeople)

function goodRecommendationFor (arrayOfPeople, newOffer) {
   let result = []
    for (let i = 0; i < arrayOfPeople.length; i++) {
        //console.log(arrayOfPeople[i].mostRecentPurchase)
        if(arrayOfPeople[i].mostRecentPurchase.color === newOffer.color) {
            if (arrayOfPeople[i].mostRecentPurchase.price > newOffer.price) {
                result.push(arrayOfPeople[i].name)
            }
        }
    }
    return result
}
const newOffer1 = {
    color: "black",
    price: 200
}
goodRecommendationFor (data, newOffer1)

const goodRecommendations = goodRecommendationFor (data, newOffer1)
console.log(goodRecommendations)

//ugyanez filterrel

function goodRecommendationFor (arrayOfPeople, newOffer) {
    let result = arrayOfPeople.filter((person) => person.mostRecentPurchase.color === newOffer.color &&
                                                    person.mostRecentPurchase.price > newOffer.price)
    return result
}

//a filter csak arra kíváncsi, hogy mikor térünk vissza igazzal - lecsekkol egy állítást, és megnézi, hogy true vagy false - ha true, akkor visszatér az értékkel