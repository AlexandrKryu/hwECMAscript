"use strict";
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.
console.log("---- задание 1 -----");

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

console.log("---- задание 2 -----");

const createCounter = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
console.log(counter.decrement());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

console.log("---- задание 3 -----");

let serchElement = [];

function findElementByClass(rootEl, classEl) {
    if (rootEl.hasChildNodes()) {
       for (let element of rootEl.children) {
          if (element.className === classEl) {
             serchElement.push(element);
             if (serchElement[0].className !== classEl) {
                serchElement = [];
                serchElement.push(element);
             }
          }
          findElementByClass(element, classEl);
       }
    }
    return serchElement[0];
 }

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");

const targetElement2 = findElementByClass(rootElement, "chaeld4");
console.log(targetElement);
console.log(targetElement2);
