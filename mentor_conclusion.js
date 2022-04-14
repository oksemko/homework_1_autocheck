Другий модуль добіг кінця і можемо виділити для себе найважливіші моменти і зробити таку собі "шпаргалку".
:white_check_mark: Масиви є однією з структур даних, що найчастіше зустрічаються в JS, вони використовуються для зберігання даних. Також масиви дають багато можливостей для роботи з даними.
:white_check_mark: Функції дозволяють повторювати одну й ту саму дію в багатьох частинах програми. Це як основний будівельний елемент.
Якщо коротко підсумувати - масиви та функції є однією з найголовніших тем і з ними часто доведеться зустрічатися у роботі.
:white_check_mark: Дуже важливо не забувати про те, що наші методи роботи з масивами можуть щось повертати. Наприклад, push повертає довживу масиву, для якого був викликаний даний метод. А, скажімо, splice повертає масив з видаленими елементами.
:white_check_mark: Індексація в масиві починається з 0
:white_check_mark: За допомогою властивості length ми можемо отримати довжину масиву чи рядка (повертає число), що корисно у т.ч. при обчисленні останнього індексу масиву (рядка).
Шпаргалка за методами масивів:
split/join – перетворює рядок на масив і в зворотню сторону,
push () – додає елементи в кінець,
pop() – видаляє елемент з кінця,
shift() – видаляє елемент із початку,
unshift() – додає елементи на початок.
splice(index, deleteIndex, ...arr) – починаючи з індексу index, видаляє deleteIndex елементів та вставляє arr.
slice(start, end) – створює новий масив, копіюючи до нього елементи з позиції start до end (не включаючи end).
Шпаргалка по оголошення функцій у JS:
Функціональний вираз (function expression)
const greet = function (name) {
   return `Hello, ${name}`
}
Оголошення функції (function declaration)
function greet(name) {
   return `Hello, ${name}!`;
}
Стрілкова функція (arrow function)
const greet = who => return `Hello, ${name}!`;
Для того, аби щось повернути з функції/методу або умови, слід використовувати оператор return. З функції можна повертати будь-який тип даних, наприклад:
return 'hello' // (повернемо рядок)
 або
return true // (повернемо буль)
 або
return [1, 2] // (повернемо масив)
:white_check_mark: Паттерн раннє повернення говорить про те, що якщо умова всередині нашого if поверне true, то нам відразу ж потрібно щось повернути з тіла цієї умови, за допомогою return.
Не забувайте, що оператор = це оператор присвоєння, а не порівняння.
Декілька лайфхаків при роботі з масивами
Як швидко очистити масив
const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
fruits.length = 0;
console.log(fruits); // поверне []
Як об'єднати більше двох масивів
const fruits = ['apple', 'banana', 'orange'];
const meat = ['poultry', 'beef', 'fish'];
const vegetables = ['potato', 'tomato', 'cucumber'];
const food = [...fruits, ...meat, ...vegetables];
console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
Як отримати рандомне значення масиву
const fruits = [
   'banana',
   'apple',
   'orange',
   'watermelon',
   'apple',
   'orange',
   'grape',
   'apple',
];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit); // Поверне рандомний фрукт з масиву







:white_check_mark: JS оператори- Expressions and operators - JavaScript | MDN
:white_check_mark: Умови в javascript - Making decisions in your code — conditionals - Learn web development | MDN
:white_check_mark: Switch - switch - JavaScript | MDN
:white_check_mark: Тернарний оператор в JavaScript: Conditional (ternary) operator - JavaScript | MDN
:white_check_mark: Ще про const, let і var: Var, Let, and Const – What's the Difference?
 :white_check_mark: Цикл for for - JavaScript | MDN та цикл for of  for...of - JavaScript | MDN
:+1:
15