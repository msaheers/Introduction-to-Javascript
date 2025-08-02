console.log("Just like Animal, Animals, Animaaaalss\n")

let animals = ["Cow","Cat","Dog","Sheep","Donkey"];

animals.pop(); /* Remove o ultimo animal do array */

animals.push("Buffalo"); /* Adiciona o animal "Buffalo" ao final do array */

animals.shift(); /* Remove o primeiro animal do array */

animals.unshift("Giraffe"); 

animals[2] = "Lion"; 

for (let animal of animals) {
    console.log(animal);
}

