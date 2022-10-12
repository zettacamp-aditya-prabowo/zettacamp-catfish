var book=["Ammount_of_discount","Price_after_discount","Amount_of_tax","Price_after_tax"]

var name_book=["Sikancil","Peterpan","Spongebob"]

let amount_of_discount;
amount_of_discount= 0.5;

let amount_of_tax;
amount_of_tax= 0.1;

let price_book1=5000;
let price_book2=10000;

let discount= amount_discount(price_book1,price_book2,amount_of_discount)

function amount_discount(price_book1,price_book2,amount_of_discount){
    return(price_book1+price_book2)*amount_of_discount;
}

let price_after_discount= after_discount(price_book1,price_book2,discount)

function after_discount(price_book1,price_book2,amount_discount){
    return (price_book1+price_book2)-amount_discount;
}

let amount_tax= tax(price_after_discount,amount_of_tax)

function tax(price_after_discount,amount_of_tax){
    return price_after_discount*amount_of_tax;
}


if (price_after_discount<10000) {
    var price_after_tax= after_tax(price_after_discount,amount_tax)

    function after_tax(price_after_discount,amount_tax){
    return price_after_discount+amount_tax;
    }
    // console.log(book[3],price_after_tax)
} else {
    console.log (book[3],price_after_discount)
}

var amount_of_book=2

for(let i=0; i<1; i++){
    if (ammount_of_book=0 ){
        console.log("Purchasing again")
    } else {
        console.log("Not Purchasing ")
    }

}

console.log(book)
console.log(book[0],amount_of_discount)
console.log("Ammount Discount ", discount)
// console.log(book[1],price_after_discount)
console.log(book[3],price_after_tax)


