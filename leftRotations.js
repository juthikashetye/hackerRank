'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
const fs = require('fs');
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function leftRotation(arr,rotations){
    var newArr = [];
    var spl = arr.splice(rotations);

    for(var i=0; i<spl.length; i++){
         newArr.push(spl[i]);
    }
    console.log(newArr.length);
    
    var sorted = newArr.concat(arr);
    return sorted;
}

function main() {

    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    const res = leftRotation(a,d);
    console.log(res);
    ws.write(res.join(' '));

    ws.end();
}
