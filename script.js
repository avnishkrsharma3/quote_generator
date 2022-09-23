

var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
];

let content = document.getElementById('quote');
let nam = document.getElementById('name');

let button = document.getElementById('button');

button.addEventListener('click', insertQuote);

function insertQuote(){
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    if(quote[1] == nam.innerText)
        insertQuote();
    content.innerHTML =  	"&#8220; " + quote[0] +	" &#8221;" ;
    nam.innerHTML = quote[1]
    console.log(nam.innerText);
}