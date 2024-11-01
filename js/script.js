console.log("running");

const txt = document.querySelector('p#text');
const adviceId = document.querySelector('span#adviceId');
const diceBtn = document.querySelector('div.btnDice');

diceBtn.addEventListener('click', function() {    
    const random = Math.floor(Math.random() * 224) + 1;
    const apiUrl =  `https://api.adviceslip.com/advice/${random}`;

    //GET request from api
    fetch(apiUrl)
        .then(Response =>{
            if (!Response.ok) {
                throw "Error";
            }
            return Response.json();
        })
        .then(Data =>{
            adviceId.textContent = Data.slip.id;
            txt.textContent = `"${Data.slip.advice}"`;
        })
        .catch(err =>{
            console.error(err);
        });

});