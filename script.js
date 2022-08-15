let valueFood;
let valueDrink;
let valueDessert;

let foodTitle;
let drinkTitle;
let dessertTitle;

let total;

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
    } else {
        return null;
    }
}
function order(){

    if(calculo() !== null){
        const element = document.querySelector(".container");
        element.classList.add("element");
        const confirm = document.querySelector(".confirm");
        confirm.classList.remove("gone");
        
        foodTitle = document.querySelector(".radio:checked ~ .prato p")
        document.querySelector(".price-food").innerHTML = foodTitle.innerHTML + "\n<p>" + valueFood.toString().replace(".", ",") + "</p>";
        drinkTitle = document.querySelector(".radio:checked ~ .bebida p")
        document.querySelector(".price-drink").innerHTML = drinkTitle.innerHTML + "\n<p>" + valueDrink.toString().replace(".", ",") + "</p>";
        dessertTitle = document.querySelector(".radio:checked ~ .sobremesa p")
        document.querySelector(".price-dessert").innerHTML = dessertTitle.innerHTML + "\n<p>" + valueDessert.toString().replace(".", ",") + "</p>";

        valueFood = Number(valueFood);
        valueDrink = Number(valueDrink);
        valueDessert = Number(valueDessert);
        total = (valueFood + valueDrink + valueDessert);

        document.querySelector(".total").innerHTML = "<p>TOTAL</p>" + "<p>" + total.toString().replace(".", ",") + "</p>"
    }
    
}

function message(){
    let nome = prompt("Insira seu nome: ");
    let endereco = prompt("Insira seu endereço: ");
    let mensage = "Olá! Gostaria de fazer o pedido:\n- Prato: " + foodTitle.innerHTML +"\n- Bebida: " + drinkTitle.innerHTML + "\n- Sobremesa: " + dessertTitle.innerHTML + "\nTotal: R$ " + total + "\n\nNome: " + nome +"\nEndereço: " + endereco;

    window.location.href = "https://wa.me/5511047088648?text=" + encodeURIComponent(mensage);
}

function cancel(){
    const confirm = document.querySelector(".confirm");
    confirm.classList.toggle("gone");

    const element = document.querySelector(".container");
    element.classList.toggle("element");
}