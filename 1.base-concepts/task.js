"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant == 0) {
      arr.push(-b/(2*a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;  // месячная процентная ставка
  let S = amount - contribution; // тело кредита (сумма, которую нужно вернуть банку)
  let payment = S * (P + (P / (((1 + P) ** countMonths) - 1))); // ежемесячный платеж

  let total = payment * countMonths;
  return Number(total.toFixed(2));
}