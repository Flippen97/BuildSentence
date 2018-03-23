const inputItem = document.getElementById('item');
const inputAmount = document.getElementById('amount');
const submit = document.getElementById('submit');
const output = document.getElementById('output');

submit.addEventListener('click', printSentence);

function printSentence(){
    
    const amount = +inputAmount.value;
    const item = inputItem.value;
    
    if(amount >= 2){
        output.innerHTML = `There are ${amount} ${item}s.`;
    } 
    else if(amount === 1){
        output.innerHTML = `There is ${amount} ${item}.`;
    }
    else if(amount <= 0){
        output.innerHTML = `There are no ${item}s.`;
    }
    
}