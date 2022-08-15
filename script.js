let drinkTitle;

function calculo(){
    valueFood = document.querySelector('input[name="prato"]:checked') === null;
    valueDrink = document.querySelector('input[name="bebida"]:checked') === null;
    valueDessert = document.querySelector('input[name="sobremesa"]:checked') === null;

    if(!valueFood & !valueDrink & !valueDessert){
        const text = document.querySelector(".text");
        text.innerHTML = "Concluir pedido";
        text.style.backgroundColor = "#32B72F";
        valueFood = document.querySelector('input[name="prato"]:checked').value;
        valueDrink = document.querySelector('input[name="bebida"]:checked').value;
        valueDessert = document.querySelector('input[name="sobremesa"]:checked').value;
    }
}