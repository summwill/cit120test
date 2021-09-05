var inputBill = Number(prompt( message: "What is your bill?"));
var taxAmount=inputBill*.07;
var taxTotalBill=inputBill+taxAmount;
var tipAmount=taxTotalBill*.05;
var total=tipAmount+taxTotalBill;
var element = document.body.querySelector( selectors: ".box");

element.innerHTML=total;