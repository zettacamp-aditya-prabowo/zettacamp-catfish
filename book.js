var book={ pulpen:{name: "standart"},
    name:"Sikancil",
    author:"David",
    year:"2001",
    price:200000
}

var list_book=[{
        name:"Sikancil",
        author:"David",
        year:"2001",
        price:200000
    },
    {
        name:"Spongebob",
        author:"Yanuar",
        year:"2002",
        price:310000
    },
    {
        name:"Laskar Pelangi",
        author:"Anton",
        year:"2006",
        price:310000
    }
]


// let {name :foo , price:bar}=book
console.log(book)

// console.log(foo,bar)

var amount_of_discount;
amount_of_discount= 0.5;

var amount_of_tax;
amount_of_tax= 0.1;


var buy_book=2
var periode=12

var purchasing = (list_book,buy_book,periode,amount_of_discount,amount_of_tax )=>{
    var total=[] 

    var price_book=0
    for(let i=0; i<list_book.length;i++){

        price_book += list_book[i].price*buy_book;       
    }
    const price_after_discount=price_book-(amount_of_discount*price_book);
    const price_after_tax=price_after_discount+(amount_of_tax*price_after_discount);  
    
    console.log("Amount Price After Tax:",price_after_tax)
    for(let i=0;i<periode;i++){
        total.push({
            terms:i+1,
            amount:price_after_tax/periode
        })
        
    }
    var store=[...list_book, ...total]
    return store
}
var terms= purchasing(list_book,buy_book,periode,amount_of_discount,amount_of_tax)

console.log(terms)


