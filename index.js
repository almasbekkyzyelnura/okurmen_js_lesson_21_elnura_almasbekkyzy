document.addEventListener('DOMContentLoaded', () => {
    let value = 'Hello peplr';

    // if (value ==='Hello World' ) {
    //    console.log(value);
    // } else {
    //    console.log(`Not 'Hello World'`);
    // }

    // value === 'Hello Wirld' ? console.log(value) : console.log
    // (`Not 'Hello World'`);
    /*
    
    //indexOF()
    const names = ['Sati','Azem','Eli','Arlen','Azem','Eli','Azem' ];
    
    console.log(names.indexOf('Azem', 5));
    
    
    //isArray()
    const array = ['Apple', 'Orange', 'Kiwi'];
    const obj = {name: 'Arlen'};
    const num = 34567;
    
    console.log(Array.isArray(obj) ? obj.map((item) => console.log(item)):
    console.log('is not array'));
    
    
    
    //join ()
    
    const array = ['Bmw', ' Matis' , 'Lexus'];
    
    console.log(array.join());   //Bmw, Matis, Lexus
    console.log(array.join(','));  //Bmw, Matis, Lexus
    console.log ('i love' +array.join('i love') + '.');  //i love bmw i lob=ve matis i love lexus.
    

    //keys()
    const array = ['Book', 'Magazine', 'Newspaper'];
    const keys = array.keys();

    console.log(keys);

    for (const eli of keys) {
        console.log('.', eli);
    }

  // LastINdexOF()
  const array = [' Red', 'Blue', ' Green', ' Orange', 'Red', 'Green'];

  console.log('***', array.lastIndexOf('Red'));
  


  //OF()
  const array = [
    {
      name: 'Azem',
      student : 1,
    },
    {
      name: 'Eli',
      student : 2,
    },
  ];
  
  const newArr = Array.of();

  array.map((item) => {
    return newArr.push(item);
  });


  console.log(newArr);
  

//pop() удаляет помледний элемент из массива
const array = ['Arlen', 'Sati' , 'Abay'];

console.log(array.pop());
console.log(array);


//push() элеммент кошшшшот
const array = ['Arlen', 'Sati' , 'Abay'];
array.push('Oroz');
console.log(array);
*/


//reduce
const arrayOFNumbers = [ { num: 1}];

const newValue =  arrayOFNumbers.reduce((acc, value) => acc * value + value);

console.log(newValue);

});