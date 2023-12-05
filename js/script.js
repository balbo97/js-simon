// CREO UNA FUNZIONE CHE MI GENERI UN ARRAY DI NUMERI CASUALI 
function get_computer_numbers(){
    
    let computer_numbers = [];
    // genero ed inserisco 5 numeri random all'interno dell array
    while(computer_numbers.length < 5){
    
        let  random_number = Math.floor(Math.random() * 100) + 1;
    
        if(computer_numbers.indexOf(random_number) === -1){
    
            computer_numbers.push(random_number);
        }
    }
    
    return computer_numbers
}

// CREO UNA FUNZIONE CHE MI GENERI UN ARRAY DEI NUMERI INSERITI DALL'UTENTE 
function array_prompt(){
    
    let numbers = [];

    while(numbers.length<5){
        
        let number = parseInt(prompt('Inserisci il numero memorizzato'));
        if(!isNaN(number)){

            numbers.push(number)
        }
    }
    
    return numbers
}

// CREO UNA FUNZIONE CHE MI MOSTRI I NUMERI GENERATI SULLA PAGINA 
function show_computer_numbers(){

    
    // mostro in numeri in HTML 
    document.getElementById('remember').innerText += `Ricorda hai solo 30 secondi!`
    
    document.getElementById('computer-numbers').innerHTML = `<h2> ${computer_numbers} </h2> </p>`
    
}

// CREO UNA FUNZIONE CHE MI ELIMINI I NUMERI 
function delete_html(){
    
    document.getElementById('computer-numbers').innerHTML = `` 
}

// mostro i numeri generati  sulla pagina 
let computer_numbers = get_computer_numbers()
show_computer_numbers();

// elimino i numeri con un timer di 30 secondi 
setTimeout(delete_html, 3000)


setTimeout(function(){
    
    
    let player_numbers = array_prompt();
    console.log(player_numbers)
    
    // CREO UN ARRAY DEI NUMERI VINCENTI
    let array_winning_numbers = []
    for(i=0; i<5; i++){
    
        
        if (computer_numbers.includes(player_numbers[i])){
    
            // pushamo i numeri contenuti nell'array di numeri vincenti 
            array_winning_numbers.push(player_numbers[i])
        } 
    }
    // vediamo quali sono i numeri vincenti
    console.log(array_winning_numbers) 
    document.getElementById('computer-numbers').innerHTML = `<h2>COMPLIMENTI! Hai indovinato ${array_winning_numbers.length} numeri </h2> <p>${array_winning_numbers}</p>`
    
    // vediamo quanti numeri sono vincenti 
    console.log(array_winning_numbers.length)
}, 3100)



