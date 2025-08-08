function addProperty(object, key, value) {
    object[key] = value;
    return object;
}
 
let person = { name: "Mishal"};

console.log(addProperty(person, "age", 28));