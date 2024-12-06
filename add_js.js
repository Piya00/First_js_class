function sum() {
let a=Number(document.getElementById("num1").value)
let b=Number(document.getElementById("num2").value)

// document.getElementById('return').value = a
document.getElementById("return").innerText = `Result is: ${a+b} `;

}
