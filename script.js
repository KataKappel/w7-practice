let obj = {
    key1: "value",
    key2: 100,
    key3: true,
    key4: ["one", "two", "three"],
    key5: {
        nestedKey1: "nested value",
        nestedKey2: 200,
        nestedKey3: false,
        nestedKey4: ["ein", "zwei", "drei"],
        nestedKey5: { nestedKey: "hello"}
    }
}

//objecteken nem szoktunk végig iterálni - közvetlenül kiíratjuk az objectet vagy annak egy kulcsát - bárhol van a kulcs, meg fogja találni a js
/* console.log(obj.key2)
console.log(obj["key2"])

for (let i = 0; i< obj.key4.length; i++) {
    console.log(obj.key4[i])
}

obj.key4.map((value) => {
    console.log(value)
}) */

console.log(obj.key5.nestedKey4[1])
console.log(obj.key5.nestedKey5.nestedKey)

//végig tudok ezzel iterálni a teljes tömbön és kiloggolni az összes keyt, ami az obj-en belül van:
console.log(Object.keys[obj]) 

const objectKeys = Object.keys(obj)
objectKeys.forEach((key) => {
    console.log(key, obj[key])
});