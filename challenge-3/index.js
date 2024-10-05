// // fungsi find
// const numbers = [4, 9 ,16, 25];
// const result = numbers.find(function(number) {
//     return number > 100;
//   });
//   console.log(result);

// fungsi filter
// const angka = [1, 3, "6", true, 11];
// const hasil =angka.filter(function(angka) {
//   console.log(this);
//   return angka > 50; 

// });
// console.log(hasil);

// //  fungsi findInddex
// const nomor =[2,5,6,9,12];
// const isLargeNumber = (element) => {
//   console.log(this);
//   return element > 6
// };

// console.log(nomor.findIndex(isLargeNumber));

// // unshif
// const array1 = [1, 2, 3];

// console.log(array1.unshift( 7,8,9));

// console.log(array1);

// //
// const menuItems = ["Apple Juice", "White Coffee", "Fried Rice", "Croissant"];
// const newMenuItem = "Waffle";
// const penambahan =Math.floor(menuItems.length /1);
// menuItems.splice(penambahan,0,newMenuItem);
// console.log(menuItems);


// //pop
// const items = ["Apple Juice", "White Coffee", "Fried Rice", "Croissant"];
// // const lastItem =items.pop();
// // console.log(items);
// // console.log(lastItem);
// console.log(items.at(-1));

//menghapus elemen-elemen di tengah
// const fruits = [
//   "Apple",
//   "Grape",
//   "Guava",
//   "Raspberry",
//   "Almond",
//   "Vine",
//   "Apricot",
//   "Tangerine",
//   "Elderberry"
// ];
// // cara 1 mengunakan splice

// // fruits.splice 4,1);
// // fruits.splice (4,1);
// // console.log(fruits);

// //cara 2 mengunakan splice dan indexof

// const indexToRemove1 = fruits.indexOf("Almond");
// if (indexToRemove1 !== "-1") {
//     fruits.splice(indexToRemove1, 1);
//     console.log("indexToRemove1");
// }

// const indexToRemove2 = fruits.indexOf("Almond");
// if (indexToRemove2 != "-1") {
//     fruits.splice(indexToRemove2, 1);
//     console.log("indexToRemove2");
// }

// console.log(fruits);

let increment = 1;

console.log(++increment);
console.log(increment++);
console.log(increment);