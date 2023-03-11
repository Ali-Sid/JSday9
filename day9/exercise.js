// Exercise: Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/* 1. Explain the difference between forEach, map, filter, and reduce.
   forEach(): it calls a function for each element in an array. It won't execute empty elements. it calls a function and iterates over the elements of an array.
   map(): creates a new array from calling a function for every array element. it calls function once for each element in an array. it does not execute the function for empty elements and it doesn't change the original array. modifies the existing elements in the array. it iterate an array elements and modifies the array elements. it takes a callback function with parameter and returns new array
   filter(): it filter out any specific element from an array and returns a new array. filter out the elements and return a new array
   reduce(): it takes a callback function and reduces to a single value.
*/

// 2. Define a callback function before you use it in forEach, map, filter or reduce.

// A function that can be passed as a parameter to other function.

// 3. Use forEach to console.log each country in the countries array.

countries.forEach(element => console.log(element))
/* 
Finland
Sweden
Denmark
Norway
IceLand
*/

// 4. Use forEach to console.log each name in the names array.
names.forEach(e => console.log(e))
/*
Asabeneh
Mathias
Elias
Brook
*/

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(n => console.log(n))
/*
1
2
3
4
5
6
7
8
9
10
*/

// 6. Use map to create a new array by changing each country to uppercase in the countries array.

const countArr = countries.map(c => console.log(c.toUpperCase()))

/*
FINLAND
SWEDEN
DENMARK
NORWAY
ICELAND
*/

// 7. Use map to create an array of countries length from countries array.

const lenArr = []
const countLen = countries.map(l => {
    lenArr.push(l.length)
    return lenArr
})

console.log(lenArr) // Output: [ 7, 6, 7, 6, 7 ]

// 8. Use map to create a new array by changing each number to square in the numbers array

const squareNum = numbers.map(n => n * n)
console.log(squareNum)
/*
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
*/

// 9. Use map to change to each name to uppercase in the names array

const upperName = names.map(nam => console.log(nam.toUpperCase()))

/*
ASABENEH
MATHIAS
ELIAS
BROOK
*/

// 10. Use map to map the products array to its corresponding prices.

const mapPrice = products.map(item => item.price)

console.log(mapPrice) // Output: [ 3, 6, ' ', 8, 10, '' ]

// 11. Use filter to filter out countries containing land.

const filtCountries = countries.filter(country => country.includes('land'))

console.log(filtCountries) // [ 'Finland' ]

// 12. Use filter to filter out countries having six character.

console.log(countries.filter(s => s.length === 6)) // Output: [ 'Sweden', 'Norway' ]

// 13. Use filter to filter out countries containing six letters and more in the country array.

console.log(countries.filter(s => s.length >= 6)) // Output: [ 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' ]

// 14. Use filter to filter out country start with 'E';

console.log(countries.filter(e => e.startsWith('E'))) // Output: []

// 15. Use filter to filter out only prices with values.

console.log(products.filter(p => typeof p.price === 'number' && p.price !== 0))
/*
[
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 }
]
*/

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = arr => {
    return arr.filter(item => typeof item === 'string')
}

const strList = [1, 2, 3, 'Mango', 'Apple', true]

console.log(getStringLists(strList)) // Output: [ 'Mango', 'Apple' ]

// 17. Use reduce to sum all the numbers in the numbers array.

console.log(numbers.reduce((acc, cur) => acc + cur, 0)) // Output: 55

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

console.log(countries.reduce( (country1, country2) => {country1, country2}, countries ) + " are north European countries")

// 19. Explain the difference between some and every

// some() method is used to check if at least one of the elements passes the callback funtion
// every() methos is used to check if all the elements of the array satisfy the condition callback function or not.

// 20. Use some to check if some names' length greater than seven in names array


console.log(names.some(len => len.length > 7)) // Output: true

// 21. Use every to check if all the countries contain the word land

console.log(countries.every(inc => inc.includes('land'))) // Output: false

// 22. Explain the difference between find and findIndex.

// find() is used to find the elements from the array and returns the element value. it returns undefined if none of the elements passed the condition
// findIndex() is used to find the index number of the elements in an array and returns the element index. it returns -1 if none of the elements passed the condition

// 23. Use find to find the first country containing only six letters in the countries array

console.log(countries.find(first => first.length === 6)) // Output: Sweden

// 24. Use findIndex to find the position of the first country containing only six letters in the countries arrays

console.log(countries.findIndex(ind => ind.length === 6)) // Output: 1

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(find => find.includes('Norway'))) // Output: 3

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(pos => pos.includes('Russia'))) // Output: -1

// Exercise: Level 2

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPrice = products.filter(item => item.price !== '').map(item => Number(item.price)).reduce((acc, cur) => acc + cur, 0)

console.log(totalPrice) // Output: 27

// 2. Find the sum of price of products using only reduce reduce(callback))

const totPrice = products.reduce((acc, cur) => {
  if(cur.price !== ''){
    return acc + Number(cur.price)
  }
  else{
    return acc
  }
}, 0)

console.log(totPrice) // Output: 27

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

import {countriesList} from './countries.js'

const categorizeCountries = () => {
  const commonpatterns = ['land', 'ia', 'island','stan']
  
  return commonpatterns.reduce((acc, pattern) => {
    acc[pattern] = countriesList.filter(country => country.toLowerCase().includes(pattern))
    return acc
  }, {})
}

console.log(categorizeCountries())

/*
{
  land: [
    'Finland',
    'Iceland',
    'Ireland',
    'Marshall Islands',
    'Netherlands',
    'New Zealand',
    'Poland',
    'Solomon Islands',
    'Swaziland',
    'Switzerland',
    'Thailand'
  ],
  ia: [
    'Albania',
    'Algeria',
    'Armenia',
    'Australia',
    'Austria',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Bulgaria',
    'Cambodia',
    'Croatia',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Gambia, The',
    'Georgia',
    'India',
    'Indonesia',
    'Latvia',
    'Liberia',
    'Lithuania',
    'Macedonia',
    'Malaysia',
    'Mauritania',
    'Micronesia',
    'Mongolia',
    'Namibia',
    'Nigeria',
    'Romania',
    'Russia',
    'Saint Lucia',
    'Saudi Arabia',
    'Serbia and Montenegro',
    'Slovakia',
    'Slovenia',
    'Somalia',
    'Syria',
    'Tanzania',
    'Tunisia',
    'Zambia'
  ],
  island: [ 'Marshall Islands', 'Solomon Islands' ],
  stan: [
    'Afghanistan',
    'Kazakhstan',
    'Kyrgyzstan',
    'Pakistan',
    'Tajikistan',
    'Turkmenistan',
    'Uzbekistan'
  ]
}
*/

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

const arrayOfObjects = (countryNames) => {
  const counObj = {}

  countryNames.forEach(country => {
    const firstLetter = country[0].toUpperCase()
    counObj[firstLetter] = (counObj[firstLetter] || 0) + 1
  })

  return Object.entries(counObj).map(([letter, count]) => ({letter, count}))
}

const countriesArr = ['Armenia', 'Albania', 'Brazil', 'Chile', 'Colombia', 'Denmark', 'Estonia', 'Russia', 'Romania']

console.log(arrayOfObjects(countriesArr))

/*
[
  { letter: 'A', count: 2 },
  { letter: 'B', count: 1 },
  { letter: 'C', count: 2 },
  { letter: 'D', count: 1 },
  { letter: 'E', count: 1 },
  { letter: 'R', count: 2 }
]
*/

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = () => {
  const firstTenCountries = countriesList.slice(0, 10)

  const countriesWithNames = firstTenCountries.map(name => ({name}))

  // we use Array.map() to convert each country name to an object with a name key.
  // Note that in the Array.map() step, we're using an arrow function with an object literal shorthand ({ name }) to create the country objects. This is a more concise way of writing { name: name }.

  return countriesWithNames
}

console.log(getFirstTenCountries())

/*
[
  { name: 'Afghanistan' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Antigua and Barbuda' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Australia' },
  { name: 'Austria' }
]
*/

// 6. Declare a getLastTenCountries function which returns the last ten countries in the countries array.

const getLastTenCountries = () => {
  const getLastCountries = countriesList.slice(-10)

  const lastCountriesWithNames = getLastCountries.map(name => ({name}))

  return lastCountriesWithNames
}

console.log(getLastTenCountries())

/*
[
  { name: 'United States' },
  { name: 'Uruguay' },
  { name: 'Uzbekistan' },
  { name: 'Vanuatu' },
  { name: 'Vatican City' },
  { name: 'Venezuela' },
  { name: 'Vietnam' },
  { name: 'Yemen' },
  { name: 'Zambia' },
  { name: 'Zimbabwe' }
]
*/

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

const firstLetter = countriesList.map(country => country.charAt(0).toUpperCase())

const initialCount = firstLetter.reduce((acc, letter) => {
  acc[letter] ? acc[letter]++ : acc[letter] = 1
  return acc
}, {})

let maxCount = 0
let mostFrequentLetter

for(const letter in initialCount){
  if(initialCount[letter] > maxCount){
    maxCount = initialCount[letter]
    mostFrequentLetter = letter
  }
}

console.log(mostFrequentLetter, maxCount) // Output: S 25

// Exercises: Level 3

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

import {countriess} from './countriesobj.js'


const sortedByName = Object.keys(countriess).sort((a,b) => {
  return (a < b) ? -1 : (a > b) ? 1 : 0
}).map(key => [key, countriess[key]])

console.log("Sorted by name:", sortedByName)

// Sort by capital

const sortedByCapital = Object.keys(countriess).sort((a, b) => {
  return (countriess[a].capital < countriess[b].capital) ? -1 : (countriess[a].capital > countriess[b].capital) ? 1 : 0
}).map(key => [key, countriess[key]])
console.log("Sorted by capital:", sortedByCapital)

// sort by population

const sortedByPopulation = Object.keys(countriess).sort((a ,b) => (countriess[a].populations - countriess[b].populations)).map(key => [key, countriess[key]])
console.log("Sorted by population:", sortedByPopulation)


/*

// Sort by name
const sortedByName = Object.keys(countries).sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}).map(key => [key, countries[key]]);
console.log("Sorted by name:", sortedByName);

// Sort by capital
const sortedByCapital = Object.keys(countries).sort((a, b) => {
  if (countries[a].capital < countries[b].capital) return -1;
  if (countries[a].capital > countries[b].capital) return 1;
  return 0;
}).map(key => [key, countries[key]]);
console.log("Sorted by capital:", sortedByCapital);

// Sort by population
const sortedByPopulation = Object.keys(countries).sort((a, b) => countries[a].population - countries[b].population).map(key => [key, countries[key]]);
console.log("Sorted by population:", sortedByPopulation);

*/

// level 3 exercises will be updated later

