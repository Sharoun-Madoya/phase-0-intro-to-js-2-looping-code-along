// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
  
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// function writeCards(name, event) {
//   const messages =[];
//   for (let i = 0; i < name.length; i++) {
//     messages.push(`Thank you, ${name [i]}, for the wonerful ${event} gift!`)
//   }
//   return messages;
// }


function writeCards(names, event){
  const messages = [];
  for (let i = 0;
      i < names.length;
      i++) {
  messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
      }
      return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
let number = 10;
function countDown(number) {
    while (number > 0) {
        console.log(number);
        number-=1;
    }
    console.log(number);
}