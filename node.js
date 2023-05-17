const player=Math.floor(Math.random()*6)+1;
console.log(player+' player');

const pc=Math.floor(Math.random()*6)+1;
console.log(pc+' pc');

if(player>pc){
    console.log('HAI VINTOOO!')
}else if(pc>player){
    console.log('HAI PERSO! :(')
}else{
    console.log('PAREGGIO!')
}

/*MAIL*/

let mail=document.getElementById('mail').value;
const arrayUtenti=['federicorosso97@gmail.com','mariorossi89@gmail.com','estertarasco06@gmail.com'];
let utenteUno='federicorosso97@gmail.com';
let utenteDue='mariorossi89@gmail.com';
let utenteTre='estertarasco06@gmail.com';
console.log(arrayUtenti);
let button=document.querySelector('button')
button.addEventListener('click',function(){
    if(mail==utenteUno){
        console.log('Benvenuto')
       }else{
           console.log('Accesso negato')
       }
    }
)

