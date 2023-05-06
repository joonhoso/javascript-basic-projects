const btn = document.querySelector("button");
console.log(btn)

const btn2 = document.querySelector("#btn_2");
console.log(btn2)

function test() {
alert('아빠 바보')
}

btn.addEventListener('click', test)

function test2() {
alert('민경 바보')
}
btn2.addEventListener('click', test2)