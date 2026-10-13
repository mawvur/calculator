const button = document.querySelectorAll('.number');
const input = document.querySelector('input');
const sign = document.querySelectorAll('.sign')

let value, value1, value2 //нужно чтобы переменные сами создавались при новом знаке, тут объект нужен мне кажется

button.forEach((button) => {
    button.addEventListener('click', function() {
        input.value += button.innerText;
        // console.log(button.innerText)
        value = input.value
        const sig2 = value.indexOf(signs)
        value1 = value.slice(0, sig2)
        value1 = Number(value1)
        console.log(value)
        return value1
    }) 
});



sign.forEach((sign) => {
    sign.addEventListener('click', function() {
        input.value += sign.innerText;
        value = input.value
        const sig = value.indexOf(signs)
        value2 = value.slice(sig+1)
        value2 = Number(value2)
        console.log(value)
        return value2
    }) 
});


const clear = document.getElementById('clear')      //С
const delet = document.getElementById('delete')     //удалить
const percent = document.getElementById('percent')  //процент
const div = document.getElementById('div')          //деление
const mult = document.getElementById('mult')        //умножение
const minus = document.getElementById('minus')      //минус
const sum = document.getElementById('sum')          //плюс
const point = document.getElementById('point')      //запятая
const is = document.getElementById('is')            //равно


clear.addEventListener('click', function(){  //очищение поля
    input.value = null;
})


delet.addEventListener('click', function() {  //добавление минуса и удаление
    // if (value > 0) {
    //     input.value = "-" + input.value
        input.value = -Number(input.value)
        console.log(-Number(input.value))
    // }
    // else if (value < 0) {
    //     input.value = "" + input.value
    //     input.value = Number(input.value)
    //     console.log(Number(input.value))
    // }
})



const signs = [percent.innerText, div.innerText, mult.innerText, minus.innerText, sum.innerText]

is.addEventListener('click', function(){
    if (input.value.includes(percent.value)) {
        //  первое значение % второе значение 
        input.value = Number(value1 % value2)
    }
})



// const one = document.getElementById('n1');
// const two = document.getElementById('n2');
// const three = document.getElementById('n3');
// const four = document.getElementById('n4');
// const five = document.getElementById('n5');
// const six = document.getElementById('n6');
// const seven = document.getElementById('n7');
// const eight = document.getElementById('n8');
// const nine = document.getElementById('n9');
// const zero = document.getElementById('n0');


