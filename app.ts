import { ShowResult } from './Ex1.ts';
import { isPrime } from './Ex2.ts';
import { getData } from './Ex.3.ts';


//Ex.1
ShowResult();


//Ex.2
console.log('start');

const checkPrime = async () => {
    try {
        const prime = await isPrime(7);
        console.log(prime);
    }
    catch (error) {

    }
}
checkPrime();
console.log('end');


//Ex.3
getData();