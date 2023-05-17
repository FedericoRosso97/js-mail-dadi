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

let button=document.querySelector('button');

button.addEventListener('click',function(){
    let mail=document.getElementById('mail').value;
    const arrayUtenti=['federicorosso97@gmail.com','mariorossi89@gmail.com','estertarasco06@gmail.com'];
    console.log(arrayUtenti);
    
    for (let i = 0; i < arrayUtenti.length; i++){
        if(arrayUtenti[0]==mail || arrayUtenti[1]==mail || arrayUtenti[2]==mail){
            console.log('Benvenuto')
           }else{
               console.log('Accesso negato')
           }
        }
    }
    
)

