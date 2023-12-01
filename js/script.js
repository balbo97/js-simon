// definisco un array vuoto 
let computer_numbers = [];

// genero ed inserisco 5 numeri random all'interno dell array utilizzando un ciclo for 
for(i=0; i<5; i++){
    let randonm_number = Math.floor(Math.random()* 50 +1)

    // mentre l'array di numeri contiene già il numero random inserito lui continua a generare numeri
    while(computer_numbers.includes(randonm_number)){
        let randonm_number = Math.floor(Math.random()* 50 +1)
    }

    // pusho il numero nell'array 
    computer_numbers.push(randonm_number)
}

console.log(computer_numbers)
