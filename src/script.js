const sendBtn = document.querySelector('button');
const messageIn = document.querySelector('messageIn');
const messageOut = document.querySelector('messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg(){
  const content = messageIn.value;
  console.log(content);
}









// var holiday1 = {
//   name: 'Dubai',
//   budget: 2500,
// };
// var holiday2 = {
//   name: 'Dubai',
//   budget: 500,
// };
// var holiday3 = { 
//   name: 'Dubai',
//   budget: 300,
// };
// var holiday = holiday1 + holiday2 + holiday3;



// function all(holiday) {
//   if(holiday.budget < messageIn){
//   }

// }

// // function sendMsg (){
// //   let content = messageIn.value;
// //   messageOut.innerHTML = content;
// // }