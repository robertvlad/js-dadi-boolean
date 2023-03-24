let user_num = Math.floor((Math.random() * 6) + 1);
let pc_num = Math.floor((Math.random() * 6) + 1);

document.getElementById('user-num').innerHTML += user_num;
document.getElementById('pc-num').innerHTML += pc_num;
let winner = document.getElementById('winner')
if (user_num === pc_num) {
    winner.innerHTML += 'I due numeri sono uguali'
}
else if (user_num > pc_num) {
    winner.innerHTML += "L'utente ha vinto"
}
else {
    winner.innerHTML += "Il PC ha vinto"
}