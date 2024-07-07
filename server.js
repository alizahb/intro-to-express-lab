
const express = require('express');
const app = express(); 

/*app.get('/', (req, res) => {
    res.send('Hello you made a request'); 
});*/ 


//1
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello ${req.params.username}`); 
});

//2
app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number); 
    if(!isNaN(number)) {
        res.send(`You rolled a ${Math.floor(Math.random() * number) + 1}`); 
    } else {
        res.send('You must specify a number'); 

    }
}); 

//3
app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
      const index = parseInt(req.params.index, 10); 
      if(index >= 0 && index < collectibles.length) {
        const item = collectibles[index]; 
        res.send(`So you want the ${item.name}? For $ ${item.price} it can be yours!`);
      } else {
        res.send('This item is not yet in stock. Check back soon!'); 
      }
    }); 
    
//4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req,res) => {
    res.send(shoes); 
}); 

app.get('/shoes/max/:maxPrice', (req, res) => {
    const maxPrice = parseFloat(req.params.maxPrice); 
    if (isNaN(maxPrice)) {
        return res.status(400).send('Invalid maxPrice parameter'); 
    }
const maxList = shoes.filter(shoe => shoe.price < maxPrice);
res.send(maxList); 
}); 

app.get('/shoes/min/:minPrice', (req, res) => {
    const minPrice = parseFloat(req.params.minPrice);
    if (isNaN(minPrice)) {
        return res.status(400).send('Invalid minPrice parameter'); 
    }
    const minList = shoes.filter(shoe => shoe.price > minPrice); {
        res.send(minList); 
    }
}); 

app.get('/shoes/type/:typeSelect', (req, res) => {
const typeSelect = req.params.typeSelect;  
const typeList  = shoes.filter(shoe => shoe.type === typeSelect);   
    res.send(typeList); 
}); 



app.get('*', (req,res) => {
    res.status(404).send('Error: Page not found'); 
}); 


app.listen(3000, () => {
    console.log('I am listening'); 
}); 





