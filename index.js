const pastag = document.getElementById("pastag");
const pasta = document.getElementById("pasta");
const nameText = document.getElementById('nameText');

var pastah =0;

var pastar = [];
var pass = 0;
var Answer = 0;
var kotaea = 0;
var zatuyou = 0;

var sinsu10 = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
var sinsu16 = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

pasta.addEventListener("click", () => {
    Answer = 0;
    pastar = [];
    keisan();
    kotae();
    
    pastag.textContent = "　　変換完了 答え:" + Answer ;
});


function keisan(){
pastah = nameText.value;
    if (pastah%16 != 0){
        while(pastah%16 != 0){
            zatuyou = pastah%16 -1;
            pastar.push(zatuyou);
            pastah = Math.floor(pastah/16);
        }
    } else {
        pass = 1;


    }
};

function kotae(){
    if (pass == 0){
        for (let i = 0; i < pastar.length; i++){
            if (Answer == 0){
                kotaea=pastar[i]
                Answer =sinsu16[kotaea]

            }else{
                kotaea=pastar[i]
                Answer =`${sinsu16[kotaea]}${Answer}`
            }
        }
    }else{
        Answer = pastah/16*10
    }
};