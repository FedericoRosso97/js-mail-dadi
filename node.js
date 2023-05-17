const player=Math.floor(Math.random()*6)+1;
console.log(player+' player');

const pc=Math.floor(Math.random()*6)+1;
console.log(pc+' pc');

if(player>pc){
    console.log('HAI VINTOOO!')
}else if(pc>player){
    console.log('HAI PERSO! :(')
}