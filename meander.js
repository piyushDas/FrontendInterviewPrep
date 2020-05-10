'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'meanderingArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function meanderingArray(numbers) {
    var sorted = numbers.sort(function(a,b){return a-b});
    var result = [];
    var i=0;
    var j=numbers.length-1;

    while(i<=j){
        if(i==j){
            result.push(sorted[i]);
        } else {
            result.push(sorted[j--]);
            result.push(sorted[i++]);
        }
        
    }

    return result;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = JSON.parse(readLine().trim());

    // for (let i = 0; i < numbersCount; i++) {
    //     const numbersItem = parseInt(readLine().trim(), 10);
    //     numbers.push(numbersItem);
    // }

    const result = meanderingArray(numbers);

    ws.write(JSON.stringify(result));

    ws.end();
}