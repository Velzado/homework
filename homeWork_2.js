let a = 2
let b = 6

function summ(a, b) {
    return a + b;
}
let ansver = summ(a, b);
console.log(`Сумма равна: ${ansver}`);

//////////////////////////////////////////////////////////////////////////////////////

let randomNumbers = [1,3,5,7,9];

function averageValue(randomNumbers) {
    let sum = 0;
    for(let i = 0; i < randomNumbers.length; i++ ) {
        sum += randomNumbers[i];
    }
    return sum/randomNumbers.length;
}
console.log(`Среднее значение: ${averageValue(randomNumbers)}`);

//////////////////////////////////////////////////////////////////////////////////////

let randomStrin = 'Здравствуйте, я из компании орифлейм!';

function numberOfVowels(randomStrin) {
    let vowels = 0;
    for(let i = 0; i < randomStrin.length; i++ ) {
        if(randomStrin[i] == 'а' || randomStrin[i] == 'у' || randomStrin[i] == 'о' || randomStrin[i] == 'ы' || randomStrin[i] == 'и' || randomStrin[i] == 'э' || randomStrin[i] == 'я' || randomStrin[i] == 'ю' || randomStrin[i] == 'ё' || randomStrin[i] == 'е') {
            vowels++
        }
        if(randomStrin[i] == 'А' || randomStrin[i] == 'У' || randomStrin[i] == 'О' || randomStrin[i] == 'Ы' || randomStrin[i] == 'И' || randomStrin[i] == 'Э' || randomStrin[i] == 'Я' || randomStrin[i] == 'Ю' || randomStrin[i] == 'Ё' || randomStrin[i] == 'Е') {
            vowels++
        }
    }
    return vowels;
}
console.log(`Кол-во гласныйх букв: ${numberOfVowels(randomStrin)}`);

//////////////////////////////////////////////////////////////////////////////////////

let notebook = {
    processor: 'Intel core i5-11400H',
    videoCard: 'Geforce GTX 1650',
    ram: 8,
    isNotebook: true,
};

function objectOutput(notebook) {
    for(let key in notebook) {
        console.log(key);
        console.log(notebook[key]);
    }
}
objectOutput(notebook);

//////////////////////////////////////////////////////////////////////////////////////

let randomString = ['I', 'am', 'doctor'];
let newstr = 'doc'

function find(arr, newstr) {
    return arr.filter(x => x.includes(newstr));
}

console.log(find(randomString, newstr));