"use strict";

// адание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/
async function getUserData(ID) {
  const response = await fetch(`https://reqres.in/api/users/${ID}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`Error status ${response.status}`);
}

getUserData(1)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

async function saveUserData(user) {
  let response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    return response.json();
  } else {
    return new Error("Data error");
  }
}

// *Подсказка *

// // Пример использования функции
const user = {
  name: "John Doe",
  job: "unknown",
};

saveUserData(user)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

function changeStyleDelayed(idElement, time) {
  const idElem = document.querySelector(`#${idElement}`);
  setTimeout(function () {
    idElem.style.backgroundColor = "black";
    idElem.style.color = "aqua";
    idElem.textContent = "Опааа!"
  }, time);
}

// // Пример использования функции
changeStyleDelayed("myElement", 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
