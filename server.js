//npm start 
//control c

const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello you made a request'); 
}); 

app.get('/about', (req, res)=> {
    res.send('about me'); 
}); 

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



/*
min-price: Excludes shoes below this price.
max-price: Excludes shoes above this price.
type: Shows only shoes of the specified type.
No parameters: Responds with the full list of shoes.*/



app.get('*', (req,res) => {
    res.status(404).send('error'); 
}); 





app.listen(3000, () => {
    console.log('I am listening'); 
}); 





