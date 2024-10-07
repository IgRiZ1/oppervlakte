import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let zijde1 = parseFloat(await userInput.question('geef een zijde: '))
let zijde2 = parseFloat(await userInput.question('geef een zijde: '))
let som = zijde1 * zijde2 
console.log('het oppervlakte van de rechthoek is   ' + som );
