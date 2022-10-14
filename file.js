// let firstname : string="Dylan"
// const json=JSON.parse("55")
// console.log(typeof json)
// console.log(typeof firstname)
// interface Arguments1{
//     arguments2:number,
//     arguments3:number
// }
// interface Arguments2 extends Arguments1{
//     arguments1:string
// }
// const array:Arguments2={
//     arguments1:"Learning Typescript is different than Javascript",
//     arguments2:9,
//     arguments3:19
// };
// let paragraph=array.arguments1
// const slice= paragraph.slice(8,19)
// console.log( slice)
// interface Rectangle {
//     height: number,
//     width: number
//   }
//   interface ColoredRectangle extends Rectangle {
//     color: string
//   }
//   const coloredRectangle: ColoredRectangle = {
//     height: 20,
//     width: 10,
//     color: "red"
//   };
//   console.log(coloredRectangle);
var vocabolary = "Learning Typescript is different than Javascript";
var point1 = 0;
var point2 = 8;
function combination(a, b, c) {
    return a.slice(b, c);
}
console.log(combination(vocabolary, point1, point2));
// function printVariabel():void{
//     console.log (a),
//     console.log (b),
//     console.log(c)
// }
// printVariabel()
// function slice_arguments(text1:string){
//     return text1.slice(8,19)
// }
// console.log (slice_arguments(a))
