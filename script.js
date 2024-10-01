// Seleçao de elementos 
const multiplicationForm = document.querySelector("#multiplicador-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicador");

const multiplicationTable = document.querySelector("#multiplication-operations");

const multTitulo = document.querySelector("#multTitle span");


//Funçoes
const createTable = (number, multiplicatorNumber)=> {
    multiplicationTable.innerHTML = "";

    for( i = 1; i <= multiplicatorNumber; i++) {

        const result = number * i;

        const template = `<div class="row">
             <div class="operation">${number} x ${i} = </div>
             <div class="results">${result}</div>
             </div>`;

             const parser = new DOMParser()  //vai permitir transferir minha div a cima para html

             const htmlTemplate = parser.parseFromString(template, "text/html"); //ele tranforma uma string em html... (text/html): dois dados original tex e converçao

             const row = htmlTemplate.querySelector(".row");

             multiplicationTable.appendChild(row);
    }

    multTitulo.innerText = number;
};



//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // quando eu envio o formulario ele nao recarrega a pagina

    const multiplicationNumber = numberInput.value;   //value : o valor que eu tenho para multiplicar. O + é para retornar e fazer as multiplicaçao depois

    const multiplicatorNumber = +multiplicationInput.value;     //numeros de multiplicaçaes . numero que vai multiplicar x vezes .value para pegar o valor de cada um dos inputs

    if(!multiplicationNumber || !multiplicatorNumber) return;  // se eu nao tiver nenhum dos dois valores ele nao imprime 

    createTable(multiplicationNumber, multiplicatorNumber);
})
