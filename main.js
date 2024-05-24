function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray.push(generateRandomNumber(1, 100));
}

console.log(randomArray);
