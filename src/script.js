




/*
// //FOR LOOP

// for(let i = 0; i < 10; i++){
//     if(i === 3){
//         console.log('3 is my favorite number');
//         continue;
//     }
//     if(i ===5){
//         console.log('Stop de loop')
//         break;
//     }
//     console.log('Number' + i)
// }

//WHILE LOOP

// let i = 0;
// while(i < 10){
//     console.log('Number' + i);
//     i++;
// }
/////////////////////
//DO WHILE

// let i = 0;
// do{
//     console.log('Number ' + i);
//     i++
// }
// while(i < 10);
//LOOP THROUGH ARRAY
const cars = ['Ford','Chevy', 'Honda', 'Toyota'];
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// // Foreach
// cars.forEach(function(car, index, array){
//     console.log('${index} : ${car}');
//     console.log(array);
//     // console.log(index);
// });
///Map
// const users = [
//     {id: 1, name:'Jhon'},
//     {id: 2, name: 'Chris'},
//     {id: 3, name: 'Valentin'}
//     {id: 4, name: 'Steve'}
// ];
// const ids = users.map(function(user){
//     return user.id;
// });
// console.log(ids);

const user = {
    firstName: 'Valentin',
    lastName: 'Nico',
    age: 20 
}

for(let i in user){
    console.log(`${i} : ${user[i]}`);
}
||||||||||||||||||||||||||||||||||||
function greet(firstName = ' Joe', lastName = ' David'){
    //console.log('Hello');
    return 'Hello' + firstName + lastName;
}
console.log(greet());
////////////////////////
// const color = 'red';
// switch(color){
    //     case 'red':
    //         console.log('Color is red');
    //         break;
    //     case 'blue':
    //         console.log('Color is blue');
    //         break;
    //     default:
    //         console.log('Color is not red or blue');
    //         break;
    // }
    
    // let day;
    
    // switch(new Date().getDay()) {
        //     case 0:
        //         day = 'Sunday';
        //         break;
        //     case 1:
        //         day = 'Monday';
        //         break;
        //     case 2:
        //         day = 'Tuesday';
        //         break;
        //     case 3:
        //         day = 'Wednesday';
        //         break;
        //     case 4:
        //         day = 'Thursday';
        //         break;
        //     case 5:
        //         day = 'Friday';
        //         break;
        //     case 6:
        //         day = 'Saturday';
        //         break;
        // }
        // console.log(`Today is  ${day}`);
        //||||||||||||||||||||||||||||||||
        // /*
        //     do something else
        //  } 
        //  const id = 101
        //  //Equal to 
        //  if(id == 100) {
            //      console.log('Correct');
            //  }else {
                //      console.log('Incorect');
                //  }
                //  ////////////////////
                //  //Not egual to VALUE & TYPE
                //  if(id != 100){
                    //      console.log('Correct');
                    //  }else {
                        //      console.log('Incorect')
                        //  }
                        //  if(id){
                            //      console.log(`The ID is ${id}`);
                            //  }else{
                                //      console.log(`No ID`)
                                //  }
                                // //Test if undefined
                                //  if(id !== undefined){
                                    //      console.log(`The ID is ${id}`);
                                    //  }else {
                                        //      console.log('No Id')
                                        //  }
                                        // //GREATER OR LESS THAN
                                        //  if (id > 200){
                                            //      console.log('correct');
                                            //  }else {
                                                //      console.logf('Incorrect');
                                                //  }
                                                // //IF ELSE
                                                // const color = 'red';
                                                // if(color === 'red'){
                                                    //     console.log('Color is red');
                                                    // }else if(color === 'blue'){
                                                        //     console.log('Color is blue');
                                                        // }else {
                                                            //     console.log('Color is not red or blue');
                                                            // }
                                                            
                                                            // //Logical Operators
                                                            // const name = 'Valentin';
                                                            // const age = 70;
                                                            // //AND &&
                                                            // if(age > 0 && age < 12){
                                                                //     console.log(`${name} is a child`);
                                                                // }else if(age >=13 && age <=19){
                                                                    //     console.log(`${name} is a teenager`);
                                                                    // }else {
                                                                        //     console.log(`${name} is a adult`);
                                                                        // }
                                                                        // //OR ||
                                                                        // if(age < 16 || age > 65) {
                                                                            //     console.log(`${name} can not run in race`);
                                                                            // }else {
                                                                                //     console.log(`${name} is registred for the race`);
                                                                                // }
                                                                                
                                                                                // ///TERNARY OPERATOR
                                                                                // console.log(id !== 100 ? 'Correct' : 'Incorrect');
                                                                                
                                                                                // const today = new Date('9 10 1981 11:25:00');
                                                                                // //////////Dates & Times
                                                                                // let val;
                                                                                
                                                                                // let birthday = new Date('September 10 1981');
                                                                                // birthday = new Date('September 10 1981');
                                                                                // birthday = new Date('9/10/1981');
                                                                                
                                                                                
                                                                                // val = today.getMonth();
                                                                                // val = today.getDate();
                                                                                // val = today.getDay();
                                                                                // val = today.getFullYear();
                                                                                // val = today.getHours();
                                                                                
                                                                                // console.log(val);
                                                                                // ||||||||||||||||||||||||||||||||||||||
                                                                                //     const person = {
                                                                                    //         firstName: 'Valentin',
                                                                                    //         lastName: 'Smith',
                                                                                    //         age:30,
                                                                                    //         email:'valentin @yahoo.com',
                                                                                    //         hobbies: ['music', 'sports'],
                                                                                    //         address: {
                                                                                        //             city:'Miami',
                                                                                        //             state:'FL'
                                                                                        //         },
                                                                                        //         getBirthYear: function(){
                                                                                            //             return 1987 -this.age;
                                                                                            //         }
                                                                                            //     }
                                                                                            
                                                                                            //     let val;
                                                                                            
                                                                                            //     val = person;
                                                                                            //     //Get specific value
                                                                                            //     val = person.firstName;
                                                                                            //     val = person['firstName'];
                                                                                            //     val = person.age;
                                                                                            //     val = person.hobbies;
                                                                                            //     val = person.address.state;
                                                                                            //     val = person.address['city'];
                                                                                            //     val = person.getBirthYear();
                                                                                            
                                                                                            //     console.log(val);
                                                                                            
                                                                                            //     const people = [
                                                                                                //         {name: 'John', age: 30},
                                                                                                //         {name: 'Mike', age:23},
                                                                                                //         {name:'Nancy', age:40}
                                                                                                //     ];
                                                                                                //     for(let i = 0; i < people.length; i++){
                                                                                                    //         console.log(people[i].name);
                                                                                                    //     }
                                                                                                    
                                                                                                    //     |||||||||||||||||||||||||||||||||||||||||||||
                                                                                                    // const numbers = [42,32,54,3,2,66,]
                                                                                                    // const number2 = new Array(22,44,65,77);
                                                                                                    // const fruit = ['Apple','Banana', 'Orange'];
                                                                                                    // const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
                                                                                                    
                                                                                                    // let val;
                                                                                                    // //Get array length
                                                                                                    // val = numbers.length;
                                                                                                    // //Check if is array
                                                                                                    // val = Array.isArray(numbers);
                                                                                                    // //Get single value
                                                                                                    // val = numbers[3];
                                                                                                    // val = numbers[0];
                                                                                                    // //Insert into Array
                                                                                                    // numbers[2] = 100;
                                                                                                    // //Find index of value
                                                                                                    // val = numbers.indexOf(66);
                                                                                                    
                                                                                                    // //MUTATING ARRAYS
                                                                                                    // //Add on to end
                                                                                                    // numbers.push(250);
                                                                                                    // //Add on to front
                                                                                                    // numbers.unshift(120);
                                                                                                    // //Take off from end
                                                                                                    // numbers.pop();
                                                                                                    // //Take off from front
                                                                                                    // numbers.shift();
                                                                                                    // //Splice values
                                                                                                    // numbers.splice(1,1);
                                                                                                    // //Reverse
                                                                                                    // numbers.reverse();
                                                                                                    
                                                                                                    // //Sorting arrays
                                                                                                    // val = fruit.sort();
                                                                                                    // val = numbers.sort();
                                                                                                    
                                                                                                    // //Use the "compare function"
                                                                                                    // val = numbers.sort(function(x,y){
                                                                                                        //     return x - y;
                                                                                                        // });
                                                                                                        
                                                                                                        // //Reverse sort
                                                                                                        // val = numbers.sort(function(x,y){
                                                                                                            //     return y - x;
                                                                                                            // });
                                                                                                            
                                                                                                            // //Find
                                                                                                            // function under50(num){
                                                                                                                //     return num < 50;
                                                                                                                // }
                                                                                                                // val = numbers.find(over50);
                                                                                                                
                                                                                                                // console.log(numbers);
                                                                                                                // console.log(val);
                                                                                                                // ////////////////DOM///DOM......DOM DOM DOM DOM//////
                                                                                                                // const name = 'Valentin';
                                                                                                                // const age = 20;
                                                                                                                // const job = 'Web Developer';
                                                                                                                // const city = 'London';
                                                                                                                // let html;
                                                                                                                
                                                                                                                // //Without template strings(es5)
                                                                                                                // html = '<ul><li>Name: '+ name +'</li><li>Age: '+ age +'</li><li>Job: '+ job +'</li><li>City: '+ city +'</li></ul>';
                                                                                                                // //or
                                                                                                                // html = '<ul>' +
                                                                                                                //         '<li>Name: '+ name +'</li>' +
                                                                                                                //         '<li>Age: '+ age +'</li>' +
                                                                                                                //         '<li>Job: '+ job +'</li>' +
                                                                                                                //         '<li>City: '+ city +' Chingford</li>'
                                                                                                                // ||||||||||||||||||||||||||||||
                                                                                                                // //with template string
                                                                                                                
                                                                                                                // function hello(){
                                                                                                                    //     return 'hello';
                                                                                                                    // }
                                                                                                                    
                                                                                                                    // html = `<ul>
                                                                                                                    //     <li>Name: ${name}</li>
                                                                                                                    //     <li>Age: ${age}</li>
                                                                                                                    //     <li>Job: ${job}</li>
                                                                                                                    //     <li>City: ${city}</li>
                                                                                                                    //     <li>${2 + 2}</li>
                                                                                                                    //     <li>${hello()}</li>
                                                                                                                    //     <li>${age > 30 ? 'Over 30 ' : 'Under 30'}</li>
                                                                                                                    // </ul>`;
                                                                                                                    
                                                                                                                    // document.body.innerHTML = html;
                                                                                                                    // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                                                                                                    
                                                                                                                    // const firstName = 'Valentin';
                                                                                                                    // const lastName = 'Nicolae';
                                                                                                                    // var age = 23;
                                                                                                                    // const tags = 'Web design,web '
                                                                                                                    
                                                                                                                    // let val;
                                                                                                                    
                                                                                                                    // val = firstName+ ' ' + lastName;
                                                                                                                    // //Append
                                                                                                                    // val = 'Babi';
                                                                                                                    // val += 'Brasov';//ADD
                                                                                                                    // val = 'Hello, my name is ' + firstName + ' si da ' + age;
                                                                                                                    
                                                                                                                    // //Escaping
                                                                                                                    // val = 'That\'s the best.I can\'t put wait';
                                                                                                                    
                                                                                                                    // //Length
                                                                                                                    // val = firstName.length;
                                                                                                                    
                                                                                                                    // //Get last character
                                                                                                                    // val = firstName.charAt(firstName.length -1);
                                                                                                                    
                                                                                                                    // //Split
                                                                                                                    // val = tags.split(',')
                                                                                                                    
                                                                                                                    // //Replace()
                                                                                                                    // val = str.replace('Brad','Jack')
                                                                                                                    
                                                                                                                    // console.log(val);
                                                                                                                    // ||||||||||||||||||||
                                                                                                                    // const first =  String(1);
                                                                                                                    // const second = 2;
                                                                                                                    // const all = first + second;
                                                                                                                    
                                                                                                                    // console.log(all);
                                                                                                                    // console.log(typeof all);
                                                                                                                    // ||||||||||||||||||||||||||||||||
                                                                                                                    // let val;
                                                                                                                    // //Number to string
                                                                                                                    // val = String(5);//Convert number in String
                                                                                                                    // val = String(4+4)
                                                                                                                    
                                                                                                                    // //Bool in string
                                                                                                                    // val = String(true);
                                                                                                                    
                                                                                                                    // //Date to String
                                                                                                                    // val = String(new Date());
                                                                                                                    
                                                                                                                    // //Array to string
                                                                                                                    // val = String([1,2,3,4]);
                                                                                                                    // //to String
                                                                                                                    // val = (5).toString()
                                                                                                                    
                                                                                                                    // ///String to number
                                                                                                                    // val = Number('5');
                                                                                                                    // val = Number(true);
                                                                                                                    // val = Number(false);
                                                                                                                    // val = Number(null);
                                                                                                                    // val = Number('Hello');
                                                                                                                    // val = Number([1,2,4]);
                                                                                                                    
                                                                                                                    // val = parseInt('100');
                                                                                                                    // val = parseFloat('100.31');
                                                                                                                    // //Output
                                                                                                                    // console.log(val);
                                                                                                                    // console.log(typeof val);
                                                                                                                    // // console.log(val.length);
                                                                                                                    // console.log(val.toFixed());
                                                                                                                    
                                                                                                                    // ///////Reference types - Objects\\\\\\\\
                                                                                                                    // //Array
                                                                                                                    // const hobbies = ['movies','music'];
                                                                                                                    // ||||||||||||||||||||||
                                                                                                                    
                                                                                                                    // //Object literal
                                                                                                                    // const address = {
                                                                                                                        //     city: 'Chingford',
                                                                                                                        //     state: 'An',
                                                                                                                        // }
                                                                                                                        // const today = new Date(); //All details for Today
                                                                                                                        // console.log(today)
                                                                                                                        // console.log(typeof address);
                                                                                                                        // ||||||||||||||||||||||
                                                                                                                        
                                                                                                                        // //////// Primitive\\\\\\\\
                                                                                                                        // //String
                                                                                                                        // const name = 'Robert';
                                                                                                                        // console.log(typeof name); 
                                                                                                                        
                                                                                                                        // //Number
                                                                                                                        // const age = 44;
                                                                                                                        // console.log(typeof age);
                                                                                                                        
                                                                                                                        // //Boolean
                                                                                                                        // const bol = true;
                                                                                                                        // console.log(typeof bol);
                                                                                                                        
                                                                                                                        // //Null
                                                                                                                        // const nothing = null;
                                                                                                                        // console.log(typeof nothing);
                                                                                                                        
                                                                                                                        // //Undefined
                                                                                                                        // let test;
                                                                                                                        // console.log(typeof test);
                                                                                                                        
                                                                                                                        // //Symbol
                                                                                                                        // const sym = Symbol();
                                                                                                                        // console.log(typeof sym);
                                                                                                                        // //||||||||||||||||||||||
                                                                                                                        // ||||||||||||||||||||||
                                                                                                                        // const number = [1,2,3,4];
                                                                                                                        // number.push(7);
                                                                                                                        // console.log(number);
                                                                                                                        
                                                                                                                        // |||||||||Object|||||||||||||
                                                                                                                        // const person = {
                                                                                                                            //     name: 'Sara',
                                                                                                                            //     age: 30
                                                                                                                            // }
                                                                                                                            // person.name = 'Radarada';
                                                                                                                            // person.age = 23;
                                                                                                                            // console.log(person);
                                                                                                                            
                                                                                                                            // ||||||||||||||||||||||
                                                                                                                            // const name = 'Jhon';
                                                                                                                            // console.log(name);
                                                                                                                            // const = 'Rada'; /// This is ERROR
                                                                                                                            
                                                                                                                            // ||||||||||||||||||||||
                                                                                                                            // var firstName = 'mouse';
                                                                  // console.log(single);
// ||||||||||||||||||||||

// var name = 'Valentin';
// console.log(name);
// name = 'Nicolae';
// console.log(name);
// ||||||||||||||||||||||

// console.table({a:1, a:2});    //table
// document.querySelector('h1').style.color = 'red';
// document.querySelector('h1').style.fontSize = '23px';

*/